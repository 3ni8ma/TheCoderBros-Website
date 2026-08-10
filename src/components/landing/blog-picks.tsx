"use client";

import Link from "next/link";
import HoverImageReveal from "@/components/originkit/ui/hover-image-reveal";
import { blogPosts } from "@/lib/data/blog";
import { ArrowRight } from "lucide-react";

const picked = blogPosts.slice(0, 4);

type BlogPickItem = {
  text: string;
  image: { src: string; alt: string };
  link: string;
};

const items: { itemCount: number; [key: string]: unknown } = { itemCount: picked.length };
picked.forEach((post, i) => {
  items[`item${i + 1}`] = {
    text: post.title,
    image: { src: post.image ?? "", alt: post.title },
    link: `/blog/${post.slug}`,
  };
});

export function BlogPicks() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Fresh From the <span className="text-gradient-primary">Blog</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Tutorials, guides, and insights from our team. Hover the list to
            preview each post.
          </p>
        </div>

        <div className="h-[480px] max-w-4xl mx-auto">
          <HoverImageReveal
            items={items}
            font={{
              fontSize: 24,
              fontWeight: 600,
              lineHeight: "1.35",
              letterSpacing: "-0.02em",
            }}
            textColor="#FFFFFF"
            dimColor="#64748B"
            align="center"
            rowGap={26}
            imageWidth={320}
            imageHeight={400}
            rounded={16}
            offsetX={220}
            offsetY={-140}
            backgroundColor="transparent"
          />
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-all"
          >
            Read All Posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}