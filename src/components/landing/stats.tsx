"use client";

import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedSection } from "@/components/shared/animated-section";
import { AnimatedCounter } from "@/components/shared/animated-counter";

const statCards = [
  { value: 6, suffix: "+", label: "Languages" },
  { value: 30, suffix: "+", label: "Lessons" },
  { value: 200, suffix: "+", label: "Code Examples" },
  { value: 100, suffix: "%", label: "Hands-On" },
];

export function Stats() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <SectionHeader
          title="Learning by the numbers"
          description="Real curriculum, real examples, zero filler. Track your progress as you ship code."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {statCards.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.08}>
              <div className="glass-card p-6 text-center">
                <p className="text-4xl sm:text-5xl font-bold text-gradient-primary">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}