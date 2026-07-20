"use client";

import React from "react";
import { ProgrammingLanguage } from "@/types/interview";
import { Terminal, Settings, RefreshCw } from "lucide-react";

interface EditorPlaceholderProps {
  language: ProgrammingLanguage;
}

export function EditorPlaceholder({ language }: EditorPlaceholderProps) {
  const languageExtensions: Record<ProgrammingLanguage, string> = {
    java: "Solution.java",
    python: "solution.py",
    cpp: "solution.cpp",
    javascript: "solution.js",
    c: "solution.c",
  };

  return (
    <div className="card h-full flex flex-col bg-[#0d0d0d] border-border overflow-hidden rounded-lg font-mono">
      {/* Editor Header Tab Bar */}
      <div className="flex items-center justify-between bg-[#141414] px-4 py-2 border-b border-border text-xs text-secondary">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-accent" />
          <span className="font-semibold text-primary">{languageExtensions[language]}</span>
        </div>
        <div className="flex items-center gap-3">
          <button disabled className="hover:text-primary transition-colors opacity-50 cursor-not-allowed">
            <Settings className="h-3.5 w-3.5" />
          </button>
          <button disabled className="hover:text-primary transition-colors opacity-50 cursor-not-allowed">
            <RefreshCw className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Code Editor Body Canvas (Standard full height sizing) */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-[#0a0a0a] min-h-[480px]">
        <div className="space-y-4 max-w-sm">
          <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto text-accent animate-pulse">
            <Terminal className="h-5 w-5" />
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-primary">Monaco Code Editor Sandbox</h4>
            <p className="text-2xs text-secondary leading-relaxed font-sans">
              Monaco Editor will be integrated in the next phase, introducing syntax highlighting, autocompletion, 
              and compilation support in <span className="font-mono text-accent">{language.toUpperCase()}</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
