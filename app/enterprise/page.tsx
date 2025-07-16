import WorkspaceLayout from "@/components/WorkspaceLayout";
import { Button } from "@/components/ui/button";
import {
  Crown,
  Shield,
  Users,
  Settings,
  BarChart3,
  Lock,
  Zap,
  Building2,
} from "lucide-react";

export default function EnterprisePage() {
  return (
    <WorkspaceLayout>
      <div className="min-h-screen relative overflow-hidden charcoal-depth">
                {/* Enterprise Business Background */}
        <div
          className="absolute inset-0"
          style={{
            fontFamily: "Gotham, 'Gotham Medium', 'Gotham Bold', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F67fa88f04d284db78a9ad420de29a1e7')`,
            backgroundAttachment: "fixed",
            backgroundSize: "120%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Business Atmospheric Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-gray-900/60 to-slate-900/70 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-slate-800/40 z-1" />

        {/* Professional Golden Particles */}
        <div className="absolute inset-0 z-2">
          <div className="absolute top-1/6 left-1/5 w-1.5 h-1.5 bg-yellow-400/50 rounded-full animate-pulse"
               style={{
                 boxShadow: '0 0 18px rgba(251, 191, 36, 0.3), 0 0 35px rgba(251, 191, 36, 0.2), inset 0 0 8px rgba(255, 255, 255, 0.3)',
                 filter: 'blur(0.3px)'
               }} />
          <div className="absolute top-1/4 right-1/6 w-1 h-1 bg-blue-400/60 rounded-full animate-pulse"
               style={{
                 boxShadow: '0 0 12px rgba(59, 130, 246, 0.4), 0 0 25px rgba(59, 130, 246, 0.3)',
                 filter: 'blur(0.2px)',
                 animationDelay: '3s'
               }} />
          <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-purple-400/70 rounded-full animate-pulse"
               style={{
                 boxShadow: '0 0 15px rgba(168, 85, 247, 0.4), 0 0 30px rgba(168, 85, 247, 0.2)',
                 filter: 'blur(0.3px)',
                 animationDelay: '1.5s'
               }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
                            <Crown className="w-12 h-12 text-yellow-400" />
              <h1 className="text-4xl font-thin tracking-tight text-yellow-400">
                Enterprise Command Center
              </h1>
              <div className="bg-purple-500/20 text-purple-400 border border-purple-500/40 px-3 py-1 rounded-full text-sm font-medium">
                Elite Access
              </div>
            </div>
                        <p className="text-xl text-gray-200 font-light">
              Advanced enterprise controls and automation at scale
            </p>
          </div>

          {/* Enterprise Dashboard */}
          <div className="grid lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-400/40 backdrop-blur-md rounded-2xl"
                 style={{
                   boxShadow: '0 15px 35px -10px rgba(0, 0, 0, 0.6), 0 0 30px rgba(168, 85, 247, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                 }}>
              <div className="p-6 text-center">
                <Users className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-light text-purple-400">156</h3>
                <p className="text-sm text-gray-300">Team Members</p>
              </div>
            </div>

                        <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-400/40 backdrop-blur-md rounded-2xl"
                 style={{
                   boxShadow: '0 15px 35px -10px rgba(0, 0, 0, 0.6), 0 0 30px rgba(34, 197, 94, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                 }}>
              <div className="p-6 text-center">
                <BarChart3 className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-light text-green-400">97%</h3>
                <p className="text-sm text-gray-300">System Uptime</p>
              </div>
            </div>

                        <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-400/40 backdrop-blur-md rounded-2xl"
                 style={{
                   boxShadow: '0 15px 35px -10px rgba(0, 0, 0, 0.6), 0 0 30px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                 }}>
              <div className="p-6 text-center">
                <Shield className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-light text-blue-400">100%</h3>
                <p className="text-sm text-gray-300">Security Score</p>
              </div>
            </div>

                        <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-400/40 backdrop-blur-md rounded-2xl"
                 style={{
                   boxShadow: '0 15px 35px -10px rgba(0, 0, 0, 0.6), 0 0 30px rgba(251, 191, 36, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                 }}>
              <div className="p-6 text-center">
                <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-light text-yellow-400">2.4M</h3>
                <p className="text-sm text-gray-300">API Calls/Month</p>
              </div>
            </div>
          </div>

          {/* Enterprise Features */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Team Management */}
                        <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-400/40 backdrop-blur-md rounded-3xl"
                 style={{
                   boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                 }}>
              <div className="p-6">
                <h2 className="flex items-center gap-3 text-blue-400 text-xl font-thin tracking-tight mb-4">
                  <Users className="w-8 h-8" />
                  Team Management
                </h2>
              </div>
              <div className="px-6 pb-6">
                <div className="space-y-4">
                                    <p className="text-gray-300">
                    Advanced user management with role-based access controls and
                    enterprise-grade security.
                  </p>

                  <div className="space-y-3">
                                        <div className="bg-gray-900/40 border border-blue-400/20 rounded-lg p-3 flex items-center justify-between backdrop-blur-sm">
                      <div>
                        <div className="text-sm font-medium text-white">
                          Administrators
                        </div>
                        <div className="text-xs text-gray-400">
                          Full system access
                        </div>
                      </div>
                      <div className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-sm font-medium">3</div>
                    </div>
                                        <div className="bg-gray-900/40 border border-blue-400/20 rounded-lg p-3 flex items-center justify-between backdrop-blur-sm">
                      <div>
                        <div className="text-sm font-medium text-white">Managers</div>
                        <div className="text-xs text-gray-400">
                          Team oversight
                        </div>
                      </div>
                      <div className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-sm font-medium">
                        12
                      </div>
                    </div>
                                        <div className="bg-gray-900/40 border border-blue-400/20 rounded-lg p-3 flex items-center justify-between backdrop-blur-sm">
                      <div>
                        <div className="text-sm font-medium text-white">Users</div>
                        <div className="text-xs text-gray-400">
                          Standard access
                        </div>
                      </div>
                      <div className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-sm font-medium">
                        141
                      </div>
                    </div>
                  </div>

                                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-200">
                    Manage Team
                  </Button>
                </div>
              </div>
            </div>

            {/* Security & Compliance */}
                        <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-400/40 backdrop-blur-md rounded-3xl"
                 style={{
                   boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(34, 197, 94, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                 }}>
              <div className="p-6">
                <h2 className="flex items-center gap-3 text-green-400 text-xl font-thin tracking-tight mb-4">
                  <Shield className="w-8 h-8" />
                  Security & Compliance
                </h2>
              </div>
              <div className="px-6 pb-6">
                <div className="space-y-4">
                                    <p className="text-gray-300">
                    Enterprise-grade security with SOC 2 compliance, advanced
                    encryption, and comprehensive audit trails.
                  </p>

                  <div className="space-y-3">
                                        <div className="bg-gray-900/40 border border-green-400/20 rounded-lg p-3 flex items-center justify-between backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <Lock className="w-4 h-4 text-green-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            AES-256 Encryption
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm font-medium">
                        Active
                      </div>
                    </div>
                                        <div className="bg-gray-900/40 border border-green-400/20 rounded-lg p-3 flex items-center justify-between backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <Shield className="w-4 h-4 text-green-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            SOC 2 Compliance
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm font-medium">
                        Certified
                      </div>
                    </div>
                                        <div className="bg-gray-900/40 border border-green-400/20 rounded-lg p-3 flex items-center justify-between backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <BarChart3 className="w-4 h-4 text-green-400" />
                        <div>
                          <div className="text-sm font-medium text-white">Audit Logs</div>
                        </div>
                      </div>
                      <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm font-medium">
                        Enabled
                      </div>
                    </div>
                  </div>

                                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium transition-all duration-200">
                    Security Settings
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Analytics */}
                    <div className="mb-8 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-400/30 backdrop-blur-md rounded-3xl"
               style={{
                 boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(168, 85, 247, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
               }}>
            <div className="p-8">
              <h2 className="text-center text-2xl text-purple-400 font-thin tracking-tight mb-4">
                Enterprise Analytics Dashboard
              </h2>
              <p className="text-center text-gray-300 mb-8">
                Real-time insights across your entire organization
              </p>
            </div>
            <div className="px-8 pb-8">
              <div
                                className="w-full h-64 rounded-lg border border-purple-400/20 bg-gray-900/40 backdrop-blur-sm flex items-center justify-center"
                style={{ minHeight: "300px" }}
              >
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                                    <h3 className="text-xl font-medium mb-2 text-white">
                    Advanced Analytics
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Comprehensive dashboards with real-time metrics, usage
                    analytics, and performance insights
                  </p>
                  <Button className="bg-purple-500 hover:bg-purple-600 text-white font-medium transition-all duration-200">
                    View Full Analytics
                  </Button>
                </div>
              </div>
                        </div>
          </div>

          {/* Enterprise Tools */}
          <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gray-900/40 border border-yellow-400/30 backdrop-blur-md rounded-2xl"
                 style={{
                   boxShadow: '0 15px 35px -10px rgba(0, 0, 0, 0.6), 0 0 30px rgba(251, 191, 36, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                 }}>
                            <div className="p-6">
                <h3 className="flex items-center gap-3 text-xl font-thin tracking-tight text-yellow-400 mb-4">
                  <Settings className="w-6 h-6" />
                  System Configuration
                </h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    Global Settings
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    API Management
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Integration Hub
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Backup & Recovery
                  </Button>
                </div>
                            </div>
            </div>

                        <div className="bg-gray-900/40 border border-yellow-400/30 backdrop-blur-md rounded-2xl"
                 style={{
                   boxShadow: '0 15px 35px -10px rgba(0, 0, 0, 0.6), 0 0 30px rgba(251, 191, 36, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                 }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-primary" />
                  White-label Options
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    Custom Branding
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Domain Setup
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Client Portals
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Reseller Tools
                  </Button>
                </div>
                            </div>
            </div>

                        <div className="bg-gray-900/40 border border-yellow-400/30 backdrop-blur-md rounded-2xl"
                 style={{
                   boxShadow: '0 15px 35px -10px rgba(0, 0, 0, 0.6), 0 0 30px rgba(251, 191, 36, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                 }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Crown className="w-6 h-6 text-primary" />
                  Enterprise Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      24/7
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Priority Support
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full">
                      Contact Support
                    </Button>
                    <Button variant="outline" className="w-full">
                      Schedule Call
                    </Button>
                  </div>
                </div>
                            </div>
            </div>
          </div>
        </div>
      </div>
    </WorkspaceLayout>
  );
}