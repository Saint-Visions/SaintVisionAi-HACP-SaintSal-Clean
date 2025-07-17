import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Eye,
  EyeOff,
  ArrowLeft,
  Sparkles,
  Crown,
  Zap,
  Shield,
  User,
  Mail,
  Lock,
  Star,
  Gem,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // Validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    try {
      console.log("Attempting signup with:", { email, fullName });

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      console.log("Signup response:", { data, error });

      if (error) {
        console.error("Signup error:", error);
        throw error;
      }

      if (data.user && !data.user.email_confirmed_at) {
        setSuccess("Account created! Check your email to verify your account.");
      } else {
        setSuccess("Account created successfully! You can now sign in.");
      }
    } catch (error: any) {
      console.error("Full signup error:", error);
      const errorMessage = error.message || "An error occurred during signup";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Password strength validation
  const getPasswordStrength = (pass: string) => {
    let strength = 0;
    if (pass.length >= 8) strength++;
    if (/[A-Z]/.test(pass)) strength++;
    if (/[0-9]/.test(pass)) strength++;
    if (/[^A-Za-z0-9]/.test(pass)) strength++;
    return strength;
  };

  const passwordStrength = getPasswordStrength(password);
  const strengthColors = ["#ef4444", "#f97316", "#eab308", "#22c55e"];
  const strengthLabels = ["Weak", "Fair", "Good", "Strong"];

  return (
    <div
      className="min-h-screen relative"
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fff0733af4a2e4a0b8c3ec5843ef9720e)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10">
        {/* Divine Welcome Banner */}
        <section className="py-12 bg-black/40 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div
              className="p-8 rounded-3xl border mb-8 max-w-2xl mx-auto"
              style={{
                backdropFilter: "blur(24px)",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                borderColor: "rgba(250, 204, 21, 0.3)",
              }}
            >
              <p className="text-yellow-400 text-xl font-light mb-2">
                Welcome to the Divine Revolution
              </p>
              <p className="text-yellow-400 text-xl font-light mb-2">
                Join thousands who've discovered their...
              </p>
              <p className="text-yellow-400 text-3xl font-bold tracking-wider">
                GOTTA GUY™!
              </p>
            </div>
          </div>
        </section>

        {/* Main Signup Section */}
        <section className="py-12">
          <div className="max-w-lg mx-auto px-6">
            {/* Prestigious Back to Sanctuary */}
            <Link
              to="/"
              className="inline-flex items-center gap-4 text-yellow-400 hover:text-yellow-300 transition-all duration-500 group transform hover:scale-105 mb-8"
            >
              <div className="relative">
                <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform duration-300" />
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-sm font-bold tracking-wider uppercase">
                Back to Sanctuary
              </span>
            </Link>

            {/* Divine Signup Form */}
            <div
              className="p-8 rounded-3xl border"
              style={{
                backdropFilter: "blur(24px)",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                borderColor: "rgba(250, 204, 21, 0.3)",
              }}
            >
              {/* Elite Header */}
              <div className="text-center space-y-6 mb-8">
                {/* Prestigious Logo Section */}
                <div className="flex justify-center">
                  <div className="relative group">
                    {/* Multi-layer Glow System */}
                    <div className="absolute inset-0 bg-yellow-400/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse"></div>
                    <div className="absolute inset-0 bg-yellow-300/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>

                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fbeb96c992e5a49f4bbd354e8386d6153"
                      alt="SAINTSAL™ Logo"
                      className="relative w-20 h-20 shadow-2xl group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Premium Crown Icon */}
                    <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-2 shadow-lg shadow-yellow-400/50 animate-pulse">
                      <Crown className="w-4 h-4 text-black" />
                    </div>

                    {/* Elite Sparkle Effects */}
                    <Sparkles className="absolute -top-1 -left-1 w-4 h-4 text-yellow-300 animate-spin" />
                    <Star className="absolute -bottom-1 -right-1 w-3 h-3 text-yellow-400 animate-pulse" />
                  </div>
                </div>

                {/* Elite Branding */}
                <div className="space-y-3">
                  <div className="text-white text-sm font-light uppercase tracking-[0.4em] opacity-90 flex items-center justify-center gap-2">
                    <Gem className="w-3 h-3 text-yellow-400" />
                    <span>
                      SAINTSAL<span className="text-yellow-400">™</span>
                    </span>
                    <Gem className="w-3 h-3 text-yellow-400" />
                  </div>
                  <div className="text-white text-xl font-thin tracking-tight">
                    <span>
                      SaintVisionAI<span className="text-yellow-400">™</span>
                    </span>
                  </div>
                  <div className="text-yellow-300/90 text-sm font-medium tracking-wider">
                    Enterprise Intelligence
                  </div>
                </div>

                <h1 className="text-3xl font-bold">
                  <span className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                    Create Elite Account
                  </span>
                </h1>

                <p className="text-gray-200 text-lg font-light leading-relaxed">
                  Enter the{" "}
                  <span className="text-yellow-400 font-semibold">
                    elite AI sanctuary
                  </span>{" "}
                  and unlock divine knowledge
                </p>
              </div>

              {/* Error/Success Messages */}
              {error && (
                <Alert className="border-2 border-red-400/50 bg-red-500/20 backdrop-blur-sm rounded-2xl shadow-lg mb-6">
                  <AlertDescription className="text-red-200 flex items-center gap-3 text-base">
                    <div className="w-4 h-4 bg-red-400 rounded-full animate-pulse flex-shrink-0" />
                    <span className="font-semibold">{error}</span>
                  </AlertDescription>
                </Alert>
              )}

              {success && (
                <Alert className="border-2 border-green-400/50 bg-green-500/20 backdrop-blur-sm rounded-2xl shadow-lg mb-6">
                  <AlertDescription className="text-green-200 flex items-center gap-3 text-base">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                    <span className="font-semibold">{success}</span>
                  </AlertDescription>
                </Alert>
              )}

              {/* Elite Form */}
              <form onSubmit={handleSignup} className="space-y-6">
                <div className="space-y-3">
                  <Label
                    htmlFor="fullName"
                    className="text-base font-bold text-gray-100 tracking-wide flex items-center gap-3"
                  >
                    <User className="w-5 h-5 text-yellow-400" />
                    Full Name
                  </Label>
                  <div className="relative group">
                    <Input
                      id="fullName"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full px-6 py-4 text-lg border border-yellow-400/25 bg-gray-700/40 backdrop-blur-sm rounded-2xl text-gray-100 placeholder:text-gray-400 focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-400/15 transition-all duration-300 font-medium shadow-lg"
                      style={{ backgroundColor: "rgba(55, 65, 81, 0.4)" }}
                      placeholder="Your divine name"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="email"
                    className="text-base font-bold text-gray-100 tracking-wide flex items-center gap-3"
                  >
                    <Mail className="w-5 h-5 text-yellow-400" />
                    Email Address
                  </Label>
                  <div className="relative group">
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-6 py-4 text-lg border border-yellow-400/30 bg-gray-800/60 backdrop-blur-sm rounded-2xl text-yellow-100 placeholder:text-gray-500 focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 font-medium shadow-lg"
                      style={{ backgroundColor: "rgba(31, 41, 55, 0.6)" }}
                      placeholder="saint@saintvisional.com"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="password"
                    className="text-base font-bold text-gray-100 tracking-wide flex items-center gap-3"
                  >
                    <Lock className="w-5 h-5 text-yellow-400" />
                    Divine Password
                  </Label>
                  <div className="relative group">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full px-6 py-4 pr-16 text-lg border border-yellow-400/30 bg-gray-800/60 backdrop-blur-sm rounded-2xl text-yellow-100 placeholder:text-gray-500 focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 font-medium shadow-lg"
                      style={{ backgroundColor: "rgba(31, 41, 55, 0.6)" }}
                      placeholder="Your divine password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                    >
                      {showPassword ? (
                        <EyeOff className="w-6 h-6" />
                      ) : (
                        <Eye className="w-6 h-6" />
                      )}
                    </button>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>

                  {/* Elite Password Strength Indicator */}
                  {password && (
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        {[0, 1, 2, 3].map((index) => (
                          <div
                            key={index}
                            className="h-3 flex-1 rounded-full transition-all duration-500 shadow-sm"
                            style={{
                              backgroundColor:
                                index < passwordStrength
                                  ? strengthColors[passwordStrength - 1]
                                  : "#374151",
                              boxShadow:
                                index < passwordStrength
                                  ? `0 0 10px ${strengthColors[passwordStrength - 1]}40`
                                  : "none",
                            }}
                          />
                        ))}
                      </div>
                      <p
                        className="text-sm font-semibold"
                        style={{
                          color:
                            passwordStrength > 0
                              ? strengthColors[passwordStrength - 1]
                              : "#9ca3af",
                        }}
                      >
                        Password strength:{" "}
                        {passwordStrength > 0
                          ? strengthLabels[passwordStrength - 1]
                          : "Enter password"}
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="confirmPassword"
                    className="text-base font-bold text-gray-100 tracking-wide flex items-center gap-3"
                  >
                    <Shield className="w-5 h-5 text-yellow-400" />
                    Confirm Password
                  </Label>
                  <div className="relative group">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="w-full px-6 py-4 pr-16 text-lg border border-yellow-400/30 bg-gray-800/60 backdrop-blur-sm rounded-2xl text-yellow-100 placeholder:text-gray-500 focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 font-medium shadow-lg"
                      style={{ backgroundColor: "rgba(31, 41, 55, 0.6)" }}
                      placeholder="Confirm your divine password"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-6 h-6" />
                      ) : (
                        <Eye className="w-6 h-6" />
                      )}
                    </button>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </div>

                {/* Elite Submit Button */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full relative overflow-hidden text-gray-900 font-bold py-6 rounded-2xl transition-all duration-500 hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 text-xl tracking-wide group"
                  style={{
                    background:
                      "linear-gradient(135deg, #d4af37 0%, #f4d03f 50%, #d4af37 100%)",
                    boxShadow:
                      "0 0 30px rgba(212, 175, 55, 0.6), 0 0 60px rgba(212, 175, 55, 0.4), 0 0 90px rgba(212, 175, 55, 0.2), inset 0 2px 0 rgba(255, 255, 255, 0.3), inset 0 -2px 0 rgba(0, 0, 0, 0.2)",
                  }}
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-6 h-6 border-4 border-black/30 border-t-black rounded-full animate-spin" />
                      <span>Creating Account...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-4">
                      <Zap className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      <span>🚀 Join Elite Sanctuary</span>
                      <Crown className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
                </Button>
              </form>

              {/* Toggle to login */}
              <div className="text-center space-y-4 pt-6">
                <p className="text-gray-300 text-base">
                  Already have an account?
                </p>
                <Link
                  to="/login"
                  className="text-yellow-400 hover:text-yellow-300 text-base font-bold tracking-wide transition-all duration-300 underline decoration-yellow-400/40 hover:decoration-yellow-300 underline-offset-4"
                  style={{
                    textShadow: "0 0 10px rgba(251, 191, 36, 0.3)",
                  }}
                >
                  Sign In to Sanctuary
                </Link>
              </div>
            </div>

            {/* Prestigious Footer */}
            <div className="text-center space-y-2 mt-8">
              <p className="text-gray-300 text-sm font-bold tracking-wider flex items-center justify-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>
                  Elite AI Sanctuary by SAINTSAL
                  <span className="text-yellow-400">™</span>
                </span>
                <Star className="w-4 h-4 text-yellow-400" />
              </p>
              <p className="text-gray-400 text-xs font-medium tracking-widest uppercase">
                Protected by Divine Technology
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
