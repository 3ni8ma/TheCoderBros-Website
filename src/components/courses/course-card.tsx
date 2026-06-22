"use client";

import Link from "next/link";
import { GlowCard } from "@/components/shared/glow-card";
import { LanguageIcon } from "@/components/shared/language-icon";

export function CourseCard({ slug, title, description, color, lessons }: {
  slug: string; title: string; description: string; color: string; lessons: number;
}) {
  return (
    <Link href={`/courses/${slug}`} className="block">
      <GlowCard tilt>
        <div className="p-6">
          <div className="mb-4">
            <LanguageIcon slug={slug} className="w-10 h-10" />
          </div>
          <h3 className="text-lg font-heading font-semibold text-white mb-2">{title}</h3>
          <p className="text-sm font-heading text-zinc-400 mb-4 line-clamp-2">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs font-heading text-zinc-500">{lessons} lessons</span>
            <span className="text-xs font-heading font-medium px-2 py-1 rounded-full" style={{ backgroundColor: `${color}20`, color }}>{title}</span>
          </div>
        </div>
      </GlowCard>
    </Link>
  );
}
