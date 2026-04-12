import React from "react";
import { Bot, MoreHorizontal, Sparkles, Send } from "lucide-react";

export default function CopilotPanel() {
  return (
    <div className="w-96 max-w-[40vw] bg-[#0f1115] border-l border-white/10 flex flex-col">
      <div className="h-10 px-3 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-2 text-[11px] tracking-widest text-white/70">
          <Sparkles size={14} className="text-white/60" />
          COPILOT
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="h-8 px-2 rounded-md hover:bg-white/10 text-white/70 hover:text-white text-[11px]"
          >
            New Chat
          </button>
          <button
            type="button"
            className="h-8 w-8 inline-flex items-center justify-center rounded-md hover:bg-white/10 text-white/70 hover:text-white"
            title="More"
          >
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto vscode-scroll p-3 space-y-3">
        <div className="text-[12px] text-white/60">
          Ask Copilot about your code (UI mock).
        </div>

        <div className="rounded-lg border border-white/10 bg-white/5 p-3">
          <div className="flex items-center gap-2 text-[11px] text-white/60 mb-2">
            <Bot size={14} />
            Copilot
          </div>
          <div className="text-[12px] text-white/80 leading-relaxed">
            I can help generate code, explain errors, or refactor. Select a file
            and ask a question.
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/5 p-3">
          <div className="text-[11px] text-white/60 mb-2">Suggestions</div>
          <div className="space-y-2">
            {[
              "Explain this file",
              "Generate a component skeleton",
              "Find a bug in my logic",
              "Write tests for this function",
            ].map((s) => (
              <button
                key={s}
                type="button"
                className="w-full text-left text-[12px] text-white/80 px-2.5 py-2 rounded-md bg-black/20 hover:bg-white/10 border border-white/10"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-3 border-t border-white/10">
        <div className="flex items-center gap-2">
          <input
            className="flex-1 bg-black/30 border border-white/10 rounded-md px-3 py-2 text-[12px] text-white/80 placeholder:text-white/40 outline-none focus:border-[#7c3aed]"
            placeholder="Ask Copilot…"
            readOnly
          />
          <button
            type="button"
            className="h-9 px-3 rounded-md bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-[12px] inline-flex items-center gap-2"
          >
            <Send size={14} />
            Send
          </button>
        </div>
        <div className="mt-2 text-[10px] text-white/45">
          UI only — wire this to your backend later.
        </div>
      </div>
    </div>
  );
}

