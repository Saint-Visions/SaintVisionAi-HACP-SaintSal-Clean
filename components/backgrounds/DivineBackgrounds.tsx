"use client";

import { useState, useEffect } from "react";

interface BackgroundAsset {
  id: string;
  name: string;
  url: string;
  category: "hero" | "presentation" | "cinematic" | "premium";
  description: string;
}

export const divineBackgrounds: BackgroundAsset[] = [
  {
    id: "divine-main",
    name: "Divine Sanctuary Main",
    url: "https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fff0733af4a2e4a0b8c3ec5843ef9720e",
    category: "hero",
    description: "Primary divine background with golden energy flows",
  },
  {
    id: "circuit-neural",
    name: "Neural Circuit Premium",
    url: "https://api.builder.io/api/v1/image/assets/TEMP/921002ac8a40d9ed628283e45be5936ea6278ef2?width=3268",
    category: "premium",
    description: "High-tech circuit board with AI neural pathways",
  },
  {
    id: "data-matrix",
    name: "Data Matrix Flow",
    url: "https://api.builder.io/api/v1/image/assets/TEMP/809e5000d15fb5f16d9732c6de108efd313855ea?width=3088",
    category: "cinematic",
    description: "Flowing data streams and code matrix",
  },
  {
    id: "quantum-grid",
    name: "Quantum Grid Structure",
    url: "https://api.builder.io/api/v1/image/assets/TEMP/16859eb9b7e2683444fefb35746624764eca473d?width=3304",
    category: "presentation",
    description: "Geometric quantum computing visualization",
  },
  {
    id: "ai-nexus",
    name: "AI Nexus Core",
    url: "https://api.builder.io/api/v1/image/assets/TEMP/39b43479376171347f62cfe4f651c7631736a310?width=3330",
    category: "premium",
    description: "Central AI processing hub with energy beams",
  },
  {
    id: "legendary-slide",
    name: "The Legendary Slide",
    url: "https://api.builder.io/api/v1/image/assets/TEMP/f25523b27ad5326091d976ac007294a9fcd5b40e?width=3538",
    category: "cinematic",
    description: "The best slide background of all time - premium cinematic",
  },
  {
    id: "holographic-interface",
    name: "Holographic Interface",
    url: "https://api.builder.io/api/v1/image/assets/TEMP/57ac9111953d688025e2b72da79e1ed1ece9fcd9?width=3736",
    category: "hero",
    description: "3D holographic user interface display",
  },
  {
    id: "cyber-sanctuary",
    name: "Cyber Sanctuary",
    url: "https://api.builder.io/api/v1/image/assets/TEMP/bdb0ef4491806a85d045b62fb3a5d5fabaca0ba2?width=3310",
    category: "premium",
    description: "Cyberpunk sanctuary with neon highlights",
  },
  {
    id: "energy-core",
    name: "Divine Energy Core",
    url: "https://api.builder.io/api/v1/image/assets/TEMP/ecb797766f42592dddf70913a1ed92a7500a244f?width=3386",
    category: "cinematic",
    description: "Pulsating energy core with divine light",
  },
];

interface DivineBackgroundProps {
  backgroundId?: string;
  category?: "hero" | "presentation" | "cinematic" | "premium";
  children: React.ReactNode;
  className?: string;
  overlay?: boolean;
  particles?: boolean;
  animated?: boolean;
}

