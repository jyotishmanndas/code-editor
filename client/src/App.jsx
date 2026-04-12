import React, { useState } from "react";
import TitleBar from "./components/workbench/TitleBar";
import ActivityBar from "./components/workbench/ActivityBar";
import ExplorerSidebar from "./components/workbench/ExplorerSidebar";
import EditorGroup from "./components/workbench/EditorGroup";
import CopilotPanel from "./components/workbench/CopilotPanel";

export default function App() {
  const [code, setCode] = useState("// Start coding here...");
  const [language, setLanguage] = useState("javascript");
  const [activeFile, setActiveFile] = useState("src/App.jsx");

  const files = [
    { id: "1", name: "src", type: "folder", depth: 0 },
    { id: "2", name: "App.jsx", type: "file", depth: 1 },
    { id: "3", name: "main.jsx", type: "file", depth: 1 },
    { id: "4", name: "index.css", type: "file", depth: 1 },
    { id: "5", name: "package.json", type: "file", depth: 0 },
    { id: "6", name: "vite.config.js", type: "file", depth: 0 },
  ];

  return (
    <div className="h-screen w-full overflow-hidden bg-[#0b0d12] text-white/80">
      <style>{`
        /* Minimal Cursor/VSCode-ish scrollbars */
        .vscode-scroll::-webkit-scrollbar { width: 10px; height: 10px; }
        .vscode-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.14); border-radius: 10px; }
        .vscode-scroll::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.22); }
        .vscode-scroll::-webkit-scrollbar-track { background: rgba(255,255,255,0.04); }
      `}</style>

      <TitleBar />

      {/* Workbench */}
      <div className="h-[calc(100vh-2.75rem)] flex">
        <ActivityBar />
        <ExplorerSidebar
          files={files}
          activeFile={activeFile}
          onSelectFile={setActiveFile}
        />
        <EditorGroup
          activeFile={activeFile}
          language={language}
          onChangeLanguage={setLanguage}
          code={code}
          onChangeCode={setCode}
        />
        <CopilotPanel />
      </div>
    </div>
  );
}
