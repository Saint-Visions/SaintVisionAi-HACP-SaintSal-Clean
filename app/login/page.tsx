"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Eye, EyeOff, Sparkles, Crown, Zap } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { signIn } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await signIn(email, password);

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        fontFamily:
          "Gotham, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fff0733af4a2e4a0b8c3ec5843ef9720e)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Enhanced Divine Overlays */}
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/70 z-1" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-2" />

      {/* Floating Gold Particles Animation */}
      <div className="absolute inset-0 overflow-hidden z-3">
        <div className="animate-pulse absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full opacity-60"></div>
        <div className="animate-pulse absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-300 rounded-full opacity-40 animation-delay-1000"></div>
        <div className="animate-pulse absolute bottom-1/4 right-1/4 w-3 h-3 bg-yellow-500 rounded-full opacity-30 animation-delay-2000"></div>
        <div className="animate-pulse absolute bottom-1/3 left-1/5 w-1 h-1 bg-yellow-400 rounded-full opacity-50 animation-delay-3000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        {/* Back to Sanctuary Link */}
        <Link
          href="/"
          className="absolute top-8 left-8 flex items-center gap-3 text-yellow-400 hover:text-yellow-300 transition-all duration-300 group z-20"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium tracking-wide">
            Back to Sanctuary
          </span>
        </Link>

        {/* Divine Login Card */}
        <Card className="w-full max-w-md bg-black/40 backdrop-blur-xl border border-yellow-400/30 shadow-2xl shadow-yellow-400/20 rounded-2xl overflow-hidden">
          {/* Animated Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent animate-pulse rounded-2xl"></div>

          <CardHeader className="text-center pb-6 relative">
            {/* Divine Logo Section */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-yellow-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F90fa3cc4d85547ce9ae69ad15ae19bb2"
                  alt="SAINTSAL™ Circuit Board Logo"
                  className="relative w-24 h-24 rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-300"
                />
                <Crown className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-pulse" />
              </div>
            </div>

            {/* Divine Branding */}
            <div className="mb-6">
              <div className="text-white text-sm font-light uppercase tracking-[0.4em] mb-3 opacity-90">
                SAINTSAL��
              </div>
              <div className="text-yellow-400 text-xl font-semibold tracking-wide mb-2">
                SaintVisionAI™
              </div>
              <div className="text-yellow-300/80 text-sm font-light tracking-wider">
                Cookin' Knowledge
              </div>
            </div>

            <CardTitle className="text-4xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                Welcome Back
              </span>
              <Sparkles className="absolute -top-2 -right-6 w-6 h-6 text-yellow-400 animate-spin" />
            </CardTitle>

            <p className="text-gray-300 text-lg font-light leading-relaxed">
              Enter your divine credentials to access the
              <span className="text-yellow-400 font-medium"> AI sanctuary</span>
            </p>
          </CardHeader>

          <CardContent className="space-y-8 px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 rounded-xl bg-red-500/20 border border-red-400/40 text-red-300 text-sm backdrop-blur-sm animate-shake">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse flex-shrink-0" />
                    <span className="font-medium">{error}</span>
                  </div>
                </div>
              )}

              {/* Email Field */}
              <div className="space-y-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-200 tracking-wide"
                >
                  Email Address
                </label>
                <div className="relative group">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="saint@saintvisional.com"
                    className="w-full px-5 py-4 border-2 border-yellow-400/30 bg-black/60 backdrop-blur-sm rounded-xl text-white placeholder:text-gray-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20 transition-all duration-300 font-medium"
                    required
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-3">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-200 tracking-wide"
                >
                  Divine Password
                </label>
                <div className="relative group">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your divine password"
                    className="w-full px-5 py-4 pr-14 border-2 border-yellow-400/30 bg-black/60 backdrop-blur-sm rounded-xl text-white placeholder:text-gray-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20 transition-all duration-300 font-medium"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Divine Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full relative overflow-hidden bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 hover:from-yellow-400 hover:via-yellow-300 hover:to-yellow-400 text-black font-bold py-5 rounded-xl shadow-2xl shadow-yellow-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-yellow-400/60 disabled:opacity-50 disabled:hover:scale-100 text-lg tracking-wide"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-3 border-black/30 border-t-black rounded-full animate-spin" />
                    <span>Entering Divine Sanctuary...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    <Zap className="w-5 h-5" />
                    <span>Enter Divine Sanctuary</span>
                    <Crown className="w-5 h-5" />
                  </div>
                )}
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
              </Button>
            </form>

            {/* Forgot Password */}
            <div className="text-center">
              <Link
                href="/forgot-password"
                className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors underline decoration-yellow-400/30 hover:decoration-yellow-300 tracking-wide font-medium"
              >
                Forgot your divine password?
              </Link>
            </div>

            {/* Divine Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-yellow-400/20" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-black/60 px-6 text-gray-400 tracking-[0.2em] font-semibold">
                  New to SAINTSAL™?
                </span>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="text-center space-y-4">
              <p className="text-sm text-gray-300 leading-relaxed">
                Ready to join the{" "}
                <span className="text-yellow-400 font-semibold">
                  divine AI revolution
                </span>
                ?
              </p>
              <Link href="/signup">
                <Button
                  variant="outline"
                  className="w-full border-2 border-yellow-400/40 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400/60 hover:text-yellow-300 transition-all duration-300 py-4 rounded-xl font-semibold tracking-wide"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Create Your Sanctuary Account
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
