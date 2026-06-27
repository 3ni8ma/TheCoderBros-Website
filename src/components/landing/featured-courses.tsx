"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { LanguageIcon } from "@/components/shared/language-icon";
import { languages } from "@/lib/data/courses";
import { ArrowRight, BookOpen } from "lucide-react";

export function FeaturedCourses() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="section-container">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              Explore Our <span className="text-gradient-primary">Courses</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Six languages. One platform. From fundamentals to advanced concepts.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link href={`/courses/${lang.slug}`} className="block group">
                <div className="card-elevated p-6 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${lang.color}15` }}
                    >
                      <LanguageIcon slug={lang.slug} className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {lang.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {lang.lessons.length} lessons
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {lang.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Start learning</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
