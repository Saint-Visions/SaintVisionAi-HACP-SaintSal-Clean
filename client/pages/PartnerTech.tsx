import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PartnerTech() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Beautiful SAINTSAL Entrance Background */}
      <div
        className="absolute inset-0 parallax"
        style={{
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fe0bfd59dd0ee47e5859b1510493a0cfd?format=webp&width=1920)",
          backgroundSize: "120%",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          transform: "translateZ(0)",
        }}
      />

      {/* Content overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen p-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/40 relative text-center">
            <Badge className="mb-4 bg-purple-600 text-white">$97+ TIER</Badge>
            <p className="text-yellow-400 text-2xl font-medium mb-2">
              Welcome to PartnerTech CRM Suite
            </p>
            <p className="text-yellow-400 text-lg font-medium mb-1">
              Professional tools for divine business management
            </p>
            <p className="text-yellow-400 text-xl font-bold">
              Your GOTTA GUY™ for enterprise success!
            </p>
            {/* Speech bubble tail */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-yellow-400/40"></div>
            </div>
          </div>

          {/* CRM Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="elite-card">
              <CardHeader>
                <div className="text-4xl mb-2">📊</div>
                <CardTitle className="text-primary">
                  Advanced Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Deep insights into your business performance with real-time
                  dashboards and divine intelligence.
                </p>
                <Button className="w-full gold-shimmer">View Analytics</Button>
              </CardContent>
            </Card>

            <Card className="elite-card">
              <CardHeader>
                <div className="text-4xl mb-2">🤝</div>
                <CardTitle className="text-primary">
                  Client Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive CRM with GoHighLevel integration for divine
                  client relationships.
                </p>
                <Button className="w-full gold-shimmer">Manage Clients</Button>
              </CardContent>
            </Card>

            <Card className="elite-card">
              <CardHeader>
                <div className="text-4xl mb-2">🔗</div>
                <CardTitle className="text-primary">API Integrations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Connect with 500+ tools and platforms for seamless workflow
                  automation.
                </p>
                <Button className="w-full gold-shimmer">
                  Setup Integrations
                </Button>
              </CardContent>
            </Card>

            <Card className="elite-card">
              <CardHeader>
                <div className="text-4xl mb-2">📈</div>
                <CardTitle className="text-primary">Revenue Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Monitor revenue streams, profit margins, and growth metrics
                  with divine precision.
                </p>
                <Button className="w-full gold-shimmer">Track Revenue</Button>
              </CardContent>
            </Card>

            <Card className="elite-card">
              <CardHeader>
                <div className="text-4xl mb-2">🎯</div>
                <CardTitle className="text-primary">Lead Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  AI-powered lead qualification and nurturing with automated
                  follow-up sequences.
                </p>
                <Button className="w-full gold-shimmer">Generate Leads</Button>
              </CardContent>
            </Card>

            <Card className="elite-card">
              <CardHeader>
                <div className="text-4xl mb-2">👥</div>
                <CardTitle className="text-primary">
                  Team Collaboration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Divine team management with role-based access and real-time
                  collaboration tools.
                </p>
                <Button className="w-full gold-shimmer">Manage Team</Button>
              </CardContent>
            </Card>
          </div>

          {/* GoHighLevel Integration */}
          <Card className="elite-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">
                GoHighLevel Integration
              </CardTitle>
              <p className="text-muted-foreground">
                Seamlessly connected to your GHL account
              </p>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="flex justify-center items-center gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-2">🔗</div>
                  <p className="text-sm text-muted-foreground">
                    Connected to GHL
                  </p>
                </div>
                <div className="text-primary text-2xl">⇄</div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🏛️</div>
                  <p className="text-sm text-muted-foreground">
                    SAINTSAL™ CRM
                  </p>
                </div>
              </div>
              <Button size="lg" className="gold-shimmer">
                Configure GHL Integration
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="outline"
              className="h-16 text-lg border-primary/20 hover:bg-primary/10"
            >
              📞 Schedule Calls
            </Button>
            <Button
              variant="outline"
              className="h-16 text-lg border-primary/20 hover:bg-primary/10"
            >
              📧 Email Campaigns
            </Button>
            <Button
              variant="outline"
              className="h-16 text-lg border-primary/20 hover:bg-primary/10"
            >
              📊 Generate Reports
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
