import React from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import { useLocation } from "react-router-dom";
import Layout from "./Layout";
import { useAuth } from "../contexts/AuthContext";

// Initialize Builder.io
builder.init("065997bd13e4442e888a08652fcd61ba");

interface BuilderPageProps {
  model?: string;
  fallback?: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  chatMode?: "off" | "companion" | "admin" | "dual";
}

const BuilderPage: React.FC<BuilderPageProps> = ({
  model = "page",
  fallback,
  showHeader = true,
  showFooter = true,
  chatMode,
}) => {
  const location = useLocation();
  const { profile, hasAccess } = useAuth();
  const isPreviewing = useIsPreviewing();

  // Get the current page URL for Builder.io
  const urlPath = location.pathname;

  // Fetch content from Builder.io
  const [builderContent, setBuilderContent] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchContent = async () => {
      try {
        const content = await builder
          .get(model, {
            url: urlPath,
            userAttributes: {
              userTier: profile?.subscription_tier || "free_trial",
              isAuthenticated: !!profile,
              hasUnlimitedAccess: hasAccess("unlimited"),
              hasPartnerAccess: hasAccess("partnertech"),
            },
          })
          .toPromise();

        setBuilderContent(content);
      } catch (error) {
        console.error("Error fetching Builder.io content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [model, urlPath, profile, hasAccess]);

  // Show loading state
  if (loading) {
    return (
      <Layout showHeader={showHeader} showFooter={showFooter} chatMode="off">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048"
              alt="SAINTSAL™"
              className="w-16 h-16 mx-auto animate-pulse rounded-xl"
            />
            <p className="text-primary font-medium">Loading...</p>
          </div>
        </div>
      </Layout>
    );
  }

  // If no content found and not previewing, show fallback
  if (!builderContent && !isPreviewing) {
    if (fallback) {
      return (
        <Layout
          showHeader={showHeader}
          showFooter={showFooter}
          chatMode={chatMode}
        >
          {fallback}
        </Layout>
      );
    }

    // Default 404-like fallback
    return (
      <Layout showHeader={showHeader} showFooter={showFooter} chatMode="off">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-6 max-w-md mx-auto p-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048"
              alt="SAINTSAL™"
              className="w-20 h-20 mx-auto rounded-xl"
            />
            <h1 className="text-2xl font-light text-foreground">
              Page content not found
            </h1>
            <p className="text-muted-foreground">
              This page hasn't been configured in Builder.io yet.
            </p>
            <button
              onClick={() => window.history.back()}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Go Back
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  // Render the Builder.io content
  return (
    <Layout
      builderModel={model}
      builderContent={builderContent}
      showHeader={showHeader}
      showFooter={showFooter}
      chatMode={chatMode}
    />
  );
};

export default BuilderPage;
