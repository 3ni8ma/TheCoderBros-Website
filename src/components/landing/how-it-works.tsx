"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { BookOpen, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    title: "Learn",
    description:
      "Follow structured, interactive courses designed by experienced developers. Each lesson builds on the last.",
  },
  {
    icon: Code2,
    title: "Practice",
    description:
      "Write real code in our browser-based labs. Get instant feedback with syntax highlighting and live preview.",
  },
  {
    icon: Rocket,
    title: "Build",
    description:
      "Apply your skills to real projects. Use our cheatsheets as quick references when you need them.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="section-container">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              How It <span className="text-gradient-primary">Works</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Three simple steps to level up your coding skills.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-[#8B5CF6] p-0.5 mx-auto mb-6">
                <div className="w-full h-full rounded-[calc(0.75rem-1px)] bg-card flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
