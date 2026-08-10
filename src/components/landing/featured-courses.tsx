"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedSection } from "@/components/shared/animated-section";
import { TiltCard } from "@/components/shared/tilt-card";
import { languages } from "@/lib/data/courses";

export function FeaturedCourses() {
  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-[20%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-[15%] w-[400px] h-[400px] bg-[#8B5CF6]/10 rounded-full blur-3xl" />

      <div className="section-container relative">
        <SectionHeader
          title="Explore Our Courses"
          description="Six languages. One platform. From fundamentals to advanced concepts."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {languages.map((lang, i) => (
            <AnimatedSection key={lang.slug} delay={i * 0.07}>
              <TiltCard glare={false}>
                <Link
                  href={`/courses/${lang.slug}`}
                  className="glass-card block overflow-hidden group h-full"
                >
                  <div className="relative aspect-[4/3] overflow-hidden border-b border-[var(--glass-border)]">
                    <img
                      src={`/images/courses/${lang.slug}.png`}
                      alt={`${lang.title} course`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    />
                    <span
                      className="absolute top-3 left-3 glass-chip px-3 py-1 text-[11px] uppercase tracking-wider text-foreground"
                    >
                      {lang.slug === "html-css" ? "Web" : "Course"}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: lang.color }}
                      />
                      <h3 className="text-xl font-semibold text-foreground">
                        {lang.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {lang.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      Start Learning
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}