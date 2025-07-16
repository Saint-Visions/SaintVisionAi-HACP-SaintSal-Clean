"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  User,
  Settings,
  Shield,
  Bell,
  Key,
  Globe,
  Palette,
  Save,
  Camera,
  Mail,
  Phone,
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [formData, setFormData] = useState({
    name: "Divine User",
    email: "user@saintsal.ai",
    phone: "+1 (555) 123-4567",
    bio: "Exploring the divine realm of AI",
    notifications: true,
    emailUpdates: true,
    darkMode: true,
    language: "en",
  });

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "security", label: "Security", icon: Shield },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "preferences", label: "Preferences", icon: Settings },
  ];

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
          className="absolute top-1/5 left-1/6 w-2 h-2 bg-yellow-400/60 rounded-full animate-pulse"
          style={{
            boxShadow:
              "0 0 20px rgba(251, 191, 36, 0.4), 0 0 40px rgba(251, 191, 36, 0.2), inset 0 0 10px rgba(255, 255, 255, 0.3)",
            filter: "blur(0.5px)",
          }}
        />
        <div
          className="absolute top-1/3 right-1/5 w-1 h-1 bg-yellow-300/80 rounded-full animate-pulse"
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

      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div
          className="w-full max-w-6xl bg-gray-900/40 backdrop-blur-md border border-yellow-400/30 rounded-3xl shadow-2xl"
          style={{
            boxShadow:
              "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 60px rgba(251, 191, 36, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Header */}
          <div className="text-center p-8 pb-6">
            <div className="flex justify-center mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fbeb96c992e5a49f4bbd354e8386d6153"
                alt="SAINTSAL™ Logo"
                className="w-16 h-16"
              />
            </div>

            <div className="mb-6">
              <div className="text-yellow-400 text-sm font-thin tracking-[0.3em] mb-2">
                SAINTSAL™
              </div>
              <div className="text-yellow-300 text-lg font-thin tracking-wide">
                Divine Settings
              </div>
            </div>

            <h1 className="text-4xl font-thin tracking-tight mb-4">
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                Account Settings
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">
              Customize your divine AI experience and manage your account
            </p>
          </div>

          <div className="flex">
            {/* Sidebar */}
            <div className="w-64 p-6 border-r border-yellow-400/20">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                        activeTab === tab.id
                          ? "bg-yellow-400/20 text-yellow-400 border border-yellow-400/30"
                          : "text-gray-300 hover:bg-gray-800/50 hover:text-yellow-300"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Content */}
            <div className="flex-1 p-8">
              {activeTab === "profile" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-thin tracking-tight text-white mb-6">
                    Profile Information
                  </h2>

                  {/* Avatar */}
                  <div className="flex items-center gap-6 mb-8">
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full border border-yellow-400/30 flex items-center justify-center">
                        <User className="w-12 h-12 text-yellow-400" />
                      </div>
                      <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors">
                        <Camera className="w-4 h-4" />
                      </button>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white">
                        {formData.name}
                      </h3>
                      <p className="text-gray-400">{formData.email}</p>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-300">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-yellow-400/20 bg-gray-900/60 backdrop-blur-sm rounded-xl text-white placeholder-gray-400 focus:border-yellow-400/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-yellow-400/20 bg-gray-900/60 backdrop-blur-sm rounded-xl text-white placeholder-gray-400 focus:border-yellow-400/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-300">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-yellow-400/20 bg-gray-900/60 backdrop-blur-sm rounded-xl text-white placeholder-gray-400 focus:border-yellow-400/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-sm font-medium text-gray-300">
                        Bio
                      </label>
                      <textarea
                        value={formData.bio}
                        onChange={(e) =>
                          setFormData({ ...formData, bio: e.target.value })
                        }
                        rows={3}
                        className="w-full px-4 py-3 border border-yellow-400/20 bg-gray-900/60 backdrop-blur-sm rounded-xl text-white placeholder-gray-400 focus:border-yellow-400/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "security" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-thin tracking-tight text-white mb-6">
                    Security Settings
                  </h2>

                  <div className="space-y-4">
                    <div className="bg-gray-900/30 border border-yellow-400/20 rounded-2xl p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Key className="w-6 h-6 text-yellow-400" />
                        <h3 className="text-lg font-medium text-white">
                          Password
                        </h3>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Last changed 30 days ago
                      </p>
                      <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-medium">
                        Change Password
                      </Button>
                    </div>

                    <div className="bg-gray-900/30 border border-yellow-400/20 rounded-2xl p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Shield className="w-6 h-6 text-green-400" />
                        <h3 className="text-lg font-medium text-white">
                          Two-Factor Authentication
                        </h3>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Add an extra layer of security to your account
                      </p>
                      <Button
                        variant="outline"
                        className="border-green-400/30 text-green-400 hover:bg-green-400/10"
                      >
                        Enable 2FA
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "notifications" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-thin tracking-tight text-white mb-6">
                    Notification Preferences
                  </h2>

                  <div className="space-y-4">
                    <div className="bg-gray-900/30 border border-yellow-400/20 rounded-2xl p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Bell className="w-6 h-6 text-yellow-400" />
                          <div>
                            <h3 className="text-lg font-medium text-white">
                              Push Notifications
                            </h3>
                            <p className="text-gray-400 text-sm">
                              Receive notifications in your browser
                            </p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.notifications}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                notifications: e.target.checked,
                              })
                            }
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400"></div>
                        </label>
                      </div>
                    </div>

                    <div className="bg-gray-900/30 border border-yellow-400/20 rounded-2xl p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Mail className="w-6 h-6 text-blue-400" />
                          <div>
                            <h3 className="text-lg font-medium text-white">
                              Email Updates
                            </h3>
                            <p className="text-gray-400 text-sm">
                              Receive product updates and news
                            </p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.emailUpdates}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                emailUpdates: e.target.checked,
                              })
                            }
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-400"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "preferences" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-thin tracking-tight text-white mb-6">
                    Application Preferences
                  </h2>

                  <div className="space-y-4">
                    <div className="bg-gray-900/30 border border-yellow-400/20 rounded-2xl p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Palette className="w-6 h-6 text-purple-400" />
                        <h3 className="text-lg font-medium text-white">
                          Theme
                        </h3>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Dark Mode</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.darkMode}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                darkMode: e.target.checked,
                              })
                            }
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-400"></div>
                        </label>
                      </div>
                    </div>

                    <div className="bg-gray-900/30 border border-yellow-400/20 rounded-2xl p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Globe className="w-6 h-6 text-green-400" />
                        <h3 className="text-lg font-medium text-white">
                          Language
                        </h3>
                      </div>
                      <select
                        value={formData.language}
                        onChange={(e) =>
                          setFormData({ ...formData, language: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-yellow-400/20 bg-gray-900/60 backdrop-blur-sm rounded-xl text-white focus:border-yellow-400/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
                      >
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                        <option value="de">Deutsch</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Save Button */}
              <div className="mt-8 pt-6 border-t border-yellow-400/20">
                <Button className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 hover:from-yellow-300 hover:to-yellow-200 font-medium px-8">
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
