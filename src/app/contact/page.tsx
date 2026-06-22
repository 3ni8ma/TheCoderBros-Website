"use client";

import { AnimatedSection } from "@/components/shared/animated-section";
import { MultiStepForm } from "@/components/contact/multi-step-form";
import { MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-[#22D3EE] text-sm font-heading mb-4">
            <MessageSquare className="w-4 h-4" />
            <span>Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Let&apos;s Build Something <span className="text-gradient">Amazing</span>
          </h1>
          <p className="font-heading text-zinc-400 max-w-2xl mx-auto">
            Have a project in mind? Fill out the form below and we&apos;ll get back to you
            within 24 hours with a custom proposal.
          </p>
        </AnimatedSection>

        <MultiStepForm />
      </div>
    </div>
  );
}
