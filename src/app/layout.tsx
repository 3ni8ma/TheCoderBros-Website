import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ClientLayout } from "./client-layout";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Coder Bros - Interactive Coding Education & SaaS Solutions",
  description: "Master Python, JavaScript, Java, C#, C++ with interactive courses, cheatsheets, and code labs. Premium coding education and software development services.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} min-h-full flex flex-col bg-zinc-950 text-zinc-100 antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
