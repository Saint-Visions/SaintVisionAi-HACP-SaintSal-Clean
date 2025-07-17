import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Shield } from "lucide-react";

export default function Index() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
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

            {/* Start Cooking Button */}
            <div className="mb-8">
              <Link to="/login">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-400 hover:to-red-400 font-medium text-lg px-12 py-4 rounded-full"
                >
                  🔥 Start Cooking
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
                  👥📊 AI Chat
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-400/50 text-gray-400 bg-transparent hover:bg-gray-400/10 rounded-full px-6"
                >
                  🖤 Sign In
                </Button>
              </Link>
            </div>

            {/* Quick Access */}
            <p className="text-yellow-400 text-sm mb-4">Quick Access</p>

            {/* Bottom Navigation Icons */}
            <div className="flex space-x-8 items-center">
              <Link to="/pricing" className="text-center">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white text-xl">💰</span>
                </div>
                <span className="text-yellow-400 text-xs">Pricing</span>
              </Link>

              <Link to="/setup" className="text-center">
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white text-xl">⚙️</span>
                </div>
                <span className="text-yellow-400 text-xs">Setup</span>
              </Link>

              <Link to="/help" className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white text-xl">📚</span>
                </div>
                <span className="text-yellow-400 text-xs">Help</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
