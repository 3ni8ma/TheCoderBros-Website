"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import {
  Monitor,
  BookOpen,
  Beaker,
  Cloud,
  MessageSquare,
  Box,
} from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Interactive Courses",
    description:
      "Step-by-step lessons with real code examples. Learn at your own pace with structured content.",
  },
  {
    icon: BookOpen,
    title: "Smart Cheatsheets",
    description:
      "Quick syntax references for every language. Search, filter, and copy code snippets instantly.",
  },
  {
    icon: Beaker,
    title: "Code Sandbox",
    description:
      "Experiment with HTML, CSS, and JavaScript in our browser-based frontend lab with live preview.",
  },
  {
    icon: Cloud,
    title: "SaaS Solutions",
    description:
      "From concept to deployment. We build scalable software solutions for startups and enterprises.",
  },
  {
    icon: MessageSquare,
    title: "Real-time Feedback",
    description:
      "Get immediate results from code execution and see your changes live as you type.",
  },
  {
    icon: Box,
    title: "Modern Stack",
    description:
      "Learn industry-standard tools and frameworks. Python, React, Node.js, and more.",
  },
];

export function Features() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              Everything You Need to <span className="text-gradient-primary">Succeed</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              A complete platform for learning and building with modern technology.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card-elevated p-6"
            >
              <feature.icon className="w-5 h-5 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
