// Complete version with all tags - will replace the original file
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
    id: "admin-tools",
    title: "Admin Tools",
    description:
      "Mastering admin dashboard, client management, and system monitoring",
    icon: "⚙️",
    duration: "55 mins",
    difficulty: "Advanced",
    tags: [
      "admin",
      "tools",
      "dashboard",
      "management",
      "monitoring",
      "advanced",
    ],
    videos: [
      {
        id: "admin-dashboard",
        title: "Admin Dashboard Navigation",
        description: "Complete walkthrough of admin interface",
        duration: "12 mins",
        videoUrl: "https://youtu.be/example17",
        type: "youtube",
        tags: ["admin", "dashboard", "navigation", "interface", "walkthrough"],
      },
      {
        id: "client-management",
        title: "Client Management (/admin/clients)",
        description: "Managing users, subscriptions, and account issues",
        duration: "18 mins",
        videoUrl: "https://youtu.be/example18",
        type: "youtube",
        tags: ["client", "management", "users", "subscriptions", "accounts"],
      },
      {
        id: "system-logs",
        title: "System Logs (/admin/logs)",
        description: "Reading logs, debugging issues, monitoring health",
        duration: "15 mins",
        videoUrl: "https://youtu.be/example19",
        type: "youtube",
        tags: ["logs", "debugging", "monitoring", "health", "system"],
      },
      {
        id: "training-management",
        title: "Training Management (/admin/training)",
        description: "Managing this training system and content updates",
        duration: "10 mins",
        videoUrl: "https://youtu.be/example20",
        type: "youtube",
        tags: ["training", "management", "content", "updates", "system"],
      },
    ],
  },
];
