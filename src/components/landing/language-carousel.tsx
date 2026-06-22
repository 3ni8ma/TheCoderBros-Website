"use client";

import { motion } from "framer-motion";
import { languages } from "@/lib/data/courses";
import { AnimatedSection } from "@/components/shared/animated-section";
import { LanguageIcon } from "@/components/shared/language-icon";

export function LanguageCarousel() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            Choose Your <span className="text-gradient">Language</span>
          </h2>
          <p className="font-heading text-zinc-400 max-w-2xl mx-auto">
            Master any language with our structured curriculum and hands-on labs.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {languages.map((lang, i) => (
            <motion.a key={lang.slug} href={`/courses/${lang.slug}`}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }} whileHover={{ y: -5, scale: 1.02 }}
              className="group relative flex flex-col items-center gap-3 p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all">
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(600px circle at center, ${lang.color}08, transparent)` }} />
              <LanguageIcon slug={lang.slug} className="w-10 h-10 relative" />
              <span className="text-sm font-heading text-zinc-300 group-hover:text-white transition-colors relative">{lang.title}</span>
              <span className="text-[10px] font-heading text-zinc-600 relative">{lang.lessons.length} courses</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
