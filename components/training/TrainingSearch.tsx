"use client";

import { useState, useMemo } from "react";
import { Search, Filter, X, Bot, Brain, Sparkles } from "lucide-react";
import { TrainingSection, TrainingVideo } from "@/lib/training/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface TrainingSearchProps {
  sections: TrainingSection[];
  onResultSelect: (sectionId: string, videoId?: string) => void;
  onAICoachMode: (enabled: boolean) => void;
  aiCoachEnabled: boolean;
}

export function TrainingSearch({
  sections,
  onResultSelect,
  onAICoachMode,
  aiCoachEnabled,
}: TrainingSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(
    null,
  );
  const [showResults, setShowResults] = useState(false);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    sections.forEach((section) => {
      section.tags?.forEach((tag) => tags.add(tag));
      section.videos.forEach((video) => {
        video.tags?.forEach((tag) => tags.add(tag));
      });
    });
    return Array.from(tags).sort();
  }, [sections]);

  // Search functionality
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    const results: Array<{
      type: "section" | "video";
      section: TrainingSection;
      video?: TrainingVideo;
      matchScore: number;
    }> = [];

    sections.forEach((section) => {
      // Skip if difficulty filter doesn't match
      if (selectedDifficulty && section.difficulty !== selectedDifficulty)
        return;

      // Check section matches
      const sectionMatches = [
        section.title.toLowerCase().includes(query),
        section.description.toLowerCase().includes(query),
        section.tags?.some((tag) => tag.toLowerCase().includes(query)),
      ].filter(Boolean).length;

      if (sectionMatches > 0) {
        results.push({
          type: "section",
          section,
          matchScore: sectionMatches * 10,
        });
      }

      // Check video matches
      section.videos.forEach((video) => {
        const videoMatches = [
          video.title.toLowerCase().includes(query),
          video.description.toLowerCase().includes(query),
          video.tags?.some((tag) => tag.toLowerCase().includes(query)),
        ].filter(Boolean).length;

        if (videoMatches > 0) {
          results.push({
            type: "video",
            section,
            video,
            matchScore: videoMatches * 5,
          });
        }
      });
    });

    return results.sort((a, b) => b.matchScore - a.matchScore).slice(0, 12);
  }, [searchQuery, sections, selectedDifficulty]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setShowResults(false);
    setSelectedDifficulty(null);
  };

  return (
    <div className="mb-8">
      {/* AI Coach Mode Toggle */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-primary">
          🔍 Search & AI Coach
        </h2>
        <Button
          onClick={() => onAICoachMode(!aiCoachEnabled)}
          className={`transition-all duration-300 ${
            aiCoachEnabled
              ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              : "bg-muted hover:bg-muted/80"
          }`}
        >
          <Bot className="w-4 h-4 mr-2" />
          AI Coach Mode {aiCoachEnabled ? "ON" : "OFF"}
          {aiCoachEnabled && (
            <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
          )}
        </Button>
      </div>

      {/* AI Coach Explanation */}
      {aiCoachEnabled && (
        <Card className="mb-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/30">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Brain className="w-6 h-6 text-purple-400" />
              <div>
                <p className="text-purple-300 font-medium">
                  AI Coach Mode Active
                </p>
                <p className="text-sm text-purple-200/80">
                  SAINTSAL™ will explain each section and provide personalized
                  insights via GPT-4
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex gap-4 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium text-foreground mb-2">
              Search Videos & Sections
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, topic, or tag..."
                className="w-full pl-10 pr-4 py-3 border border-primary/30 bg-background/80 backdrop-blur-sm rounded-xl text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>

          <div className="min-w-[140px]">
            <label className="block text-sm font-medium text-foreground mb-2">
              Difficulty
            </label>
            <select
              value={selectedDifficulty || ""}
              onChange={(e) => setSelectedDifficulty(e.target.value || null)}
              className="w-full px-3 py-3 border border-primary/30 bg-background/80 backdrop-blur-sm rounded-xl text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            >
              <option value="">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <Button type="submit" className="px-6 py-3">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>

          {(searchQuery || selectedDifficulty) && (
            <Button
              type="button"
              variant="outline"
              onClick={clearSearch}
              className="px-4 py-3"
            >
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>
      </form>

      {/* Popular Tags */}
      <div className="mb-6">
        <p className="text-sm text-muted-foreground mb-3">Popular tags:</p>
        <div className="flex flex-wrap gap-2">
          {allTags.slice(0, 12).map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="cursor-pointer hover:bg-primary/20 transition-colors"
              onClick={() => {
                setSearchQuery(tag);
                setShowResults(true);
              }}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Search Results */}
      {showResults && searchResults.length > 0 && (
        <Card className="bg-background/95 backdrop-blur-sm border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">
                Search Results ({searchResults.length})
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowResults(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-3">
              {searchResults.map((result, index) => (
                <div
                  key={`${result.section.id}-${result.video?.id || "section"}-${index}`}
                  className="p-4 rounded-lg bg-muted/50 hover:bg-muted/80 cursor-pointer transition-colors border border-muted"
                  onClick={() =>
                    onResultSelect(result.section.id, result.video?.id)
                  }
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">{result.section.icon}</span>
                        <Badge
                          variant={
                            result.type === "section" ? "default" : "secondary"
                          }
                        >
                          {result.type === "section" ? "Section" : "Video"}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {result.section.difficulty}
                        </Badge>
                      </div>

                      <h4 className="font-medium text-foreground mb-1">
                        {result.video?.title || result.section.title}
                      </h4>

                      <p className="text-sm text-muted-foreground mb-2">
                        {result.video?.description ||
                          result.section.description}
                      </p>

                      {result.type === "video" && (
                        <p className="text-xs text-muted-foreground">
                          From: {result.section.title} •{" "}
                          {result.video?.duration}
                        </p>
                      )}
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">
                        {result.type === "section"
                          ? result.section.duration
                          : result.video?.duration}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {showResults && searchResults.length === 0 && (
        <Card className="bg-background/95 backdrop-blur-sm border-muted">
          <CardContent className="p-6 text-center">
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No results found</h3>
            <p className="text-muted-foreground">
              Try different keywords or remove the difficulty filter
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
