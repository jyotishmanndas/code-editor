import React from "react";
import {
  Files,
  Search,
  GitBranch,
  Play,
  Blocks,
  UserCircle2,
  Settings,
} from "lucide-react";
import IconButton from "../ui/IconButton";

export default function ActivityBar() {
  return (
    <div className="w-12 bg-[#0b0d12] border-r border-white/10 flex flex-col items-center py-2 gap-1 select-none">
      <IconButton title="Explorer" active className="mt-1">
        <Files size={18} />
      </IconButton>
      <IconButton title="Search">
        <Search size={18} />
      </IconButton>
      <IconButton title="Source Control">
        <GitBranch size={18} />
      </IconButton>
      <IconButton title="Run">
        <Play size={18} />
      </IconButton>
      <IconButton title="Extensions">
        <Blocks size={18} />
      </IconButton>

      <div className="flex-1" />

      <IconButton title="Accounts">
        <UserCircle2 size={18} />
      </IconButton>
      <IconButton title="Settings" className="mb-1">
        <Settings size={18} />
      </IconButton>
    </div>
  );
}

