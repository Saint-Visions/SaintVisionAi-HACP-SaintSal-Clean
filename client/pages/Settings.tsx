import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Settings() {
  const [settings, setSettings] = useState({
    aiModel: "companion",
    voiceEnabled: true,
    notifications: true,
    darkMode: true,
    language: "en",
    timezone: "UTC",
  });

  const handleSave = () => {
    // Save settings logic
    alert("Settings saved successfully!");
  };

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
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/40 relative text-center">
            <p className="text-yellow-400 text-2xl font-medium mb-2">
              Customize Your Divine Experience
            </p>
            <p className="text-yellow-400 text-lg font-medium mb-1">
              Configure your AI assistant and platform preferences
            </p>
            <p className="text-yellow-400 text-xl font-bold">
              Make your GOTTA GUY™ perfect!
            </p>
            {/* Speech bubble tail */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-yellow-400/40"></div>
            </div>
          </div>

          {/* Settings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* AI Preferences */}
            <Card className="elite-card">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  🧠 AI Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Default AI Model
                  </label>
                  <select
                    value={settings.aiModel}
                    onChange={(e) =>
                      setSettings({ ...settings, aiModel: e.target.value })
                    }
                    className="w-full p-3 bg-muted rounded-lg border border-muted-foreground/20 focus:border-primary focus:outline-none"
                  >
                    <option value="companion">Companion</option>
                    <option value="saintsal-4o">SaintSal-4o</option>
                    <option value="dual">Dual AI</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-foreground">
                    Voice Responses
                  </label>
                  <button
                    onClick={() =>
                      setSettings({
                        ...settings,
                        voiceEnabled: !settings.voiceEnabled,
                      })
                    }
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.voiceEnabled ? "bg-primary" : "bg-muted"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full transition-transform ${
                        settings.voiceEnabled
                          ? "translate-x-6"
                          : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Response Style
                  </label>
                  <select className="w-full p-3 bg-muted rounded-lg border border-muted-foreground/20 focus:border-primary focus:outline-none">
                    <option>Professional</option>
                    <option>Casual</option>
                    <option>Technical</option>
                    <option>Creative</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Account Settings */}
            <Card className="elite-card">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  👤 Account Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Display Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Divine User"
                    className="w-full p-3 bg-muted rounded-lg border border-muted-foreground/20 focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Notifications
                  </label>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Receive updates and alerts
                    </span>
                    <button
                      onClick={() =>
                        setSettings({
                          ...settings,
                          notifications: !settings.notifications,
                        })
                      }
                      className={`w-12 h-6 rounded-full transition-colors ${
                        settings.notifications ? "bg-primary" : "bg-muted"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full transition-transform ${
                          settings.notifications
                            ? "translate-x-6"
                            : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Timezone
                  </label>
                  <select
                    value={settings.timezone}
                    onChange={(e) =>
                      setSettings({ ...settings, timezone: e.target.value })
                    }
                    className="w-full p-3 bg-muted rounded-lg border border-muted-foreground/20 focus:border-primary focus:outline-none"
                  >
                    <option value="UTC">UTC</option>
                    <option value="PST">Pacific Time</option>
                    <option value="EST">Eastern Time</option>
                    <option value="CST">Central Time</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Security Settings */}
            <Card className="elite-card">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  🔒 Security & Privacy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  🔑 Change Password
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  🛡️ Two-Factor Authentication
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  📱 Connected Devices
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  📊 Privacy Settings
                </Button>
              </CardContent>
            </Card>

            {/* Subscription */}
            <Card className="elite-card">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  💎 Subscription
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center space-y-2">
                  <Badge className="bg-primary text-primary-foreground">
                    Companion Plan
                  </Badge>
                  <p className="text-muted-foreground text-sm">
                    $27/month • Next billing: Jan 15, 2024
                  </p>
                </div>

                <div className="space-y-2">
                  <Button className="w-full gold-shimmer">
                    💎 Upgrade Plan
                  </Button>
                  <Button variant="outline" className="w-full">
                    📊 Billing History
                  </Button>
                  <Button variant="outline" className="w-full">
                    ❌ Cancel Subscription
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="outline"
              className="h-16 text-lg border-primary/20 hover:bg-primary/10"
            >
              📤 Export Data
            </Button>
            <Button
              variant="outline"
              className="h-16 text-lg border-primary/20 hover:bg-primary/10"
            >
              🔄 Reset Preferences
            </Button>
            <Button
              variant="outline"
              className="h-16 text-lg border-primary/20 hover:bg-primary/10"
            >
              📞 Contact Support
            </Button>
          </div>

          {/* Save Button */}
          <div className="text-center">
            <Button
              size="lg"
              className="gold-shimmer px-12 py-4 text-lg font-bold"
              onClick={handleSave}
            >
              💾 Save All Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
