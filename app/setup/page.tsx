"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Settings,
  Brain,
  Key,
  Workspace,
  Chrome,
  Smartphone,
  ArrowRight,
  User,
  Shield,
  Zap,
  Eye,
  EyeOff,
} from "lucide-react";

const setupSteps = [
  {
    icon: User,
    title: "Personal Information",
    description: "Complete your divine profile",
    status: "pending",
    items: [
      "Workspace Name",
      "Professional Title",
      "Industry/Focus Area",
      "AI Experience Level",
    ],
  },
  {
    icon: Key,
    title: "AI Configuration",
    description: "Configure your AI model preferences",
    status: "pending",
    items: [
      "OpenAI API Key (Optional)",
      "Azure Cognitive Preferences",
      "Response Style Settings",
      "Default AI Behavior",
    ],
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Set your security preferences",
    status: "pending",
    items: [
      "Data Privacy Settings",
      "Security Preferences",
      "Notification Settings",
      "Faith-Aligned Options",
    ],
  },
  {
    icon: Chrome,
    title: "Extensions & Mobile",
    description: "Optional platform integrations",
    status: "optional",
    items: [
      "Chrome Extension Install",
      "Mobile PWA Setup",
      "Browser Sync Settings",
      "Hotkey Configuration",
    ],
  },
];

