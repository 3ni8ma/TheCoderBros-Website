"use client";

import { Hero } from "@/components/landing/hero";
import { FeaturedCourses } from "@/components/landing/featured-courses";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Stats } from "@/components/landing/stats";
import { Testimonials } from "@/components/landing/testimonials";
import { AnimatedSection } from "@/components/shared/animated-section";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCourses />
      <HowItWorks />
      <Stats />
      <Testimonials />

      <section className="section-padding bg-secondary/30">
        <div className="section-container text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
              Ready to <span className="text-gradient-primary">Level Up</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Whether you&apos;re learning to code or looking for a development
              partner, The Coder Bros has you covered.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-all"
              >
                Explore Courses <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-xl border border-border hover:bg-border transition-all"
              >
                Hire Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
