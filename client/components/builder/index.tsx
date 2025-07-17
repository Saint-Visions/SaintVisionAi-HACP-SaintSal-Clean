import { builder, Builder } from "@builder.io/react";
import React from "react";

// Initialize Builder with API key
builder.init("065997bd13e4442e888a08652fcd61ba");

// Register custom components for the Builder editor
Builder.registerComponent(
  {
    name: "SaintVisionHero",
    inputs: [
      {
        name: "title",
        type: "string",
        defaultValue: "Welcome to SaintVision™",
        required: true,
      },
      {
        name: "subtitle",
        type: "string",
        defaultValue: "Divine AI Technology",
      },
      {
        name: "backgroundImage",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
        helperText: "Background image for the hero section",
      },
    ],
  },
  (props: { title?: string; subtitle?: string; backgroundImage?: string }) => (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: props.backgroundImage
          ? `url(${props.backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-4">
          {props.title || "Welcome to SaintVision™"}
        </h1>
        <p className="text-2xl md:text-3xl font-light tracking-wide text-yellow-400">
          {props.subtitle || "Divine AI Technology"}
        </p>
      </div>
    </div>
  ),
);

// Register a pricing card component
Builder.registerComponent(
  {
    name: "SaintVisionPricingCard",
    inputs: [
      { name: "title", type: "string", defaultValue: "Unlimited" },
      { name: "price", type: "number", defaultValue: 27 },
      {
        name: "description",
        type: "string",
        defaultValue: "Unlimited AI conversations",
      },
      {
        name: "features",
        type: "list",
        subFields: [{ name: "feature", type: "string" }],
      },
      { name: "popular", type: "boolean", defaultValue: false },
    ],
  },
  (props: {
    title?: string;
    price?: number;
    description?: string;
    features?: Array<{ feature: string }>;
    popular?: boolean;
  }) => (
    <div
      className={`p-8 rounded-3xl border transition-all duration-300 hover:shadow-2xl ${
        props.popular
          ? "scale-105 border-yellow-400/50"
          : "border-gray-600/50 hover:border-yellow-400/30"
      }`}
      style={{
        backdropFilter: "blur(24px)",
        backgroundColor: props.popular
          ? "rgba(0, 0, 0, 0.8)"
          : "rgba(0, 0, 0, 0.6)",
        boxShadow: props.popular
          ? "rgba(250, 204, 21, 0.4) 0px 25px 50px -12px"
          : "none",
      }}
    >
      {props.popular && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300"></div>
      )}

      <div className="text-center">
        <h3 className="text-2xl font-light text-white mb-2">{props.title}</h3>
        <div className="text-4xl font-light text-white mb-4">
          ${props.price}
        </div>
        <p className="text-gray-300 text-sm mb-6">{props.description}</p>

        {props.features && (
          <div className="space-y-3 mb-6">
            {props.features.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-sm text-gray-300">{item.feature}</span>
              </div>
            ))}
          </div>
        )}

        <button
          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-medium py-3 rounded-xl"
          style={{
            boxShadow: "rgba(250, 204, 21, 0.4) 0px 15px 35px -12px",
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  ),
);

console.log("✅ SAINTSAL™ Builder.io components registered successfully!");

export { builder, Builder };
