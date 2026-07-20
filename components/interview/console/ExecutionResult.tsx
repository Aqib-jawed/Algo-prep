"use client";

import React from "react";
import { ExecutionResultWithTestCase } from "@/store/useExecutionStore";
import { CheckCircle2, XCircle, Info } from "lucide-react";

interface ExecutionResultProps {
  result: ExecutionResultWithTestCase;
}

export function ExecutionResult({ result }: ExecutionResultProps) {
  const isAccepted = result.statusDescription === "Accepted";

  return (
    <div className="space-y-4 font-mono text-2xs">
      {/* Visual Status Indicator */}
      <div className="flex items-center gap-2 border-b border-border/40 pb-2">
        {isAccepted ? (
          <div className="flex items-center gap-2 text-easy">
            <CheckCircle2 className="h-4 w-4" />
            <span className="font-bold uppercase tracking-wider">Test Case Passed</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-hard">
            <XCircle className="h-4 w-4" />
            <span className="font-bold uppercase tracking-wider">
              Test Case Failed ({result.statusDescription})
            </span>
          </div>
        )}
      </div>

      {/* Grid of details */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Input parameters */}
        <div className="space-y-1.5">
          <span className="text-2xs text-muted uppercase tracking-wider block">Input</span>
          <pre className="bg-[#0a0a0a] border border-border/30 rounded p-2.5 overflow-x-auto text-secondary whitespace-pre-wrap max-h-36">
            {result.input || "(No stdin parameters)"}
          </pre>
        </div>

        {/* Expected output */}
        <div className="space-y-1.5">
          <span className="text-2xs text-muted uppercase tracking-wider block">Expected Output</span>
          <pre className="bg-[#0a0a0a] border border-border/30 rounded p-2.5 overflow-x-auto text-secondary whitespace-pre-wrap max-h-36">
            {result.expectedOutput || "(No stdout expected)"}
          </pre>
        </div>

        {/* Actual output */}
        <div className="space-y-1.5">
          <span className="text-2xs text-muted uppercase tracking-wider block font-semibold">
            Actual Output
          </span>
          <pre className={`border rounded p-2.5 overflow-x-auto whitespace-pre-wrap max-h-36 ${
            isAccepted ? "bg-[#0a0a0a] border-border/30 text-secondary" : "bg-[#0f0808] border-hard/30 text-hard"
          }`}>
            {result.stdout || "(Empty stdout)"}
          </pre>
        </div>
      </div>

      {/* Executed bounds metrics footer */}
      <div className="flex flex-wrap items-center gap-4 border-t border-border/30 pt-3 text-secondary text-2xs">
        <div className="flex items-center gap-1.5">
          <Info className="h-3.5 w-3.5 text-accent" />
          <span>Execution Time: {result.time || "0.000"}s</span>
        </div>
        <span>•</span>
        <span>Memory Usage: {result.memory || 0} KB</span>
      </div>
    </div>
  );
}
