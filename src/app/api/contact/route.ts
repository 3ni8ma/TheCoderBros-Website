import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { projectType, budget, timeline, stack, name, email, company, message } = body;

    if (!projectType || !budget || !timeline || !stack || !name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Save to database
    await prisma.contactSubmission.create({
      data: { projectType, budget, timeline, stack, name, email, company: company || "", message },
    });

    // Log the submission (in production, send email via Resend)
    console.log("New contact submission:", { name, email, projectType, budget });

    return NextResponse.json({ success: true, message: "Inquiry submitted successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to submit inquiry" }, { status: 500 });
  }
}
