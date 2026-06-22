"use client";

import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Stats } from "@/components/landing/stats";
import { LanguageCarousel } from "@/components/landing/language-carousel";
import { AnimatedSection } from "@/components/shared/animated-section";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <LanguageCarousel />
      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Ready to <span className="text-gradient">Level Up</span>?
            </h2>
            <p className="font-heading text-zinc-400 max-w-xl mx-auto mb-8">
              Whether you&apos;re learning to code or looking for a development partner,
              The Coder Bros has you covered.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link href="/courses"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D946EF] to-[#6366F1] text-white font-heading font-medium rounded-xl hover:opacity-90 transition-opacity">
                Explore Courses <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-zinc-300 font-heading font-medium rounded-xl border border-zinc-800 hover:bg-zinc-800 transition-colors">
                Hire Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
