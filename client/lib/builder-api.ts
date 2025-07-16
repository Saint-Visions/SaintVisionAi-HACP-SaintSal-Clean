// SAINTSAL™ Builder.io API Automation
import { builderConfig } from "./builder";

export interface BuilderContent {
  model: string;
  data: Record<string, any>;
  published?: "published" | "draft";
  name?: string;
  url?: string;
}

export class BuilderAPI {
  private apiKey: string;
  private privateKey: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = builderConfig.apiKey;
    this.privateKey = builderConfig.privateKey;
    this.baseUrl = builderConfig.baseUrl;
  }

  // Push dynamic content to Builder.io
  async pushContent(content: BuilderContent): Promise<any> {
    try {
      const response = await fetch(`${this.baseUrl}/content/${content.model}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.privateKey}`,
        },
        body: JSON.stringify({
          name: content.name || `SAINTSAL ${Date.now()}`,
          data: content.data,
          published: content.published || "published",
          url: content.url,
        }),
      });

      if (!response.ok) {
        throw new Error(`Builder.io API error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error pushing content to Builder.io:", error);
      throw error;
    }
  }

  // Get content from Builder.io
  async getContent(
    model: string,
    options: {
      query?: Record<string, any>;
      limit?: number;
      offset?: number;
    } = {},
  ): Promise<any> {
    try {
      const params = new URLSearchParams({
        apiKey: this.apiKey,
        limit: (options.limit || 10).toString(),
        offset: (options.offset || 0).toString(),
        ...options.query,
      });

      const response = await fetch(
        `${this.baseUrl}/content/${model}?${params}`,
        {
          headers: {
            Authorization: `Bearer ${this.privateKey}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error(`Builder.io API error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching content from Builder.io:", error);
      throw error;
    }
  }

  // Update existing content
  async updateContent(
    model: string,
    id: string,
    data: Record<string, any>,
  ): Promise<any> {
    try {
      const response = await fetch(`${this.baseUrl}/content/${model}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.privateKey}`,
        },
        body: JSON.stringify({ data }),
      });

      if (!response.ok) {
        throw new Error(`Builder.io API error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error updating content in Builder.io:", error);
      throw error;
    }
  }

  // Create SAINTSAL™ homepage automatically
  async createHomepage(): Promise<any> {
    const homepageContent: BuilderContent = {
      model: "page",
      name: "SAINTSAL™ Homepage",
      url: "/",
      data: {
        title: "Welcome to SAINTSAL™",
        description: "Divine AI Platform - Cookin' Knowledge",
        blocks: [
          {
            "@type": "@builder.io/sdk:Element",
            component: {
              name: "SAINTSAL Hero Section",
              options: {
                title: "Welcome to SAINTSAL™",
                subtitle: "Cookin' Knowledge with Divine AI",
                backgroundImage:
                  "https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F89f844d10b5e4243a2178ad3de7a9f4f",
                ctaText: "🔥 Start Cooking",
                ctaLink: "/console",
              },
            },
          },
          {
            "@type": "@builder.io/sdk:Element",
            component: {
              name: "SAINTSAL Feature Grid",
              options: {
                title: "Divine AI Features",
                features: [
                  {
                    icon: "🧠",
                    title: "Dual AI System",
                    description:
                      "GPT-4 + Azure AI working in perfect harmony for divine insights",
                  },
                  {
                    icon: "💼",
                    title: "CRM Integration",
                    description:
                      "Seamlessly connect with GoHighLevel and manage your clients",
                  },
                ],
              },
            },
          },
          {
            "@type": "@builder.io/sdk:Element",
            component: {
              name: "SAINTSAL Pricing Section",
              options: {
                title: "Choose Your Divine Plan",
                subtitle:
                  "Unlock the power of SAINTSAL™ AI with our flexible pricing options",
              },
            },
          },
        ],
      },
    };

    return this.pushContent(homepageContent);
  }

  // Sync user data with Builder.io
  async syncUserData(
    userId: string,
    userData: Record<string, any>,
  ): Promise<any> {
    const userContent: BuilderContent = {
      model: "user-data",
      name: `User Data - ${userId}`,
      data: {
        userId,
        ...userData,
        updatedAt: new Date().toISOString(),
      },
    };

    return this.pushContent(userContent);
  }

  // Create dynamic product pages
  async createProductPage(product: {
    name: string;
    price: string;
    description: string;
    features: string[];
  }): Promise<any> {
    const productContent: BuilderContent = {
      model: "product-page",
      name: `Product - ${product.name}`,
      url: `/products/${product.name.toLowerCase().replace(/\s+/g, "-")}`,
      data: {
        product,
        blocks: [
          {
            "@type": "@builder.io/sdk:Element",
            component: {
              name: "SAINTSAL Product Card",
              options: product,
            },
          },
        ],
      },
    };

    return this.pushContent(productContent);
  }
}

// Export singleton instance
export const builderAPI = new BuilderAPI();

// Utility functions for automation
export const builderAutomation = {
  // Auto-create content based on your data
  async autoCreateContent(data: {
    type: "homepage" | "product" | "user";
    payload: Record<string, any>;
  }) {
    switch (data.type) {
      case "homepage":
        return builderAPI.createHomepage();
      case "product":
        return builderAPI.createProductPage(data.payload);
      case "user":
        return builderAPI.syncUserData(data.payload.id, data.payload);
      default:
        throw new Error(`Unknown content type: ${data.type}`);
    }
  },

  // Sync SAINTSAL™ assets to Builder.io
  async syncAssets() {
    // This would upload your brand assets to Builder.io's media library
    console.log("🏛️ Syncing SAINTSAL™ assets to Builder.io...");
    // Implementation would use Builder.io's asset upload API
  },
};
