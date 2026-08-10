"use client";

import Link from "next/link";
import { languages } from "@/lib/data/courses";

export function MarqueeDivider() {
  return (
    <section className="relative py-10">
      <div className="section-container">
        <div className="glass rounded-full px-6 py-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-sm text-muted-foreground">
          {languages.map((lang, i) => (
            <span key={lang.slug} className="flex items-center gap-2">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-primary/40" />}
              <Link
                href={`/courses/${lang.slug}`}
                className="uppercase tracking-wider hover:text-foreground transition-colors"
              >
                {lang.title}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}