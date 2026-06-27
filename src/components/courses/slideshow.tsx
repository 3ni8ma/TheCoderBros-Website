"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  BookOpen,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Language } from "@/lib/data/courses";
import { Progress } from "@/components/ui/progress";

function CodeBlock({ code, language }: { code: string; language: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  return (
    <div className="relative group rounded-lg overflow-hidden border border-border/50">
      <div className="flex items-center justify-between px-4 py-2 bg-secondary/50 border-b border-border/50">
        <span className="text-xs text-muted-foreground font-mono">{language}</span>
        <button
          onClick={handleCopy}
          className="p-1 rounded text-muted-foreground hover:text-foreground transition-colors"
          title="Copy code"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>
      <pre className="p-4 text-sm font-mono leading-relaxed overflow-x-auto bg-black/30">
        <code className="text-zinc-300 whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}

interface SlideshowProps {
  course: Language;
}

export default function Slideshow({ course }: SlideshowProps) {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const lesson = course.lessons[currentLesson];
  const slide = lesson?.slides[currentSlide];
  const totalSlides = lesson?.slides.length ?? 0;

  const goNextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((s) => s + 1);
    } else if (currentLesson < course.lessons.length - 1) {
      setCurrentLesson((l) => l + 1);
      setCurrentSlide(0);
    }
  }, [currentSlide, totalSlides, currentLesson, course.lessons.length]);

  const goPrevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide((s) => s - 1);
    } else if (currentLesson > 0) {
      setCurrentLesson((l) => l - 1);
      setCurrentSlide(course.lessons[currentLesson - 1].slides.length - 1);
    }
  }, [currentSlide, currentLesson, course.lessons]);

  const totalSlidesOverall = course.lessons.reduce((a, l) => a + l.slides.length, 0);
  const currentSlideOverall = course.lessons
    .slice(0, currentLesson)
    .reduce((a, l) => a + l.slides.length, 0) + currentSlide + 1;

  return (
    <div className="grid lg:grid-cols-[280px_1fr] gap-8">
      <div className="space-y-1">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          Lessons
        </h3>
        <nav className="space-y-1">
          {course.lessons.map((l, i) => (
            <button
              key={l.title}
              onClick={() => {
                setCurrentLesson(i);
                setCurrentSlide(0);
              }}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                i === currentLesson
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              <div className="flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 shrink-0" />
                <span className="line-clamp-1">{l.title}</span>
              </div>
              <span className="text-xs text-muted-foreground block mt-0.5 ml-5.5">
                {l.slides.length} slides
              </span>
            </button>
          ))}
        </nav>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              {lesson.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              Slide {currentSlideOverall} of {totalSlidesOverall}
            </p>
          </div>
        </div>

        <Progress
          value={(currentSlideOverall / totalSlidesOverall) * 100}
          className="h-1 mb-8"
        />

        <AnimatePresence mode="wait">
          {slide && (
            <motion.div
              key={`${currentLesson}-${currentSlide}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-foreground">
                {slide.title}
              </h3>
              <div className="prose prose-invert max-w-none prose-zinc prose-code:text-primary">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {slide.content}
                </ReactMarkdown>
              </div>
              {slide.code && (
                <CodeBlock code={slide.code} language={slide.language} />
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center justify-between pt-6 mt-8 border-t border-border/50">
          <button
            onClick={goPrevSlide}
            disabled={currentLesson === 0 && currentSlide === 0}
            className="inline-flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors rounded-lg hover:bg-secondary/50"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>
          <button
            onClick={goNextSlide}
            disabled={
              currentLesson === course.lessons.length - 1 &&
              currentSlide === totalSlides - 1
            }
            className="inline-flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors rounded-lg hover:bg-secondary/50"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
