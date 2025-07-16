// SAINTSAL™ AI Chat Component for Builder.io - War Room Style
import React, { useState, useRef, useEffect } from "react";
import { Builder } from "@builder.io/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
  model?: string;
}

interface AIChatProps {
  title?: string;
  placeholder?: string;
  showModelSelector?: boolean;
  maxMessages?: number;
  apiEndpoint?: string;
  warRoomMode?: boolean;
}

const AIChat: React.FC<AIChatProps> = ({
  title = "Chat with SAINTSAL™",
  placeholder = "Ask your divine AI anything...",
  showModelSelector = true,
  maxMessages = 50,
  apiEndpoint = "/api/chat/message",
  warRoomMode = true,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content:
        "Welcome to SAINTSAL™ AI! I'm your divine assistant, ready to help you achieve greatness. What can I cook up for you today?",
      role: "assistant",
      timestamp: new Date(),
      model: "companion",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState("companion");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const models = [
    { id: "companion", name: "Companion", color: "bg-blue-500" },
    { id: "saintsal-4o", name: "SaintSal-4o", color: "bg-primary" },
    { id: "dual", name: "Dual AI", color: "bg-purple-500" },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            ...messages.slice(-10), // Keep last 10 messages for context
            { role: userMessage.role, content: userMessage.content },
          ],
          model: selectedModel,
          userId: "builder-user",
        }),
      });

      const data = await response.json();

      if (data.success) {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: data.message,
          role: "assistant",
          timestamp: new Date(),
          model: data.model || selectedModel,
        };
        setMessages((prev) => [...prev, aiMessage]);
      } else {
        throw new Error(data.error || "AI request failed");
      }
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "Sorry, I'm having trouble connecting right now. Please try again.",
        role: "assistant",
        timestamp: new Date(),
        model: "error",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card
      className={`elite-card ${warRoomMode ? "war-room-chat" : ""} h-[600px] flex flex-col`}
    >
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048"
              alt="SAINTSAL"
              className="w-8 h-8 rounded-lg"
            />
            {title}
          </CardTitle>
          <Badge className="bg-primary/20 text-primary">
            {models.find((m) => m.id === selectedModel)?.name}
          </Badge>
        </div>

        {showModelSelector && (
          <div className="flex gap-2">
            {models.map((model) => (
              <Button
                key={model.id}
                variant={selectedModel === model.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedModel(model.id)}
                className={`${model.color} ${
                  selectedModel === model.id ? "text-white" : ""
                }`}
              >
                {model.name}
              </Button>
            ))}
          </div>
        )}
      </CardHeader>

      <CardContent className="flex-1 flex flex-col space-y-4 p-4">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                } ${warRoomMode ? "shadow-lg border border-primary/20" : ""}`}
              >
                <p className="text-sm">{message.content}</p>
                <div className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString()}
                  {message.model && ` • ${message.model}`}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted text-muted-foreground p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse animation-delay-200" />
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse animation-delay-400" />
                  <span className="text-xs ml-2">
                    SAINTSAL™ is thinking...
                  </span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            placeholder={placeholder}
            className="flex-1 p-3 bg-muted rounded-lg border border-muted-foreground/20 focus:border-primary focus:outline-none"
            disabled={isLoading}
          />
          <Button
            onClick={sendMessage}
            disabled={!input.trim() || isLoading}
            className="gold-shimmer"
          >
            🚀
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Register with Builder.io
Builder.registerComponent(AIChat, {
  name: "SAINTSAL AI Chat",
  inputs: [
    {
      name: "title",
      type: "text",
      defaultValue: "Chat with SAINTSAL™",
      helperText: "Chat component title",
    },
    {
      name: "placeholder",
      type: "text",
      defaultValue: "Ask your divine AI anything...",
      helperText: "Input placeholder text",
    },
    {
      name: "showModelSelector",
      type: "boolean",
      defaultValue: true,
      helperText: "Show AI model selector buttons",
    },
    {
      name: "maxMessages",
      type: "number",
      defaultValue: 50,
      helperText: "Maximum messages to display",
    },
    {
      name: "apiEndpoint",
      type: "text",
      defaultValue: "/api/chat/message",
      helperText: "API endpoint for chat requests",
    },
    {
      name: "warRoomMode",
      type: "boolean",
      defaultValue: true,
      helperText: "Enable war room styling",
    },
  ],
});

export default AIChat;
