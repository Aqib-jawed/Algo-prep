"use client";

import React from "react";
import { SubmissionResult as TSubmissionResult } from "@/types/interview";
import { CheckCircle2, XCircle, AlertTriangle, Cpu, HardDrive, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface SubmissionResultProps {
  result: TSubmissionResult;
}

export function SubmissionResult({ result }: SubmissionResultProps) {
  const isAccepted = result.status === "Accepted";

  const getStatusColor = (status: TSubmissionResult["status"]) => {
    switch (status) {
      case "Accepted":
        return "text-easy border-easy/20 bg-easy/5";
      case "Wrong Answer":
        return "text-hard border-hard/20 bg-hard/5";
      case "Compilation Error":
        return "text-hard border-hard/20 bg-hard/5";
      case "Runtime Error":
        return "text-hard border-hard/20 bg-hard/5";
      case "Time Limit Exceeded":
        return "text-medium border-medium/20 bg-medium/5";
      case "Memory Limit Exceeded":
        return "text-medium border-medium/20 bg-medium/5";
      default:
        return "text-secondary border-border bg-surface";
    }
  };

  const getStatusIcon = (status: TSubmissionResult["status"]) => {
    switch (status) {
      case "Accepted":
        return <CheckCircle2 className="h-5 w-5 text-easy" />;
      case "Wrong Answer":
        return <XCircle className="h-5 w-5 text-hard" />;
      case "Compilation Error":
        return <AlertTriangle className="h-5 w-5 text-hard" />;
      case "Runtime Error":
        return <XCircle className="h-5 w-5 text-hard" />;
      case "Time Limit Exceeded":
        return <AlertTriangle className="h-5 w-5 text-medium" />;
      case "Memory Limit Exceeded":
        return <AlertTriangle className="h-5 w-5 text-medium" />;
      default:
        return <Terminal className="h-5 w-5 text-secondary" />;
    }
  };

  // Helper to format memory
  const formatMemory = (kb: number) => {
    if (kb >= 1024) {
      return `${(kb / 1024).toFixed(2)} MB`;
    }
    return `${kb.toLocaleString()} KB`;
  };

  // Helper to format runtime
  const formatRuntime = (secs: number) => {
    if (secs < 1) {
      return `${(secs * 1000).toFixed(0)} ms`;
    }
    return `${secs.toFixed(3)} s`;
  };

  return (
    <div className="space-y-4 font-mono">
      {/* Top Banner */}
      <div className={cn("flex items-center justify-between p-4 rounded-card border", getStatusColor(result.status))}>
        <div className="flex items-center gap-3">
          {getStatusIcon(result.status)}
          <div>
            <h4 className="text-sm font-bold tracking-tight text-primary uppercase">
              {result.status}
            </h4>
            <p className="text-2xs text-secondary mt-0.5">
              Submitted at {new Date(result.submittedAt).toLocaleTimeString()}
            </p>
          </div>
        </div>

        <div className="text-right">
          <span className="text-xs font-bold text-primary">
            {result.passedTests} / {result.totalTests} Passed
          </span>
          <p className="text-2xs text-secondary mt-0.5">Test Cases</p>
        </div>
      </div>

      {/* Metrics Grid */}
      {!result.compilerMessage && (
        <div className="grid grid-cols-2 gap-3">
          <div className="card p-3 bg-surface border border-border flex items-center gap-3">
            <Cpu className="h-4 w-4 text-accent" />
            <div className="space-y-0.5">
              <span className="text-2xs text-muted block uppercase tracking-wider">Runtime</span>
              <span className="text-xs font-bold text-primary">
                {formatRuntime(result.runtime)}
              </span>
            </div>
          </div>

          <div className="card p-3 bg-surface border border-border flex items-center gap-3">
            <HardDrive className="h-4 w-4 text-accent" />
            <div className="space-y-0.5">
              <span className="text-2xs text-muted block uppercase tracking-wider">Memory</span>
              <span className="text-xs font-bold text-primary">
                {formatMemory(result.memory)}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Detailed compilation error block */}
      {result.compilerMessage && (
        <div className="space-y-1.5">
          <span className="text-2xs uppercase tracking-wider text-muted block font-bold">Compiler Message</span>
          <pre className="p-3 bg-[#0a0a0a] border border-border rounded-card text-2xs text-hard overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-[160px]">
            {result.compilerMessage}
          </pre>
        </div>
      )}

      {/* Detailed runtime message if failed */}
      {!result.compilerMessage && result.runtimeMessage && (
        <div className="space-y-1.5">
          <span className="text-2xs uppercase tracking-wider text-muted block font-bold">Exception / Stderr</span>
          <pre className="p-3 bg-[#0a0a0a] border border-border rounded-card text-2xs text-hard overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-[160px]">
            {result.runtimeMessage}
          </pre>
        </div>
      )}
    </div>
  );
}
