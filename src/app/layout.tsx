import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ClientLayout } from "./client-layout";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  title: {
    default: "The Coder Bros — Master Modern Development",
    template: "%s | The Coder Bros",
  },
  description:
    "Interactive coding courses, cheatsheets, and labs for Python, JavaScript, Java, C#, and C++. Learn modern development with hands-on projects.",
  keywords: [
    "coding courses",
    "learn programming",
    "Python",
    "JavaScript",
    "Java",
    "C#",
    "C++",
    "web development",
    "coding education",
  ],
  openGraph: {
    title: "The Coder Bros — Master Modern Development",
    description:
      "Interactive coding courses, cheatsheets, and labs. Learn Python, JavaScript, Java, C#, and C++.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh flex flex-col antialiased font-sans">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
