import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase-server";

export async function GET(
  request: NextRequest,
  { params }: { params: { section: string } },
) {
  try {
    const supabase = createServerSupabaseClient();

    // Check authentication and admin access
    const {
      data: { session },
      error: authError,
    } = await supabase.auth.getSession();

    if (authError || !session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check if user has admin access
    const { data: userProfile } = await supabase
      .from("users")
      .select("subscription_tier")
      .eq("id", session.user.id)
      .single();

    if (
      !userProfile ||
      !["admin", "pro_internal"].includes(userProfile.subscription_tier)
    ) {
      return NextResponse.json({ error: "Access denied" }, { status: 403 });
    }

    const { section } = params;

    // Generate PDF content based on section
    const pdfContent = generateTrainingPDF(section);

    return new NextResponse(pdfContent, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="saintsal-training-${section}.pdf"`,
      },
    });
  } catch (error) {
    console.error("Training API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

function generateTrainingPDF(section: string): Buffer {
  // Mock PDF generation - in production you'd use a PDF library like puppeteer or jsPDF
  const content = `
    SAINTSAL™ Training Guide - ${section.toUpperCase()}
    
    This is a comprehensive training guide for the ${section} section.
    
    Contents would include:
    - Step-by-step procedures
    - Screenshots and diagrams  
    - Troubleshooting guides
    - Best practices
    - Emergency procedures
    
    Generated on: ${new Date().toISOString()}
    Classification: Internal Use Only
  `;

  // In production, replace this with actual PDF generation
  return Buffer.from(content, "utf-8");
}

export async function POST(
  request: NextRequest,
  { params }: { params: { section: string } },
) {
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

    const { action, videoId } = await request.json();
    const { section } = params;

    if (action === "complete_video") {
      // Log video completion
      console.log(
        `User ${session.user.id} completed video ${videoId} in section ${section}`,
      );

      // Here you could:
      // 1. Store completion in database
      // 2. Send Slack notification
      // 3. Update user progress

      return NextResponse.json({ success: true });
    }

    if (action === "notify_completion") {
      // Send completion notification
      console.log(`User ${session.user.id} completed section ${section}`);

      // Here you could:
      // 1. Send Slack alert
      // 2. Send email notification
      // 3. Generate certificate

      return NextResponse.json({ success: true, message: "Notification sent" });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    console.error("Training API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
