"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { languages } from "@/lib/data/courses";
import { cheatsheets } from "@/lib/data/cheatsheets";
import { Search, BookOpen, FileCode, FlaskConical, ArrowRight } from "lucide-react";

import { LanguageIcon } from "@/components/shared/language-icon";

export function CommandSearch() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runAction = useCallback((action: () => void) => {
    setOpen(false);
    action();
  }, []);

  return (
    <>
      <button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-heading text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors">
        <Search className="w-4 h-4" />
        <span className="hidden sm:inline">Search...</span>
        <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 text-xs font-heading bg-zinc-800 rounded ml-4">⌘K</kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search courses, cheatsheets, labs..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            <CommandItem onSelect={() => runAction(() => router.push("/courses"))}>
              <BookOpen className="w-4 h-4 mr-2" /> <span>Courses</span>
              <ArrowRight className="w-3 h-3 ml-auto text-zinc-500" />
            </CommandItem>
            <CommandItem onSelect={() => runAction(() => router.push("/cheatsheets"))}>
              <FileCode className="w-4 h-4 mr-2" /> <span>Cheatsheets</span>
              <ArrowRight className="w-3 h-3 ml-auto text-zinc-500" />
            </CommandItem>
            <CommandItem onSelect={() => runAction(() => router.push("/labs"))}>
              <FlaskConical className="w-4 h-4 mr-2" /> <span>Interactive Labs</span>
              <ArrowRight className="w-3 h-3 ml-auto text-zinc-500" />
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Courses">
            {languages.map((lang) => (
              <CommandItem key={lang.slug} onSelect={() => runAction(() => router.push(`/courses/${lang.slug}`))}>
                <LanguageIcon slug={lang.slug} className="w-4 h-4 mr-2" />
                <span>{lang.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Cheatsheets">
            {cheatsheets.slice(0, 5).map((cs, i) => (
              <CommandItem key={i} onSelect={() => runAction(() => router.push("/cheatsheets"))}>
                <FileCode className="w-4 h-4 mr-2" />
                <span>{cs.title}</span>
                <span className="ml-auto text-xs font-heading text-zinc-500">{cs.language}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
