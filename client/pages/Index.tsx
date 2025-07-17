import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Shield } from "lucide-react";

export default function Index() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        fontFamily:
          "Gotham, 'Gotham Medium', 'Gotham Bold', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F67fa88f04d284db78a9ad420de29a1e7)",
        backgroundSize: "120%",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Professional Business Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-gray-900/70 to-slate-900/80 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-slate-800/50 z-1" />

      {/* Subtle Business Glow */}
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

      {/* All content flows over the same background */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[80vh] relative p-8 pb-16">
          {/* Top Left Logo & Title */}
          <div className="absolute top-8 left-8 z-20 flex items-center space-x-12">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fbeb96c992e5a49f4bbd354e8386d6153"
              alt="SAINTSAL™ Logo"
              className="w-20 h-20 md:w-24 md:h-24"
            />
            <h1 className="text-yellow-400 text-4xl md:text-5xl font-thin tracking-tight">
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
              <p className="text-yellow-400 text-4xl md:text-5xl font-bold tracking-wider">
                Divine Partner™
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4 max-w-md w-full">
              <Link to="/login">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 hover:from-yellow-300 hover:to-yellow-200 font-medium text-lg py-6"
                >
                  Start Your Divine Journey
                </Button>
              </Link>
              <Link to="/pricing">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10 font-medium text-lg py-6"
                >
                  View Divine Plans
                </Button>
              </Link>
            </div>

            {/* Free Trial Notice */}
            <p className="text-gray-300 text-sm mt-6">
              ✨ Start with 7 days free • No credit card required
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-thin tracking-tight text-yellow-400 text-center mb-16">
              Why Choose Divine AI?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div
                className="bg-gray-900/40 border border-yellow-400/20 backdrop-blur-md rounded-3xl p-8 text-center"
                style={{
                  boxShadow:
                    "0 20px 40px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(251, 191, 36, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                }}
              >
                <Brain className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-xl font-medium text-white mb-4">
                  HACP™ Technology
                </h3>
                <p className="text-gray-300">
                  Dual-engine processing with GPT-4o and Azure for unmatched
                  accuracy
                </p>
              </div>

              <div
                className="bg-gray-900/40 border border-yellow-400/20 backdrop-blur-md rounded-3xl p-8 text-center"
                style={{
                  boxShadow:
                    "0 20px 40px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(251, 191, 36, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                }}
              >
                <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-xl font-medium text-white mb-4">
                  Faith-Aligned AI
                </h3>
                <p className="text-gray-300">
                  AI that respects your values and provides ethical guidance
                </p>
              </div>

              <div
                className="bg-gray-900/40 border border-yellow-400/20 backdrop-blur-md rounded-3xl p-8 text-center"
                style={{
                  boxShadow:
                    "0 20px 40px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(251, 191, 36, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                }}
              >
                <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-xl font-medium text-white mb-4">
                  Enterprise Ready
                </h3>
                <p className="text-gray-300">
                  Scale from personal use to enterprise with advanced CRM tools
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="py-20 px-8 bg-gray-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-thin tracking-tight text-yellow-400 mb-8">
              Choose Your Divine Plan
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
              From individual seekers to enterprise organizations, we have the
              perfect divine solution
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Unlimited Plan */}
              <div
                className="bg-gray-900/40 border border-yellow-400/20 backdrop-blur-md rounded-3xl p-6"
                style={{
                  boxShadow:
                    "0 20px 40px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(251, 191, 36, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                }}
              >
                <h3 className="text-xl font-medium text-white mb-2">
                  Unlimited
                </h3>
                <div className="text-3xl font-light text-yellow-400 mb-4">
                  $27<span className="text-lg text-gray-400">/mo</span>
                </div>
                <p className="text-gray-300 text-sm mb-6">
                  Perfect for individuals
                </p>
                <Link to="/pricing">
                  <Button className="w-full bg-gray-800 border border-yellow-400/30 text-yellow-400 hover:bg-gray-700">
                    Get Started
                  </Button>
                </Link>
              </div>

              {/* PartnerTech Pro Plan */}
              <div
                className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-400/50 backdrop-blur-md rounded-3xl p-6 scale-105"
                style={{
                  boxShadow:
                    "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 60px rgba(251, 191, 36, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className="text-center mb-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    Most Popular
                  </div>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">
                  PartnerTech Pro
                </h3>
                <div className="text-3xl font-light text-yellow-400 mb-4">
                  $97<span className="text-lg text-gray-400">/mo</span>
                </div>
                <p className="text-gray-300 text-sm mb-6">
                  Advanced CRM & automation
                </p>
                <Link to="/pricing">
                  <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 hover:from-yellow-300 hover:to-yellow-200 font-medium">
                    Upgrade to Pro
                  </Button>
                </Link>
              </div>

              {/* Enterprise Plan */}
              <div
                className="bg-gray-900/40 border border-purple-400/30 backdrop-blur-md rounded-3xl p-6"
                style={{
                  boxShadow:
                    "0 20px 40px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(168, 85, 247, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                }}
              >
                <h3 className="text-xl font-medium text-white mb-2">
                  Enterprise
                </h3>
                <div className="text-3xl font-light text-purple-400 mb-4">
                  $497<span className="text-lg text-gray-400">/mo</span>
                </div>
                <p className="text-gray-300 text-sm mb-6">
                  Full enterprise suite
                </p>
                <Link to="/pricing">
                  <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-8 text-center border-t border-yellow-400/20">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fbeb96c992e5a49f4bbd354e8386d6153"
                alt="SAINTSAL™ Logo"
                className="w-12 h-12"
              />
            </div>
            <p className="text-yellow-400 text-sm font-thin tracking-[0.3em] mb-2">
              SAINTSAL™
            </p>
            <p className="text-gray-400 text-sm">
              Divine AI technology for the modern world
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
