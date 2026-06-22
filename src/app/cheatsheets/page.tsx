"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GlowCard } from "@/components/shared/glow-card";
import { cheatsheets, searchCheatsheets } from "@/lib/data/cheatsheets";
import { FileCode, Search, Check, Copy } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const languages = ["All", "Python", "JavaScript", "HTML/CSS", "Java", "C#", "C++"];
const categories = ["All", "Basics", "Strings", "Arrays", "Collections", "Control Flow", "Functions", "DOM", "OOP", "File I/O", "Async", "HTML", "CSS", "Memory", "STL", "LINQ"];

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="text-xs font-mono leading-relaxed overflow-x-auto" style={{ background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: "6px", padding: "0.75rem", margin: 0 }}>
      <code className="text-zinc-300 whitespace-pre">{code}</code>
    </pre>
  );
}

export default function CheatsheetsPage() {
  const [query, setQuery] = useState("");
  const [langFilter, setLangFilter] = useState("All");
  const [catFilter, setCatFilter] = useState("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let result = searchCheatsheets(query);
    if (langFilter !== "All") result = result.filter(c => c.language === langFilter);
    if (catFilter !== "All") result = result.filter(c => c.category === catFilter);
    return result;
  }, [query, langFilter, catFilter]);

  const handleCopy = async (code: string, id: string) => {
    await navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-[#22D3EE] text-sm font-heading mb-4">
            <FileCode className="w-4 h-4" />
            <span>Quick Reference</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Code <span className="text-gradient">Cheatsheets</span>
          </h1>
          <p className="font-heading text-zinc-400 max-w-2xl mx-auto">
            Search and browse syntax references for all supported languages. Copy code snippets with one click.
          </p>
        </AnimatedSection>

        <div className="flex flex-col sm:flex-row items-center gap-3 mb-8">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <Input value={query} onChange={(e) => setQuery(e.target.value)}
              placeholder="Search cheatsheets..." className="pl-10 bg-zinc-900 border-zinc-800 w-full" />
          </div>
          <Select value={langFilter} onValueChange={(v) => v && setLangFilter(v)}>
            <SelectTrigger className="w-40 bg-zinc-900 border-zinc-800"><SelectValue /></SelectTrigger>
            <SelectContent>
              {languages.map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={catFilter} onValueChange={(v) => v && setCatFilter(v)}>
            <SelectTrigger className="w-40 bg-zinc-900 border-zinc-800"><SelectValue /></SelectTrigger>
            <SelectContent>
              {categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((cs, i) => {
            const id = `${cs.language}-${cs.title}-${i}`;
            return (
              <motion.div key={id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.02 }}>
                <GlowCard>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="text-sm font-heading font-semibold text-white">{cs.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] font-heading px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400">{cs.language}</span>
                          <span className="text-[10px] font-heading text-zinc-600">{cs.category}</span>
                        </div>
                      </div>
                      <button onClick={() => handleCopy(cs.code, id)} className="p-1.5 rounded hover:bg-zinc-800 transition-colors">
                        {copiedId === id ? <Check className="w-3.5 h-3.5 text-[#22D3EE]" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
                      </button>
                    </div>
                    <p className="text-xs font-heading text-zinc-500 mb-2">{cs.description}</p>
                    <CodeBlock code={cs.code} />
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-zinc-500">
            <FileCode className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p className="font-heading">No cheatsheets found. Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
