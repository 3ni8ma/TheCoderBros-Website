"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/shared/page-transition";
import { ReactNode } from "react";

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Toaster position="top-center" theme="dark" />
      <Navbar />
      <main className="flex-1 relative z-10">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
