"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { BookOpen, FileCode, Beaker, GraduationCap } from "lucide-react";

const stats = [
  { icon: BookOpen, end: 6, suffix: "+", label: "Languages" },
  { icon: FileCode, end: 30, suffix: "+", label: "Lessons" },
  { icon: Beaker, end: 200, suffix: "+", label: "Code Examples" },
  { icon: GraduationCap, end: 100, suffix: "%", label: "Hands-On" },
];

export function Stats() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-elevated p-6 text-center"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <div className="text-3xl sm:text-4xl font-bold text-foreground">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
