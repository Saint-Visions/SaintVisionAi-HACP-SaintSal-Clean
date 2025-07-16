import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Sidebar from "@/components/Sidebar";

export default function AdminClients() {
  const [clients] = useState([
    {
      id: 1,
      name: "TechCorp Solutions",
      email: "admin@techcorp.com",
      plan: "Pro Suite",
      status: "Active",
      joinDate: "2024-01-15",
      lastActive: "2 hours ago",
      revenue: "$297",
    },
    {
      id: 2,
      name: "StartupXYZ",
      email: "founder@startupxyz.com",
      plan: "PartnerTech",
      status: "Active",
      joinDate: "2024-01-10",
      lastActive: "1 day ago",
      revenue: "$97",
    },
    {
      id: 3,
      name: "Digital Agency Co",
      email: "contact@digitalagency.com",
      plan: "Companion",
      status: "Trial",
      joinDate: "2024-01-20",
      lastActive: "30 mins ago",
      revenue: "$27",
    },
  ]);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-80 relative overflow-hidden">
        {/* Professional Admin Background */}
        <div
          className="absolute inset-0 parallax"
          style={{
            backgroundImage:
              "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F8166ac2ebf8249b28a7f35bb1df47174?format=webp&width=1920)",
            backgroundSize: "120%",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            transform: "translateZ(0)",
          }}
        />

        {/* Content overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Page Content */}
        <div className="relative z-10 p-8 space-y-8">
          {/* Header */}
          <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/40 relative">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-400 text-2xl font-medium">
                  Admin Command Center
                </p>
                <p className="text-yellow-400 text-lg">
                  Manage your divine client empire
                </p>
              </div>
              <Badge className="bg-red-600 text-white">ADMIN ACCESS</Badge>
            </div>
            {/* Speech bubble tail */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-yellow-400/40"></div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="elite-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">127</div>
                <p className="text-muted-foreground">Total Clients</p>
              </CardContent>
            </Card>
            <Card className="elite-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">
                  $12.4K
                </div>
                <p className="text-muted-foreground">Monthly Revenue</p>
              </CardContent>
            </Card>
            <Card className="elite-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">89%</div>
                <p className="text-muted-foreground">Active Rate</p>
              </CardContent>
            </Card>
            <Card className="elite-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-500 mb-2">
                  23
                </div>
                <p className="text-muted-foreground">New This Month</p>
              </CardContent>
            </Card>
          </div>

          {/* Client Management */}
          <Card className="elite-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl text-primary">
                  Client Management
                </CardTitle>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    📊 Export Data
                  </Button>
                  <Button className="gold-shimmer" size="sm">
                    ➕ Add Client
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {clients.map((client) => (
                  <div
                    key={client.id}
                    className="flex items-center justify-between p-4 bg-muted/20 rounded-lg border border-muted-foreground/10"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold">
                          {client.name[0]}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {client.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {client.email}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <Badge
                          className={
                            client.plan === "Pro Suite"
                              ? "bg-purple-600"
                              : client.plan === "PartnerTech"
                                ? "bg-blue-600"
                                : "bg-primary"
                          }
                        >
                          {client.plan}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">
                          {client.revenue}/month
                        </p>
                      </div>

                      <div className="text-center">
                        <Badge
                          variant={
                            client.status === "Active" ? "default" : "secondary"
                          }
                        >
                          {client.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">
                          {client.lastActive}
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          👁️ View
                        </Button>
                        <Button variant="outline" size="sm">
                          ✏️ Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          📧 Message
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="elite-card">
              <CardHeader>
                <CardTitle className="text-primary">
                  💰 Revenue Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  View detailed revenue breakdowns and forecasts
                </p>
                <Button className="w-full gold-shimmer">View Analytics</Button>
              </CardContent>
            </Card>

            <Card className="elite-card">
              <CardHeader>
                <CardTitle className="text-primary">📊 Usage Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Monitor AI usage and system performance
                </p>
                <Button className="w-full gold-shimmer">View Reports</Button>
              </CardContent>
            </Card>

            <Card className="elite-card">
              <CardHeader>
                <CardTitle className="text-primary">🔧 System Health</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Monitor server status and system alerts
                </p>
                <Button className="w-full gold-shimmer">Check Status</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
