"use client";

import { useEffect, useRef } from "react";

export function CursorFollower() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    let mouseX = -1000;
    let mouseY = -1000;
    let currentX = -1000;
    let currentY = -1000;
    let rafId: number;
    let active = false;

    const animate = () => {
      currentX += (mouseX - currentX) * 0.06;
      currentY += (mouseY - currentY) * 0.06;

      orb.style.transform = `translate(${currentX - 150}px, ${currentY - 150}px)`;

      if (Math.abs(currentX - mouseX) > 0.5 || Math.abs(currentY - mouseY) > 0.5) {
        rafId = requestAnimationFrame(animate);
      } else {
        active = false;
      }
    };

    const start = () => {
      if (!active) {
        active = true;
        rafId = requestAnimationFrame(animate);
      }
    };

    const handleMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      start();
    };

    window.addEventListener("mousemove", handleMouse);
    start();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <div
      ref={orbRef}
      className="fixed top-0 left-0 w-[300px] h-[300px] pointer-events-none z-0"
      style={{
        background: "radial-gradient(circle, rgba(217,70,239,0.06) 0%, rgba(99,102,241,0.04) 40%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(40px)",
        willChange: "transform",
      }}
    />
  );
}
