export interface TrainingSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  videos: TrainingVideo[];
  downloadUrl?: string;
  tags: string[];
}

export interface TrainingVideo {
  id: string;
  title: string;
  description: string;
  duration: string;
  videoUrl: string;
  type: "youtube" | "vimeo" | "local";
  completed?: boolean;
  tags: string[];
}

export const trainingData: TrainingSection[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Learn the basics of SAINTSAL™ platform administration",
    icon: "🚀",
    duration: "45 mins",
    difficulty: "Beginner",
    tags: ["beginner", "setup", "basics", "admin", "platform", "onboarding"],
    videos: [
      {
        id: "login-setup",
        title: "Logging In & Workspace Setup",
        description: "Initial login process and workspace configuration",
        duration: "8 mins",
        videoUrl: "https://youtu.be/example1",
        type: "youtube",
        tags: ["login", "setup", "workspace", "configuration", "auth"],
      },
      {
        id: "onboarding-flow",
        title: "User Onboarding Flow",
        description: "How new users complete setup and get started",
        duration: "12 mins",
        videoUrl: "https://youtu.be/example2",
        type: "youtube",
        tags: ["onboarding", "users", "setup", "flow", "new user"],
      },
      {
        id: "dashboard-overview",
        title: "Dashboard Overview",
        description: "Understanding the main dashboard and navigation",
        duration: "15 mins",
        videoUrl: "https://youtu.be/example3",
        type: "youtube",
        tags: ["dashboard", "navigation", "overview", "ui", "interface"],
      },
      {
        id: "ai-console-basics",
        title: "AI Console Basics",
        description: "Introduction to the dual AI chat interface",
        duration: "10 mins",
        videoUrl: "https://youtu.be/example4",
        type: "youtube",
        tags: ["ai", "console", "chat", "dual ai", "gpt", "azure"],
      },
    ],
  },
  {
    id: "client-journey",
    title: "Client Journey",
    description:
      "Understanding how clients move through stages and AI interactions",
    icon: "👥",
    duration: "60 mins",
    difficulty: "Intermediate",
    tags: [
      "client",
      "journey",
      "lifecycle",
      "ai interactions",
      "support",
      "customers",
    ],
    videos: [
      {
        id: "client-lifecycle",
        title: "Client Lifecycle Overview",
        description: "From signup to enterprise - the complete journey",
        duration: "15 mins",
        videoUrl: "https://youtu.be/example5",
        type: "youtube",
        tags: ["lifecycle", "signup", "enterprise", "journey", "stages"],
      },
      {
        id: "ai-interactions",
        title: "AI Interaction Patterns",
        description: "How HACP™ technology responds to client needs",
        duration: "20 mins",
        videoUrl: "https://youtu.be/example6",
        type: "youtube",
        tags: [
          "ai",
          "hacp",
          "technology",
          "interactions",
          "patterns",
          "responses",
        ],
      },
      {
        id: "support-escalation",
        title: "Support & Escalation Procedures",
        description: "When and how to escalate client issues",
        duration: "12 mins",
        videoUrl: "https://youtu.be/example7",
        type: "youtube",
        tags: [
          "support",
          "escalation",
          "procedures",
          "issues",
          "help",
          "tickets",
        ],
      },
      {
        id: "success-metrics",
        title: "Success Metrics & KPIs",
        description: "Key metrics to track client success",
        duration: "13 mins",
        videoUrl: "https://youtu.be/example8",
        type: "youtube",
        tags: [
          "metrics",
          "kpis",
          "success",
          "tracking",
          "analytics",
          "performance",
        ],
      },
    ],
  },
  {
    id: "stripe-crm-tiers",
    title: "Stripe + CRM Tiers",
    description: "Understanding subscription tiers and feature unlocks",
    icon: "💳",
    duration: "50 mins",
    difficulty: "Intermediate",
    videos: [
      {
        id: "pricing-tiers",
        title: "Pricing Tier Structure",
        description: "$27 Unlimited → $97 Pro → $497 Enterprise breakdown",
        duration: "15 mins",
        videoUrl: "https://youtu.be/example9",
        type: "youtube",
      },
      {
        id: "stripe-integration",
        title: "Stripe Integration Deep Dive",
        description: "How payments, webhooks, and upgrades work",
        duration: "18 mins",
        videoUrl: "https://youtu.be/example10",
        type: "youtube",
      },
      {
        id: "crm-features",
        title: "CRM Features by Tier",
        description: "What CRM features unlock at each subscription level",
        duration: "12 mins",
        videoUrl: "https://youtu.be/example11",
        type: "youtube",
      },
      {
        id: "upgrade-process",
        title: "Upgrade Process & Support",
        description: "Helping clients upgrade and manage billing issues",
        duration: "5 mins",
        videoUrl: "https://youtu.be/example12",
        type: "youtube",
      },
    ],
  },
  {
    id: "webhooks-101",
    title: "Webhooks 101",
    description: "Live demo of webhook endpoints and automation triggers",
    icon: "🔗",
    duration: "40 mins",
    difficulty: "Advanced",
    videos: [
      {
        id: "webhook-overview",
        title: "Webhook Architecture Overview",
        description: "Understanding the webhook system and flow",
        duration: "10 mins",
        videoUrl: "https://youtu.be/example13",
        type: "youtube",
      },
      {
        id: "onleadsubmit-demo",
        title: "/onleadsubmit Live Demo",
        description: "Azure → GPT → Twilio → GHL workflow demonstration",
        duration: "15 mins",
        videoUrl: "https://youtu.be/example14",
        type: "youtube",
      },
      {
        id: "twilio-alerts",
        title: "Twilio Alert Configuration",
        description: "Setting up and managing SMS/voice alerts",
        duration: "8 mins",
        videoUrl: "https://youtu.be/example15",
        type: "youtube",
      },
      {
        id: "webhook-troubleshooting",
        title: "Webhook Troubleshooting",
        description: "Common issues and how to resolve them",
        duration: "7 mins",
        videoUrl: "https://youtu.be/example16",
        type: "youtube",
      },
    ],
  },
  {
    id: "admin-tools",
    title: "Admin Tools",
    description:
      "Mastering admin dashboard, client management, and system monitoring",
    icon: "⚙️",
    duration: "55 mins",
    difficulty: "Advanced",
    videos: [
      {
        id: "admin-dashboard",
        title: "Admin Dashboard Navigation",
        description: "Complete walkthrough of admin interface",
        duration: "12 mins",
        videoUrl: "https://youtu.be/example17",
        type: "youtube",
      },
      {
        id: "client-management",
        title: "Client Management (/admin/clients)",
        description: "Managing users, subscriptions, and account issues",
        duration: "18 mins",
        videoUrl: "https://youtu.be/example18",
        type: "youtube",
      },
      {
        id: "system-logs",
        title: "System Logs (/admin/logs)",
        description: "Reading logs, debugging issues, monitoring health",
        duration: "15 mins",
        videoUrl: "https://youtu.be/example19",
        type: "youtube",
      },
      {
        id: "training-management",
        title: "Training Management (/admin/training)",
        description: "Managing this training system and content updates",
        duration: "10 mins",
        videoUrl: "https://youtu.be/example20",
        type: "youtube",
      },
    ],
  },
  {
    id: "builder-rules",
    title: "Builder.io Fusion Rules",
    description: "How to make edits without breaking layout logic",
    icon: "🎨",
    duration: "35 mins",
    difficulty: "Intermediate",
    videos: [
      {
        id: "builder-overview",
        title: "Builder.io Integration Overview",
        description: "Understanding the locked layout system",
        duration: "10 mins",
        videoUrl: "https://youtu.be/example21",
        type: "youtube",
      },
      {
        id: "editable-zones",
        title: "Editable Zones & Restrictions",
        description: "What can and cannot be edited in Builder",
        duration: "12 mins",
        videoUrl: "https://youtu.be/example22",
        type: "youtube",
      },
      {
        id: "safe-editing",
        title: "Safe Editing Practices",
        description:
          "Best practices for content updates without breaking logic",
        duration: "8 mins",
        videoUrl: "https://youtu.be/example23",
        type: "youtube",
      },
      {
        id: "rollback-procedures",
        title: "Rollback Procedures",
        description: "How to revert changes if something goes wrong",
        duration: "5 mins",
        videoUrl: "https://youtu.be/example24",
        type: "youtube",
      },
    ],
  },
  {
    id: "emergency-actions",
    title: "Emergency Actions",
    description:
      "Critical procedures for system recovery and emergency situations",
    icon: "🚨",
    duration: "45 mins",
    difficulty: "Advanced",
    videos: [
      {
        id: "system-health",
        title: "System Health Monitoring",
        description: "Identifying and responding to system issues",
        duration: "12 mins",
        videoUrl: "https://youtu.be/example25",
        type: "youtube",
      },
      {
        id: "rebuild-flow",
        title: "Emergency Rebuild Procedures",
        description: "Step-by-step system rebuild and recovery",
        duration: "15 mins",
        videoUrl: "https://youtu.be/example26",
        type: "youtube",
      },
      {
        id: "stripe-override",
        title: "Stripe Override & Billing Fixes",
        description: "Emergency billing issue resolution",
        duration: "8 mins",
        videoUrl: "https://youtu.be/example27",
        type: "youtube",
      },
      {
        id: "webhook-resend",
        title: "Webhook Resend & Recovery",
        description: "Manually triggering failed webhooks and data recovery",
        duration: "10 mins",
        videoUrl: "https://youtu.be/example28",
        type: "youtube",
      },
    ],
  },
  {
    id: "investor-pitch",
    title: "Investor Pitch Guide",
    description:
      "Core story, IP logic, GTM strategy, and AI licensing presentation",
    icon: "💼",
    duration: "70 mins",
    difficulty: "Advanced",
    videos: [
      {
        id: "core-story",
        title: "SAINTSAL™ Core Story & Vision",
        description: "The foundational narrative and mission",
        duration: "15 mins",
        videoUrl: "https://youtu.be/example29",
        type: "youtube",
      },
      {
        id: "hacp-technology",
        title: "HACP™ IP & Technology Differentiation",
        description: "Explaining the patent-pending dual-brain architecture",
        duration: "20 mins",
        videoUrl: "https://youtu.be/example30",
        type: "youtube",
      },
      {
        id: "gtm-strategy",
        title: "Go-to-Market Strategy",
        description:
          "Market positioning, customer acquisition, and growth strategy",
        duration: "18 mins",
        videoUrl: "https://youtu.be/example31",
        type: "youtube",
      },
      {
        id: "ai-licensing",
        title: "AI Licensing & Enterprise Strategy",
        description: "B2B licensing model and enterprise expansion plans",
        duration: "12 mins",
        videoUrl: "https://youtu.be/example32",
        type: "youtube",
      },
      {
        id: "financial-projections",
        title: "Financial Projections & Metrics",
        description: "Revenue forecasts, unit economics, and key metrics",
        duration: "5 mins",
        videoUrl: "https://youtu.be/example33",
        type: "youtube",
      },
    ],
    downloadUrl: "/api/training/investor-deck.pdf",
  },
];
