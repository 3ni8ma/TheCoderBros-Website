"use client";

import { ReactNode } from "react";
import LineMaskSplit from "@/components/originkit/ui/scroll-text-reveal";

interface SectionHeaderProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
}

export function SectionHeader({ title, description, align = "center", action }: SectionHeaderProps) {
  return (
    <div className={`mb-12 sm:mb-16 ${align === "center" ? "text-center" : ""}`}>
      <LineMaskSplit
        tag="h2"
        text={title}
        color="#FAFAFA"
        splitMode="chars"
        blurEnabled
        blurIntensity={14}
        translateXInitial={0}
        translateYInitial={60}
        scrollTriggerPosition="center"
        reverse
        font={{
          fontFamily: "inherit",
          fontSize: 34,
          fontWeight: 600,
          lineHeight: "115%",
          letterSpacing: "-0.025em",
          textAlign: align === "center" ? "center" : "left",
        }}
        transition={{ type: "tween", duration: 0.8, ease: "easeOut", delay: 0 }}
        className={align === "center" ? "justify-center" : ""}
      />
      {description && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}