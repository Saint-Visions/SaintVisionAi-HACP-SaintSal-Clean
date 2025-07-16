import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  "https://nivrmhkdgtmmbtswyey.supabase.co";
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pdnJtaGtkZ3RtbWJ0c3d5dmV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MTA1MjEsImV4cCI6MjA2MjA4NjUyMX0.Y0lx7FA97zV3GkKAmu_5aV8Bz98AYyqvHdHEau6Tvfc";

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Environment variables check:", {
    VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
    VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY,
  });
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          full_name: string;
          avatar_url?: string;
          subscription_tier: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name: string;
          avatar_url?: string;
          subscription_tier?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string;
          avatar_url?: string;
          subscription_tier?: string;
          updated_at?: string;
        };
      };
      conversations: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          ai_model: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          title: string;
          ai_model: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          title?: string;
          ai_model?: string;
          updated_at?: string;
        };
      };
      messages: {
        Row: {
          id: string;
          conversation_id: string;
          content: string;
          role: "user" | "assistant" | "system";
          metadata?: any;
          created_at: string;
        };
        Insert: {
          id?: string;
          conversation_id: string;
          content: string;
          role: "user" | "assistant" | "system";
          metadata?: any;
          created_at?: string;
        };
        Update: {
          id?: string;
          conversation_id?: string;
          content?: string;
          role?: "user" | "assistant" | "system";
          metadata?: any;
        };
      };
      subscriptions: {
        Row: {
          id: string;
          user_id: string;
          stripe_customer_id: string;
          stripe_subscription_id: string;
          tier: string;
          status: string;
          current_period_start: string;
          current_period_end: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          stripe_customer_id: string;
          stripe_subscription_id: string;
          tier: string;
          status: string;
          current_period_start: string;
          current_period_end: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          stripe_customer_id?: string;
          stripe_subscription_id?: string;
          tier?: string;
          status?: string;
          current_period_start?: string;
          current_period_end?: string;
          updated_at?: string;
        };
      };
    };
  };
};
