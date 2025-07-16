import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn, signUp, user } = useAuth();

  const isSignup = location.pathname === "/signup";
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      if (isSignup) {
        // Validation
        if (password !== confirmPassword) {
          setError("Passwords do not match");
          setIsLoading(false);
          return;
        }

        if (password.length < 6) {
          setError("Password must be at least 6 characters");
          setIsLoading(false);
          return;
        }

        const { error } = await signUp(email, password, fullName);
        if (error) {
          setError(error.message);
        } else {
          setSuccess(
            "Account created! Check your email to verify your account.",
          );
        }
      } else {
        const { error } = await signIn(email, password);
        if (error) {
          setError(error.message);
        } else {
          navigate("/dashboard");
        }
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
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
      {/* Dark Atmospheric Environment */}
      <div className="absolute inset-0 bg-gray-900 z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-gray-900/90 to-black/95 z-1" />
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-800/10 via-transparent to-gray-900/60 z-2" />

      {/* Immersive Golden Atmosphere */}
      <div className="absolute inset-0 z-3">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/12 to-transparent animate-pulse"></div>
        <div
          className="absolute inset-0 bg-gradient-to-br from-yellow-500/8 via-transparent to-yellow-400/10 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute inset-0 bg-radial-gradient from-yellow-400/6 via-transparent to-transparent animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Elite Floating Particles System */}
      <div className="absolute inset-0 overflow-hidden z-4">
        {/* Primary Particles */}
        <div className="animate-pulse absolute top-1/4 left-1/4 w-3 h-3 bg-yellow-400 rounded-full opacity-70 shadow-lg shadow-yellow-400/50"></div>
        <div
          className="animate-pulse absolute top-1/3 right-1/3 w-2 h-2 bg-yellow-300 rounded-full opacity-50 shadow-md shadow-yellow-300/40"
          style={{ animationDelay: "0.8s" }}
        ></div>
        <div
          className="animate-pulse absolute bottom-1/4 right-1/4 w-4 h-4 bg-yellow-500 rounded-full opacity-40 shadow-xl shadow-yellow-500/30"
          style={{ animationDelay: "1.6s" }}
        ></div>
        <div
          className="animate-pulse absolute bottom-1/3 left-1/5 w-2 h-2 bg-yellow-400 rounded-full opacity-60 shadow-lg shadow-yellow-400/40"
          style={{ animationDelay: "2.4s" }}
        ></div>
        <div
          className="animate-pulse absolute top-1/2 left-1/2 w-3 h-3 bg-yellow-300 rounded-full opacity-50 shadow-md shadow-yellow-300/35"
          style={{ animationDelay: "3.2s" }}
        ></div>
        <div
          className="animate-pulse absolute top-3/4 left-3/4 w-2 h-2 bg-yellow-500 rounded-full opacity-45 shadow-lg shadow-yellow-500/30"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Secondary Elite Particles */}
        <div
          className="animate-pulse absolute top-1/6 right-1/6 w-1 h-1 bg-yellow-200 rounded-full opacity-30"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="animate-pulse absolute bottom-1/6 left-1/3 w-1 h-1 bg-yellow-400 rounded-full opacity-35"
          style={{ animationDelay: "1.2s" }}
        ></div>
        <div
          className="animate-pulse absolute top-2/3 right-1/5 w-1 h-1 bg-yellow-300 rounded-full opacity-25"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-lg space-y-8">
          {/* Prestigious Back to Sanctuary */}
          <Link
            to="/"
            className="inline-flex items-center gap-4 text-yellow-400 hover:text-yellow-300 transition-all duration-500 group transform hover:scale-105"
          >
            <div className="relative">
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform duration-300" />
              <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-sm font-bold tracking-wider uppercase">
              Back to Sanctuary
            </span>
          </Link>

          {/* Atmospheric Sanctuary Portal */}
          <Card
            className="bg-gray-900/30 backdrop-blur-xl border border-yellow-400/30 shadow-2xl shadow-yellow-400/40 rounded-3xl overflow-hidden relative group"
            style={{ backgroundColor: "rgba(17, 24, 39, 0.3)" }}
          >
            {/* Premium Animated Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent animate-pulse rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Elite Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 via-yellow-300/30 to-yellow-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <CardHeader className="text-center space-y-8 relative pb-8 pt-12">
              {/* Prestigious Logo Section */}
              <div className="flex justify-center">
                <div className="relative group">
                  {/* Multi-layer Glow System */}
                  <div className="absolute inset-0 bg-yellow-400/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse"></div>
                  <div className="absolute inset-0 bg-yellow-300/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>

                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F90fa3cc4d85547ce9ae69ad15ae19bb2"
                    alt="SAINTSAL™ Circuit Board Logo"
                    className="relative w-28 h-28 rounded-3xl shadow-2xl group-hover:scale-110 transition-transform duration-500 border-2 border-yellow-400/30"
                  />

                  {/* Premium Crown Icon */}
                  <div className="absolute -top-3 -right-3 bg-yellow-400 rounded-full p-2 shadow-lg shadow-yellow-400/50 animate-pulse">
                    <Crown className="w-5 h-5 text-black" />
                  </div>

                  {/* Elite Sparkle Effects */}
                  <Sparkles className="absolute -top-2 -left-2 w-5 h-5 text-yellow-300 animate-spin" />
                  <Star className="absolute -bottom-2 -right-1 w-4 h-4 text-yellow-400 animate-pulse" />
                </div>
              </div>

              {/* Elite Branding */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-white text-sm font-light uppercase tracking-[0.5em] opacity-90 flex items-center justify-center gap-2">
                    <Gem className="w-4 h-4 text-yellow-400" />
                    SAINTSAL™
                    <Gem className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div className="text-yellow-400 text-2xl font-bold tracking-wide">
                    SaintVisionAI™
                  </div>
                  <div className="text-yellow-300/90 text-base font-medium tracking-wider">
                    Enterprise Intelligence
                  </div>
                </div>
              </div>

              <CardTitle className="text-5xl font-bold relative">
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                  {isSignup ? "Join Elite" : "Welcome Back"}
                </span>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Sparkles className="w-8 h-8 text-yellow-400 animate-spin" />
                </div>
              </CardTitle>

              <p className="text-gray-200 text-xl font-light leading-relaxed px-4">
                {isSignup ? (
                  <>
                    Enter the{" "}
                    <span className="text-yellow-400 font-semibold">
                      elite AI sanctuary
                    </span>{" "}
                    and unlock divine knowledge
                  </>
                ) : (
                  <>
                    Enter your divine credentials to access the{" "}
                    <span className="text-yellow-400 font-semibold">
                      premium AI sanctuary
                    </span>
                  </>
                )}
              </p>
            </CardHeader>

            <CardContent className="space-y-8 px-10 pb-12">
              {/* Error/Success Messages */}
              {error && (
                <Alert className="border-2 border-red-400/50 bg-red-500/20 backdrop-blur-sm rounded-2xl shadow-lg">
                  <AlertDescription className="text-red-200 flex items-center gap-3 text-base">
                    <div className="w-4 h-4 bg-red-400 rounded-full animate-pulse flex-shrink-0" />
                    <span className="font-semibold">{error}</span>
                  </AlertDescription>
                </Alert>
              )}

              {success && (
                <Alert className="border-2 border-green-400/50 bg-green-500/20 backdrop-blur-sm rounded-2xl shadow-lg">
                  <AlertDescription className="text-green-200 flex items-center gap-3 text-base">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                    <span className="font-semibold">{success}</span>
                  </AlertDescription>
                </Alert>
              )}

              {/* Elite Form */}
              <form onSubmit={handleSubmit} className="space-y-8">
                {isSignup && (
                  <div className="space-y-4">
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
                        className="w-full px-6 py-5 text-lg border-2 border-yellow-400/40 bg-black/70 backdrop-blur-sm rounded-2xl text-white placeholder:text-gray-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/25 transition-all duration-300 font-medium shadow-lg"
                        placeholder="Your divine name"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
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
                      className="w-full px-6 py-5 text-lg border-2 border-yellow-400/40 bg-black/70 backdrop-blur-sm rounded-2xl text-white placeholder:text-gray-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/25 transition-all duration-300 font-medium shadow-lg"
                      placeholder="saint@saintvisional.com"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </div>

                <div className="space-y-4">
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
                      className="w-full px-6 py-5 pr-16 text-lg border-2 border-yellow-400/40 bg-black/70 backdrop-blur-sm rounded-2xl text-white placeholder:text-gray-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/25 transition-all duration-300 font-medium shadow-lg"
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
                  {isSignup && password && (
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

                {isSignup && (
                  <div className="space-y-4">
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
                        className="w-full px-6 py-5 pr-16 text-lg border-2 border-yellow-400/40 bg-black/70 backdrop-blur-sm rounded-2xl text-white placeholder:text-gray-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/25 transition-all duration-300 font-medium shadow-lg"
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
                )}

                {/* Elite Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full relative overflow-hidden bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 hover:from-yellow-400 hover:via-yellow-300 hover:to-yellow-400 text-black font-bold py-6 rounded-2xl shadow-2xl shadow-yellow-400/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-yellow-400/70 disabled:opacity-50 disabled:hover:scale-100 text-xl tracking-wide group"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-6 h-6 border-4 border-black/30 border-t-black rounded-full animate-spin" />
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-4">
                      <Zap className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      <span>
                        {isSignup ? "🚀 Join Elite" : "👑 Enter Sanctuary"}
                      </span>
                      <Crown className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
                </Button>
              </form>

              {/* Toggle between login/signup */}
              <div className="text-center space-y-4 pt-4">
                <p className="text-gray-300 text-base">
                  {isSignup
                    ? "Already have an account?"
                    : "New to SaintVision?"}
                </p>
                <Link
                  to={isSignup ? "/login" : "/signup"}
                  className="text-yellow-400 hover:text-yellow-300 text-base font-bold tracking-wide transition-all duration-300 underline decoration-yellow-400/40 hover:decoration-yellow-300 underline-offset-4"
                >
                  {isSignup ? "Sign In" : "Create Elite Account"}
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Prestigious Footer */}
          <div className="text-center space-y-2">
            <p className="text-yellow-400/90 text-sm font-bold tracking-wider flex items-center justify-center gap-2">
              <Star className="w-4 h-4" />
              Elite AI Sanctuary
              <Star className="w-4 h-4" />
            </p>
            <p className="text-yellow-300/70 text-xs font-medium tracking-widest uppercase">
              Protected by Divine Technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
