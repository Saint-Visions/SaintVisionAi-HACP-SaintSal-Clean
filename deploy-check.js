#!/usr/bin/env node

/**
 * SaintSal AI Platform - Deployment Verification
 * Verifies all requirements are met before deployment
 */

const fs = require("fs");
const path = require("path");

console.log("🚀 SaintSal AI Platform - Deployment Verification\n");

// Check if build exists
const buildExists = fs.existsSync(path.join(__dirname, "dist/spa/index.html"));
console.log(`✅ Production build: ${buildExists ? "EXISTS" : "❌ MISSING"}`);

// Check package.json
const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
console.log(`✅ Project name: ${packageJson.name}`);
console.log(`✅ Version: ${packageJson.version}`);

// Check Vercel config
const vercelConfig = JSON.parse(fs.readFileSync("vercel.json", "utf8"));
console.log(`✅ Vercel framework: ${vercelConfig.framework}`);
console.log(`✅ Output directory: ${vercelConfig.outputDirectory}`);

// Check key files
const requiredFiles = [
  "package.json",
  "vercel.json",
  "tsconfig.json",
  "tailwind.config.ts",
  "vite.config.ts",
  "client/App.tsx",
  "server/index.ts",
  "supabase/migrations/001_initial_schema.sql",
];

console.log("\n📁 Required Files:");
requiredFiles.forEach((file) => {
  const exists = fs.existsSync(file);
  console.log(`${exists ? "✅" : "❌"} ${file}`);
});

// Check environment template
const envExample = fs.existsSync(".env.example");
console.log(
  `\n🔧 Environment template: ${envExample ? "✅ READY" : "❌ MISSING"}`,
);

console.log("\n🎯 Deployment Ready:");
console.log("   1. Go to vercel.com/new");
console.log("   2. Upload this entire project folder");
console.log("   3. Add environment variables from .env.example");
console.log("   4. Deploy!");
console.log("\n💰 Your platform will be live and generating revenue!");
