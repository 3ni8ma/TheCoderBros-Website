"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/animated-section";
import { GlowCard } from "@/components/shared/glow-card";
import Link from "next/link";
import { FlaskConical, Monitor, Terminal } from "lucide-react";

const labs = [
  {
    slug: "frontend",
    title: "Frontend Lab",
    description: "Edit HTML, CSS, and JavaScript in real-time with a live preview iframe. Perfect for prototyping and learning web development.",
    icon: Monitor,
    color: "#22D3EE",
  },
  {
    slug: "backend",
    title: "Backend Lab",
    description: "Write and execute code in Python, JavaScript, Java, C#, or C++. See terminal-style output instantly.",
    icon: Terminal,
    color: "#D946EF",
  },
];

export default function LabsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-[#22D3EE] text-sm font-heading mb-4">
            <FlaskConical className="w-4 h-4" />
            <span>Interactive Labs</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Code <span className="text-gradient">Sandbox</span>
          </h1>
          <p className="font-heading text-zinc-400 max-w-2xl mx-auto">
            Experiment with code in real-time. Choose between frontend visual development
            or backend multi-language execution.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {labs.map((lab) => (
            <StaggerContainer key={lab.slug}>
              <StaggerItem>
                <Link href={`/labs/${lab.slug}`} className="block">
                  <GlowCard>
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                      style={{ backgroundColor: `${lab.color}15` }}>
                      <lab.icon className="w-8 h-8" style={{ color: lab.color }} />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-white mb-4">{lab.title}</h2>
                    <p className="font-heading text-zinc-400 text-sm leading-relaxed">{lab.description}</p>
                    <div className="mt-6 inline-flex items-center gap-1 text-sm font-heading font-medium"
                      style={{ color: lab.color }}>
                      Open Lab →
                    </div>
                  </div>
                </GlowCard>
                </Link>
              </StaggerItem>
            </StaggerContainer>
          ))}
        </div>
      </div>
    </div>
  );
}
