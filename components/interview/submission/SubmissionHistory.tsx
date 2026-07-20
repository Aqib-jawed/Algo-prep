"use client";

import React from "react";
import { useSubmissionStore } from "@/store/useSubmissionStore";
import { Trash2, History, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface SubmissionHistoryProps {
  questionId: number;
}

export function SubmissionHistory({ questionId }: SubmissionHistoryProps) {
  const { submissionHistory, clearHistory } = useSubmissionStore();

  const history = submissionHistory.filter((item) => item.questionId === questionId);

  const getBadgeColor = (result: string) => {
    switch (result) {
      case "Accepted":
        return "bg-easy/5 text-easy border-easy/10";
      case "Wrong Answer":
        return "bg-hard/5 text-hard border-hard/10";
      default:
        return "bg-medium/5 text-medium border-medium/10";
    }
  };

  const formatRuntime = (secs: number) => {
    if (secs < 1) return `${(secs * 1000).toFixed(0)} ms`;
    return `${secs.toFixed(3)} s`;
  };

  const formatMemory = (kb: number) => {
    if (kb >= 1024) return `${(kb / 1024).toFixed(2)} MB`;
    return `${kb.toLocaleString()} KB`;
  };

  return (
    <div className="space-y-4 font-mono">
      <div className="flex items-center justify-between border-b border-border pb-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-primary">
          <History className="h-4 w-4 text-accent" />
          <span>Submission History</span>
        </div>
        {history.length > 0 && (
          <button
            onClick={clearHistory}
            className="inline-flex items-center gap-1 text-2xs text-muted hover:text-hard transition-colors"
            title="Clear Submission History"
          >
            <Trash2 className="h-3 w-3" />
            <span>Clear</span>
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-6 text-center text-secondary border border-dashed border-border rounded-card bg-[#0a0a0a]/20 min-h-[100px]">
          <Award className="h-5 w-5 text-muted opacity-50 mb-1" />
          <p className="text-2xs">No submissions recorded for this problem yet.</p>
        </div>
      ) : (
        <div className="space-y-2.5 max-h-[220px] overflow-y-auto pr-1">
          {history.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2.5 rounded-card border border-border bg-[#0d0d0d] text-2xs hover:border-accent/30 transition-colors"
            >
              <div className="space-y-1">
                <span className={cn(
                  "rounded px-1.5 py-0.5 font-bold uppercase text-3xs border",
                  getBadgeColor(item.result)
                )}>
                  {item.result}
                </span>
                <span className="text-muted block text-3xs">
                  {new Date(item.submittedAt).toLocaleString()}
                </span>
              </div>

              <div className="text-right text-secondary space-y-0.5">
                {item.result !== "Compilation Error" && (
                  <>
                    <span className="block font-medium">Time: {formatRuntime(item.runtime)}</span>
                    <span className="block font-medium text-3xs text-muted">Mem: {formatMemory(item.memory)}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
