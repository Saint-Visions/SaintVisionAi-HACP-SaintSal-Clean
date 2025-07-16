#!/bin/bash

# SaintVisionAI Production Deployment Script
# This script ensures a clean, production-ready deployment

echo "🚀 Starting SaintVisionAI Production Deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Run this script from the project root."
    exit 1
fi

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist/
rm -rf node_modules/.vite/

# Install dependencies
echo "📦 Installing production dependencies..."
npm ci --only=production

# Run type checking
echo "🔍 Running type checking..."
npm run typecheck || {
    echo "❌ Type checking failed. Please fix type errors before deploying."
    exit 1
}

# Build the application
echo "🏗️  Building production application..."
npm run build || {
    echo "❌ Build failed. Please fix build errors before deploying."
    exit 1
}

# Verify build output
if [ ! -d "dist/spa" ]; then
    echo "❌ Build output directory not found."
    exit 1
fi

echo "✅ Build verification passed!"
echo "📊 Build size analysis:"
du -sh dist/spa/*

# Deploy to Vercel
echo "🌐 Deploying to Vercel (Production)..."
npm run deploy || {
    echo "❌ Deployment failed."
    exit 1
}

echo "🎉 SaintVisionAI successfully deployed to production!"
echo "🔗 Available at: https://saintvisionai.com"
echo ""
echo "📋 Deployment Summary:"
echo "   - Domain: saintvisionai.com"
echo "   - Environment: Production"
echo "   - Features: All AI models, CRM, Authentication"
echo "   - Status: Live and Ready"
echo ""
echo "🛡️  Next Steps:"
echo "   1. Verify all pages load correctly"
echo "   2. Test authentication flow"
echo "   3. Verify AI chat functionality"
echo "   4. Monitor performance metrics"
echo ""
echo "🎊 SAINTSAL™ is now LIVE! Time to cook some knowledge! 🔥"
