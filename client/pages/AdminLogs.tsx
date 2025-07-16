import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Sidebar from "@/components/Sidebar";

export default function AdminLogs() {
  const [logs] = useState([
    {
      id: 1,
      timestamp: "2024-01-15 14:32:15",
      type: "API",
      level: "INFO",
      message: "OpenAI API request completed successfully",
      user: "client@techcorp.com",
      duration: "1.2s",
    },
    {
      id: 2,
      timestamp: "2024-01-15 14:31:08",
      type: "WEBHOOK",
      level: "SUCCESS",
      message: "Stripe webhook processed: subscription.created",
      user: "system",
      duration: "0.3s",
    },
    {
      id: 3,
      timestamp: "2024-01-15 14:29:42",
      type: "CHAT",
      level: "INFO",
      message: "User initiated dual AI conversation",
      user: "founder@startupxyz.com",
      duration: "2.1s",
    },
    {
      id: 4,
      timestamp: "2024-01-15 14:28:15",
      type: "AUTH",
      level: "WARNING",
      message: "Failed login attempt detected",
      user: "unknown@domain.com",
      duration: "0.1s",
    },
    {
      id: 5,
      timestamp: "2024-01-15 14:27:33",
      type: "ERROR",
      level: "ERROR",
      message: "Azure OpenAI rate limit exceeded",
      user: "heavy-user@example.com",
      duration: "0.5s",
    },
  ]);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "ERROR":
        return "bg-red-600";
      case "WARNING":
        return "bg-yellow-600";
      case "SUCCESS":
        return "bg-green-600";
      default:
        return "bg-blue-600";
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-80 relative overflow-hidden">
        {/* Technical Background */}
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
        <div className="absolute inset-0 bg-black/25" />

        {/* Page Content */}
        <div className="relative z-10 p-8 space-y-8">
          {/* Header */}
          <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/40 relative">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-400 text-2xl font-medium">
                  System Activity Logs
                </p>
                <p className="text-yellow-400 text-lg">
                  Monitor divine system operations
                </p>
              </div>
              <Badge className="bg-green-600 text-white">LIVE MONITORING</Badge>
            </div>
            {/* Speech bubble tail */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-yellow-400/40"></div>
            </div>
          </div>

          {/* System Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="elite-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">
                  99.9%
                </div>
                <p className="text-muted-foreground">Uptime</p>
              </CardContent>
            </Card>
            <Card className="elite-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">
                  1,247
                </div>
                <p className="text-muted-foreground">API Calls/hour</p>
              </CardContent>
            </Card>
            <Card className="elite-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-2">3</div>
                <p className="text-muted-foreground">Active Warnings</p>
              </CardContent>
            </Card>
            <Card className="elite-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-500 mb-2">
                  47ms
                </div>
                <p className="text-muted-foreground">Avg Response</p>
              </CardContent>
            </Card>
          </div>

          {/* Log Filters */}
          <Card className="elite-card">
            <CardHeader>
              <CardTitle className="text-primary">Filter Logs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <select className="p-3 bg-muted rounded-lg border border-muted-foreground/20 focus:border-primary focus:outline-none">
                  <option>All Types</option>
                  <option>API</option>
                  <option>WEBHOOK</option>
                  <option>CHAT</option>
                  <option>AUTH</option>
                  <option>ERROR</option>
                </select>
                <select className="p-3 bg-muted rounded-lg border border-muted-foreground/20 focus:border-primary focus:outline-none">
                  <option>All Levels</option>
                  <option>INFO</option>
                  <option>SUCCESS</option>
                  <option>WARNING</option>
                  <option>ERROR</option>
                </select>
                <input
                  type="datetime-local"
                  className="p-3 bg-muted rounded-lg border border-muted-foreground/20 focus:border-primary focus:outline-none"
                />
                <Button className="gold-shimmer">🔍 Apply Filters</Button>
              </div>
            </CardContent>
          </Card>

          {/* Live Logs */}
          <Card className="elite-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-primary flex items-center gap-2">
                  📊 Live Activity Stream
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </CardTitle>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    📥 Export Logs
                  </Button>
                  <Button variant="outline" size="sm">
                    ⏸️ Pause
                  </Button>
                  <Button className="gold-shimmer" size="sm">
                    🔄 Auto-Refresh
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {logs.map((log) => (
                  <div
                    key={log.id}
                    className="flex items-center justify-between p-4 bg-muted/10 rounded-lg border border-muted-foreground/10 hover:bg-muted/20 transition-colors"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <Badge
                        className={`${getLevelColor(log.level)} text-white`}
                      >
                        {log.level}
                      </Badge>
                      <Badge variant="outline">{log.type}</Badge>
                      <div className="flex-1">
                        <p className="text-foreground font-mono text-sm">
                          {log.message}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                          <span>⏰ {log.timestamp}</span>
                          <span>👤 {log.user}</span>
                          <span>⚡ {log.duration}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      🔍 Details
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="elite-card">
              <CardHeader>
                <CardTitle className="text-primary">🚨 Alert Rules</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Configure system alerts and notifications
                </p>
                <Button className="w-full gold-shimmer">Manage Alerts</Button>
              </CardContent>
            </Card>

            <Card className="elite-card">
              <CardHeader>
                <CardTitle className="text-primary">📈 Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  View detailed system performance metrics
                </p>
                <Button className="w-full gold-shimmer">View Analytics</Button>
              </CardContent>
            </Card>

            <Card className="elite-card">
              <CardHeader>
                <CardTitle className="text-primary">🔧 Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  System maintenance and configuration tools
                </p>
                <Button className="w-full gold-shimmer">Maintenance</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
