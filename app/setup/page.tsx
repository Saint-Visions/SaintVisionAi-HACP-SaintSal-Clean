import WorkspaceLayout from "@/components/WorkspaceLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Settings,
  Brain,
  Key,
  Workspace,
  Chrome,
  Smartphone,
} from "lucide-react";

const setupSteps = [
  {
    icon: Key,
    title: "API Keys Setup",
    description: "Configure your AI model preferences",
    status: "pending",
    items: [
      "OpenAI API Key (GPT-4o)",
      "Azure Cognitive Services",
      "Model Selection",
      "Response Settings",
    ],
  },
  {
    icon: Workspace,
    title: "Workspace Configuration",
    description: "Customize your SAINTSAL™ environment",
    status: "pending",
    items: [
      "Workspace Name",
      "Default AI Behavior",
      "Privacy Settings",
      "Notification Preferences",
    ],
  },
  {
    icon: Chrome,
    title: "Chrome Extension",
    description: "Install browser companion (optional)",
    status: "optional",
    items: [
      "Download Extension",
      "Browser Integration",
      "Sync Settings",
      "Hotkey Configuration",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Setup",
    description: "Configure mobile access (optional)",
    status: "optional",
    items: [
      "PWA Installation",
      "Mobile Notifications",
      "Voice Commands",
      "Offline Mode",
    ],
  },
];

export default function SetupPage() {
  return (
    <WorkspaceLayout>
      <div className="min-h-screen relative overflow-hidden charcoal-depth">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F8155e04eb6064174a0cb82e2eecf77b6')`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.1,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Settings className="w-12 h-12 text-primary" />
              <h1 className="text-4xl font-bold text-primary">
                Welcome to SAINTSAL™
              </h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Let's set up your divine AI workspace. This will only take a few
              minutes.
            </p>
          </div>

          {/* Progress Overview */}
          <Card className="mb-8 bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Setup Progress</h3>
                <Badge className="bg-yellow-500/20 text-yellow-400">
                  2 of 4 steps required
                </Badge>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {setupSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 ${
                        step.status === "pending"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : step.status === "optional"
                            ? "bg-muted/20 text-muted-foreground"
                            : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      <step.icon className="w-6 h-6" />
                    </div>
                    <p className="text-xs font-medium">{step.title}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Setup Steps */}
          <div className="space-y-6">
            {setupSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card
                  key={index}
                  className={`${
                    step.status === "pending"
                      ? "border-yellow-500/30 bg-yellow-500/5"
                      : step.status === "optional"
                        ? "border-muted/30 bg-background/50"
                        : "border-green-500/30 bg-green-500/5"
                  } backdrop-blur-sm`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          step.status === "pending"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : step.status === "optional"
                              ? "bg-muted/20 text-muted-foreground"
                              : "bg-green-500/20 text-green-400"
                        }`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <CardTitle className="text-xl">
                            {step.title}
                          </CardTitle>
                          <Badge
                            className={
                              step.status === "pending"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : step.status === "optional"
                                  ? "bg-muted/20 text-muted-foreground"
                                  : "bg-green-500/20 text-green-400"
                            }
                          >
                            {step.status === "pending"
                              ? "Required"
                              : step.status === "optional"
                                ? "Optional"
                                : "Complete"}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mt-1">
                          {step.description}
                        </p>
                      </div>
                      {step.status === "completed" && (
                        <CheckCircle className="w-6 h-6 text-green-400" />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      {step.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center gap-3"
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${
                              step.status === "completed"
                                ? "bg-green-400"
                                : "bg-muted"
                            }`}
                          />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button
                        className={
                          step.status === "pending"
                            ? "bg-yellow-500 hover:bg-yellow-600"
                            : step.status === "optional"
                              ? "bg-muted hover:bg-muted/80"
                              : "bg-green-500 hover:bg-green-600"
                        }
                      >
                        {step.status === "completed"
                          ? "Reconfigure"
                          : step.status === "pending"
                            ? "Configure Now"
                            : "Set Up"}
                      </Button>
                      {step.status === "optional" && (
                        <Button variant="outline">Skip for Now</Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Quick Start */}
          <Card className="mt-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-6 text-center">
              <Brain className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Complete the required setup steps above, then dive into your
                SAINTSAL™ AI experience.
              </p>
              <div className="flex justify-center gap-4">
                <Button className="bg-primary hover:bg-primary/90">
                  Complete Setup
                </Button>
                <Button variant="outline">Skip to Dashboard</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </WorkspaceLayout>
  );
}
