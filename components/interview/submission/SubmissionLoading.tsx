"use client";

import React from "react";
import { Loader2, ShieldAlert } from "lucide-react";

export function SubmissionLoading() {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-3 min-h-[180px] text-center font-mono">
      <div className="relative flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-accent animate-spin" />
        <ShieldAlert className="h-4 w-4 text-accent absolute animate-pulse" />
      </div>
      <div className="space-y-1">
        <p className="text-xs font-semibold text-primary">Evaluating Hidden Test Cases...</p>
        <p className="text-2xs text-secondary leading-relaxed font-sans max-w-xs mx-auto">
          Your solution is being securely processed and evaluated against hidden test suites in an isolated Judge0 sandbox.
        </p>
      </div>
    </div>
  );
}
