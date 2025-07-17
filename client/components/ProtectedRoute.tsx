import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, SubscriptionTier } from "../contexts/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredTier?: SubscriptionTier;
  redirectTo?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredTier = "free_trial",
  redirectTo,
}) => {
  const { user, profile, loading, hasAccess } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      // Not authenticated - redirect to login
      if (!user) {
        navigate("/login");
        return;
      }

      // Authenticated but profile not loaded yet
      if (!profile) {
        return;
      }

      // Check access level
      if (!hasAccess(requiredTier)) {
        // Determine where to redirect based on current tier
        const redirectPath =
          redirectTo ||
          getRedirectPath(requiredTier, profile.subscription_tier);
        navigate(redirectPath);
        return;
      }
    }
  }, [user, profile, loading, navigate, hasAccess, requiredTier, redirectTo]);

  // Show loading while checking auth and profile
  if (loading || (user && !profile)) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#10161C" }}
      >
        <div className="text-center space-y-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048"
            alt="SAINTSAL™ Circuit Board Logo"
            className="w-20 h-20 mx-auto animate-pulse rounded-xl shadow-lg"
          />
          <p className="text-amber-400 font-medium text-lg">
            Loading your sanctuary...
          </p>
          <p className="text-amber-400/70 text-sm">Cookin' Knowledge</p>
        </div>
      </div>
    );
  }

  // Don't render if not authenticated or insufficient access
  if (!user || !profile || !hasAccess(requiredTier)) {
    return null;
  }

  return <>{children}</>;
};

// Helper function to determine redirect path based on access requirements
const getRedirectPath = (
  requiredTier: SubscriptionTier,
  currentTier: SubscriptionTier,
): string => {
  // If they need partner tech access, send to upgrade
  if (requiredTier === "partnertech") {
    return "/upgrade";
  }

  // If they need core tools or higher, send to upgrade
  if (requiredTier === "coretools" || requiredTier === "pro") {
    return "/upgrade";
  }

  // If they need unlimited but only have free trial
  if (requiredTier === "unlimited" && currentTier === "free_trial") {
    return "/upgrade";
  }

  // Default to dashboard
  return "/dashboard";
};

export default ProtectedRoute;