export function DivineBackground({
  backgroundId,
  category = "hero",
  children,
  className = "",
  overlay = true,
  particles = true,
  animated = true,
}: DivineBackgroundProps) {
  const [currentBackground, setCurrentBackground] =
    useState<BackgroundAsset | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (backgroundId) {
      const bg = divineBackgrounds.find((bg) => bg.id === backgroundId);
      setCurrentBackground(bg || divineBackgrounds[0]);
    } else {
      // Get random background from category
      const categoryBackgrounds = divineBackgrounds.filter(
        (bg) => bg.category === category,
      );
      const randomBg =
        categoryBackgrounds[
          Math.floor(Math.random() * categoryBackgrounds.length)
        ];
      setCurrentBackground(randomBg);
    }
  }, [backgroundId, category]);

  useEffect(() => {
    if (currentBackground) {
      const img = new Image();
      img.onload = () => setIsLoaded(true);
      img.src = currentBackground.url;
    }
  }, [currentBackground]);

  if (!currentBackground) return null;

  return (
    <div
      className={`min-h-screen relative overflow-hidden ${className}`}
      style={{
        fontFamily:
          "Gotham, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        backgroundImage: `url(${currentBackground.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-black flex items-center justify-center z-50">
          <div className="text-yellow-400 text-center">
            <div className="w-12 h-12 border-4 border-yellow-400/30 border-t-yellow-400 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-lg font-semibold">
              Loading Divine Experience...
            </p>
          </div>
        </div>
      )}

      {/* Enhanced Divine Overlays */}
      {overlay && (
        <>
          <div className="absolute inset-0 bg-black/70 z-0" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/70 z-1" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-2" />

          {/* Divine Energy Pulse */}
          {animated && (
            <div className="absolute inset-0 z-3">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent animate-pulse"></div>
              <div
                className="absolute inset-0 bg-gradient-to-t from-yellow-400/5 via-transparent to-yellow-400/5 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          )}
        </>
      )}

      {/* Floating Gold Particles */}
      {particles && (
        <div className="absolute inset-0 overflow-hidden z-4">
          <div className="animate-pulse absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full opacity-60"></div>
          <div
            className="animate-pulse absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-300 rounded-full opacity-40"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="animate-pulse absolute bottom-1/4 right-1/4 w-3 h-3 bg-yellow-500 rounded-full opacity-30"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="animate-pulse absolute bottom-1/3 left-1/5 w-1 h-1 bg-yellow-400 rounded-full opacity-50"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="animate-pulse absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-300 rounded-full opacity-40"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="animate-pulse absolute top-3/4 left-3/4 w-1 h-1 bg-yellow-500 rounded-full opacity-35"
            style={{ animationDelay: "5s" }}
          ></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Background Info Badge (Development Mode) */}
      {process.env.NODE_ENV === "development" && (
        <div className="absolute bottom-4 right-4 z-20 bg-black/60 backdrop-blur-sm rounded-lg p-3 text-yellow-400 text-xs">
          <p className="font-semibold">{currentBackground.name}</p>
          <p className="opacity-80">{currentBackground.description}</p>
          <p className="text-yellow-300 mt-1">
            Category: {currentBackground.category}
          </p>
        </div>
      )}
    </div>
  );
}

// Background Selector Component
export function BackgroundSelector({
  onSelect,
  currentId,
}: {
  onSelect: (backgroundId: string) => void;
  currentId?: string;
}) {
  const categories = ["hero", "presentation", "cinematic", "premium"] as const;

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-yellow-400 mb-4">
        Divine Backgrounds
      </h3>

      {categories.map((category) => (
        <div key={category} className="space-y-3">
          <h4 className="text-lg font-semibold text-white capitalize mb-3">
            {category} Backgrounds
          </h4>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {divineBackgrounds
              .filter((bg) => bg.category === category)
              .map((background) => (
                <button
                  key={background.id}
                  onClick={() => onSelect(background.id)}
                  className={`relative group rounded-lg overflow-hidden aspect-video transition-all duration-300 hover:scale-105 ${
                    currentId === background.id
                      ? "ring-2 ring-yellow-400 shadow-lg shadow-yellow-400/40"
                      : "hover:ring-2 hover:ring-yellow-400/50"
                  }`}
                >
                  <img
                    src={background.url}
                    alt={background.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-xs font-medium truncate">
                      {background.name}
                    </p>
                  </div>
                  {currentId === background.id && (
                    <div className="absolute top-2 right-2">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
                    </div>
                  )}
                </button>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
