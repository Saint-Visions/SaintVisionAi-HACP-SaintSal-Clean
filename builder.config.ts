import { defineConfig } from "@builder.io/cli";

export default defineConfig({
  apiKey: "065997bd13e4442e888a08652fcd61ba",
  models: [
    {
      name: "page",
      includeContent: true,
      outputPath: "client/pages/builder",
      template: "react-tsx",
    },
    {
      name: "section",
      includeContent: true,
      outputPath: "client/components/builder/sections",
      template: "react-tsx",
    },
    {
      name: "header",
      includeContent: true,
      outputPath: "client/components/builder/headers",
      template: "react-tsx",
    },
    {
      name: "footer",
      includeContent: true,
      outputPath: "client/components/builder/footers",
      template: "react-tsx",
    },
    {
      name: "hero",
      includeContent: true,
      outputPath: "client/components/builder/heroes",
      template: "react-tsx",
    },
    {
      name: "testimonial",
      includeContent: true,
      outputPath: "client/components/builder/testimonials",
      template: "react-tsx",
    },
    {
      name: "pricing",
      includeContent: true,
      outputPath: "client/components/builder/pricing",
      template: "react-tsx",
    },
    {
      name: "cta",
      includeContent: true,
      outputPath: "client/components/builder/ctas",
      template: "react-tsx",
    },
  ],
  framework: "react",
  typescript: true,
  tailwindcss: true,
  generateTypes: true,
  sync: {
    enabled: true,
    outputDir: "client/builder-components",
    watch: true,
    onSync: () => {
      console.log("✅ Builder models synced successfully");
    },
  },
  options: {
    generateApiKey: false,
    generateGitignore: false,
    generatePackageJson: false,
  },
});
