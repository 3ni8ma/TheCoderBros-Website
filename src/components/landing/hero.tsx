"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { TextScramble } from "@/components/shared/text-scramble";

const codeRainChars = "01{}[]()<>/\\|!@#$%^&*+-=~`abcdefghijklmnopqrstuvwxyz";
const codeBlocks = [
  { lang: "python", lines: ["def hello():", "  print(\"world\")", "", "hello()"], x: 10, y: 20, delay: 0 },
  { lang: "js", lines: ["const greet = () => {", "  return 'hello';", "};"], x: 75, y: 15, delay: 0.5 },
  { lang: "java", lines: ["public class Main {", "  public static void", "  main(String[] a) {}", "}"], x: 85, y: 60, delay: 1 },
  { lang: "rust", lines: ["fn main() {", "  println!(\"hi\");", "}"], x: 5, y: 65, delay: 1.5 },
  { lang: "cpp", lines: ["int main() {", "  return 0;", "}"], x: 50, y: 10, delay: 0.8 },
];

const floatingChars = ["{", "}", "<", "/>", "()", "=>", "fn", "def", "class", "import", "const", "let", "->", "::", "|>", "λ"];

const taglines = [
  "Learn to Code Like a Pro",
  "Build Production-Ready Software",
  "Master Python, JS, Java, C#, C++",
  "Interactive Labs & Real Projects",
];

function CodeRain() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.04]">
      {Array.from({ length: 20 }).map((_, col) => (
        <div
          key={col}
          className="absolute top-0 w-4 text-[8px] font-mono text-[#22D3EE] leading-[12px]"
          style={{
            left: `${(col / 20) * 100}%`,
            animation: `code-rain ${4 + (col % 5) * 2}s linear ${col * 0.5}s infinite`,
          }}
        >
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i}>{codeRainChars[(col * 31 + i * 17) % codeRainChars.length]}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

function FloatingCodeBlock({ block, index }: { block: typeof codeBlocks[0]; index: number }) {
  return (
    <motion.div
      style={{ left: `${block.x}%`, top: `${block.y}%` }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: block.delay + 0.5, ease: "easeOut" }}
      className="absolute hidden lg:block"
    >
      <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/50 rounded-lg p-2.5 text-[9px] font-mono leading-[14px] shadow-xl">
        {block.lines.map((line, i) => (
          <div key={i} className={`${line.startsWith("  ") ? "text-zinc-500" : "text-[#6366F1]"}`}>
            {line || <span className="select-none">&nbsp;</span>}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function GlowingOrbs() {
  return (
    <>
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(217,70,239,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14">
      <CodeRain />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background pointer-events-none" />
      <GlowingOrbs />

      {/* Floating code blocks */}
      {codeBlocks.map((block, i) => (
        <FloatingCodeBlock key={i} block={block} index={i} />
      ))}

      {/* Floating chars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingChars.map((char, i) => (
          <motion.span
            key={i}
            className="absolute text-[10px] sm:text-sm font-mono text-zinc-700/20 select-none"
            style={{
              left: `${10 + (i * 7) % 80}%`,
              top: `${(i * 9) % 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.15, 0.35, 0.15],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 5 + (i % 3),
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-4"
        >
          <h1 className="font-heading font-bold tracking-tight">
            <span className="block text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-white leading-[1.1]">
              Code. Build.
            </span>
            <span className="block text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[1.1] mt-2">
              <span className="text-gradient animate-gradient">Innovate.</span>
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="h-10 sm:h-12 mb-6 flex items-center justify-center"
        >
          <span className="text-base sm:text-lg md:text-xl text-zinc-400 font-mono tracking-wide">
            <TextScramble texts={taglines} />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="font-heading text-gradient-glow text-glow max-w-2xl mx-auto mb-10 text-sm sm:text-base leading-relaxed tracking-wide"
        >
          Interactive courses, real-time code labs, and production-ready cheatsheets.
          Master Python, JavaScript, Java, C#, C++ &mdash; all in one platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <Link
            href="/courses"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 font-heading font-semibold text-sm uppercase tracking-wider text-white rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#D946EF] via-[#a855f7] to-[#6366F1] transition-all duration-500 group-hover:scale-105 group-hover:brightness-110" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#D946EF]/0 via-white/10 to-[#6366F1]/0 animate-shimmer" />
            <span className="relative z-10 flex items-center gap-2">
              Start Learning <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link
            href="/labs"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 font-heading font-semibold text-sm uppercase tracking-wider text-zinc-300 rounded-xl border border-zinc-800 overflow-hidden transition-all duration-300 hover:border-zinc-700 hover:text-white"
          >
            <div className="absolute inset-0 bg-zinc-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              <Terminal className="w-4 h-4" /> Try the Sandbox
            </span>
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
    </section>
  );
}
