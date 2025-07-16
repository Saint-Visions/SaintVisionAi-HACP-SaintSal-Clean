"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, Maximize } from "lucide-react";

interface VideoPlayerProps {
  videoUrl: string;
  type: "youtube" | "vimeo" | "local";
  title: string;
  onComplete?: () => void;
}

export function VideoPlayer({
  videoUrl,
  type,
  title,
  onComplete,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const getEmbedUrl = (url: string, type: string) => {
    switch (type) {
      case "youtube":
        const youtubeId = url.includes("youtu.be")
          ? url.split("/").pop()
          : url.split("v=")[1]?.split("&")[0];
        return `https://www.youtube.com/embed/${youtubeId}?autoplay=0&rel=0`;
      case "vimeo":
        const vimeoId = url.split("/").pop();
        return `https://player.vimeo.com/video/${vimeoId}`;
      default:
        return url;
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    onComplete?.();
  };

  return (
    <div className="relative bg-background/50 rounded-lg overflow-hidden border border-primary/20">
      {/* Video Container */}
      <div className="relative aspect-video bg-black">
        {type === "local" ? (
          <video
            className="w-full h-full"
            controls
            onEnded={handleVideoEnd}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <iframe
            src={getEmbedUrl(videoUrl, type)}
            title={title}
            className="w-full h-full"
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        )}

        {/* Overlay for local videos */}
        {type === "local" && !isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <Button
              size="lg"
              className="rounded-full w-16 h-16 bg-primary hover:bg-primary/90"
              onClick={() => setIsPlaying(true)}
            >
              <Play className="w-8 h-8 ml-1" />
            </Button>
          </div>
        )}
      </div>

      {/* Video Info */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>

        {/* Controls for local videos */}
        {type === "local" && (
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </Button>
            <Button variant="outline" size="sm">
              <Volume2 className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Maximize className="w-4 h-4" />
            </Button>
          </div>
        )}

        {/* External link for YouTube/Vimeo */}
        {type !== "local" && (
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(videoUrl, "_blank")}
            >
              Open in {type === "youtube" ? "YouTube" : "Vimeo"}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleVideoEnd}
              className="bg-green-500/20 hover:bg-green-500/30 text-green-400"
            >
              Mark Complete
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
