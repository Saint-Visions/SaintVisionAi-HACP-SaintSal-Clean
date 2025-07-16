import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "SAINTSAL™ API is running",
    timestamp: new Date().toISOString(),
    status: "healthy",
  });
}
