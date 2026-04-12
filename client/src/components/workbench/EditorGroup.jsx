import React from "react";
import Editor from "@monaco-editor/react";
import { X } from "lucide-react";

export default function EditorGroup({
  activeFile,
  language,
  onChangeLanguage,
  code,
  onChangeCode,
}) {
  return (
    <div className="flex-1 min-w-0 flex flex-col bg-[#0b0d12]">
      <div className="h-10 bg-[#0f1115] border-b border-white/10 flex items-end">
        <div className="flex items-stretch">
          {[
            { name: activeFile, active: true },
            { name: "README.md", active: false },
          ].map((t) => (
            <button
              key={t.name}
              type="button"
              className={[
                "h-10 px-3 flex items-center gap-2 text-[12px] border-r border-white/10",
                t.active
                  ? "bg-[#0b0d12] text-white"
                  : "bg-[#0f1115] text-white/70 hover:text-white",
              ].join(" ")}
            >
              <span className="truncate max-w-[220px]">{t.name}</span>
              <span className="opacity-70 hover:opacity-100">
                <X size={14} />
              </span>
            </button>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2 pr-2 pb-1">
          <select
            value={language}
            onChange={(e) => onChangeLanguage(e.target.value)}
            className="appearance-none bg-[#1a1d24] border border-white/10 text-[12px] px-2 py-1 rounded-md text-white/80 outline-none focus:border-[#7c3aed]"
          >
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>3
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
          </select>
        </div>
      </div>

      <div className="flex-1 min-h-0">
        <Editor
          height="100%"
          theme="vs-dark"
          language={language}
          value={code}
          onChange={(value) => onChangeCode(value || "")}
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            wordWrap: "on",
            automaticLayout: true,
            padding: { top: 14, bottom: 14 },
            lineNumbersMinChars: 3,
            scrollBeyondLastLine: false,
            roundedSelection: true,
            cursorBlinking: "smooth",
            cursorSmoothCaretAnimation: "on",
          }}
        />
      </div>

      <div className="h-7 bg-[#111425] text-white/90 flex items-center justify-between px-3 text-[11px] border-t border-white/10 select-none">
        <div className="flex items-center gap-3 text-white/80">
          <span>main</span>
          <span className="hidden sm:inline">No Problems</span>
        </div>
        <div className="flex items-center gap-3 text-white/70">
          <span className="hidden md:inline">{language}</span>
          <span>Ln 1, Col 1</span>
          <span>UTF-8</span>
        </div>
      </div>
    </div>
  );
}

