"use client";

import React from "react";
import { Bug } from "lucide-react";

interface RuntimeErrorProps {
  stderr: string;
  statusDescription: string;
}

export function RuntimeError({ stderr, statusDescription }: RuntimeErrorProps) {
  return (
    <div className="p-4 bg-hard/5 border-l-2 border-hard/35 rounded-r-card space-y-3 font-mono text-2xs">
      <div className="flex items-center gap-2 text-hard">
        <Bug className="h-4 w-4 animate-pulse" />
        <span className="font-bold uppercase tracking-wider">
          Runtime Exception: {statusDescription}
        </span>
      </div>
      {stderr && (
        <pre className="overflow-x-auto text-secondary whitespace-pre-wrap leading-relaxed max-h-56 bg-black/35 p-3 rounded border border-border/20">
          {stderr}
        </pre>
      )}
      <p className="text-2xs text-muted leading-relaxed font-sans">
        Review your boundary checks, indexing offsets, and memory pointer references to ensure correct execution.
      </p>
    </div>
  );
}
