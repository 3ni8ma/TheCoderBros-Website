"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/animated-section";
import { CourseCard } from "@/components/courses/course-card";
import { languages } from "@/lib/data/courses";
import { BookOpen } from "lucide-react";

export default function CoursesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-[#22D3EE] text-sm font-heading mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Curriculum</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Explore Our <span className="text-gradient">Courses</span>
          </h1>
          <p className="font-heading text-zinc-400 max-w-2xl mx-auto">
            Choose from six programming languages. Each course features interactive lessons
            with runnable code examples and hands-on exercises.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {languages.map((lang) => (
            <StaggerItem key={lang.slug}>
              <CourseCard
                slug={lang.slug}
                title={lang.title}
                description={lang.description}
                color={lang.color}
                lessons={lang.lessons.length}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
