import WorkspaceLayout from "@/components/WorkspaceLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Chrome, Building2, Brain, Users, Target } from "lucide-react";

export default function PartnerTechPage() {
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

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Zap className="w-12 h-12 text-primary" />
              <h1 className="text-4xl font-bold text-primary">
                PartnerTech AI
              </h1>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/40">
                Pro Suite
              </Badge>
            </div>
            <p className="text-xl text-muted-foreground">
              Advanced automation tools for scaling your business
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Chrome Extension */}
            <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-400">
                  <Chrome className="w-8 h-8" />
                  Chrome Extension Pro
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Advanced browser automation with AI-powered workflows and
                    real-time data extraction.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background/50 rounded-lg p-4 text-center">
                      <Brain className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-sm font-medium">AI Extraction</div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4 text-center">
                      <Target className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-sm font-medium">Auto-Fill</div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4 text-center">
                      <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-sm font-medium">Lead Capture</div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4 text-center">
                      <Building2 className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-sm font-medium">CRM Sync</div>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-500 hover:bg-blue-600">
                    Install Chrome Extension
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* AI Workflow Triggers */}
            <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-purple-400">
                  <Brain className="w-8 h-8" />
                  AI Workflow Engine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Intelligent automation that learns from your business
                    patterns and optimizes workflows in real-time.
                  </p>

                  <div className="space-y-3">
                    <div className="bg-background/50 rounded-lg p-3 flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">
                          Lead Response Automation
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Active • 247 triggers processed
                        </div>
                      </div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3 flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">
                          Deal Stage Progression
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Active • 156 deals managed
                        </div>
                      </div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3 flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">
                          Follow-up Sequences
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Active • 94% engagement rate
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-purple-500 hover:bg-purple-600">
                    Configure Workflows
                  </Button>
                </div>
              </CardContent>
            </Card>
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
