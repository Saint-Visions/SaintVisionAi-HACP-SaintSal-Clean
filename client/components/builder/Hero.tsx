// SAINTSAL™ Dynamic Hero Section for Builder.io
import React from "react";
import { Builder } from "@builder.io/react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
  overlayOpacity?: number;
  showLogo?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title = "Welcome to SAINTSAL™",
  subtitle = "Cookin' Knowledge with Divine AI",
  backgroundImage = "https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F89f844d10b5e4243a2178ad3de7a9f4f",
  ctaText = "🔥 Start Cooking",
  ctaLink = "/console",
  overlayOpacity = 0.1,
  showLogo = true,
}) => {
  return (
    <section
      className="hero-section parallax text-white min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${backgroundImage}?format=webp&width=1920)`,
        backgroundSize: "120%",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        transform: "translateZ(0)",
      }}
    >
      {/* Dynamic Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* SAINTSAL™ Quote Bubble */}
        <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/40 relative mb-8">
          <div className="text-center space-y-4">
            <p className="text-yellow-400 text-xl font-medium">
              "SaintSal" AI doesn't just answer.
            </p>
            <p className="text-yellow-400 text-xl font-medium">
              It adapts. It empowers. It becomes your...
            </p>
            <p className="text-yellow-400 text-3xl font-bold">GOTTA GUY™!</p>
          </div>
          {/* Speech bubble tail */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-yellow-400/40"></div>
          </div>
        </div>

        {/* Dynamic Logo and Branding */}
        {showLogo && (
          <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30 text-center space-y-6 mb-8">
            <div className="flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048"
                alt="SAINTSAL™ Circuit Board Logo"
                className="w-24 h-24 rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-primary mb-2">{title}</h1>
              <p className="text-lg text-muted-foreground">{subtitle}</p>
            </div>
          </div>
        )}

        {/* Dynamic CTA Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-bold gold-shimmer"
            onClick={() => (window.location.href = ctaLink)}
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
};

// Register with Builder.io
Builder.registerComponent(Hero, {
  name: "SAINTSAL Hero Section",
  inputs: [
    {
      name: "title",
      type: "text",
      defaultValue: "Welcome to SAINTSAL™",
      helperText: "Main hero title",
    },
    {
      name: "subtitle",
      type: "text",
      defaultValue: "Cookin' Knowledge with Divine AI",
      helperText: "Hero subtitle/tagline",
    },
    {
      name: "backgroundImage",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F89f844d10b5e4243a2178ad3de7a9f4f",
      helperText: "Background image for parallax effect",
    },
    {
      name: "ctaText",
      type: "text",
      defaultValue: "🔥 Start Cooking",
      helperText: "Call-to-action button text",
    },
    {
      name: "ctaLink",
      type: "url",
      defaultValue: "/console",
      helperText: "Where the CTA button should link",
    },
    {
      name: "overlayOpacity",
      type: "number",
      defaultValue: 0.1,
      min: 0,
      max: 1,
      step: 0.1,
      helperText: "Background overlay opacity (0-1)",
    },
    {
      name: "showLogo",
      type: "boolean",
      defaultValue: true,
      helperText: "Show SAINTSAL™ logo and branding",
    },
  ],
});

export default Hero;
