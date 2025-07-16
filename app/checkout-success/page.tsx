import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Crown, ArrowRight } from "lucide-react";

export default function CheckoutSuccessPage() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage:
          "url(https://api.builder.io/api/v1/image/assets/TEMP/48bf7ae07524f3ab5cd7dbd41650b41a12d29df9?width=1920)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 py-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Success Header */}
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-400" />
            </div>
            <h1 className="text-5xl font-bold text-primary mb-4">
              Welcome to SAINTSAL™!
            </h1>
            <p className="text-xl text-gray-300">
              Your payment was successful and your account is now active
            </p>
          </div>

          {/* Success Details */}
          <Card className="mb-12 bg-gradient-to-r from-green-500/10 to-green-600/10 border-green-500/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-400">
                    Payment Confirmed
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Plan:</span>
                      <span className="font-medium">PartnerTech Pro</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Amount:</span>
                      <span className="font-medium">$97.00/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Next Billing:
                      </span>
                      <span className="font-medium">February 16, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      <span className="font-medium text-green-400">Active</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    What's Next?
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Complete your workspace setup</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Configure your AI preferences</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Install the Chrome extension</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Start using advanced features</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-background/50 border-primary/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Dashboard</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Access your AI command center
                </p>
                <Link href="/dashboard">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Go to Dashboard
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-primary/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-semibold mb-2">Setup Guide</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete your workspace configuration
                </p>
                <Link href="/setup">
                  <Button variant="outline" className="w-full">
                    Start Setup
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-primary/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-semibold mb-2">AI Console</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Start chatting with your AI
                </p>
                <Link href="/console">
                  <Button variant="outline" className="w-full">
                    Launch Console
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Support */}
          <Card className="bg-background/50 border-primary/30 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold mb-4">
                Need Help Getting Started?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our support team is here to help you make the most of your
                SAINTSAL��� experience.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline">Contact Support</Button>
                <Link href="/help">
                  <Button variant="outline">Help Center</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
