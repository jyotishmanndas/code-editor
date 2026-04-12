import React from "react";
import { GitBranch, CheckCircle2 } from "lucide-react";

export default function TitleBar() {
  return (
    <div className="h-11 flex items-center justify-between px-3 bg-[#0f1115] border-b border-white/10 select-none">
      <div className="flex items-center gap-3 text-xs min-w-0">
        <div className="font-medium text-white/90 truncate">
          Code Editor
        </div>
        <div className="hidden md:flex items-center gap-4 text-white/60">
          {["File", "Edit", "Selection", "View", "Go", "Run", "Terminal", "Help"].map(
            (t) => (
              <button key={t} className="hover:text-white/90">
                {t}
              </button>
            )
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 text-[11px] text-white/70">
        <span className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 border border-white/10">
          <GitBranch size={14} className="opacity-80" />
          main
        </span>
        <span className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 border border-white/10">
          <CheckCircle2 size={14} className="opacity-80" />
          Ready
        </span>
      </div>
    </div>
  );
}

