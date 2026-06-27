"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { backendDefaultCode, languageMap } from "@/lib/data/labs";
import { LanguageIcon } from "@/components/shared/language-icon";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full bg-zinc-950">
      <div className="w-5 h-5 border-2 border-zinc-500 border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

const languages = [
  { value: "python", label: "Python" },
  { value: "javascript", label: "JavaScript" },
  { value: "java", label: "Java" },
  { value: "csharp", label: "C#" },
  { value: "cpp", label: "C++" },
];

export function BackendLab() {
  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState(backendDefaultCode.python);
  const [output, setOutput] = useState("");
  const [running, setRunning] = useState(false);

  const handleLanguageChange = useCallback((value: string) => {
    setLanguage(value);
    setCode(backendDefaultCode[value as keyof typeof backendDefaultCode] || "");
    setOutput("");
  }, []);

  const handleRun = useCallback(async () => {
    setRunning(true);
    setOutput("");
    try {
      const res = await fetch("/api/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language: languageMap[language as keyof typeof languageMap] || language, code }),
      });
      const data = await res.json();
      setOutput(data.output || data.error || "No output");
    } catch {
      setOutput("Execution failed. Check your connection.");
    } finally {
      setRunning(false);
    }
  }, [language, code]);

  const handleClear = () => setOutput("");
  const handleCopy = () => navigator.clipboard.writeText(code);

  const getMonacoLanguage = (lang: string) => {
    const map: Record<string, string> = { python: "python", javascript: "javascript", java: "java", csharp: "csharp", cpp: "cpp" };
    return map[lang] || "plaintext";
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3 flex-wrap">
        <Select value={language} onValueChange={(v) => v && handleLanguageChange(v)}>
          <SelectTrigger className="w-48">
            <div className="flex items-center gap-2">
              <LanguageIcon slug={language} className="w-5 h-5" />
              <SelectValue />
            </div>
          </SelectTrigger>
          <SelectContent>
            {languages.map((lang) => (
              <SelectItem key={lang.value} value={lang.value}>
                <div className="flex items-center gap-2">
                  <LanguageIcon slug={lang.value} className="w-5 h-5" />
                  <span>{lang.label}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex items-center gap-2 ml-auto">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center justify-center h-7 px-2.5 rounded-lg text-[0.8rem] font-medium border border-border bg-background hover:bg-muted hover:text-foreground transition-colors"
            title="Copy code"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="inline-flex items-center justify-center h-7 px-2.5 rounded-lg text-[0.8rem] font-medium border border-border bg-background hover:bg-muted hover:text-foreground transition-colors"
            title="Clear output"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
          </button>
          <button
            type="button"
            onClick={handleRun}
            disabled={running}
            className="inline-flex items-center justify-center gap-1.5 h-7 px-2.5 rounded-lg text-[0.8rem] font-medium bg-primary text-primary-foreground hover:opacity-90 transition-all disabled:opacity-50 disabled:pointer-events-none"
          >
            {running ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin shrink-0"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            )}
            {running ? "Running..." : "Run"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-lg overflow-hidden border border-zinc-800" style={{ height: "500px" }}>
          <MonacoEditor
            key={language}
            language={getMonacoLanguage(language)}
            value={code}
            onChange={(val) => setCode(val || "")}
            theme="vs-dark"
            options={{ minimap: { enabled: false }, fontSize: 14, lineNumbers: "on", scrollBeyondLastLine: false }}
          />
        </div>
        <div className="flex flex-col rounded-lg border border-zinc-800 bg-zinc-950" style={{ height: "500px" }}>
          <div className="px-4 py-2 border-b border-zinc-800 flex items-center justify-between">
            <span className="text-xs font-heading text-zinc-500">Output</span>
          </div>
          <pre className="flex-1 p-4 text-sm font-mono text-green-400 bg-black overflow-auto whitespace-pre-wrap">{output || <span className="text-zinc-500 font-heading">Run your code to see output...</span>}</pre>
        </div>
      </div>
    </div>
  );
}
