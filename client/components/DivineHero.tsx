import React from "react";
import { useAuth } from "../contexts/AuthContext";

interface DivineHeroProps {
  variant?: "homepage" | "executive" | "trading" | "wall-street";
  title?: string;
  subtitle?: string;
  showCTA?: boolean;
}

const DivineHero: React.FC<DivineHeroProps> = ({
  variant = "homepage",
  title,
  subtitle,
  showCTA = true,
}) => {
  const { profile } = useAuth();

  const getBackgroundClass = () => {
    switch (variant) {
      case "executive":
        return "executive-team";
      case "trading":
        return "trading-floor";
      case "wall-street":
        return "wall-street-bg";
      default:
        return "gotham-hero";
    }
  };

  const getDefaultTitle = () => {
    if (title) return title;
    switch (variant) {
      case "executive":
        return "SaintVisionAI™";
      case "trading":
        return "Real Knowledge. Real Growth.";
      case "wall-street":
        return "Your Strategic Partner";
      default:
        return "Welcome to SaintVisionAI™";
    }
  };

  const getDefaultSubtitle = () => {
    if (subtitle) return subtitle;
    switch (variant) {
      case "executive":
        return "AI Research & Development";
      case "trading":
        return "Real Power.";
      case "wall-street":
        return "For a Smarter, Bolder Future";
      default:
        return "Inside these walls, AI doesn't just answer. It adapts. It empowers. It becomes yours.";
    }
  };

  return (
    <div
      className={`divine-parallax ${getBackgroundClass()} relative overflow-hidden`}
    >
      {/* Content Layer */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          {/* Main Logo */}
          <div className="mb-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fe91452d306444f96956a86335fa422b6?format=webp&width=800"
              alt="SaintSal™ Brain Circuit"
              className="w-32 h-32 mx-auto mb-6 saintsal-brain"
            />
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-8xl font-serif mb-6 prestige-text cinematic-fade">
            {getDefaultTitle()}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-4xl mx-auto font-light">
            {getDefaultSubtitle()}
          </p>

          {/* CTA Section */}
          {showCTA && (
            <div className="space-y-6 mb-12">
              {!profile ? (
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium text-lg saintsal-glow hover:scale-105 transition-all duration-300">
                    Start Cookin' Knowledge
                  </button>
                  <button className="px-8 py-4 border border-primary/30 text-primary rounded-xl font-medium text-lg hover:bg-primary/10 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ) : (
                <div className="divine-card p-6 max-w-md mx-auto">
                  <p className="text-sm text-muted-foreground mb-2">
                    Welcome back, {profile.full_name || "Visionary"}
                  </p>
                  <p className="prestige-text font-medium">
                    Tier: {profile.subscription_tier?.toUpperCase()}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Brand Statement */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-primary/80 font-light italic">
              "Ready to move smarter today than you did yesterday?"
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 z-20 hidden lg:block">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F112bfce7b7214cfaa5a7d0a6837c4495?format=webp&width=400"
          alt="Cookin' Knowledge"
          className="w-24 h-16 opacity-60 animate-pulse"
        />
      </div>

      <div className="absolute bottom-1/4 right-10 z-20 hidden lg:block">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F67dbeb79a3d24cdbb3066faaa05b8d2b?format=webp&width=400"
          alt="SaintSal Circuit"
          className="w-32 h-24 opacity-40 saintsal-logo"
        />
      </div>
    </div>
  );
};

export default DivineHero;
