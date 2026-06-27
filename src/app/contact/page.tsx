"use client";

import { SectionHeader } from "@/components/shared/section-header";
import { MultiStepForm } from "@/components/contact/multi-step-form";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="section-container">
        <SectionHeader
          title="Let's Build Something Amazing"
          description="Have a project in mind? Fill out the form below and we'll get back to you within 24 hours with a custom proposal."
        />

        <div className="max-w-2xl mx-auto">
          <MultiStepForm />
        </div>
      </div>
    </div>
  );
}
