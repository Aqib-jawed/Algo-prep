"use client";

import React from "react";
import { Loader2 } from "lucide-react";

export function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-3 min-h-[160px] text-center font-mono">
      <Loader2 className="h-6 w-6 text-accent animate-spin" />
      <div className="space-y-1">
        <p className="text-xs font-semibold text-primary">Compiling and Executing Solution...</p>
        <p className="text-2xs text-secondary leading-relaxed font-sans max-w-xs">
          Your source code is being packaged and submitted to the Judge0 sandbox against sample test cases.
        </p>
      </div>
    </div>
  );
}
