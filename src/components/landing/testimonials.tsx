"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Chen",
    role: "Frontend Developer",
    avatar: "https://ui-avatars.com/api/?name=Alex+Chen&background=6366F1&color=fff&size=100",
    content:
      "The interactive labs are incredible. Being able to write and test code directly in the browser made learning so much faster.",
  },
  {
    name: "Sarah Johnson",
    role: "CS Student",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=8B5CF6&color=fff&size=100",
    content:
      "I went from zero Python knowledge to building my own project in just a few weeks. The course structure is perfect for beginners.",
  },
  {
    name: "Marcus Williams",
    role: "Software Engineer",
    avatar: "https://ui-avatars.com/api/?name=Marcus+Williams&background=F59E0B&color=fff&size=100",
    content:
      "The cheatsheets are my go-to reference at work. Every time I need to quickly look up syntax, I know where to find it.",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              What Our <span className="text-gradient-primary">Students Say</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Join thousands of developers who have leveled up with us.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-elevated p-6 relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
