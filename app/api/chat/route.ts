import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase-server";

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient();

    // Check authentication
    const {
      data: { session },
      error: authError,
    } = await supabase.auth.getSession();

    if (authError || !session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { message, model = "gpt-4o" } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    // Here you would integrate with OpenAI/Azure APIs
    // For now, return a mock response
    const response = {
      id: `chat_${Date.now()}`,
      message: `AI Response to: ${message}`,
      model,
      timestamp: new Date().toISOString(),
      usage: {
        prompt_tokens: message.length,
        completion_tokens: 50,
        total_tokens: message.length + 50,
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
