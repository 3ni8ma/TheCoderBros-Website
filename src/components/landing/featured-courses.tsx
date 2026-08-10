"use client";

import Link from "next/link";
import CoverflowCarousel from "@/components/originkit/ui/coverflowcarousel";
import { languages } from "@/lib/data/courses";

const covers = languages.map((lang) => ({
  srcUrl: `/images/courses/${lang.slug}.png`,
  alt: `${lang.title} course`,
}));

const slideTransition = {
  type: "tween",
  duration: 0.6,
  delay: 2,
  ease: "easeInOut",
} as const;

export function FeaturedCourses() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Explore Our <span className="text-gradient-primary">Courses</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Six languages. One platform. From fundamentals to advanced concepts.
          </p>
        </div>

        <div className="md:hidden h-[230px]">
          <CoverflowCarousel
            images={covers}
            activeWidth={280}
            activeHeight={210}
            restWidth={100}
            restHeight={160}
            gap={10}
            radius={14}
            showArrows={false}
            arrowColor="#FFFFFF"
            arrowBackground="rgba(99,102,241,0.9)"
            arrowSize={40}
            arrowPosition={50}
            autoplay
            autoplayDirection="rightToLeft"
            transition={slideTransition}
          />
        </div>

        <div className="hidden md:block h-[380px]">
          <CoverflowCarousel
            images={covers}
            activeWidth={560}
            activeHeight={344}
            restWidth={190}
            restHeight={248}
            gap={24}
            radius={18}
            showArrows
            arrowColor="#FFFFFF"
            arrowBackground="rgba(99,102,241,0.9)"
            arrowSize={44}
            arrowPosition={50}
            autoplay
            autoplayDirection="rightToLeft"
            transition={slideTransition}
          />
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {languages.map((lang) => (
            <Link
              key={lang.slug}
              href={`/courses/${lang.slug}`}
              className="px-4 py-2 rounded-full border border-border bg-card/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
            >
              {lang.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}