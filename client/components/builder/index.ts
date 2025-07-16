// SAINTSAL™ Builder.io Component Registry
import { Builder } from "@builder.io/react";

// Import all your dynamic components
import Hero from "./Hero";
import ProductCard from "./ProductCard";
import TestimonialCard from "./TestimonialCard";
import FeatureGrid from "./FeatureGrid";
import PricingSection from "./PricingSection";

// Register all components with Builder.io
export const registerBuilderComponents = () => {
  // Already registered in their respective files:
  // - Hero
  // - ProductCard

  console.log("🏛️ SAINTSAL™ Builder.io components registered successfully!");
};

// Export all components for use
export { Hero, ProductCard, TestimonialCard, FeatureGrid, PricingSection };

// Auto-register when imported
registerBuilderComponents();
