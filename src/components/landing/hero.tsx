"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90dvh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#8B5CF6]/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Interactive Coding Education
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]"
            >
              Master Modern{" "}
              <span className="text-gradient-primary">Development</span>
              <br />
              With Hands-On Coding
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              Learn Python, JavaScript, Java, C#, and C++ through interactive
              courses, real-time code labs, and practical cheatsheets. Built for
              developers who want to ship.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex items-center gap-4"
            >
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-all"
              >
                Start Learning
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/labs"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-xl hover:bg-border transition-all"
              >
                <Play className="w-4 h-4" />
                Try the Lab
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-[#8B5CF6]/20 to-accent/20 rounded-2xl blur-xl" />
              <div className="relative bg-card border border-border/50 rounded-xl overflow-hidden">
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/50 bg-secondary/50">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 text-xs text-muted-foreground font-mono">
                    hello.py
                  </span>
                </div>
                <div className="p-5 font-mono text-sm leading-relaxed">
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
                    <span className="text-zinc-600"># Hello, Developer!</span>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/50">
                    <div className="text-xs text-muted-foreground">
                      <span className="text-green-400">&gt;</span> Hello,
                      Developer!
                    </div>
                    <div className="mt-1 flex items-center gap-1.5">
                      <span className="w-1 h-4 bg-primary animate-pulse" />
                    </div>
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
