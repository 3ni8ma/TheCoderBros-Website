"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number; y: number; vx: number; vy: number; size: number; opacity: number;
  hue: number; life: number; maxLife: number;
}

const COLORS = [
  { h: 300, s: 80, l: 60 },  // magenta
  { h: 240, s: 60, l: 60 },  // indigo
  { h: 185, s: 70, l: 55 },  // cyan
];

const TRAIL_COUNT = 3;

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000, prevX: -1000, prevY: -1000 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    let frameCount = 0;

    const initParticles = () => {
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 150);
      particles = Array.from({ length: count }, () => {
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2.5 + 0.5,
          opacity: Math.random() * 0.4 + 0.1,
          hue: color.h,
          life: 0,
          maxLife: Math.random() * 200 + 100,
        };
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frameCount++;

      const mouseSpeed = Math.sqrt(
        (mouse.x - mouse.prevX) ** 2 + (mouse.y - mouse.prevY) ** 2
      );

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200) {
          const force = (200 - dist) / 200;
          const repelForce = force * 0.03;
          p.vx -= (dx / dist) * repelForce;
          p.vy -= (dy / dist) * repelForce;
        }

        if (mouseSpeed > 5) {
          const trailForce = 0.15;
          p.vx += (Math.random() - 0.5) * trailForce;
          p.vy += (Math.random() - 0.5) * trailForce;
        }

        p.vx *= 0.98;
        p.vy *= 0.98;

        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const maxSpeed = 1.5;
        if (speed > maxSpeed) {
          p.vx = (p.vx / speed) * maxSpeed;
          p.vy = (p.vy / speed) * maxSpeed;
        }

        p.life++;
        if (p.life > p.maxLife) {
          p.life = 0;
          p.maxLife = Math.random() * 200 + 100;
          const color = COLORS[Math.floor(Math.random() * COLORS.length)];
          p.hue = color.h;
        }

        const pulse = 0.8 + 0.2 * Math.sin(p.life * 0.02);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 70%, 55%, ${p.opacity * pulse})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * pulse * 2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 70%, 55%, ${p.opacity * 0.15 * pulse})`;
        ctx.fill();
      });

      // Connection lines: spatial proximity check, only every 2nd frame
      if (frameCount % 2 === 0) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          for (let j = i + 1; j < particles.length; j++) {
            const q = particles[j];
            const dx2 = p.x - q.x;
            const dy2 = p.y - q.y;
            if (Math.abs(dx2) > 80 || Math.abs(dy2) > 80) continue;
            const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
            if (dist2 < 80) {
              const alpha = 0.06 * (1 - dist2 / 80);
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(q.x, q.y);
              ctx.strokeStyle = `hsla(${(p.hue + q.hue) / 2}, 70%, 55%, ${alpha})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      // Mouse-particle connection lines: only when moving fast, every 2nd frame
      if (frameCount % 2 === 0) {
        particles.forEach((p) => {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 300 && mouseSpeed > 8) {
            const alpha = 0.06 * (1 - dist / 300);
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = `hsla(300, 80%, 60%, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      }

      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      animationFrameId = requestAnimationFrame(animate);
    };

    let lastMove = 0;
    const handleMouse = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastMove < 16) return; // throttle to ~60fps
      lastMove = now;
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    resize();
    initParticles();
    animate();
    window.addEventListener("resize", () => { resize(); initParticles(); });
    window.addEventListener("mousemove", handleMouse);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
}
