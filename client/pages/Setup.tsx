import { ArrowLeft, CheckCircle, Zap, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Setup() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        backgroundImage:
          "url(https://api.builder.io/api/v1/image/assets/TEMP/48bf7ae07524f3ab5cd7dbd41650b41a12d29df9?width=1920)",
        backgroundSize: "120%",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-yellow-400/20 bg-black/60 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="inline-flex items-center text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to home
              </Link>
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F90fa3cc4d85547ce9ae69ad15ae19bb2"
                  alt="SAINTSAL™"
                  className="w-8 h-8"
                />
                <span className="text-lg font-bold text-yellow-400">
                  SAINTSAL™
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
              Setup Guide
            </h1>
            <p className="text-gray-300 text-xl font-light leading-relaxed">
              Get your SAINTSAL™ AI platform configured and ready to dominate
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Quick Start */}
            <div className="bg-black/60 backdrop-blur-xl border border-yellow-400/30 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 border border-yellow-400/30 mr-4">
                  <Zap className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-light text-white">Quick Start</h3>
              </div>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Create your account
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Start your first conversation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Explore AI features
                </li>
              </ul>
              <button
                onClick={() => (window.location.href = "/signup")}
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300"
              >
                Get Started
              </button>
            </div>

            {/* Advanced Setup */}
            <div className="bg-black/60 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-400/20 to-blue-600/20 border border-blue-400/30 mr-4">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-light text-white">
                  Enterprise Setup
                </h3>
              </div>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  Configure PartnerTech Elite
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  Install Chrome extension
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  Setup CRM integration
                </li>
              </ul>
              <button
                onClick={() => (window.location.href = "/partnertech")}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300"
              >
                Enterprise Setup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
