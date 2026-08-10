"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { TiltCard } from "@/components/shared/tilt-card";
import { blogPosts } from "@/lib/data/blog";

const picked = blogPosts.slice(0, 6);

export function BlogPicks() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Fresh From the <span className="text-gradient-primary">Blog</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Tutorials, guides, and insights from our team.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {picked.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.07}>
              <TiltCard glare={false}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="glass-card block overflow-hidden group h-full"
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--glass-border)]">
                    <img
                      src={post.image ?? ""}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 glass-chip px-3 py-1 text-[11px] uppercase tracking-wider text-foreground">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-muted-foreground">
                      {post.date} &middot; {post.readTime} min read
                    </p>
                    <h3 className="mt-2 font-semibold text-foreground leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {post.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-foreground font-medium hover:border-white/20 transition-all"
          >
            Read All Posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}