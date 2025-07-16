import { ArrowLeft, MessageCircle, Book, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function Help() {
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
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048"
                  alt="SAINTSAL™"
                  className="w-8 h-8 rounded-lg"
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
              Help Center
            </h1>
            <p className="text-gray-300 text-xl font-light leading-relaxed">
              Get the most out of your SAINTSAL™ AI experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Getting Started */}
            <div className="bg-black/60 backdrop-blur-xl border border-yellow-400/30 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 border border-yellow-400/30 mr-4">
                  <Zap className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-light text-white">
                  Getting Started
                </h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li>• Setting up your account</li>
                <li>• First conversation with SAINTSAL™</li>
                <li>• Understanding AI responses</li>
                <li>• Basic commands and features</li>
              </ul>
              <button
                onClick={() => (window.location.href = "/setup")}
                className="mt-6 text-yellow-400 hover:text-yellow-300 font-medium transition-colors"
              >
                View Setup Guide →
              </button>
            </div>

            {/* Advanced Features */}
            <div className="bg-black/60 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-400/20 to-blue-600/20 border border-blue-400/30 mr-4">
                  <Book className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-light text-white">
                  Advanced Features
                </h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li>• PartnerTech Elite integration</li>
                <li>• CRM and workflow automation</li>
                <li>• Chrome extension usage</li>
                <li>• Enterprise security features</li>
              </ul>
              <button
                onClick={() => (window.location.href = "/partnertech")}
                className="mt-6 text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Learn More →
              </button>
            </div>

            {/* Privacy & Security */}
            <div className="bg-black/60 backdrop-blur-xl border border-green-400/30 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-400/20 to-green-600/20 border border-green-400/30 mr-4">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-light text-white">
                  Privacy & Security
                </h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li>• Data protection policies</li>
                <li>• Encryption and security</li>
                <li>• Faith-aligned practices</li>
                <li>• GDPR & CCPA compliance</li>
              </ul>
              <button
                onClick={() => (window.location.href = "/privacy")}
                className="mt-6 text-green-400 hover:text-green-300 font-medium transition-colors"
              >
                View Privacy Policy →
              </button>
            </div>

            {/* 24/7 SAINTSAL Support */}
            <div className="bg-black/60 backdrop-blur-xl border border-purple-400/30 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-400/20 to-purple-600/20 border border-purple-400/30 mr-4">
                  <MessageCircle className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-light text-white">
                  24/7 SAINTSAL Support
                </h3>
              </div>
              <p className="text-gray-300 mb-6">
                Get instant help from our AI support agent. Handles upgrades,
                troubleshooting, and questions better than any human support!
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => (window.location.href = "/console")}
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300"
                >
                  💬 Chat with SAINTSAL Bot
                </button>
                <button
                  onClick={() =>
                    (window.location.href = "mailto:support@saintvisional.com")
                  }
                  className="w-full bg-gray-600/30 border border-gray-400/60 text-gray-200 hover:bg-gray-600/50 hover:text-white backdrop-blur-sm px-6 py-3 rounded-xl transition-all duration-300 text-sm"
                >
                  📧 Email Support (Backup)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
