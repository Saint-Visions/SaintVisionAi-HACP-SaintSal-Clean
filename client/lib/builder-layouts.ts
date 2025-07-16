// SAINTSAL™ Builder.io Layout Automation - Full Route Injection
import { builderAPI, BuilderContent } from "./builder-api";
import { builderAssets } from "./builder";

export interface RouteLayout {
  path: string;
  name: string;
  description: string;
  protected: boolean;
  tier?: "free" | "unlimited" | "pro" | "admin";
  components: any[];
}

// Complete SAINTSAL™ route definitions - ALL ROUTES with divine branding
export const saintsalRoutes: RouteLayout[] = [
  {
    path: "/",
    name: "SAINTSAL™ Splash Page",
    description: "Divine AI Platform Homepage with GOTTA GUY™ messaging",
    protected: false,
    components: [
      {
        "@type": "@builder.io/sdk:Element",
        component: {
          name: "SAINTSAL Hero Section",
          options: {
            title: "Welcome to SAINTSAL™",
            subtitle: "Divine AI that doesn't just answer - GOTTA GUY™!",
            backgroundImage: builderAssets.backgrounds.hero,
            ctaText: "🔥 Start Cooking",
            ctaLink: "/console",
            showLogo: true,
          },
        },
      },
      {
        "@type": "@builder.io/sdk:Element",
        component: {
          name: "SAINTSAL Feature Grid",
          options: {
            title: "Divine AI Features",
            subtitle:
              "Unlock the power of SAINTSAL™ with these incredible capabilities",
            features: [
              {
                icon: "🧠",
                title: "Dual AI System",
                description: "GPT-4 + Azure AI working in perfect harmony",
              },
              {
                icon: "💼",
                title: "CRM Integration",
                description: "Seamlessly connect with GoHighLevel",
              },
              {
                icon: "⚡",
                title: "Real-time Analytics",
                description: "Track performance and optimize in real-time",
              },
              {
                icon: "🔒",
                title: "Enterprise Security",
                description: "Bank-level security with end-to-end encryption",
              },
            ],
          },
        },
      },
    ],
  },
  {
    path: "/login",
    name: "SAINTSAL™ Auth Portal",
    description: "Supabase authentication with divine branding",
    protected: false,
    components: [
      {
        "@type": "@builder.io/sdk:Element",
        component: {
          name: "SAINTSAL Hero Section",
          options: {
            title: "Enter Your Sanctuary",
            subtitle: "Divine AI awaits your command",
            backgroundImage: builderAssets.backgrounds.premium,
            ctaText: "🔐 Sign In",
            ctaLink: "/dashboard",
            overlayOpacity: 0.3,
          },
        },
      },
    ],
  },
  {
    path: "/dashboard",
    name: "SAINTSAL™ Dual Chat UI",
    description: "War room dashboard with dual AI interface",
    protected: true,
    tier: "unlimited",
    components: [
      {
        "@type": "@builder.io/sdk:Element",
        component: {
          name: "SAINTSAL AI Chat",
          options: {
            title: "Your Divine AI Command Center",
            warRoomMode: true,
            showModelSelector: true,
          },
        },
      },
    ],
  },
  {
    path: "/console",
    name: "SAINTSAL™ AI Console",
    description: "Admin/Client AI Assistant interface",
    protected: true,
    tier: "unlimited",
    components: [
      {
        "@type": "@builder.io/sdk:Element",
        component: {
          name: "SAINTSAL AI Chat",
          options: {
            title: "AI Console - Your GOTTA GUY™",
            placeholder: "What divine knowledge can I cook up for you?",
            warRoomMode: true,
          },
        },
      },
    ],
  },
  {
    path: "/partnertech",
    name: "SAINTSAL™ PartnerTech CRM",
    description: "Professional CRM tools - $97+ tier",
    protected: true,
    tier: "pro",
    components: [
      {
        "@type": "@builder.io/sdk:Element",
        component: {
          name: "SAINTSAL Feature Grid",
          options: {
            title: "PartnerTech CRM Suite",
            subtitle: "Professional tools for divine business management",
            features: [
              {
                icon: "📊",
                title: "Advanced Analytics",
                description: "Deep insights into your business performance",
              },
              {
                icon: "🤝",
                title: "Client Management",
                description: "Comprehensive CRM with GoHighLevel integration",
              },
            ],
          },
        },
      },
    ],
  },
  {
    path: "/pricing",
    name: "SAINTSAL™ Pricing Tiers",
    description: "Divine pricing with Stripe integration",
    protected: false,
    components: [
      {
        "@type": "@builder.io/sdk:Element",
        component: {
          name: "SAINTSAL Pricing Section",
          options: {
            title: "Choose Your Divine Plan",
            subtitle: "Unlock the power of SAINTSAL™ AI with flexible pricing",
          },
        },
      },
    ],
  },
  {
    path: "/upgrade",
    name: "SAINTSAL™ Upgrade Flow",
    description: "Stripe checkout integration",
    protected: true,
    components: [
      {
        "@type": "@builder.io/sdk:Element",
        component: {
          name: "SAINTSAL Hero Section",
          options: {
            title: "Upgrade Your Divine Power",
            subtitle: "Unlock advanced AI capabilities",
            ctaText: "💎 Upgrade Now",
            ctaLink: "/checkout",
          },
        },
      },
    ],
  },
  {
    path: "/settings",
    name: "SAINTSAL™ User Settings",
    description: "User preferences and AI configuration",
    protected: true,
    components: [
      {
        "@type": "@builder.io/sdk:Element",
        component: {
          name: "SAINTSAL Feature Grid",
          options: {
            title: "Customize Your Experience",
            subtitle: "Configure your divine AI assistant",
            columns: 1,
          },
        },
      },
    ],
  },
  {
    path: "/admin/clients",
    name: "SAINTSAL™ Admin Dashboard",
    description: "Internal client management dashboard",
    protected: true,
    tier: "admin",
    components: [
      {
        "@type": "@builder.io/sdk:Element",
        component: {
          name: "SAINTSAL Feature Grid",
          options: {
            title: "Admin Command Center",
            subtitle: "Manage clients and divine operations",
          },
        },
      },
    ],
  },
];

