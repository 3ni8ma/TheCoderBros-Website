"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, ArrowRight } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

export function Hero() {
  return (
    <section className="relative min-h-[90dvh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/4 left-[12%] w-[520px] h-[520px] bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-[12%] w-[460px] h-[460px] bg-[#8B5CF6]/15 rounded-full blur-3xl" />
      <div className="absolute top-[12%] right-[30%] w-[300px] h-[300px] bg-accent/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div {...fadeUp(0.05)}>
              <span className="glass-chip inline-flex items-center gap-2 px-4 py-1.5 text-xs text-muted-foreground">
                <Code2 className="w-3.5 h-3.5 text-primary" />
                Interactive coding courses &middot; Free forever
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.15)}
              className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08]"
            >
              Master Modern
              <br />
              <span className="text-gradient-primary">Development</span>
              <br />
              With Hands-On Coding
            </motion.h1>

            <motion.p
              {...fadeUp(0.3)}
              className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              Learn Python, JavaScript, Java, C#, and C++ through interactive
              courses, real-time code labs, and practical cheatsheets. Built for
              developers who want to ship.
            </motion.p>

            <motion.div {...fadeUp(0.42)} className="mt-8 flex items-center gap-4 flex-wrap">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-br from-primary to-[#8B5CF6] text-white font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:brightness-110 transition-all"
              >
                Start Learning <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/labs"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass text-foreground font-medium hover:border-white/20 transition-all"
              >
                Try the Lab
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/15 via-[#8B5CF6]/15 to-accent/10 rounded-[2.5rem] blur-2xl" />
              <div className="glass rounded-2xl relative overflow-visible">
                <div className="flex items-center gap-1.5 px-5 py-3.5 border-b border-[var(--glass-border)]">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 text-xs text-muted-foreground font-mono">
                    hello.py
                  </span>
                </div>
                <div className="p-6 font-mono text-sm leading-relaxed">
                  <div>
                    <span className="text-purple-400">def</span><span> </span>
                    <span className="text-amber-300">greet</span>
                    <span className="text-muted-foreground">(</span>
                    <span className="text-cyan-300">name</span>
                    <span className="text-muted-foreground">):</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">return</span><span> </span>
                    <span className="text-green-400">f</span>
                    <span className="text-amber-200">&quot;Hello, </span>
                    <span className="text-cyan-300">name</span>
                    <span className="text-amber-200">!&quot;</span>
                  </div>
                  <div className="mt-3">
                    <span className="text-muted-foreground">print(</span>
                    <span className="text-cyan-300">greet</span>
                    <span className="text-muted-foreground">(</span>
                    <span className="text-green-400">&quot;Developer&quot;</span>
                    <span className="text-muted-foreground">)) </span>
                    <span className="text-zinc-600 dark:text-zinc-500"># Hello, Developer!</span>
                  </div>
                  <div className="mt-5 pt-4 border-t border-[var(--glass-border)]">
                    <div className="text-xs text-muted-foreground">
                      <span className="text-green-400">&gt;</span> Hello,
                      Developer!
                    </div>
                    <div className="mt-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-4 bg-primary rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass absolute -top-6 -right-5 rounded-xl px-4 py-3 animate-float">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-[#8B5CF6] flex items-center justify-center">
                    <Code2 className="w-4 h-4 text-white" />
                  </span>
                  <div>
                    <p className="text-xs font-medium text-foreground">6 languages</p>
                    <p className="text-[10px] text-muted-foreground">100+ hours of content</p>
                  </div>
                </div>
              </div>

              <div className="glass absolute -bottom-7 -left-5 rounded-xl px-4 py-3 animate-float-slow">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  <div>
                    <p className="text-xs font-medium text-foreground">Live labs</p>
                    <p className="text-[10px] text-muted-foreground">Run code in-browser</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}