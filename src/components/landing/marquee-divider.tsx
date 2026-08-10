"use client";

import { ScrollBasedVelocity } from "@/components/ui/scroll-based-velocity";

const languages = "PYTHON  •  JAVASCRIPT  •  JAVA  •  C#  •  C++  •  TYPESCRIPT  •  HTML & CSS  •  ";

export function MarqueeDivider() {
  return (
    <section className="relative border-y border-border/50 bg-secondary/30 py-6 overflow-hidden">
      <ScrollBasedVelocity
        text={languages}
        default_velocity={3}
        className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-gradient opacity-80 whitespace-pre"
      />
    </section>
  );
}