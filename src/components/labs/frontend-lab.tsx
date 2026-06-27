"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2 } from "lucide-react";
import { frontendCode } from "@/lib/data/labs";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full bg-zinc-950">
      <Loader2 className="w-5 h-5 animate-spin text-zinc-400" />
    </div>
  ),
});

export function FrontendLab() {
  const [html, setHtml] = useState(frontendCode.html);
  const [css, setCss] = useState(frontendCode.css);
  const [js, setJs] = useState(frontendCode.js);
  const [activeTab, setActiveTab] = useState("html");
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const updatePreview = useCallback(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const iframe = iframeRef.current;
      if (!iframe) return;
      const combined = `<!DOCTYPE html><html><head><style>${css}</style></head><body>${html}<script>${js}<\/script></body></html>`;
      iframe.srcdoc = combined;
    }, 300);
  }, [html, css, js]);

  useEffect(() => { updatePreview(); }, [updatePreview]);

  const handleEditorChange = (value: string | undefined) => {
    if (value == null) return;
    if (activeTab === "html") setHtml(value);
    else if (activeTab === "css") setCss(value);
    else if (activeTab === "js") setJs(value);
  };

  const handleReset = () => {
    setHtml(frontendCode.html);
    setCss(frontendCode.css);
    setJs(frontendCode.js);
  };

  const getCurrentCode = () => {
    if (activeTab === "html") return html;
    if (activeTab === "css") return css;
    return js;
  };

  const getLanguage = () => {
    if (activeTab === "html") return "html";
    if (activeTab === "css") return "css";
    return "javascript";
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-900/50">
        <div className="flex items-center gap-2">
          <span className="text-sm font-heading font-medium text-white">Frontend Sandbox</span>
          <span className="text-xs font-heading text-zinc-500">HTML / CSS / JS</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center gap-1 h-7 px-2.5 rounded-lg text-[0.8rem] font-medium border border-border bg-background text-zinc-400 hover:bg-muted hover:text-foreground transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
            Reset
          </button>
          <button
            type="button"
            onClick={updatePreview}
            className="inline-flex items-center justify-center gap-1 h-7 px-2.5 rounded-lg text-[0.8rem] font-medium bg-[#22D3EE]/20 text-[#22D3EE] hover:bg-[#22D3EE]/30 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Run
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/2 flex flex-col border-r border-zinc-800">
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v)} className="flex-1 flex flex-col">
            <TabsList className="justify-start px-4 pt-2 bg-transparent border-b border-zinc-800 rounded-none">
              <TabsTrigger value="html" className="data-[state=active]:bg-zinc-800">HTML</TabsTrigger>
              <TabsTrigger value="css" className="data-[state=active]:bg-zinc-800">CSS</TabsTrigger>
              <TabsTrigger value="js" className="data-[state=active]:bg-zinc-800">JavaScript</TabsTrigger>
            </TabsList>
            <TabsContent value={activeTab} className="flex-1 p-0 m-0">
              <MonacoEditor
                key={activeTab}
                language={getLanguage()}
                value={getCurrentCode()}
                onChange={handleEditorChange}
                theme="vs-dark"
                options={{
                  minimap: { enabled: false },
                  fontSize: 13,
                  lineNumbers: "on",
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  padding: { top: 8 },
                }}
              />
            </TabsContent>
          </Tabs>
        </div>

        <div className="w-1/2 flex flex-col">
          <div className="px-4 py-2 text-sm font-heading text-zinc-400 border-b border-zinc-800 bg-zinc-900/50">
            Live Preview
          </div>
          <iframe ref={iframeRef} className="flex-1 bg-white" title="Preview" sandbox="allow-scripts allow-modals" />
        </div>
      </div>
    </div>
  );
}
