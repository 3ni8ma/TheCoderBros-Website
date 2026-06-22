"use client";

import { useState, useEffect, useCallback } from "react";

const CHARS = "!@#$%^&*<>?/[]{}|~abcdefghijklmnopqrstuvwxyz0123456789";

interface TextScrambleProps {
  texts: string[];
  className?: string;
  delay?: number;
}

export function TextScramble({ texts, className = "", delay = 50 }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(texts[0]);
  const [textIndex, setTextIndex] = useState(0);

  const scramble = useCallback(
    (from: string, to: string) => {
      const length = Math.max(from.length, to.length);
      let iteration = 0;
      const maxIterations = 15;

      const interval = setInterval(() => {
        setDisplayText(
          to
            .split("")
            .map((char, i) => {
              if (i < iteration) return char;
              if (i >= to.length) return "";
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        iteration += 1;
        if (iteration >= maxIterations) {
          clearInterval(interval);
          setDisplayText(to);
        }
      }, delay);

      return () => clearInterval(interval);
    },
    [delay]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (textIndex + 1) % texts.length;
      setTextIndex(nextIndex);
      const cleanup = scramble(texts[textIndex], texts[nextIndex]);
      return () => cleanup();
    }, 3500);

    return () => clearInterval(interval);
  }, [textIndex, texts, scramble]);

  return (
    <span className={className}>
      {displayText}
      <span className="inline-block w-0.5 h-[1em] bg-[#D946EF] ml-1 animate-pulse translate-y-[2px]" />
    </span>
  );
}
