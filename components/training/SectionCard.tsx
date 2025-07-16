"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { VideoPlayer } from "./VideoPlayer";
import {
  ChevronDown,
  ChevronUp,
  Download,
  CheckCircle,
  Clock,
  Play,
} from "lucide-react";
import { TrainingSection } from "@/lib/training/data";

interface SectionCardProps {
  section: TrainingSection;
  onVideoComplete?: (videoId: string) => void;
  onDownload?: (sectionId: string) => void;
}

export function SectionCard({
  section,
  onVideoComplete,
  onDownload,
}: SectionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [completedVideos, setCompletedVideos] = useState<Set<string>>(
    new Set(),
  );

  const handleVideoComplete = (videoId: string) => {
    setCompletedVideos((prev) => new Set([...prev, videoId]));
    onVideoComplete?.(videoId);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500/20 text-green-400";
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-400";
      case "Advanced":
        return "bg-red-500/20 text-red-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  const completionRate = Math.round(
    (completedVideos.size / section.videos.length) * 100,
  );

  return (
    <Card className="bg-background/50 border-primary/30 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-4xl">{section.icon}</div>
            <div>
              <CardTitle className="text-xl flex items-center gap-3">
                {section.title}
                <Badge className={getDifficultyColor(section.difficulty)}>
                  {section.difficulty}
                </Badge>
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                {section.description}
              </p>
              <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {section.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Play className="w-4 h-4" />
                  {section.videos.length} videos
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle
                    className={`w-4 h-4 ${
                      completionRate === 100 ? "text-green-400" : ""
                    }`}
                  />
                  {completionRate}% complete
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {section.downloadUrl && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => onDownload?.(section.id)}
              >
                <Download className="w-4 h-4 mr-2" />
                PDF
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-muted/30 rounded-full h-2 mt-4">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${completionRate}%` }}
          />
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent>
          <div className="space-y-6">
            {/* Video List */}
            <div className="grid gap-4">
              {section.videos.map((video) => (
                <Card
                  key={video.id}
                  className={`bg-background/30 border-muted/30 cursor-pointer transition-all ${
                    selectedVideo === video.id
                      ? "border-primary/50 bg-primary/5"
                      : "hover:border-primary/30"
                  }`}
                  onClick={() =>
                    setSelectedVideo(
                      selectedVideo === video.id ? null : video.id,
                    )
                  }
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            completedVideos.has(video.id)
                              ? "bg-green-500/20 text-green-400"
                              : "bg-primary/20 text-primary"
                          }`}
                        >
                          {completedVideos.has(video.id) ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            <Play className="w-4 h-4" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-medium">{video.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {video.description}
                          </p>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {video.duration}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Video Player */}
            {selectedVideo && (
              <div className="mt-6">
                {(() => {
                  const video = section.videos.find(
                    (v) => v.id === selectedVideo,
                  );
                  return video ? (
                    <VideoPlayer
                      videoUrl={video.videoUrl}
                      type={video.type}
                      title={video.title}
                      onComplete={() => handleVideoComplete(video.id)}
                    />
                  ) : null;
                })()}
              </div>
            )}

            {/* Section Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-muted/30">
              <div className="text-sm text-muted-foreground">
                {completedVideos.size} of {section.videos.length} videos
                completed
              </div>
              <div className="flex gap-2">
                {completionRate === 100 && (
                  <Badge className="bg-green-500/20 text-green-400">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Completed
                  </Badge>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    section.videos.forEach((video) => {
                      setCompletedVideos(
                        (prev) => new Set([...prev, video.id]),
                      );
                    });
                  }}
                >
                  Mark All Complete
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
}
