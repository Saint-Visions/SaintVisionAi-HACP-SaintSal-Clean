"use client";

import { useState } from "react";
import WorkspaceLayout from "@/components/WorkspaceLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionCard } from "@/components/training/SectionCard";
import { TrainingSearch } from "@/components/training/TrainingSearch";
import { AICoach } from "@/components/training/AICoach";
import { trainingData } from "@/lib/training/data";
import {
  GraduationCap,
  Users,
  Clock,
  Award,
  Download,
  Send,
  BarChart3,
  TrendingUp,
  UserCheck,
} from "lucide-react";

export default function AdminTrainingPage() {
  const [aiCoachEnabled, setAICoachEnabled] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [showAnalytics, setShowAnalytics] = useState(false);

  const handleVideoComplete = (videoId: string) => {
    console.log(`Video completed: ${videoId}`);
    // Here you could trigger Slack notification or email
  };

  const handleDownload = (sectionId: string) => {
    console.log(`Download requested for: ${sectionId}`);
    // Here you could generate and download PDF
  };

  const handleNotifyCompletion = () => {
    console.log("Sending completion notification");
    // Trigger Slack alert + email when training completed
  };

  const handleSearchResult = (sectionId: string, videoId?: string) => {
    setSelectedSection(sectionId);
    setSelectedVideo(videoId || null);

    // Scroll to the section
    const element = document.getElementById(`section-${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const totalVideos = trainingData.reduce(
    (acc, section) => acc + section.videos.length,
    0,
  );
  const totalDuration = trainingData.reduce((acc, section) => {
    const minutes = parseInt(section.duration.split(" ")[0]);
    return acc + minutes;
  }, 0);

  return (
    <WorkspaceLayout>
      <div
        className="min-h-screen relative overflow-hidden charcoal-depth parallax parallax-bg"
        style={{
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2Fff0733af4a2e4a0b8c3ec5843ef9720e)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Enhanced Divine Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/50 z-1" />

        {/* Floating Gold Particles */}
        <div className="absolute inset-0 gold-particles z-2" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <GraduationCap className="w-12 h-12 text-primary" />
              <div>
                <h1 className="text-4xl font-bold text-primary">
                  Admin Training Center
                </h1>
                <p className="text-xl text-muted-foreground">
                  Complete SAINTSAL™ platform training and certification
                </p>
              </div>
              <Badge className="bg-red-500/20 text-red-400 border-red-500/40 ml-auto">
                Admin Only
              </Badge>
            </div>
          </div>

          {/* Training Overview */}
          <div className="grid md:grid-cols-5 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-400">
                  {trainingData.length}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Training Sections
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/30">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-400">
                  {Math.floor(totalDuration / 60)}h {totalDuration % 60}m
                </h3>
                <p className="text-sm text-muted-foreground">Total Duration</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30">
              <CardContent className="p-6 text-center">
                <Award className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-purple-400">
                  {totalVideos}
                </h3>
                <p className="text-sm text-muted-foreground">Training Videos</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border-yellow-500/30">
              <CardContent className="p-6 text-center">
                <GraduationCap className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-yellow-400">0%</h3>
                <p className="text-sm text-muted-foreground">
                  Progress Complete
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 border-orange-500/30 cursor-pointer hover:from-orange-500/30 hover:to-orange-600/30 transition-all"
              onClick={() => setShowAnalytics(!showAnalytics)}
            >
              <CardContent className="p-6 text-center">
                <BarChart3 className="w-8 h-8 text-orange-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-orange-400">📊</h3>
                <p className="text-sm text-muted-foreground">Analytics</p>
              </CardContent>
            </Card>
          </div>

          {/* Analytics Dashboard */}
          {showAnalytics && (
            <Card className="mb-8 bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/30">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-400 flex items-center gap-3">
                  <BarChart3 className="w-8 h-8" />
                  📊 Training Analytics Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <Card className="bg-background/50 border-green-500/30">
                    <CardContent className="p-4 text-center">
                      <UserCheck className="w-6 h-6 text-green-400 mx-auto mb-2" />
                      <h4 className="text-lg font-bold text-green-400">3</h4>
                      <p className="text-sm text-muted-foreground">
                        Admins Completed
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-background/50 border-blue-500/30">
                    <CardContent className="p-4 text-center">
                      <TrendingUp className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <h4 className="text-lg font-bold text-blue-400">87%</h4>
                      <p className="text-sm text-muted-foreground">
                        Avg Completion
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-background/50 border-purple-500/30">
                    <CardContent className="p-4 text-center">
                      <Clock className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                      <h4 className="text-lg font-bold text-purple-400">
                        4.2h
                      </h4>
                      <p className="text-sm text-muted-foreground">Avg Time</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">
                    Recent Completions:
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-background/30 border border-muted">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                          <span className="text-sm">👑</span>
                        </div>
                        <div>
                          <p className="font-medium">Admin Sarah</p>
                          <p className="text-sm text-muted-foreground">
                            Completed: Webhooks 101
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-green-500/20 text-green-400">
                        2h ago
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-background/30 border border-muted">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <span className="text-sm">🛠️</span>
                        </div>
                        <div>
                          <p className="font-medium">Admin Marcus</p>
                          <p className="text-sm text-muted-foreground">
                            Started: Admin Tools
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-blue-500/20 text-blue-400">
                        1d ago
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-background/30 border border-muted">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                          <span className="text-sm">🎆</span>
                        </div>
                        <div>
                          <p className="font-medium">Admin Lisa</p>
                          <p className="text-sm text-muted-foreground">
                            Certified: Full Training
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-purple-500/20 text-purple-400">
                        3d ago
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Search Component */}
          <TrainingSearch
            sections={trainingData}
            onResultSelect={handleSearchResult}
            onAICoachMode={setAICoachEnabled}
            aiCoachEnabled={aiCoachEnabled}
          />

          {/* AI Coach */}
          {aiCoachEnabled && (selectedSection || selectedVideo) && (
            <AICoach
              section={trainingData.find((s) => s.id === selectedSection)}
              video={
                selectedSection
                  ? trainingData
                      .find((s) => s.id === selectedSection)
                      ?.videos.find((v) => v.id === selectedVideo)
                  : undefined
              }
              onClose={() => {
                setSelectedSection(null);
                setSelectedVideo(null);
              }}
            />
          )}

          {/* Quick Actions */}
          <Card className="mb-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Training Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center gap-4">
                <Button className="bg-primary hover:bg-primary/90">
                  <Download className="w-4 h-4 mr-2" />
                  Download All PDFs
                </Button>
                <Button variant="outline">
                  <Send className="w-4 h-4 mr-2" />
                  Notify Team
                </Button>
                <Button variant="outline">Reset Progress</Button>
                <Button variant="outline">Export Certificate</Button>
              </div>
            </CardContent>
          </Card>

          {/* Training Sections */}
          <div className="space-y-6">
            {trainingData.map((section) => (
              <div key={section.id} id={`section-${section.id}`}>
                <SectionCard
                  section={section}
                  onVideoComplete={handleVideoComplete}
                  onDownload={handleDownload}
                />
              </div>
            ))}
          </div>

          {/* Completion Actions */}
          <Card className="mt-8 bg-gradient-to-r from-green-500/10 to-green-600/10 border-green-500/30">
            <CardContent className="p-8 text-center">
              <Award className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Complete Your Training
              </h3>
              <p className="text-muted-foreground mb-6">
                Finish all sections to receive your SAINTSAL™ Admin
                Certification and unlock advanced features.
              </p>
              <div className="flex justify-center gap-4">
                <Button
                  className="bg-green-500 hover:bg-green-600"
                  onClick={handleNotifyCompletion}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Request Certification
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Certificate
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </WorkspaceLayout>
  );
}
