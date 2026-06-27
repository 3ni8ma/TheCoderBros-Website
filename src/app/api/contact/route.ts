import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { projectType, budget, timeline, stack, name, email, company, message } = body;

    if (!projectType || !budget || !timeline || !stack || !name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (resend) {
      await resend.emails.send({
        from: "The Coder Bros <noreply@thecoderbros.com>",
        to: "hello@thecoderbros.com",
        subject: `New inquiry from ${name} — ${projectType}`,
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\nProject Type: ${projectType}\nBudget: ${budget}\nTimeline: ${timeline}\nStack: ${stack}\n\nMessage:\n${message}`,
      });
    }

    return NextResponse.json({ success: true, message: "Inquiry submitted successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to submit inquiry" }, { status: 500 });
  }
}
