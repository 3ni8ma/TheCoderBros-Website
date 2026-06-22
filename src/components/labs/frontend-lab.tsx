"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Play, RotateCcw, Download } from "lucide-react";
import { frontendCode } from "@/lib/data/labs";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export function FrontendLab() {
  const [html, setHtml] = useState(frontendCode.html);
  const [css, setCss] = useState(frontendCode.css);
  const [js, setJs] = useState(frontendCode.js);
  const [activeTab, setActiveTab] = useState("html");
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const debounceRef = useRef<NodeJS.Timeout>(undefined);

  const updatePreview = useCallback(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const iframe = iframeRef.current;
      if (!iframe) return;
      const combined = `<!DOCTYPE html><html><head><style>${css}</style></head><body>${html}<script>${js}<\/script></body></html>`;
      iframe.srcdoc = combined;
    }, 500);
  }, [html, css, js]);

  useEffect(() => { updatePreview(); }, [updatePreview]);

  const handleEditorChange = (value: string | undefined) => {
    if (!value) return;
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
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-900/50">
        <div className="flex items-center gap-2">
          <span className="text-sm font-heading font-medium text-white">Frontend Sandbox</span>
          <span className="text-xs font-heading text-zinc-500">HTML / CSS / JS</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={handleReset} className="text-zinc-400 font-heading">
            <RotateCcw className="w-3.5 h-3.5 mr-1" /> Reset
          </Button>
          <Button size="sm" onClick={updatePreview} className="bg-[#22D3EE]/20 text-[#22D3EE] hover:bg-[#22D3EE]/30 font-heading">
            <Play className="w-3.5 h-3.5 mr-1" /> Run
          </Button>
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
