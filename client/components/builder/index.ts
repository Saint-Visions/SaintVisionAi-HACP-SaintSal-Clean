// SAINTSAL™ Builder.io Component Registry
import { Builder } from "@builder.io/react";

// Import all your dynamic components
import Hero from "./Hero";
import ProductCard from "./ProductCard";
import TestimonialCard from "./TestimonialCard";
import FeatureGrid from "./FeatureGrid";
import PricingSection from "./PricingSection";
import AIChat from "./AIChat";

// Register all components with Builder.io
export const registerBuilderComponents = () => {
  // Components are already registered in their respective files:
  // - Hero (SAINTSAL Hero Section)
  // - ProductCard (SAINTSAL Product Card)
  // - TestimonialCard (SAINTSAL Testimonial Card)
  // - FeatureGrid (SAINTSAL Feature Grid)
  // - PricingSection (SAINTSAL Pricing Section)
  // - AIChat (SAINTSAL AI Chat)

  console.log("🏛️ SAINTSAL™ Builder.io components registered successfully!");
  console.log("🔥 Available components:");
  console.log("  - SAINTSAL Hero Section (parallax backgrounds)");
  console.log("  - SAINTSAL Product Card (pricing & features)");
  console.log("  - SAINTSAL Testimonial Card (customer reviews)");
  console.log("  - SAINTSAL Feature Grid (features showcase)");
  console.log("  - SAINTSAL Pricing Section (complete pricing layout)");
  console.log("  - SAINTSAL AI Chat (GPT-4 powered war room chat)");
};

// Export all components for use
export {
  Hero,
  ProductCard,
  TestimonialCard,
  FeatureGrid,
  PricingSection,
  AIChat,
};

// Auto-register when imported
registerBuilderComponents();
