import WorkspaceLayout from "@/components/WorkspaceLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, TrendingUp, Activity } from "lucide-react";

export default function CRMPage() {
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
              <Building2 className="w-12 h-12 text-primary" />
              <h1 className="text-4xl font-bold text-primary">
                CRM Integration
              </h1>
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/40">
                Pro Feature
              </Badge>
            </div>
            <p className="text-xl text-muted-foreground">
              Advanced customer relationship management with AI automation
            </p>
          </div>

          {/* CRM Dashboard */}
          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-400">247</h3>
                <p className="text-sm text-muted-foreground">Total Leads</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/30">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-400">82%</h3>
                <p className="text-sm text-muted-foreground">Conversion Rate</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30">
              <CardContent className="p-6 text-center">
                <Activity className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-purple-400">156</h3>
                <p className="text-sm text-muted-foreground">Active Deals</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border-yellow-500/30">
              <CardContent className="p-6 text-center">
                <Building2 className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-yellow-400">$47K</h3>
                <p className="text-sm text-muted-foreground">Monthly Revenue</p>
              </CardContent>
            </Card>
          </div>

          {/* GoHighLevel Integration */}
          <Card className="mb-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                GoHighLevel Integration
              </CardTitle>
              <p className="text-center text-muted-foreground">
                Seamless integration with your existing CRM workflow
              </p>
            </CardHeader>
            <CardContent>
              <div
                className="w-full h-96 rounded-lg border border-primary/20 bg-background/50 flex items-center justify-center"
                style={{ minHeight: "400px" }}
              >
                <div className="text-center">
                  <Building2 className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    CRM Dashboard Embedded
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Your GoHighLevel CRM interface will be embedded here
                  </p>
                  <Button className="bg-primary hover:bg-primary/90">
                    Configure Integration
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Automation Tools */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-background/50 border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Activity className="w-6 h-6 text-primary" />
                  AI Workflow Triggers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <h4 className="font-semibold text-green-400 mb-2">
                      Lead Follow-up
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Automated AI responses to new leads within 60 seconds
                    </p>
                  </div>
                  <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                    <h4 className="font-semibold text-blue-400 mb-2">
                      Deal Progression
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Smart deal stage automation based on client interactions
                    </p>
                  </div>
                  <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                    <h4 className="font-semibold text-purple-400 mb-2">
                      Client Nurturing
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Personalized AI communication sequences
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  Performance Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                    <span className="text-sm">Response Rate</span>
                    <span className="font-bold text-green-400">94%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                    <span className="text-sm">Average Response Time</span>
                    <span className="font-bold text-blue-400">1.2 min</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                    <span className="text-sm">AI Automation Success</span>
                    <span className="font-bold text-purple-400">87%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                    <span className="text-sm">Lead Quality Score</span>
                    <span className="font-bold text-primary">8.9/10</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </WorkspaceLayout>
  );
}
