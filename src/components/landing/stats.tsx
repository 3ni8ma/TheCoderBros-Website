"use client";

import { SectionHeader } from "@/components/shared/section-header";
import { SplitFlapDisplay } from "@/components/ui/split-flap-display";

const boardRows = [
  { label: "Languages", value: "6+" },
  { label: "Lessons", value: "30+" },
  { label: "Code Examples", value: "200+" },
  { label: "Hands-On", value: "100%" },
];

export function Stats() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <SectionHeader
          title="Learning by the numbers"
          description="Real curriculum, real examples, zero filler. Track your progress as you ship code."
          align="center"
        />
        <div className="md:hidden flex justify-center">
          <SplitFlapDisplay
            size="sm"
            accentColor="#6366F1"
            rows={boardRows}
          />
        </div>
        <div className="hidden md:flex justify-center">
          <SplitFlapDisplay
            size="md"
            accentColor="#6366F1"
            rows={boardRows}
          />
        </div>
      </div>
    </section>
  );
}