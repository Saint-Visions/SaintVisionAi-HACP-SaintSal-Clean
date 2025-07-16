import WorkspaceLayout from "@/components/WorkspaceLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Chrome, Building2, Brain, Users, Target } from "lucide-react";

export default function PartnerTechPage() {
  return (
    <WorkspaceLayout>
      <div className="min-h-screen relative overflow-hidden charcoal-depth">
        {/* PartnerTech Warmth Background */}
        <div
          className="absolute inset-0"
          style={{
            fontFamily:
              "Gotham, 'Gotham Medium', 'Gotham Bold', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F2f82241debb2428ea9cf41e453743ff2')`,
            backgroundAttachment: "fixed",
            backgroundSize: "120%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Atmospheric Layers for Warmth */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/50 via-amber-900/60 to-orange-900/70 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-orange-800/40 z-1" />

        {/* Golden Warmth Particles */}
        <div className="absolute inset-0 z-2">
          <div
            className="absolute top-1/5 left-1/6 w-2 h-2 bg-amber-400/70 rounded-full animate-pulse"
            style={{
              boxShadow:
                "0 0 25px rgba(245, 158, 11, 0.5), 0 0 50px rgba(245, 158, 11, 0.3), inset 0 0 15px rgba(255, 255, 255, 0.4)",
              filter: "blur(0.4px)",
            }}
          />
          <div
            className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-orange-400/80 rounded-full animate-pulse"
            style={{
              boxShadow:
                "0 0 20px rgba(251, 146, 60, 0.6), 0 0 40px rgba(251, 146, 60, 0.4)",
              filter: "blur(0.3px)",
              animationDelay: "2s",
            }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-yellow-500/90 rounded-full animate-pulse"
            style={{
              boxShadow:
                "0 0 15px rgba(234, 179, 8, 0.7), 0 0 30px rgba(234, 179, 8, 0.5)",
              filter: "blur(0.2px)",
              animationDelay: "4s",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Zap className="w-12 h-12 text-amber-400" />
              <h1 className="text-4xl font-thin tracking-tight text-amber-400">
                PartnerTech AI
              </h1>
              <div className="bg-green-500/20 text-green-400 border border-green-500/40 px-3 py-1 rounded-full text-sm font-medium">
                Pro Suite
              </div>
            </div>
            <p className="text-xl text-gray-200 font-light">
              Advanced automation tools for scaling your business
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Chrome Extension */}
            <div
              className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-400/40 backdrop-blur-md rounded-3xl"
              style={{
                boxShadow:
                  "0 20px 40px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
              }}
            >
              <div className="p-6">
                <h2 className="flex items-center gap-3 text-blue-400 text-xl font-thin tracking-tight mb-4">
                  <Chrome className="w-8 h-8" />
                  Chrome Extension Pro
                </h2>
              </div>
              <div className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Advanced browser automation with AI-powered workflows and
                    real-time data extraction.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-900/40 border border-blue-400/20 rounded-lg p-4 text-center backdrop-blur-sm">
                      <Brain className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-sm font-medium text-white">
                        AI Extraction
                      </div>
                    </div>
                    <div className="bg-gray-900/40 border border-blue-400/20 rounded-lg p-4 text-center backdrop-blur-sm">
                      <Target className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-sm font-medium text-white">
                        Auto-Fill
                      </div>
                    </div>
                    <div className="bg-gray-900/40 border border-blue-400/20 rounded-lg p-4 text-center backdrop-blur-sm">
                      <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-sm font-medium text-white">
                        Lead Capture
                      </div>
                    </div>
                    <div className="bg-gray-900/40 border border-blue-400/20 rounded-lg p-4 text-center backdrop-blur-sm">
                      <Building2 className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-sm font-medium text-white">
                        CRM Sync
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-200">
                    Install Chrome Extension
                  </Button>
                </div>
              </div>
            </div>

            {/* AI Workflow Triggers */}
            <div
              className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-400/40 backdrop-blur-md rounded-3xl"
              style={{
                boxShadow:
                  "0 20px 40px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(168, 85, 247, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
              }}
            >
              <div className="p-6">
                <h2 className="flex items-center gap-3 text-purple-400 text-xl font-thin tracking-tight mb-4">
                  <Brain className="w-8 h-8" />
                  AI Workflow Engine
                </h2>
              </div>
              <div className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Intelligent automation that learns from your business
                    patterns and optimizes workflows in real-time.
                  </p>

                  <div className="space-y-3">
                    <div className="bg-gray-900/40 border border-green-400/20 rounded-lg p-3 flex items-center gap-3 backdrop-blur-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white">
                          Lead Response Automation
                        </div>
                        <div className="text-xs text-gray-400">
                          Active • 247 triggers processed
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900/40 border border-blue-400/20 rounded-lg p-3 flex items-center gap-3 backdrop-blur-sm">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white">
                          Deal Stage Progression
                        </div>
                        <div className="text-xs text-gray-400">
                          Active • 156 deals managed
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900/40 border border-purple-400/20 rounded-lg p-3 flex items-center gap-3 backdrop-blur-sm">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white">
                          Follow-up Sequences
                        </div>
                        <div className="text-xs text-gray-400">
                          Active • 94% engagement rate
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium transition-all duration-200">
                    Configure Workflows
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/30">
              <CardContent className="p-6 text-center">
                <Target className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-400">82%</h3>
                <p className="text-sm text-muted-foreground">
                  Automation Success
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-400">247</h3>
                <p className="text-sm text-muted-foreground">Leads Processed</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30">
              <CardContent className="p-6 text-center">
                <Brain className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-purple-400">1.2s</h3>
                <p className="text-sm text-muted-foreground">Response Time</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border-yellow-500/30">
              <CardContent className="p-6 text-center">
                <Building2 className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-yellow-400">47%</h3>
                <p className="text-sm text-muted-foreground">Revenue Growth</p>
              </CardContent>
            </Card>
          </div>

          {/* Integration Hub */}
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Integration Hub
              </CardTitle>
              <p className="text-center text-muted-foreground">
                Connect PartnerTech AI with your existing tools
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-background/50 rounded-lg border border-primary/20">
                  <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">GoHighLevel CRM</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Seamless two-way sync with your CRM pipeline
                  </p>
                  <Badge className="bg-green-500/20 text-green-400">
                    Connected
                  </Badge>
                </div>

                <div className="text-center p-6 bg-background/50 rounded-lg border border-primary/20">
                  <Chrome className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Browser Extension</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    AI-powered data extraction and automation
                  </p>
                  <Badge className="bg-blue-500/20 text-blue-400">
                    Available
                  </Badge>
                </div>

                <div className="text-center p-6 bg-background/50 rounded-lg border border-primary/20">
                  <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">AI Workflows</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Custom automation rules and triggers
                  </p>
                  <Badge className="bg-purple-500/20 text-purple-400">
                    Active
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </WorkspaceLayout>
  );
}
