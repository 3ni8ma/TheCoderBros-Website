"use client";

import Link from "next/link";
import { LanguageIcon } from "@/components/shared/language-icon";
import Slideshow from "@/components/courses/slideshow";
import { Language } from "@/lib/data/courses";

export function CourseClient({ course }: { course: Language }) {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-8">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: `${course.color}15` }}
          >
            <LanguageIcon slug={course.slug} className="w-5 h-5" />
          </div>
          <div>
            <Link
              href="/courses"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Courses
            </Link>
            <h1 className="text-2xl font-bold text-foreground">
              {course.title}
            </h1>
          </div>
        </div>
        <Slideshow course={course} />
      </div>
    </div>
  );
}