export class SaintsalLayoutManager {
  // Create all route layouts in Builder.io
  async createAllLayouts(): Promise<void> {
    console.log("🔥 Creating SAINTSAL™ Builder.io layouts for all routes...");

    for (const route of saintsalRoutes) {
      try {
        const content: BuilderContent = {
          model: "page",
          name: route.name,
          url: route.path,
          data: {
            title: route.name,
            description: route.description,
            protected: route.protected,
            tier: route.tier,
            blocks: route.components,
            // SAINTSAL™ branding metadata
            brand: {
              name: "SAINTSAL™",
              tagline: "Cookin' Knowledge",
              colors: builderAssets.colors,
              assets: builderAssets,
            },
          },
        };

        await builderAPI.pushContent(content);
        console.log(`✅ Created layout: ${route.name} (${route.path})`);
      } catch (error) {
        console.error(`❌ Failed to create ${route.path}:`, error);
      }
    }

    console.log("🏛️ All SAINTSAL™ layouts created successfully!");
  }

  // Update specific route
  async updateRoute(
    path: string,
    updates: Partial<RouteLayout>,
  ): Promise<void> {
    const route = saintsalRoutes.find((r) => r.path === path);
    if (!route) {
      throw new Error(`Route ${path} not found`);
    }

    Object.assign(route, updates);

    const content: BuilderContent = {
      model: "page",
      name: route.name,
      url: route.path,
      data: {
        title: route.name,
        description: route.description,
        blocks: route.components,
      },
    };

    await builderAPI.pushContent(content);
    console.log(`✅ Updated route: ${path}`);
  }

  // Sync with environment variables
  async syncEnvironment(): Promise<void> {
    console.log("🔐 Syncing SAINTSAL™ environment with Builder.io...");

    const envData = {
      stripe: {
        publishableKey: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY,
        priceIds: {
          free: import.meta.env.VITE_STRIPE_FREE_PRICE_ID,
          unlimited: import.meta.env.VITE_STRIPE_UNLIMITED_PRICE_ID,
          pro: import.meta.env.VITE_STRIPE_PRO_PRICE_ID,
        },
      },
      supabase: {
        url: import.meta.env.VITE_SUPABASE_URL,
        anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
      },
      app: {
        name: import.meta.env.VITE_APP_NAME || "SAINTSAL™",
        url: import.meta.env.VITE_APP_URL || "https://saintvisional.com",
        supportEmail: import.meta.env.VITE_SUPPORT_EMAIL,
      },
      features: {
        dualAI: import.meta.env.VITE_ENABLE_DUAL_AI === "true",
        bossMode: import.meta.env.VITE_ENABLE_BOSS_MODE === "true",
        crmIntegration: import.meta.env.VITE_ENABLE_CRM_INTEGRATION === "true",
      },
    };

    const envContent: BuilderContent = {
      model: "site-config",
      name: "SAINTSAL™ Environment Configuration",
      data: {
        environment: "production",
        ...envData,
        updatedAt: new Date().toISOString(),
      },
    };

    await builderAPI.pushContent(envContent);
    console.log("✅ Environment synced with Builder.io");
  }
}

// Export singleton
export const saintsalLayouts = new SaintsalLayoutManager();
