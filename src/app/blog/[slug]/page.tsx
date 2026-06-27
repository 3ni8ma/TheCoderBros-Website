import { blogPosts } from "@/lib/data/blog";
import { notFound } from "next/navigation";
import { Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="section-container max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 mb-8"
        >
          ← Back to Blog
        </Link>

        <article>
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
            <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-medium">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-muted-foreground mb-8">
            {post.description}
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground pb-8 mb-8 border-b border-border/50">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime} min read
            </span>
          </div>

          <div className="prose prose-invert max-w-none prose-zinc prose-code:text-primary prose-pre:bg-black/40 prose-pre:border prose-pre:border-border/50 prose-headings:text-foreground">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
}