export default function SetupPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    workspaceName: "",
    title: "",
    industry: "",
    experience: "",
    apiKey: "",
    responseStyle: "professional",
    privacy: "secure",
    notifications: true,
  });
  const [showApiKey, setShowApiKey] = useState(false);

  const handleNext = () => {
    if (currentStep < setupSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    // Mark user as onboarded and redirect to dashboard
    console.log("Setup complete!", formData);
    window.location.href = "/dashboard";
  };

  const progress = Math.round(((currentStep + 1) / setupSteps.length) * 100);

  return (
    <div
      className="min-h-screen relative parallax parallax-bg"
      style={{
        fontFamily:
          "Gotham, 'Gotham Medium', 'Gotham Bold', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fff0733af4a2e4a0b8c3ec5843ef9720e)",
        backgroundSize: "120%",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Atmospheric Divine Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 via-gray-900/60 to-gray-900/70 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-gray-800/40 z-1" />

      {/* 3D Golden Particles */}
      <div className="absolute inset-0 z-2">
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400/60 rounded-full animate-pulse"
          style={{
            boxShadow:
              "0 0 20px rgba(251, 191, 36, 0.4), 0 0 40px rgba(251, 191, 36, 0.2), inset 0 0 10px rgba(255, 255, 255, 0.3)",
            filter: "blur(0.5px)",
          }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-300/80 rounded-full animate-pulse"
          style={{
            boxShadow:
              "0 0 15px rgba(253, 224, 71, 0.5), 0 0 30px rgba(253, 224, 71, 0.3)",
            filter: "blur(0.3px)",
            animationDelay: "1.5s",
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-amber-400/70 rounded-full animate-pulse"
          style={{
            boxShadow:
              "0 0 18px rgba(245, 158, 11, 0.4), 0 0 35px rgba(245, 158, 11, 0.2)",
            filter: "blur(0.4px)",
            animationDelay: "3s",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        {/* Setup Container */}
        <div
          className="w-full max-w-4xl bg-gray-900/40 backdrop-blur-md border border-yellow-400/30 rounded-3xl shadow-2xl"
          style={{
            boxShadow:
              "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 60px rgba(251, 191, 36, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="text-center p-8 pb-6">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fbeb96c992e5a49f4bbd354e8386d6153"
                  alt="SAINTSAL™ Logo"
                  className="w-20 h-20"
                />
              </div>
            </div>

            {/* Branding */}
            <div className="mb-6">
              <div className="text-yellow-400 text-sm font-thin tracking-[0.3em] mb-2">
                SAINTSAL™
              </div>
              <div className="text-yellow-300 text-lg font-thin tracking-wide">
                Cookin' Knowledge
              </div>
            </div>

            <h1 className="text-4xl font-thin tracking-tight mb-4">
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                Welcome to Your Divine Sanctuary
              </span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Let's configure your AI workspace for optimal divine performance.
              This will only take a few minutes.
            </p>

            {/* Progress */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground">
                  Setup Progress
                </span>
                <span className="text-sm font-medium text-primary">
                  {progress}% Complete
                </span>
              </div>
              <div className="w-full bg-muted/30 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-primary to-primary/80 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          <div className="p-8 pt-0 space-y-8">
            {/* Step Indicators */}
            <div className="flex justify-center">
              <div className="flex items-center gap-4">
                {setupSteps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                        index <= currentStep
                          ? "bg-primary/20 border-primary text-primary"
                          : "bg-muted/20 border-muted text-muted-foreground"
                      }`}
                    >
                      {index < currentStep ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <step.icon className="w-6 h-6" />
                      )}
                    </div>
                    {index < setupSteps.length - 1 && (
                      <div
                        className={`w-16 h-0.5 mx-2 transition-all ${
                          index < currentStep ? "bg-primary" : "bg-muted/30"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Current Step Content */}
            <Card className="bg-background/50 border-primary/30 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
                    {(() => {
                      const IconComponent = setupSteps[currentStep].icon;
                      return <IconComponent className="w-8 h-8 text-primary" />;
                    })()}
                  </div>
                  <div>
                    <CardTitle className="text-2xl">
                      {setupSteps[currentStep].title}
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {setupSteps[currentStep].description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Step 1: Personal Information */}
                {currentStep === 0 && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium">
                        Workspace Name
                      </label>
                      <input
                        type="text"
                        value={formData.workspaceName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            workspaceName: e.target.value,
                          })
                        }
                        placeholder="My Divine AI Sanctuary"
                        className="w-full px-4 py-3 border border-primary/30 bg-background/80 backdrop-blur-sm rounded-xl text-foreground"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium">
                        Professional Title
                      </label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) =>
                          setFormData({ ...formData, title: e.target.value })
                        }
                        placeholder="CEO, Developer, Consultant, etc."
                        className="w-full px-4 py-3 border border-primary/30 bg-background/80 backdrop-blur-sm rounded-xl text-foreground"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium">
                        Industry/Focus Area
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) =>
                          setFormData({ ...formData, industry: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-primary/30 bg-background/80 backdrop-blur-sm rounded-xl text-foreground"
                      >
                        <option value="">Select Industry</option>
                        <option value="technology">Technology</option>
                        <option value="business">Business & Consulting</option>
                        <option value="marketing">Marketing & Sales</option>
                        <option value="education">Education</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="finance">Finance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium">
                        AI Experience Level
                      </label>
                      <select
                        value={formData.experience}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            experience: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-primary/30 bg-background/80 backdrop-blur-sm rounded-xl text-foreground"
                      >
                        <option value="">Select Experience</option>
                        <option value="beginner">Beginner - New to AI</option>
                        <option value="intermediate">
                          Intermediate - Some AI Experience
                        </option>
                        <option value="advanced">
                          Advanced - AI Power User
                        </option>
                        <option value="expert">Expert - AI Professional</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 2: AI Configuration */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium flex items-center gap-2">
                        <Key className="w-4 h-4 text-primary" />
                        OpenAI API Key (Optional)
                      </label>
                      <div className="relative">
                        <input
                          type={showApiKey ? "text" : "password"}
                          value={formData.apiKey}
                          onChange={(e) =>
                            setFormData({ ...formData, apiKey: e.target.value })
                          }
                          placeholder="sk-... (Leave blank to use our premium API)"
                          className="w-full px-4 py-3 pr-12 border border-primary/30 bg-background/80 backdrop-blur-sm rounded-xl text-foreground"
                        />
                        <button
                          type="button"
                          onClick={() => setShowApiKey(!showApiKey)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showApiKey ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Using your own API key gives you unlimited access. Leave
                        blank to use our premium shared API.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium">
                          Response Style
                        </label>
                        <select
                          value={formData.responseStyle}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              responseStyle: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 border border-primary/30 bg-background/80 backdrop-blur-sm rounded-xl text-foreground"
                        >
                          <option value="professional">
                            Professional & Detailed
                          </option>
                          <option value="conversational">
                            Conversational & Friendly
                          </option>
                          <option value="concise">Concise & Direct</option>
                          <option value="creative">Creative & Inspiring</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium">
                          Default AI Model
                        </label>
                        <select className="w-full px-4 py-3 border border-primary/30 bg-background/80 backdrop-blur-sm rounded-xl text-foreground">
                          <option value="hacp">
                            HACP™ Dual Engine (Recommended)
                          </option>
                          <option value="gpt4o">GPT-4o Primary</option>
                          <option value="azure">Azure Cognitive Primary</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Privacy & Security */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Shield className="w-5 h-5 text-primary" />
                          Privacy Settings
                        </h4>
                        <div className="space-y-3">
                          <label className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              defaultChecked
                              className="rounded border-primary/30"
                            />
                            <span className="text-sm">
                              Faith-aligned data processing
                            </span>
                          </label>
                          <label className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              defaultChecked
                              className="rounded border-primary/30"
                            />
                            <span className="text-sm">
                              Enhanced privacy protection
                            </span>
                          </label>
                          <label className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              className="rounded border-primary/30"
                            />
                            <span className="text-sm">
                              Anonymous usage analytics
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Zap className="w-5 h-5 text-primary" />
                          Notification Settings
                        </h4>
                        <div className="space-y-3">
                          <label className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              defaultChecked
                              className="rounded border-primary/30"
                            />
                            <span className="text-sm">
                              AI response notifications
                            </span>
                          </label>
                          <label className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              defaultChecked
                              className="rounded border-primary/30"
                            />
                            <span className="text-sm">
                              System update alerts
                            </span>
                          </label>
                          <label className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              className="rounded border-primary/30"
                            />
                            <span className="text-sm">
                              Marketing communications
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Extensions & Mobile */}
                {currentStep === 3 && (
                  <div className="text-center space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="bg-background/30 border-primary/20 p-6">
                        <Chrome className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h4 className="font-semibold mb-2">Chrome Extension</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Access SAINTSAL™ AI from any webpage
                        </p>
                        <Button variant="outline" className="w-full">
                          Install Extension
                        </Button>
                      </Card>
                      <Card className="bg-background/30 border-primary/20 p-6">
                        <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h4 className="font-semibold mb-2">Mobile PWA</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Install as a mobile app for quick access
                        </p>
                        <Button variant="outline" className="w-full">
                          Install PWA
                        </Button>
                      </Card>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      These integrations are optional and can be set up later
                      from your dashboard.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 0}
                className="border-primary/40"
              >
                Previous Step
              </Button>

              <div className="text-sm text-muted-foreground">
                Step {currentStep + 1} of {setupSteps.length}
              </div>

              {currentStep === setupSteps.length - 1 ? (
                <Button
                  onClick={handleComplete}
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
                >
                  🚀 Enter Divine Sanctuary
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
                >
                  Next Step
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>

            {/* Skip Option */}
            <div className="text-center">
              <Link
                href="/dashboard"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
              >
                Skip setup for now and explore the sanctuary
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
