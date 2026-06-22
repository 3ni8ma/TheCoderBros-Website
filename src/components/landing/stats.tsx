"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";

const stats = [
  { value: 6, suffix: "+", label: "Programming Languages" },
  { value: 30, suffix: "+", label: "Interactive Lessons" },
  { value: 200, suffix: "+", label: "Code Examples" },
  { value: 100, suffix: "%", label: "Hands-On Learning" },
];

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref} className="text-3xl sm:text-4xl font-heading font-bold text-white">{count}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D946EF]/5 via-[#6366F1]/5 to-[#22D3EE]/5" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-800/50">
            {stats.map((stat) => (
              <AnimatedSection key={stat.label} className="text-center py-10 px-4">
                <Counter target={stat.value} suffix={stat.suffix} />
                <p className="text-sm font-heading text-zinc-500 mt-2">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
