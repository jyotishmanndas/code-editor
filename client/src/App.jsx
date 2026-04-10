import React, { useState } from "react";
import Editor from "@monaco-editor/react";

export default function App() {
  const [code, setCode] = useState("// Start coding here...");
  const [language, setLanguage] = useState("javascript");

  return (
    <div className="h-screen w-full flex flex-col bg-[#1e1e1e] text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-gray-700">
        <h1 className="text-sm font-semibold">My Code Editor</h1>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-[#1e1e1e] border border-gray-600 text-sm px-2 py-1 rounded"
        >
          <option value="javascript">JavaScript</option>
          <option value="typescript">TypeScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
        </select>
      </div>

      {/* Editor */}
      <div className="flex-1">
        <Editor
          height="100%"
          theme="vs-dark"
          language={language}
          value={code}
          onChange={(value) => setCode(value || "")}
          options={{
            fontSize: 14,
            minimap: { enabled: true },
            wordWrap: "on",
            automaticLayout: true,
          }}
        />
      </div>
    </div>
  );
}
