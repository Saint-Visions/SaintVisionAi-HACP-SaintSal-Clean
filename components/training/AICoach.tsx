"use client";

import { useState } from "react";
import { Bot, MessageCircle, Sparkles, X, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrainingSection, TrainingVideo } from "@/lib/training/data";

interface AICoachProps {
  section?: TrainingSection;
  video?: TrainingVideo;
  onClose: () => void;
}

export function AICoach({ section, video, onClose }: AICoachProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState<
    Array<{ role: "user" | "assistant"; content: string; timestamp: Date }>
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  // Generate AI explanations based on the content
  const generateExplanation = (content: TrainingSection | TrainingVideo) => {
    if ("videos" in content) {
      // This is a section
      return `Welcome to the "${content.title}" section! 🎯

This ${content.difficulty.toLowerCase()}-level section covers essential aspects of ${content.description.toLowerCase()}.

📚 **What you'll learn:**
${content.videos.map((v) => `• ${v.title} (${v.duration})`).join("\n")}

💡 **SAINTSAL™ Pro Tips:**
- Take notes on key concepts for your certification
- Practice the techniques shown in real scenarios  
- Reference the downloadable materials for quick lookup
- Complete all videos to unlock advanced features

Ready to dive in? Let me know if you have any questions! 🚀`;
    } else {
      // This is a video
      return `Let's explore "${content.title}"! 🎬

📋 **Video Overview:**
${content.description}

⏱️ **Duration:** ${content.duration}
🏷️ **Key Topics:** ${content.tags?.join(", ")}

🧠 **What SAINTSAL™ teaches here:**
This video is crucial for understanding how the platform handles these specific workflows. Pay attention to the step-by-step processes and note any admin-specific actions.

💬 **Ask me anything about:**
- Specific steps or concepts
- How this relates to other sections
- Real-world applications
- Troubleshooting scenarios

Ready to watch and learn? 🔥`;
    }
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;
    setMessage("");
    setIsLoading(true);

    // Add user message
    const newConversation = [
      ...conversation,
      { role: "user" as const, content: userMessage, timestamp: new Date() },
    ];
    setConversation(newConversation);

    try {
      // Simulate AI response (in real implementation, this would call your AI API)
      setTimeout(() => {
        const aiResponse = generateAIResponse(userMessage, section, video);
        setConversation((prev) => [
          ...prev,
          {
            role: "assistant" as const,
            content: aiResponse,
            timestamp: new Date(),
          },
        ]);
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      setIsLoading(false);
      setConversation((prev) => [
        ...prev,
        {
          role: "assistant" as const,
          content:
            "Sorry, I'm having trouble connecting right now. Please try again!",
          timestamp: new Date(),
        },
      ]);
    }
  };

  const generateAIResponse = (
    query: string,
    section?: TrainingSection,
    video?: TrainingVideo,
  ) => {
    const lowerQuery = query.toLowerCase();

    if (lowerQuery.includes("explain") || lowerQuery.includes("what")) {
      return `Great question! Let me break this down for you:

${video ? `In "${video.title}"` : `In the "${section?.title}" section`}, the key concept is about ${lowerQuery.includes("stripe") ? "payment processing and subscription management" : lowerQuery.includes("webhook") ? "automated workflows and real-time notifications" : lowerQuery.includes("ai") ? "our dual-brain AI architecture (GPT-4 + Azure)" : "platform administration and user management"}.

🔍 **Key Points:**
• This directly impacts how ${lowerQuery.includes("client") ? "clients experience the platform" : "admins manage the system"}
• Remember to ${lowerQuery.includes("emergency") ? "follow the exact protocols shown" : "practice these steps in a safe environment"}
• This connects to ${lowerQuery.includes("billing") ? "the Stripe integration section" : "other sections in your training"}

💡 **Pro Tip:** ${lowerQuery.includes("troubleshoot") ? "Always check the logs first!" : "Document any questions for your certification review!"}

What specific aspect would you like me to elaborate on? 🤔`;
    }

    if (lowerQuery.includes("how")) {
      return `Excellent question! Here's the step-by-step process:

🔧 **The SAINTSAL™ Way:**
1. First, understand the context (what you're trying to achieve)
2. Follow the exact sequence shown in the video
3. Verify each step before moving to the next
4. Document any issues or variations you notice

⚠️ **Important Notes:**
• Always test in a safe environment first
• Keep the admin guidelines handy
• Remember the enterprise vs pro tier differences
• When in doubt, escalate properly

🎯 **Real-world application:**
This technique is especially useful when ${lowerQuery.includes("client") ? "handling client escalations" : "managing system configurations"}.

Need me to walk through any specific step? 🚀`;
    }

    // Default response
    return `That's a thoughtful question! 🤔

Based on what we're covering in ${video?.title || section?.title}, here's my insight:

The SAINTSAL™ platform is designed with both power and simplicity in mind. Every feature you're learning about has been battle-tested with real clients and real scenarios.

🧠 **Remember:**
• Each section builds on the previous ones
• Admin actions have immediate impact
• The AI systems learn from every interaction
• Your certification unlocks advanced capabilities

💬 **Keep the questions coming!** I'm here to help you master every aspect of platform administration.

What would you like to explore next? ✨`;
  };

  const currentContent = video || section;
  if (!currentContent) return null;

  return (
    <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30 mb-6">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Bot className="w-8 h-8 text-purple-400" />
              <Sparkles className="w-4 h-4 text-pink-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <div>
              <CardTitle className="text-lg text-purple-300">
                🧠 SAINTSAL™ AI Coach
              </CardTitle>
              <p className="text-sm text-purple-200/80">
                Personalized training insights powered by GPT-4
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/40">
              Active
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-purple-300 hover:text-purple-200"
            >
              <MessageCircle className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-purple-300 hover:text-purple-200"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {/* AI Explanation */}
        <div className="mb-4 p-4 rounded-lg bg-background/50 border border-purple-500/20">
          <div className="flex items-start gap-3">
            <Bot className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
            <div className="text-sm text-purple-100 whitespace-pre-line">
              {generateExplanation(currentContent)}
            </div>
          </div>
        </div>

        {/* Conversation */}
        {isExpanded && (
          <div className="space-y-4">
            {conversation.length > 0 && (
              <div className="max-h-60 overflow-y-auto space-y-3 p-3 rounded-lg bg-background/30">
                {conversation.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground ml-auto"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      <div className="whitespace-pre-line">{msg.content}</div>
                      <div className="text-xs opacity-70 mt-1">
                        {msg.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Chat Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask SAINTSAL™ anything about this content..."
                className="flex-1 px-3 py-2 rounded-lg bg-background/50 border border-purple-500/30 text-sm text-foreground placeholder:text-muted-foreground focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!message.trim() || isLoading}
                size="sm"
                className="bg-purple-500 hover:bg-purple-600"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
