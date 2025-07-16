import WorkspaceLayout from "@/components/WorkspaceLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Gift, Share, DollarSign, Copy } from "lucide-react";

export default function ReferralInvitePage() {
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
              <Gift className="w-12 h-12 text-primary" />
              <h1 className="text-4xl font-bold text-primary">
                Referral Program
              </h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Share SAINTSAL™ with friends and earn rewards
            </p>
          </div>

          {/* Referral Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/30">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-400">12</h3>
                <p className="text-sm text-muted-foreground">Referrals Sent</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30">
              <CardContent className="p-6 text-center">
                <Share className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-400">8</h3>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30">
              <CardContent className="p-6 text-center">
                <DollarSign className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-purple-400">$240</h3>
                <p className="text-sm text-muted-foreground">Earned Credits</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border-yellow-500/30">
              <CardContent className="p-6 text-center">
                <Gift className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-yellow-400">67%</h3>
                <p className="text-sm text-muted-foreground">Conversion Rate</p>
              </CardContent>
            </Card>
          </div>

          {/* Referral Link */}
          <Card className="mb-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Your Referral Link
              </CardTitle>
              <p className="text-center text-muted-foreground">
                Share this link with friends to earn $30 for each signup
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3 items-center p-4 bg-background/50 rounded-lg border border-primary/20">
                <input
                  type="text"
                  value="https://saintvisional.com/ref/your-unique-code"
                  readOnly
                  className="flex-1 bg-transparent border-none outline-none text-sm"
                />
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
              </div>
              <div className="flex justify-center gap-4 mt-6">
                <Button variant="outline">Share via Email</Button>
                <Button variant="outline">Share on Social</Button>
                <Button className="bg-primary hover:bg-primary/90">
                  Generate QR Code
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* How It Works */}
          <Card className="mb-8 bg-background/50 border-primary/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                How Referrals Work
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Share className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">1. Share Your Link</h3>
                  <p className="text-sm text-muted-foreground">
                    Send your unique referral link to friends and colleagues
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">2. They Sign Up</h3>
                  <p className="text-sm text-muted-foreground">
                    Your friend creates an account and subscribes to any plan
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">3. Earn Rewards</h3>
                  <p className="text-sm text-muted-foreground">
                    Get $30 credit for each successful referral
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Referrals */}
          <Card className="bg-background/50 border-primary/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Recent Referrals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                  <div>
                    <h4 className="font-medium">john@example.com</h4>
                    <p className="text-sm text-muted-foreground">
                      Signed up 2 days ago
                    </p>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400">
                    $30 Earned
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                  <div>
                    <h4 className="font-medium">sarah@company.com</h4>
                    <p className="text-sm text-muted-foreground">
                      Signed up 1 week ago
                    </p>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400">
                    $30 Earned
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                  <div>
                    <h4 className="font-medium">mike@startup.io</h4>
                    <p className="text-sm text-muted-foreground">
                      Pending signup
                    </p>
                  </div>
                  <Badge className="bg-yellow-500/20 text-yellow-400">
                    Pending
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
