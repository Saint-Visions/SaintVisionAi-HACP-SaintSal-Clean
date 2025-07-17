import React, { createContext, useContext, useEffect, useState } from "react";
import { User, Session, AuthError } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";

export type SubscriptionTier =
  | "free_trial"
  | "unlimited"
  | "coretools"
  | "pro"
  | "partnertech";

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  subscription_tier: SubscriptionTier;
  created_at: string;
  updated_at: string;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  profile: UserProfile | null;
  loading: boolean;
  signUp: (
    email: string,
    password: string,
    fullName: string,
  ) => Promise<{ error?: AuthError }>;
  signIn: (email: string, password: string) => Promise<{ error?: AuthError }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error?: AuthError }>;
  updateProfile: (updates: {
    full_name?: string;
    avatar_url?: string;
  }) => Promise<{ error?: any }>;
  hasAccess: (requiredTier: SubscriptionTier) => boolean;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      if (error) {
        console.error("Error getting session:", error);
      } else {
        setSession(session);
        setUser(session?.user ?? null);
      }
      setLoading(false);
    };

    getInitialSession();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session);
      setUser(session?.user ?? null);

      if (event === "SIGNED_IN" && session?.user) {
        // Upsert user profile and fetch full profile
        await upsertUserProfile(session.user);
        await fetchUserProfile(session.user.id);
      } else if (event === "SIGNED_OUT") {
        setProfile(null);
      }

      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchUserProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", userId)
        .single();

      if (error) {
        console.error("Error fetching user profile:", error);
        return;
      }

      setProfile(data as UserProfile);
    } catch (error) {
      console.error("Error in fetchUserProfile:", error);
    }
  };

  const upsertUserProfile = async (user: User) => {
    try {
      const { error } = await supabase.from("users").upsert(
        {
          id: user.id,
          email: user.email!,
          full_name: user.user_metadata?.full_name || user.email!.split("@")[0],
          avatar_url: user.user_metadata?.avatar_url,
          subscription_tier: "free_trial" as SubscriptionTier,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: "id",
        },
      );

      if (error) {
        console.error("Error upserting user profile:", error);
      }
    } catch (error) {
      console.error("Error in upsertUserProfile:", error);
    }
  };

  const refreshProfile = async () => {
    if (user?.id) {
      await fetchUserProfile(user.id);
    }
  };

  // Define tier hierarchy for access control
  const tierHierarchy: Record<SubscriptionTier, number> = {
    free_trial: 0,
    unlimited: 1,
    coretools: 2,
    pro: 3,
    partnertech: 4,
  };

  const hasAccess = (requiredTier: SubscriptionTier): boolean => {
    if (!profile) return false;
    return (
      tierHierarchy[profile.subscription_tier] >= tierHierarchy[requiredTier]
    );
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    return { error };
  };

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    return { error };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const resetPassword = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    return { error };
  };

  const updateProfile = async (updates: {
    full_name?: string;
    avatar_url?: string;
  }) => {
    if (!user) return { error: new Error("No user logged in") };

    const { error: authError } = await supabase.auth.updateUser({
      data: updates,
    });

    if (authError) return { error: authError };

    const { error: profileError } = await supabase
      .from("users")
      .update({
        ...updates,
        updated_at: new Date().toISOString(),
      })
      .eq("id", user.id);

    return { error: profileError };
  };

  const value: AuthContextType = {
    user,
    session,
    profile,
    loading,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updateProfile,
    hasAccess,
    refreshProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
