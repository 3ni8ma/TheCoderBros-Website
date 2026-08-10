"use client";

import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do I need any experience to start?",
    a: "None at all. Every course starts from zero and walks through the fundamentals with runnable examples. If you can click and type, you can start today — the labs grade nothing, they just let you experiment safely.",
  },
  {
    q: "How do the interactive labs work?",
    a: "Labs embed a Monaco editor right in the page. You write or edit code in your browser and it runs on our sandboxed backend, so you get real output without installing anything. Perfect for trying an example, breaking it, and learning from the error messages.",
  },
  {
    q: "Are the courses really free?",
    a: "Yes. The core curriculum for all six languages is free forever, including cheatsheets and every code example. The Coder Bros is funded through our SaaS development services, which lets us keep the education open.",
  },
  {
    q: "How do I earn a course certificate?",
    a: "Finish every lesson in a course track and a completion certificate unlocks automatically. Create a free account with your email, and your progress — lessons completed, favorites, and certificates — stays synced across devices.",
  },
  {
    q: "Are the cheatsheets useful after learning?",
    a: "That's the point. The 45+ cheatsheets are terse, copy-paste references organized by language and topic. Professionals tell us they keep the tabs open at work for quick syntax lookups.",
  },
  {
    q: "Can you build software for my business?",
    a: "Yes — The Coder Bros also runs a development studio. Whether it's a web app, dashboard, or automation, reach out through the contact page with your idea and we'll reply with honest scope and pricing.",
  },
];

export function FAQ() {
  return (
    <section className="section-padding">
      <div className="section-container max-w-3xl">
        <SectionHeader
          title="Frequently Asked Questions"
          description="Everything learners and clients ask us, answered."
          align="center"
        />
        <AnimatedSection>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group card-elevated p-5 open:bg-border/30 transition-colors"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none select-none">
                  <span className="font-medium text-foreground text-sm sm:text-base">{f.q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}