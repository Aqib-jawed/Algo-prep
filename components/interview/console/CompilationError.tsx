"use client";

import React from "react";
import { AlertCircle } from "lucide-react";

interface CompilationErrorProps {
  compileOutput: string;
}

export function CompilationError({ compileOutput }: CompilationErrorProps) {
  return (
    <div className="p-4 bg-hard/5 border-l-2 border-hard/35 rounded-r-card space-y-3 font-mono text-2xs">
      <div className="flex items-center gap-2 text-hard">
        <AlertCircle className="h-4 w-4" />
        <span className="font-bold uppercase tracking-wider">Compilation Failed</span>
      </div>
      <pre className="overflow-x-auto text-secondary whitespace-pre-wrap leading-relaxed max-h-56 bg-black/35 p-3 rounded border border-border/20">
        {compileOutput || "No detailed compiler diagnostics were emitted."}
      </pre>
    </div>
  );
}
