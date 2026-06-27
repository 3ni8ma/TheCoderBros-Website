"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/section-header";
import { cheatsheets, searchCheatsheets } from "@/lib/data/cheatsheets";
import { FileCode, Search, Check, Copy } from "lucide-react";

const languages = ["All", "Python", "JavaScript", "HTML/CSS", "Java", "C#", "C++"];
const categories = ["All", "Basics", "Strings", "Arrays", "Collections", "Control Flow", "Functions", "DOM", "OOP", "File I/O", "Async", "HTML", "CSS", "Memory", "STL", "LINQ"];

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
    <div className="min-h-screen pt-24 pb-20">
      <div className="section-container">
        <SectionHeader
          title="Code Cheatsheets"
          description="Search and browse syntax references for all supported languages. Copy code snippets with one click."
        />

        <div className="flex flex-col sm:flex-row items-center gap-3 mb-8">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search cheatsheets..."
              className="w-full pl-10 pr-4 py-2 bg-secondary border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
            />
          </div>
          <select
            value={langFilter}
            onChange={(e) => setLangFilter(e.target.value)}
            className="w-40 px-3 py-2 bg-secondary border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
          >
            {languages.map((l) => <option key={l} value={l}>{l}</option>)}
          </select>
          <select
            value={catFilter}
            onChange={(e) => setCatFilter(e.target.value)}
            className="w-40 px-3 py-2 bg-secondary border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
          >
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((cs, i) => {
            const id = `${cs.language}-${cs.title}-${i}`;
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.02 }}
              >
                <div className="card-elevated p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">{cs.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-primary/10 text-primary">{cs.language}</span>
                        <span className="text-[10px] text-muted-foreground">{cs.category}</span>
                      </div>
                    </div>
                    <button onClick={() => handleCopy(cs.code, id)} className="p-1.5 rounded hover:bg-secondary transition-colors">
                      {copiedId === id
                        ? <Check className="w-3.5 h-3.5 text-accent" />
                        : <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                      }
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{cs.description}</p>
                  <pre className="text-xs font-mono leading-relaxed overflow-x-auto bg-black/40 border border-border/30 rounded-lg p-3">
                    <code className="text-zinc-300 whitespace-pre">{cs.code}</code>
                  </pre>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <FileCode className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p className="text-sm">No cheatsheets found. Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
