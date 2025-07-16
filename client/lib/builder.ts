// SAINTSAL™ Builder.io Configuration
import { builder } from "@builder.io/react";

// Initialize Builder.io with your API key
builder.init(
  process.env.VITE_BUILDER_API_KEY || "065997bd13e4442e888a08652fcd61ba",
);

// SAINTSAL™ Brand Assets for Builder.io
export const builderAssets = {
  logos: {
    circuitLogo:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048",
    cookinKnowledge:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4509d1503f738400c83cbc94ba7a62f0470b21d7?width=2048",
    saintvisionalLogo:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cd4cde1845c8259165edfb536d4afccebe33767d?width=2048",
  },
  backgrounds: {
    hero: "https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F89f844d10b5e4243a2178ad3de7a9f4f",
    premium:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/46ab1422c157e614ab6683e4bc30e5ce36870ec4?width=3072",
    sidebar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ab79e9e02fc3bbbf825dc0443d8e72c1b9e7f5ac?width=3072",
  },
  colors: {
    primary: "#E7B008", // Gold
    charcoal: "#10161C", // Deep charcoal
    goldShimmer: "#F7DC6F", // Light gold
  },
};

// API Configuration for dynamic content
export const builderConfig = {
  apiKey:
    process.env.VITE_BUILDER_API_KEY || "065997bd13e4442e888a08652fcd61ba",
  privateKey:
    process.env.BUILDER_PRIVATE_KEY || "bpk-3c4d4899eeea452f94e3c07551023a90",
  baseUrl: "https://cdn.builder.io/api/v2",
  models: {
    page: "page",
    productPage: "product-page",
    blogPost: "blog-post",
    landing: "landing-page",
  },
};

export default builder;
