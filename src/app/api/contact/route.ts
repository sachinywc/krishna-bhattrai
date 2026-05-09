import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await request.formData();
  
  // Send email using Resend, SendGrid, or your preferred service
  // Example with Resend:
  // await resend.emails.send({ ... })
  
  return NextResponse.json({ success: true });
}