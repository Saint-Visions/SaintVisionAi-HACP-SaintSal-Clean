#!/usr/bin/env tsx

import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const BUILDER_API_KEY = "065997bd13e4442e888a08652fcd61ba";

console.log("🚀 Initializing Builder.io setup...");

// Create builder directories
const builderDirs = [
  "client/pages/builder",
  "client/components/builder/sections",
  "client/components/builder/headers",
  "client/components/builder/footers",
  "client/components/builder/heroes",
  "client/components/builder/testimonials",
  "client/components/builder/pricing",
  "client/components/builder/ctas",
];

builderDirs.forEach((dir) => {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
    console.log(`✅ Created directory: ${dir}`);
  }
});

// Create builder types
const builderTypes = `// Builder.io Types
export interface BuilderPage {
  id: string;
  name: string;
  data: {
    title?: string;
    description?: string;
    [key: string]: any;
  };
}

export interface BuilderSection {
  id: string;
  name: string;
  data: {
    [key: string]: any;
  };
}

export interface BuilderComponent {
  '@type': string;
  component: {
    name: string;
    options: Record<string, any>;
  };
  children?: BuilderComponent[];
}
`;

writeFileSync("client/types/builder.ts", builderTypes);

// Create builder context
const builderContext = `import { createContext, useContext, ReactNode } from 'react';

interface BuilderContextType {
  apiKey: string;
  model: string;
}

const BuilderContext = createContext<BuilderContextType>({
  apiKey: '${BUILDER_API_KEY}',
  model: 'page'
});

export const useBuilder = () => useContext(BuilderContext);

export const BuilderProvider = ({ children }: { children: ReactNode }) => {
  return (
    <BuilderContext.Provider value={{ apiKey: '${BUILDER_API_KEY}', model: 'page' }}>
      {children}
    </BuilderContext.Provider>
  );
};
`;

// Create types directory if it doesn't exist
if (!existsSync("client/types")) {
  mkdirSync("client/types", { recursive: true });
}

writeFileSync("client/contexts/BuilderContext.tsx", builderContext);

// Create builder component wrapper
const builderWrapper = `import { Builder, BuilderComponent } from '@builder.io/react';
import { useEffect } from 'react';

// Initialize Builder
Builder.init('${BUILDER_API_KEY}');

// Register custom components (add your custom components here)
Builder.registerComponent({
  name: 'SaintVisionHero',
  inputs: [
    { name: 'title', type: 'string', defaultValue: 'Welcome to SaintVision' },
    { name: 'subtitle', type: 'string', defaultValue: 'Divine AI Technology' },
    { name: 'backgroundImage', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'] }
  ]
}, (props) => (
  <div className="hero-section" style={{ backgroundImage: \`url(\${props.backgroundImage})\` }}>
    <h1>{props.title}</h1>
    <p>{props.subtitle}</p>
  </div>
));

export { Builder, BuilderComponent };
`;

writeFileSync("client/components/builder/index.ts", builderWrapper);

console.log("✅ Builder.io initialization complete!");
console.log("📝 Next steps:");
console.log("   1. Run: npm run builder:sync");
console.log("   2. Check client/pages/builder/ for synced pages");
console.log("   3. Import and use Builder components in your app");
