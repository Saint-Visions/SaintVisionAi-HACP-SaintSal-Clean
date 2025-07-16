import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// Card components removed for native layout
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
          "Gotham, 'Gotham Medium', 'Gotham Bold', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, Roboto, Helvetica, Arial, sans-serif",
        backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fff0733af4a2e4a0b8c3ec5843ef9720e)",
        backgroundSize: "120%",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Deep Charcoal Atmosphere */}
      <div className="absolute inset-0 bg-gray-900/40 z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 via-gray-900/60 to-gray-900/70 z-1" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800/30 via-transparent to-gray-900/40 z-2" />

      {/* Realistic 3D Golden Illumination */}
      <div className="absolute inset-0 z-3">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/8 to-transparent animate-pulse"
          style={{
            filter: "blur(2px)",
            boxShadow:
              "inset 0 0 50px rgba(251, 191, 36, 0.15), 0 0 100px rgba(251, 191, 36, 0.1)",
          }}
        ></div>
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-700/15 via-transparent to-yellow-400/6 animate-pulse"
          style={{
            animationDelay: "2s",
            filter: "blur(1px)",
            boxShadow: "inset 0 0 30px rgba(234, 179, 8, 0.2)",
          }}
        ></div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-yellow-400/5 via-transparent to-gray-800/8 animate-pulse"
          style={{
            animationDelay: "3s",
            boxShadow: "0 0 200px rgba(251, 191, 36, 0.1)",
          }}
        ></div>
        {/* 3D Depth Glow Layer */}
        <div
          className="absolute inset-0 bg-radial-gradient from-yellow-400/3 via-yellow-300/2 to-transparent animate-pulse"
          style={{
            animationDelay: "4s",
            filter: "blur(3px)",
            boxShadow:
              "inset 0 0 80px rgba(251, 191, 36, 0.12), 0 0 150px rgba(251, 191, 36, 0.08)",
          }}
        ></div>
      </div>

      {/* 3D Illuminated Energy Particles */}
      <div className="absolute inset-0 overflow-hidden z-4">
        {/* Primary Golden Orbs with 3D Glow */}
        <div
          className="animate-pulse absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-400 rounded-full opacity-70"
          style={{
            boxShadow:
              "0 0 20px rgba(251, 191, 36, 0.8), 0 0 40px rgba(251, 191, 36, 0.6), 0 0 60px rgba(251, 191, 36, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.3)",
            filter: "blur(0.5px)",
          }}
        ></div>
        <div
          className="animate-pulse absolute top-1/3 right-1/3 w-3 h-3 bg-yellow-300 rounded-full opacity-50"
          style={{
            animationDelay: "0.8s",
            boxShadow:
              "0 0 15px rgba(253, 224, 71, 0.7), 0 0 30px rgba(253, 224, 71, 0.5), 0 0 45px rgba(253, 224, 71, 0.3), inset 0 0 8px rgba(255, 255, 255, 0.4)",
            filter: "blur(0.5px)",
          }}
        ></div>
        <div
          className="animate-pulse absolute bottom-1/4 right-1/4 w-5 h-5 bg-yellow-500 rounded-full opacity-40"
          style={{
            animationDelay: "1.6s",
            boxShadow:
              "0 0 25px rgba(234, 179, 8, 0.9), 0 0 50px rgba(234, 179, 8, 0.7), 0 0 75px rgba(234, 179, 8, 0.5), inset 0 0 12px rgba(255, 255, 255, 0.2)",
            filter: "blur(0.5px)",
          }}
        ></div>
        <div
          className="animate-pulse absolute bottom-1/3 left-1/5 w-3 h-3 bg-yellow-400 rounded-full opacity-60"
          style={{
            animationDelay: "2.4s",
            boxShadow:
              "0 0 18px rgba(251, 191, 36, 0.8), 0 0 36px rgba(251, 191, 36, 0.6), 0 0 54px rgba(251, 191, 36, 0.4), inset 0 0 9px rgba(255, 255, 255, 0.3)",
            filter: "blur(0.5px)",
          }}
        ></div>
        <div
          className="animate-pulse absolute top-1/2 left-1/2 w-4 h-4 bg-yellow-300 rounded-full opacity-45"
          style={{
            animationDelay: "3.2s",
            boxShadow:
              "0 0 20px rgba(253, 224, 71, 0.8), 0 0 40px rgba(253, 224, 71, 0.6), 0 0 60px rgba(253, 224, 71, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.3)",
            filter: "blur(0.5px)",
          }}
        ></div>
        <div
          className="animate-pulse absolute top-3/4 left-3/4 w-3 h-3 bg-yellow-500 rounded-full opacity-50"
          style={{
            animationDelay: "4s",
            boxShadow:
              "0 0 16px rgba(234, 179, 8, 0.8), 0 0 32px rgba(234, 179, 8, 0.6), 0 0 48px rgba(234, 179, 8, 0.4), inset 0 0 8px rgba(255, 255, 255, 0.3)",
            filter: "blur(0.5px)",
          }}
        ></div>

        {/* Ambient 3D Energy Dust */}
        <div
          className="animate-pulse absolute top-1/6 right-1/6 w-2 h-2 bg-yellow-200 rounded-full opacity-30"
          style={{
            animationDelay: "0.5s",
            boxShadow:
              "0 0 8px rgba(254, 240, 138, 0.6), 0 0 16px rgba(254, 240, 138, 0.4), inset 0 0 4px rgba(255, 255, 255, 0.4)",
            filter: "blur(0.3px)",
          }}
        ></div>
        <div
          className="animate-pulse absolute bottom-1/6 left-1/3 w-2 h-2 bg-yellow-400 rounded-full opacity-35"
          style={{
            animationDelay: "1.2s",
            boxShadow:
              "0 0 10px rgba(251, 191, 36, 0.7), 0 0 20px rgba(251, 191, 36, 0.5), inset 0 0 5px rgba(255, 255, 255, 0.4)",
            filter: "blur(0.3px)",
          }}
        ></div>
        <div
          className="animate-pulse absolute top-2/3 right-1/5 w-2 h-2 bg-yellow-300 rounded-full opacity-25"
          style={{
            animationDelay: "2s",
            boxShadow:
              "0 0 9px rgba(253, 224, 71, 0.6), 0 0 18px rgba(253, 224, 71, 0.4), inset 0 0 4px rgba(255, 255, 255, 0.4)",
            filter: "blur(0.3px)",
          }}
        ></div>
        <div
          className="animate-pulse absolute top-1/8 left-2/3 w-1 h-1 bg-yellow-400 rounded-full opacity-40"
          style={{
            animationDelay: "2.8s",
            boxShadow:
              "0 0 6px rgba(251, 191, 36, 0.8), 0 0 12px rgba(251, 191, 36, 0.6), inset 0 0 3px rgba(255, 255, 255, 0.5)",
            filter: "blur(0.2px)",
          }}
        ></div>
        <div
          className="animate-pulse absolute bottom-1/8 right-2/3 w-1 h-1 bg-yellow-300 rounded-full opacity-35"
          style={{
            animationDelay: "3.6s",
            boxShadow:
              "0 0 5px rgba(253, 224, 71, 0.8), 0 0 10px rgba(253, 224, 71, 0.6), inset 0 0 2px rgba(255, 255, 255, 0.5)",
            filter: "blur(0.2px)",
          }}
        ></div>

        {/* Additional Depth Particles */}
        <div
          className="animate-pulse absolute top-1/5 left-1/8 w-1 h-1 bg-yellow-500 rounded-full opacity-20"
          style={{
            animationDelay: "5s",
            boxShadow:
              "0 0 4px rgba(234, 179, 8, 0.6), 0 0 8px rgba(234, 179, 8, 0.4)",
            filter: "blur(0.2px)",
          }}
        ></div>
        <div
          className="animate-pulse absolute bottom-1/5 right-1/8 w-1 h-1 bg-yellow-400 rounded-full opacity-25"
          style={{
            animationDelay: "5.8s",
            boxShadow:
              "0 0 4px rgba(251, 191, 36, 0.6), 0 0 8px rgba(251, 191, 36, 0.4)",
            filter: "blur(0.2px)",
          }}
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

          {/* Native Form Container */}
          <div className="w-full max-w-2xl mx-auto relative">
            {/* Header Section */}
            <div className="text-center space-y-8 relative pb-8 pt-12">
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
                    <span>
                      SAINTSAL<span className="text-yellow-400">™</span>
                    </span>
                    <Gem className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div className="text-white text-2xl font-bold tracking-wide">
                    <span>
                      SaintVisionAI<span className="text-yellow-400">™</span>
                    </span>
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
            </div>

            {/* Form Content */}
            <div className="space-y-8 px-4 sm:px-8 pb-12">
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
                        className="w-full px-6 py-5 text-lg border border-yellow-400/25 bg-gray-700/40 backdrop-blur-sm rounded-2xl text-gray-100 placeholder:text-gray-400 focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-400/15 transition-all duration-300 font-medium shadow-lg"
                        style={{ backgroundColor: "rgba(55, 65, 81, 0.4)" }}
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
                      className="w-full px-6 py-5 text-lg border border-yellow-400/30 bg-gray-800/60 backdrop-blur-sm rounded-2xl text-yellow-100 placeholder:text-gray-500 focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 font-medium shadow-lg"
                      style={{ backgroundColor: "rgba(31, 41, 55, 0.6)" }}
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
                      className="w-full px-6 py-5 pr-16 text-lg border border-yellow-400/30 bg-gray-800/60 backdrop-blur-sm rounded-2xl text-yellow-100 placeholder:text-gray-500 focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 font-medium shadow-lg"
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
                        className="w-full px-6 py-5 pr-16 text-lg border border-yellow-400/30 bg-gray-800/60 backdrop-blur-sm rounded-2xl text-yellow-100 placeholder:text-gray-500 focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 font-medium shadow-lg"
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
                )}

                {/* Elite Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full relative overflow-hidden text-gray-900 font-bold py-6 rounded-2xl transition-all duration-500 hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 text-xl tracking-wide group"
                  style={{
                    background:
                      "linear-gradient(135deg, #d4af37 0%, #f4d03f 50%, #d4af37 100%)",
                    boxShadow:
                      "0 0 30px rgba(212, 175, 55, 0.6), 0 0 60px rgba(212, 175, 55, 0.4), 0 0 90px rgba(212, 175, 55, 0.2), inset 0 2px 0 rgba(255, 255, 255, 0.3), inset 0 -2px 0 rgba(0, 0, 0, 0.2)",
                  }}
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
                  style={{
                    textShadow: "0 0 10px rgba(251, 191, 36, 0.3)",
                  }}
                >
                  {isSignup ? "Sign In" : "Create Elite Account"}
                </Link>
              </div>
            </div>
          </div>

          {/* Prestigious Footer */}
          <div className="text-center space-y-2">
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
      </div>
    </div>
  );
}
