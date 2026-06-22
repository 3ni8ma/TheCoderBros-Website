"use client";

import { BookOpen, FileCode, FlaskConical, MessageSquare, Sparkles, Zap } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/animated-section";
import { GlowCard } from "@/components/shared/glow-card";

const features = [
  { icon: BookOpen, title: "Interactive Courses", description: "Step-by-step lessons with runnable code examples. Learn by doing, not just watching.", color: "#D946EF" },
  { icon: FileCode, title: "Smart Cheatsheets", description: "Quick-reference guides with syntax highlighting and one-click copy for every language.", color: "#6366F1" },
  { icon: FlaskConical, title: "Code Sandbox", description: "Browser-based IDE with live preview and multi-language code execution engine.", color: "#22D3EE" },
  { icon: MessageSquare, title: "SaaS Solutions", description: "Custom software development, integration, and digital solutions for your business.", color: "#D946EF" },
  { icon: Zap, title: "Real-time Feedback", description: "Instant code execution results with terminal-style output and live preview rendering.", color: "#6366F1" },
  { icon: Sparkles, title: "Modern Stack", description: "Learn industry-standard tools: Python, JavaScript, Java, C#, C++, and modern frameworks.", color: "#22D3EE" },
];

export function Features() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            Everything You Need to <span className="text-gradient">Master Code</span>
          </h2>
          <p className="font-heading text-zinc-400 max-w-2xl mx-auto">
            From interactive lessons to real-time code execution, we provide the tools and content to accelerate your programming journey.
          </p>
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <GlowCard>
                <div className="p-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${feature.color}15` }}>
                    <feature.icon className="w-5 h-5" style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm font-heading text-zinc-400 leading-relaxed">{feature.description}</p>
                </div>
              </GlowCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
