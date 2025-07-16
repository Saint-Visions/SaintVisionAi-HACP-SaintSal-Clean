import WorkspaceLayout from "@/components/WorkspaceLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, User, Crown, Settings, Activity } from "lucide-react";

const mockClients = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    tier: "Enterprise",
    status: "Active",
    lastActive: "2 hours ago",
    usage: "High",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@company.com",
    tier: "PartnerTech Pro",
    status: "Active",
    lastActive: "1 day ago",
    usage: "Medium",
  },
  {
    id: 3,
    name: "Mike Wilson",
    email: "mike@startup.io",
    tier: "Unlimited",
    status: "Pending",
    lastActive: "3 days ago",
    usage: "Low",
  },
];

export default function AdminClientsPage() {
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
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Users className="w-12 h-12 text-primary" />
              <div>
                <h1 className="text-4xl font-bold text-primary">
                  Client Management
                </h1>
                <p className="text-xl text-muted-foreground">
                  Manage and monitor client accounts
                </p>
              </div>
              <Badge className="bg-red-500/20 text-red-400 border-red-500/40 ml-auto">
                Admin Only
              </Badge>
            </div>
          </div>

          {/* Client Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-400">247</h3>
                <p className="text-sm text-muted-foreground">Total Clients</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/30">
              <CardContent className="p-6 text-center">
                <Activity className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-400">234</h3>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30">
              <CardContent className="p-6 text-center">
                <Crown className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-purple-400">47</h3>
                <p className="text-sm text-muted-foreground">
                  Enterprise Clients
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border-yellow-500/30">
              <CardContent className="p-6 text-center">
                <Settings className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-yellow-400">13</h3>
                <p className="text-sm text-muted-foreground">Pending Reviews</p>
              </CardContent>
            </Card>
          </div>

          {/* Client Table */}
          <Card className="bg-background/50 border-primary/30 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">Client Directory</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Export Data
                  </Button>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Add Client
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockClients.map((client) => (
                  <Card
                    key={client.id}
                    className="bg-background/50 border-muted/30 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{client.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {client.email}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <Badge
                            className={
                              client.tier === "Enterprise"
                                ? "bg-purple-500/20 text-purple-400"
                                : client.tier === "PartnerTech Pro"
                                  ? "bg-blue-500/20 text-blue-400"
                                  : "bg-green-500/20 text-green-400"
                            }
                          >
                            {client.tier}
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">
                            Subscription
                          </p>
                        </div>

                        <div className="text-center">
                          <Badge
                            className={
                              client.status === "Active"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-yellow-500/20 text-yellow-400"
                            }
                          >
                            {client.status}
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">
                            Status
                          </p>
                        </div>

                        <div className="text-center">
                          <div className="text-sm font-medium">
                            {client.lastActive}
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Last Active
                          </p>
                        </div>

                        <div className="text-center">
                          <Badge
                            className={
                              client.usage === "High"
                                ? "bg-red-500/20 text-red-400"
                                : client.usage === "Medium"
                                  ? "bg-yellow-500/20 text-yellow-400"
                                  : "bg-green-500/20 text-green-400"
                            }
                          >
                            {client.usage}
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">
                            Usage
                          </p>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Showing 3 of 247 clients
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </WorkspaceLayout>
  );
}
