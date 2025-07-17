import React from "react";
import BuilderPage from "../components/BuilderPage";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Shield } from "lucide-react";

// Fallback content if Builder.io doesn't have content
const FallbackHomepage = () => (
  <div
    className="min-h-screen relative"
    style={{
      fontFamily:
        "-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      backgroundImage:
        "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F417fa80156424587b5052fdb53a44654)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Professional Business Atmosphere */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-gray-900/70 to-slate-900/80 z-0" />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-slate-800/50 z-1" />

    {/* Divine Golden Particles */}
    <div className="absolute inset-0 z-2">
      <div
        className="absolute top-1/4 left-1/5 w-1 h-1 bg-blue-400/40 rounded-full animate-pulse"
        style={{
          boxShadow:
            "0 0 15px rgba(59, 130, 246, 0.3), 0 0 30px rgba(59, 130, 246, 0.1)",
          filter: "blur(0.3px)",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-yellow-400/50 rounded-full animate-pulse"
        style={{
          boxShadow:
            "0 0 12px rgba(251, 191, 36, 0.3), 0 0 25px rgba(251, 191, 36, 0.1)",
          filter: "blur(0.2px)",
          animationDelay: "4s",
        }}
      />
    </div>

    <div className="relative z-10">
      {/* GOTTA GUY Hero Section */}
      <section className="min-h-[80vh] relative p-8 pb-16">
        {/* Top Left Logo & Premium Title */}
        <div className="absolute top-8 left-8 z-20 flex items-center space-x-12">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fbeb96c992e5a49f4bbd354e8386d6153"
            alt="SAINTSAL™ Logo"
            className="w-20 h-20 md:w-24 md:h-24"
          />
          {/* Apple/OpenAI Premium White Title - Updated for Production */}
          <h1 className="text-white text-6xl md:text-7xl font-light tracking-tight">
            SaintVisionAI™
          </h1>
        </div>

        {/* Centered Content */}
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          {/* Divine Quote */}
          <div className="mb-12 max-w-2xl mt-20">
            <p className="text-yellow-400 text-2xl md:text-3xl font-light mb-3 tracking-wide">
              "SaintSal" AI doesn't just answer.
            </p>
            <p className="text-yellow-400 text-2xl md:text-3xl font-light mb-3 tracking-wide">
              It adapts. It empowers. It becomes your...
            </p>
            <p className="text-yellow-400 text-6xl md:text-7xl font-bold tracking-wider mb-8">
              GOTTA GUY™!
            </p>
            <p className="text-yellow-400 text-sm font-thin tracking-[0.3em] mb-2">
              SAINTSAL™
            </p>
            <p className="text-yellow-400 text-3xl md:text-4xl font-medium tracking-wide mb-12">
              Cookin' Knowledge
            </p>
          </div>

          {/* Start Free Button */}
          <div className="mb-8">
            <Link to="/signup">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-400 hover:to-red-400 font-medium text-lg px-12 py-4 rounded-full"
              >
                🔥 Start Free
              </Button>
            </Link>
          </div>

          {/* Quick Access Buttons */}
          <div className="flex space-x-4 mb-8">
            <Link to="/console">
              <Button
                variant="outline"
                size="sm"
                className="border-yellow-400/50 text-yellow-400 bg-transparent hover:bg-yellow-400/10 rounded-full px-6"
              >
                🚀 AI Chat
              </Button>
            </Link>
            <Link to="/pricing">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-400/50 text-gray-400 bg-transparent hover:bg-gray-400/10 rounded-full px-6"
              >
                💰 Pricing
              </Button>
            </Link>
          </div>

          <p className="text-yellow-400 text-sm mb-4">Quick Access</p>

          {/* Bottom Navigation Icons */}
          <div className="flex space-x-6 items-center">
            <Link to="/pricing" className="text-center group">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-2 transition-all duration-300 group-hover:scale-110"
                style={{
                  backdropFilter: "blur(24px)",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  border: "1px solid rgba(250, 204, 21, 0.3)",
                }}
              >
                <span className="text-yellow-400 text-xl">💰</span>
              </div>
              <span className="text-yellow-400 text-xs font-medium">
                Pricing
              </span>
            </Link>

            <Link to="/why" className="text-center group">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-2 transition-all duration-300 group-hover:scale-110"
                style={{
                  backdropFilter: "blur(24px)",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  border: "1px solid rgba(156, 163, 175, 0.3)",
                }}
              >
                <span className="text-gray-400 text-xl">❓</span>
              </div>
              <span className="text-gray-400 text-xs font-medium">Why</span>
            </Link>

            <Link to="/help" className="text-center group">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-2 transition-all duration-300 group-hover:scale-110"
                style={{
                  backdropFilter: "blur(24px)",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  border: "1px solid rgba(96, 165, 250, 0.3)",
                }}
              >
                <span className="text-blue-400 text-xl">📚</span>
              </div>
              <span className="text-blue-400 text-xs font-medium">Help</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 px-8 bg-background/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-foreground mb-4">
              Enterprise AI, Simplified
            </h2>
            <p className="text-xl text-muted-foreground">
              From free trial to full enterprise - scale at your own pace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dual AI Console */}
            <div className="elite-card p-8 text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Dual AI Console
              </h3>
              <p className="text-muted-foreground mb-6">
                GPT-4o + Azure Cognitive Services working in perfect
                synchronization. Real-time cognition with 24/7 reliability.
              </p>
              <Link to="/console">
                <Button variant="outline">Try Console</Button>
              </Link>
            </div>

            {/* PartnerTech CRM */}
            <div className="elite-card p-8 text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-4">
                PartnerTech CRM
              </h3>
              <p className="text-muted-foreground mb-6">
                Enterprise CRM integration with AI-powered automation. Chrome
                extension included for seamless workflow.
              </p>
              <Link to="/partnertech">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>

            {/* Faith-Aligned Security */}
            <div className="elite-card p-8 text-center">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Faith-Aligned Security
              </h3>
              <p className="text-muted-foreground mb-6">
                Enterprise-grade encryption with values-first architecture. Your
                data protected by moral and technical excellence.
              </p>
              <Link to="/privacy">
                <Button variant="outline">Security Details</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default function Index() {
  return (
    <BuilderPage
      model="page"
      chatMode="companion"
      showHeader={false}
      showFooter={false}
      fallback={<FallbackHomepage />}
    />
  );
}
