"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Play, Trash2, Copy, Loader2 } from "lucide-react";
import { backendDefaultCode, pistonLanguageMap } from "@/lib/data/labs";
import { LanguageIcon } from "@/components/shared/language-icon";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

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
        body: JSON.stringify({ language: pistonLanguageMap[language as keyof typeof pistonLanguageMap] || language, code }),
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

  const editorOptions = { minimap: { enabled: false }, fontSize: 14, lineNumbers: "on" as const, scrollBeyondLastLine: false };

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
          <Button size="sm" variant="outline" onClick={handleCopy} title="Copy code">
            <Copy className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="outline" onClick={handleClear} title="Clear output">
            <Trash2 className="w-4 h-4" />
          </Button>
          <Button size="sm" onClick={handleRun} disabled={running}>
            {running ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
            {running ? "Running..." : "Run"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-lg overflow-hidden border border-zinc-800" style={{ height: "500px" }}>
          <MonacoEditor
            language={getMonacoLanguage(language)}
            value={code}
            onChange={(val) => setCode(val || "")}
            theme="vs-dark"
            options={editorOptions}
          />
        </div>
        <div className="flex flex-col rounded-lg border border-zinc-800 bg-zinc-950" style={{ height: "500px" }}>
          <div className="px-4 py-2 border-b border-zinc-800 flex items-center justify-between">
            <span className="text-xs font-heading text-zinc-500">Output</span>
          </div>
          <pre className="flex-1 p-4 text-sm font-mono text-green-400 bg-black overflow-auto whitespace-pre-wrap">{output || <span className="font-heading">Run your code to see output...</span>}</pre>
        </div>
      </div>
    </div>
  );
}
