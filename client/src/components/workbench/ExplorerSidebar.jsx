import React from "react";
import { ChevronDown, File, Folder, Plus, FolderPlus, Search } from "lucide-react";

export default function ExplorerSidebar({ files, activeFile, onSelectFile }) {
  return (
    <div className="w-72 bg-[#0f1115] border-r border-white/10 flex flex-col">
      <div className="h-10 px-3 flex items-center justify-between border-b border-white/10">
        <div className="text-[11px] tracking-widest text-white/70">EXPLORER</div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="h-8 w-8 inline-flex items-center justify-center rounded-md hover:bg-white/10 text-white/70 hover:text-white"
            title="New File (UI only)"
          >
            <Plus size={16} />
          </button>
          <button
            type="button"
            className="h-8 w-8 inline-flex items-center justify-center rounded-md hover:bg-white/10 text-white/70 hover:text-white"
            title="New Folder (UI only)"
          >
            <FolderPlus size={16} />
          </button>
        </div>
      </div>

      <div className="px-3 py-2 border-b border-white/10">
        <div className="text-[11px] text-white/60 mb-2">CODE-EDITOR</div>
        <div className="relative">
          <Search
            size={14}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-white/50"
          />
          <input
            className="w-full bg-white/5 border border-white/10 rounded-md pl-7 pr-2 py-1.5 text-[12px] text-white/80 placeholder:text-white/40 outline-none focus:border-[#7c3aed]"
            placeholder="Search files"
            readOnly
          />
        </div>
      </div>

      <div className="flex-1 overflow-auto vscode-scroll py-1">
        {files.map((f) => {
          const isFile = f.type === "file";
          const displayPath = f.depth === 1 ? `src/${f.name}` : f.name;
          const isActive = isFile && displayPath === activeFile;

          return (
            <button
              key={f.id}
              type="button"
              onClick={() => {
                if (isFile) onSelectFile(displayPath);
              }}
              className={[
                "w-full text-left px-2 py-1.5 flex items-center gap-2 text-[12px] rounded-sm",
                "hover:bg-white/5",
                isActive ? "bg-white/10 text-white" : "text-white/75",
              ].join(" ")}
              style={{ paddingLeft: 10 + f.depth * 14 }}
            >
              <span className="w-4 inline-flex items-center justify-center text-white/60">
                {f.type === "folder" ? (
                  <ChevronDown size={14} />
                ) : (
                  <span className="inline-flex items-center justify-center">
                    {isFile ? <File size={14} /> : null}
                  </span>
                )}
              </span>
              {f.type === "folder" ? <Folder size={14} className="text-white/70" /> : null}
              <span className="truncate">{f.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

