import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ReferralInvite() {
  const [inviteLink] = useState(
    "https://saintvisional.com/signup?ref=DIVINE123",
  );
  const [referrals] = useState([
    {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      joinDate: "2024-01-10",
      status: "Active",
      plan: "PartnerTech",
      commission: "$19.40",
    },
    {
      name: "Mike Chen",
      email: "mike@startup.io",
      joinDate: "2024-01-15",
      status: "Active",
      plan: "Companion",
      commission: "$5.40",
    },
    {
      name: "Lisa Rodriguez",
      email: "lisa@agency.co",
      joinDate: "2024-01-18",
      status: "Pending",
      plan: "Pro Suite",
      commission: "$0.00",
    },
  ]);

  const copyInviteLink = () => {
    navigator.clipboard.writeText(inviteLink);
    alert("Invite link copied to clipboard!");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Celebration Background */}
      <div
        className="absolute inset-0 parallax"
        style={{
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F390b1054c3ac4cf1829920118fd60db0?format=webp&width=1920)",
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
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/40 relative text-center">
            <div className="text-6xl mb-4">🤝</div>
            <p className="text-yellow-400 text-2xl font-medium mb-2">
              Spread the Divine Word
            </p>
            <p className="text-yellow-400 text-lg font-medium mb-1">
              Invite others to discover their own...
            </p>
            <p className="text-yellow-400 text-3xl font-bold">GOTTA GUY™!</p>
            {/* Speech bubble tail */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-yellow-400/40"></div>
            </div>
          </div>

          {/* Referral Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="elite-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">12</div>
                <p className="text-muted-foreground">Total Referrals</p>
              </CardContent>
            </Card>
            <Card className="elite-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">
                  $247.80
                </div>
                <p className="text-muted-foreground">Total Earned</p>
              </CardContent>
            </Card>
            <Card className="elite-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">
                  $52.60
                </div>
                <p className="text-muted-foreground">This Month</p>
              </CardContent>
            </Card>
            <Card className="elite-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-500 mb-2">
                  20%
                </div>
                <p className="text-muted-foreground">Commission Rate</p>
              </CardContent>
            </Card>
          </div>

          {/* Invite Section */}
          <Card className="elite-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">
                Your Divine Referral Link
              </CardTitle>
              <p className="text-muted-foreground">
                Share this link to earn 20% commission on all referrals
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={inviteLink}
                  readOnly
                  className="flex-1 p-4 bg-muted rounded-lg border border-muted-foreground/20 font-mono text-sm"
                />
                <Button className="gold-shimmer px-6" onClick={copyInviteLink}>
                  📋 Copy Link
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button
                  variant="outline"
                  className="h-16 border-primary/20 hover:bg-primary/10"
                >
                  📧 Email Invite
                </Button>
                <Button
                  variant="outline"
                  className="h-16 border-primary/20 hover:bg-primary/10"
                >
                  📱 Social Share
                </Button>
                <Button
                  variant="outline"
                  className="h-16 border-primary/20 hover:bg-primary/10"
                >
                  💬 WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Commission Structure */}
          <Card className="elite-card">
            <CardHeader>
              <CardTitle className="text-primary">
                💰 Commission Structure
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="text-4xl">🥉</div>
                <h3 className="font-semibold text-foreground">Companion</h3>
                <p className="text-muted-foreground">$27/month</p>
                <Badge className="bg-primary">$5.40/month</Badge>
                <p className="text-xs text-muted-foreground">20% commission</p>
              </div>

              <div className="text-center space-y-3">
                <div className="text-4xl">🥈</div>
                <h3 className="font-semibold text-foreground">PartnerTech</h3>
                <p className="text-muted-foreground">$97/month</p>
                <Badge className="bg-blue-600">$19.40/month</Badge>
                <p className="text-xs text-muted-foreground">20% commission</p>
              </div>

              <div className="text-center space-y-3">
                <div className="text-4xl">🥇</div>
                <h3 className="font-semibold text-foreground">Pro Suite</h3>
                <p className="text-muted-foreground">$297/month</p>
                <Badge className="bg-purple-600">$59.40/month</Badge>
                <p className="text-xs text-muted-foreground">20% commission</p>
              </div>
            </CardContent>
          </Card>

          {/* Your Referrals */}
          <Card className="elite-card">
            <CardHeader>
              <CardTitle className="text-primary">
                Your Divine Network
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {referrals.map((referral, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/20 rounded-lg border border-muted-foreground/10"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold">
                          {referral.name[0]}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {referral.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {referral.email}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <Badge
                          className={
                            referral.plan === "Pro Suite"
                              ? "bg-purple-600"
                              : referral.plan === "PartnerTech"
                                ? "bg-blue-600"
                                : "bg-primary"
                          }
                        >
                          {referral.plan}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">
                          Joined {referral.joinDate}
                        </p>
                      </div>

                      <div className="text-center">
                        <Badge
                          variant={
                            referral.status === "Active"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {referral.status}
                        </Badge>
                        <p className="text-xs text-foreground font-semibold mt-1">
                          {referral.commission}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Referral Tips */}
          <Card className="elite-card">
            <CardHeader>
              <CardTitle className="text-primary">
                🎯 Maximize Your Divine Earnings
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">
                  Best Referral Targets:
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Business owners and entrepreneurs
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Digital agencies and consultants
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Freelancers and solopreneurs
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Tech-savvy professionals
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">
                  Referral Benefits:
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    Lifetime 20% commission
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    Monthly payouts via Stripe
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    Real-time tracking dashboard
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    No minimum payout threshold
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
