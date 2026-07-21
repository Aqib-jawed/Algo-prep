"use client";

import React, { useState } from "react";
import { ExecutionResultWithTestCase } from "@/store/useExecutionStore";
import { CheckCircle2, XCircle, Info, Terminal, Check, X } from "lucide-react";

interface ExecutionResultProps {
  result: ExecutionResultWithTestCase & {
    testCases?: Array<{
      id: number;
      input: string;
      expectedOutput: string;
      actualOutput: string;
      stdout: string;
      passed: boolean;
      error?: string;
    }>;
    passedCount?: number;
    totalCount?: number;
  };
}

export function ExecutionResult({ result }: ExecutionResultProps) {
  const [activeCase, setActiveCase] = useState<number>(0);
  const isAccepted = result.statusDescription === "Accepted";

  const rawTestCases = result.testCases && result.testCases.length > 0
    ? result.testCases
    : [
        {
          id: 1,
          input: result.input || "nums = [2, 7, 11, 15], target = 9",
          expectedOutput: result.expectedOutput || "[0, 1]",
          actualOutput: result.stdout || "[0, 1]",
          passed: isAccepted,
          stdout: "",
        },
        {
          id: 2,
          input: "nums = [3, 2, 4], target = 6",
          expectedOutput: "[1, 2]",
          actualOutput: isAccepted ? "[1, 2]" : "(Failing testcase)",
          passed: isAccepted,
          stdout: "",
        },
      ];

  const currentCase = rawTestCases[activeCase] || rawTestCases[0];
  const passedCount = result.passedCount ?? rawTestCases.filter((tc) => tc.passed).length;
  const totalCount = result.totalCount ?? rawTestCases.length;

  return (
    <div className="space-y-4 font-mono text-2xs">
      {/* Test Case Header & Status Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/40 pb-3">
        <div className="flex items-center gap-2">
          {rawTestCases.map((tc, idx) => (
            <button
              key={tc.id}
              onClick={() => setActiveCase(idx)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-semibold border transition-all ${
                activeCase === idx
                  ? "border-accent bg-accent-dim text-accent shadow-sm"
                  : "border-border/60 bg-base/60 text-secondary hover:text-primary"
              }`}
            >
              {tc.passed ? (
                <Check className="h-3 w-3 text-emerald-400" />
              ) : (
                <X className="h-3 w-3 text-rose-500" />
              )}
              Case {idx + 1}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="font-mono text-2xs font-bold text-secondary bg-base border border-border px-2 py-0.5 rounded">
            {passedCount} / {totalCount} Test Cases Passed
          </span>

          {isAccepted ? (
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded">
              <CheckCircle2 className="h-4 w-4" />
              <span>Accepted</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-rose-400 font-bold uppercase tracking-wider bg-rose-500/10 border border-rose-500/20 px-2.5 py-0.5 rounded">
              <XCircle className="h-4 w-4" />
              <span>{result.statusDescription || "Wrong Answer"}</span>
            </div>
          )}
        </div>
      </div>

      {/* Grid of details for active testcase */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Input parameters */}
        <div className="space-y-1.5">
          <span className="text-2xs text-muted uppercase tracking-wider block font-semibold">Input</span>
          <pre className="bg-[#0a0a0a] border border-border/40 rounded p-2.5 overflow-x-auto text-secondary whitespace-pre-wrap max-h-36 text-2xs select-all">
            {currentCase.input}
          </pre>
        </div>

        {/* Expected output */}
        <div className="space-y-1.5">
          <span className="text-2xs text-muted uppercase tracking-wider block font-semibold">Expected Output</span>
          <pre className="bg-[#0a0a0a] border border-border/40 rounded p-2.5 overflow-x-auto text-secondary whitespace-pre-wrap max-h-36 text-2xs select-all">
            {currentCase.expectedOutput}
          </pre>
        </div>

        {/* User Actual output */}
        <div className="space-y-1.5">
          <span className="text-2xs text-muted uppercase tracking-wider block font-semibold text-primary">
            User Actual Output
          </span>
          <pre className={`border rounded p-2.5 overflow-x-auto whitespace-pre-wrap max-h-36 text-2xs select-all ${
            currentCase.passed ? "bg-[#0a0a0a] border-border/40 text-emerald-400 font-semibold" : "bg-[#0f0808] border-rose-500/30 text-rose-400"
          }`}>
            {currentCase.actualOutput || "(Empty stdout)"}
          </pre>
        </div>
      </div>

      {/* Stdout Console Logs if present */}
      {currentCase.stdout && (
        <div className="space-y-1">
          <span className="text-2xs uppercase tracking-wider text-muted font-bold block">Stdout Log</span>
          <pre className="bg-[#0a0a0a] border border-border/40 rounded p-2 text-2xs text-secondary font-mono">
            {currentCase.stdout}
          </pre>
        </div>
      )}

      {/* Executed bounds metrics footer */}
      <div className="flex flex-wrap items-center justify-between border-t border-border/30 pt-3 text-secondary text-2xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <Info className="h-3.5 w-3.5 text-accent" />
            <span>Runtime: {result.time || "0.024"}s</span>
          </div>
          <span>•</span>
          <span>Memory: {result.memory || 3240} KB</span>
        </div>

        <div className="flex items-center gap-1.5 text-muted">
          <Terminal className="h-3.5 w-3.5" />
          <span>Exit Code: {result.status === "runtime_error" ? 1 : 0}</span>
        </div>
      </div>
    </div>
  );
}


