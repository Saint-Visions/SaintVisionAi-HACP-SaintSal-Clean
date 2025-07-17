import React, { ReactNode } from "react";
import { BuilderComponent, builder } from "@builder.io/react";
import { useAuth, SubscriptionTier } from "../contexts/AuthContext";
import { useLocation } from "react-router-dom";

// Initialize Builder.io
builder.init("065997bd13e4442e888a08652fcd61ba");

interface LayoutProps {
  children?: ReactNode;
  builderModel?: string;
  builderContent?: any;
  chatMode?: "off" | "companion" | "admin" | "dual";
  showHeader?: boolean;
  showFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  builderModel = "page",
  builderContent,
  chatMode = "off",
  showHeader = true,
  showFooter = true,
}) => {
  const { profile, hasAccess } = useAuth();
  const location = useLocation();

  // Determine chat mode based on user tier and route
  const getChatMode = (): "off" | "companion" | "admin" | "dual" => {
    if (!profile) return "off";

    // Route-specific chat modes
    const routeChatModes: Record<
      string,
      "off" | "companion" | "admin" | "dual"
    > = {
      "/": "companion", // Homepage
      "/login": "off",
      "/signup": "off",
      "/pricing": "admin", // Pre-upgrade Q&A
      "/upgrade": "admin",
      "/checkout-success": "admin",
      "/dashboard": hasAccess("unlimited") ? "dual" : "companion",
      "/console": "dual", // $27+ only
      "/partnertech": "admin", // $497+ reads pipeline, client status
      "/crm": "admin", // $497+ reads pipeline, client status
      "/chrome-install": "admin",
      "/referral/invite": "admin",
      "/settings": "admin",
      "/why": "off",
      "/terms": "off",
      "/privacy": "off",
    };

    return routeChatModes[location.pathname] || "companion";
  };

  const activeChatMode = chatMode !== "off" ? chatMode : getChatMode();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Builder.io Header */}
      {showHeader && (
        <BuilderComponent
          model="header"
          content={builderContent?.header}
          data={{
            userTier: profile?.subscription_tier || "free_trial",
            isAuthenticated: !!profile,
            hasUnlimitedAccess: hasAccess("unlimited"),
            hasPartnerAccess: hasAccess("partnertech"),
          }}
        />
      )}

      {/* Main Content */}
      <main className="relative">
        {builderContent ? (
          <BuilderComponent
            model={builderModel}
            content={builderContent}
            data={{
              userTier: profile?.subscription_tier || "free_trial",
              isAuthenticated: !!profile,
              hasUnlimitedAccess: hasAccess("unlimited"),
              hasPartnerAccess: hasAccess("partnertech"),
            }}
          />
        ) : (
          children
        )}
      </main>

      {/* Builder.io Footer */}
      {showFooter && (
        <BuilderComponent
          model="footer"
          content={builderContent?.footer}
          data={{
            userTier: profile?.subscription_tier || "free_trial",
            isAuthenticated: !!profile,
          }}
        />
      )}

      {/* Sticky SaintSal Chat */}
      {activeChatMode !== "off" && (
        <StickyChat
          mode={activeChatMode}
          userTier={profile?.subscription_tier}
        />
      )}
    </div>
  );
};

// Sticky Chat Component
interface StickyChatProps {
  mode: "companion" | "admin" | "dual";
  userTier?: SubscriptionTier;
}

const StickyChat: React.FC<StickyChatProps> = ({ mode, userTier }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const getChatTitle = () => {
    switch (mode) {
      case "companion":
        return "SaintSal™ Companion";
      case "admin":
        return "SaintSal™ Admin";
      case "dual":
        return "SaintSal™ DualBot";
      default:
        return "SaintSal™";
    }
  };

  const getChatDescription = () => {
    switch (mode) {
      case "companion":
        return userTier === "free_trial"
          ? "2 conversations remaining"
          : "Always here to help";
      case "admin":
        return "Pre-upgrade Q&A and admin assistance";
      case "dual":
        return "Client + Admin AI panels";
      default:
        return "AI Assistant";
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-96 h-[500px] bg-card border border-border rounded-xl shadow-2xl elite-card overflow-hidden">
          <div className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{getChatTitle()}</h3>
              <p className="text-xs opacity-80">{getChatDescription()}</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:opacity-70"
            >
              ��
            </button>
          </div>

          <div className="h-full bg-background/95 backdrop-blur-sm">
            {/* Chat content will be implemented based on mode */}
            <div className="p-4 text-center text-muted-foreground">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048"
                alt="SaintSal Logo"
                className="w-12 h-12 mx-auto mb-2 rounded-lg"
              />
              <p className="text-sm">
                {mode === "dual"
                  ? "DualBot interface coming soon..."
                  : "Chat interface coming soon..."}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gotham-glow"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048"
          alt="SaintSal"
          className="w-8 h-8 rounded"
        />
      </button>
    </div>
  );
};

export default Layout;
