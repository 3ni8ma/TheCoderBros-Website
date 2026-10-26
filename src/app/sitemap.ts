import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data/blog";
import { languages } from "@/lib/data/courses";

const SITE = "https://thecoderbros.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/courses", "/cheatsheets", "/labs", "/labs/frontend", "/labs/backend", "/blog", "/about", "/contact", "/pricing"];

  return [
    ...staticRoutes.map((path) => ({
      url: `${SITE}${path}`,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...languages.map((language) => ({
      url: `${SITE}/courses/${language.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    // Newest first so crawlers see the recent posts before the archive.
    ...[...blogPosts]
      .sort((a, b) => b.date.localeCompare(a.date))
      .map((post) => ({
        url: `${SITE}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
  ];
}
