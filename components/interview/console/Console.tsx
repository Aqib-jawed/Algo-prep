"use client";

import React, { useState, useEffect } from "react";
import { useExecutionStore } from "@/store/useExecutionStore";
import { useSubmissionStore } from "@/store/useSubmissionStore";
import { useInterviewSessionStore } from "@/store/useInterviewSessionStore";
import { ConsoleHeader } from "./ConsoleHeader";
import { LoadingState } from "./LoadingState";
import { CompilationError } from "./CompilationError";
import { RuntimeError } from "./RuntimeError";
import { ExecutionResult } from "./ExecutionResult";
import { SubmissionLoading } from "../submission/SubmissionLoading";
import { SubmissionResult } from "../submission/SubmissionResult";
import { SubmissionHistory } from "../submission/SubmissionHistory";
import { Terminal, ShieldAlert, Award } from "lucide-react";

interface ConsoleProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Console({ isOpen, onClose }: ConsoleProps) {
  const [activeTab, setActiveTab] = useState<"console" | "submit">("console");
  const { isRunning, result, error, clearResult } = useExecutionStore();
  const { isSubmitting, lastSubmission, resetSubmission } = useSubmissionStore();
  const { activeSession } = useInterviewSessionStore();

  const activeQuestion = activeSession?.assignedQuestions[0];
  const problemId = activeQuestion?.problemId;

  // Auto-switch tabs based on running action
  useEffect(() => {
    if (isRunning) {
      setActiveTab("console");
    }
  }, [isRunning]);

  useEffect(() => {
    if (isSubmitting) {
      setActiveTab("submit");
    }
  }, [isSubmitting]);

  if (!isOpen) return null;

  const handleClear = () => {
    if (activeTab === "console") {
      clearResult();
    } else {
      resetSubmission();
    }
  };

  const showClearButton = activeTab === "console"
    ? (result !== null || error !== null)
    : (lastSubmission !== null);

  const renderConsoleContent = () => {
    if (isRunning) {
      return <LoadingState />;
    }

    if (error) {
      return (
        <div className="p-4 bg-hard/5 border-l-2 border-hard/35 rounded-r-card flex items-start gap-3 font-mono text-2xs">
          <ShieldAlert className="h-4 w-4 text-hard mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold uppercase tracking-wider text-hard block">
              Execution Error
            </span>
            <p className="text-secondary leading-relaxed">{error}</p>
          </div>
        </div>
      );
    }

    if (result) {
      if (result.status === "compilation_error") {
        return <CompilationError compileOutput={result.compileOutput || ""} />;
      }

      if (result.status === "runtime_error") {
        return (
          <RuntimeError
            stderr={result.stderr || ""}
            statusDescription={result.statusDescription}
          />
        );
      }

      return <ExecutionResult result={result} />;
    }

    return (
      <div className="flex flex-col items-center justify-center p-8 space-y-2 min-h-[160px] text-center text-secondary">
        <Terminal className="h-5 w-5 text-muted animate-pulse" />
        <div className="space-y-0.5">
          <p className="text-xs font-semibold text-primary">No Execution Data</p>
          <p className="text-2xs max-w-xs leading-relaxed">
            Click &quot;Run Code&quot; on the toolbar or footer to compile your code and verify test outputs.
          </p>
        </div>
      </div>
    );
  };

  const renderSubmitContent = () => {
    if (isSubmitting) {
      return <SubmissionLoading />;
    }

    if (lastSubmission) {
      return (
        <div className="space-y-6">
          <SubmissionResult result={lastSubmission} />
          {problemId !== undefined && (
            <SubmissionHistory questionId={problemId} />
          )}
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center justify-center p-6 space-y-4 min-h-[160px] text-center text-secondary">
        <div className="flex flex-col items-center justify-center space-y-2">
          <Award className="h-5 w-5 text-muted animate-pulse" />
          <div className="space-y-0.5">
            <p className="text-xs font-semibold text-primary">No Submission Data</p>
            <p className="text-2xs max-w-xs leading-relaxed">
              Click &quot;Submit Solution&quot; on the footer to run hidden test cases and update progress.
            </p>
          </div>
        </div>
        {problemId !== undefined && (
          <div className="w-full border-t border-border/30 pt-4 text-left">
            <SubmissionHistory questionId={problemId} />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="border border-border bg-surface overflow-hidden rounded-lg mt-4 flex flex-col max-h-[380px] transition-all">
      <ConsoleHeader
        onClose={onClose}
        onClear={handleClear}
        showClear={showClearButton}
      />
      {/* Navigation tabs */}
      <div className="flex border-b border-border bg-[#141414] px-4 text-2xs font-semibold text-secondary">
        <button
          onClick={() => setActiveTab("console")}
          className={`px-3 py-2.5 border-b-2 transition-colors focus:outline-none ${
            activeTab === "console" ? "border-accent text-accent font-bold" : "border-transparent hover:text-primary"
          }`}
        >
          Execution Console
        </button>
        <button
          onClick={() => setActiveTab("submit")}
          className={`px-3 py-2.5 border-b-2 transition-colors focus:outline-none ${
            activeTab === "submit" ? "border-accent text-accent font-bold" : "border-transparent hover:text-primary"
          }`}
        >
          Submit Solution
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 bg-[#0a0a0a]/50">
        {activeTab === "console" ? renderConsoleContent() : renderSubmitContent()}
      </div>
    </div>
  );
}
