"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { CommandSearch } from "./command-search";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/cheatsheets", label: "Cheatsheets" },
  { href: "/labs", label: "Labs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 group">
            <Image src="/images/logo.png" alt="The Coder Bros" width={32} height={32} className="rounded-lg" />
            <span className="font-heading font-bold text-lg tracking-tight">
              <span className="text-white">The</span>{" "}
              <span className="text-gradient">Coder Bros</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link key={link.href} href={link.href}
                  className={`px-3 py-1.5 text-sm font-heading rounded-lg transition-colors ${isActive ? "text-white bg-zinc-800" : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"}`}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <CommandSearch />
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-zinc-400 hover:text-white">
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-zinc-800/50 bg-zinc-950">
            <nav className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-heading ${pathname === link.href ? "text-white bg-zinc-800" : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"}`}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
