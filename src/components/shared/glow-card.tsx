"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { TiltCard } from "./tilt-card";

export function GlowCard({ children, className, as: Component = "div", tilt = false, ...props }: {
  children: ReactNode;
  className?: string;
  as?: "div" | "button" | "a";
  tilt?: boolean;
} & Record<string, unknown>) {
  const card = (
    <Component
      className={cn("relative group cursor-pointer glow-card rounded-xl", className)}
      {...props}
    >
      <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-[#D946EF]/0 via-[#6366F1]/0 to-[#22D3EE]/0 group-hover:from-[#D946EF]/30 group-hover:via-[#6366F1]/30 group-hover:to-[#22D3EE]/30 transition-all duration-500 blur-md opacity-0 group-hover:opacity-100" />
      <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#D946EF]/0 via-[#6366F1]/0 to-[#22D3EE]/0 group-hover:from-[#D946EF]/15 group-hover:via-[#6366F1]/15 group-hover:to-[#22D3EE]/15 transition-all duration-500 opacity-0 group-hover:opacity-100" />
      <div className="relative rounded-xl bg-zinc-900/80 border border-zinc-800 group-hover:border-zinc-700 transition-all duration-500 h-full overflow-hidden">
        {children}
      </div>
    </Component>
  );

  if (tilt) {
    return <TiltCard className="h-full">{card}</TiltCard>;
  }

  return card;
}
