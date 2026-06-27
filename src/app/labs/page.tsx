"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/section-header";
import { Monitor, Terminal, ArrowRight } from "lucide-react";

const labs = [
  {
    slug: "frontend",
    title: "Frontend Lab",
    description:
      "Edit HTML, CSS, and JavaScript in real-time with a live preview. Perfect for prototyping and learning web development.",
    icon: Monitor,
  },
  {
    slug: "backend",
    title: "Backend Lab",
    description:
      "Write and execute code in Python, JavaScript, Java, C#, or C++. See terminal-style output instantly.",
    icon: Terminal,
  },
];

export default function LabsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="section-container">
        <SectionHeader
          title="Code Sandbox"
          description="Experiment with code in real-time. Choose between frontend visual development or backend multi-language execution."
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {labs.map((lab, i) => (
            <motion.div
              key={lab.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link href={`/labs/${lab.slug}`} className="block group">
                <div className="card-elevated p-8 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <lab.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">
                    {lab.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {lab.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Open Lab <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
