"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, RotateCcw } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Slide, Lesson } from "@/lib/data/courses";
import { Progress } from "@/components/ui/progress";

function CodeBlock({ code, language }: { code: string; language: string }) {
  return (
    <div className="relative group">
      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button onClick={() => navigator.clipboard.writeText(code)}
          className="p-1.5 rounded bg-zinc-700 text-zinc-300 hover:bg-zinc-600 transition-colors" title="Copy Code">
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>
      <pre className="text-sm font-mono leading-relaxed overflow-x-auto" style={{ background: "#0a0a0a", border: "1px solid #222", borderRadius: "8px", padding: "1.5rem", fontSize: "0.875rem", margin: 0 }}>
        <code className="text-zinc-300 whitespace-pre">{code}</code>
      </pre>
      <div className="absolute top-2 left-3 text-[10px] text-zinc-600 font-mono">{language}</div>
    </div>
  );
}

function SlideContent({ slide, onRunCode }: { slide: Slide; onRunCode: (code: string, lang: string) => void }) {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }} className="space-y-6">
      <h2 className="text-2xl font-heading font-bold text-white">{slide.title}</h2>
      <div className="prose prose-invert max-w-none prose-zinc prose-code:text-[#22D3EE] prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
          h1: ({ children }) => <h1 className="font-heading">{children}</h1>,
          h2: ({ children }) => <h2 className="font-heading">{children}</h2>,
          h3: ({ children }) => <h3 className="font-heading">{children}</h3>,
          p: ({ children }) => <p className="font-heading">{children}</p>,
          li: ({ children }) => <li className="font-heading">{children}</li>,
          strong: ({ children }) => <strong className="font-heading">{children}</strong>,
        }}>{slide.content}</ReactMarkdown>
      </div>
      {slide.code && (
        <CodeBlock code={slide.code} language={slide.language} />
      )}
    </motion.div>
  );
}

export function Slideshow({ lesson, onRunCode }: { lesson: Lesson; onRunCode: (code: string, lang: string) => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = lesson.slides.length;
  const slide = lesson.slides[currentSlide];

  const goNext = useCallback(() => {
    if (currentSlide < totalSlides - 1) setCurrentSlide((s) => s + 1);
  }, [currentSlide, totalSlides]);

  const goPrev = useCallback(() => {
    if (currentSlide > 0) setCurrentSlide((s) => s - 1);
  }, [currentSlide]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-heading font-semibold text-white">{lesson.title}</h3>
        <span className="text-sm font-heading text-zinc-500">Slide {currentSlide + 1} / {totalSlides}</span>
      </div>
      <Progress value={((currentSlide + 1) / totalSlides) * 100} className="h-1" />
      
      <AnimatePresence mode="wait">
        <SlideContent key={currentSlide} slide={slide} onRunCode={onRunCode} />
      </AnimatePresence>

      <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
        <button onClick={goPrev} disabled={currentSlide === 0}
          className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-heading text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
          <ChevronLeft className="w-4 h-4" /> Previous
        </button>
        <button onClick={goNext} disabled={currentSlide === totalSlides - 1}
          className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-heading text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
          Next <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
