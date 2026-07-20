import React from "react";
import { ArrowLeft, ArrowRight, Play, CheckSquare, XOctagon, Loader2 } from "lucide-react";
import { useInterviewSessionStore } from "@/store/useInterviewSessionStore";
import { useEditorStore } from "@/store/useEditorStore";
import { useExecutionStore } from "@/store/useExecutionStore";
import { useSubmissionStore } from "@/store/useSubmissionStore";

export function InterviewFooter() {
  const { activeSession, updateQuestionStatus } = useInterviewSessionStore();
  const { language, codes } = useEditorStore();
  const { runCode, isRunning, setConsoleOpen } = useExecutionStore();
  const { submitSolution, isSubmitting } = useSubmissionStore();

  const activeQuestion = activeSession?.assignedQuestions[0];
  const hasQuestion = activeQuestion !== undefined;

  const handleRun = () => {
    if (!hasQuestion || !activeSession) return;
    const currentCode = codes[language] || "";
    runCode(currentCode, language, activeQuestion.problemId);
  };

  const handleSubmit = async () => {
    if (!hasQuestion || !activeSession || isSubmitting) return;
    const currentCode = codes[language] || "";
    // Open console drawer first so the user sees the submission feedback/loading
    setConsoleOpen(true);
    const result = await submitSolution(currentCode, language, activeQuestion.problemId);
    if (result && result.status === "Accepted") {
      updateQuestionStatus(activeSession.id, activeQuestion.problemId, "completed");
    }
  };

  return (
    <footer className="border-t border-border bg-base py-4 px-6 mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 max-w-7xl mx-auto">
        {/* End Session Button */}
        <div>
          <button
            disabled
            className="inline-flex items-center gap-2 rounded-card bg-hard/10 border border-hard/20 px-4 py-2 text-xs font-semibold text-hard opacity-50 cursor-not-allowed transition-colors"
          >
            <XOctagon className="h-4 w-4" />
            <span>End Interview</span>
          </button>
        </div>

        {/* Navigation & Execution Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            disabled
            className="inline-flex items-center gap-1.5 rounded-card border border-border bg-surface px-4 py-2 text-xs font-semibold text-secondary opacity-50 cursor-not-allowed"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Previous Question</span>
          </button>

          <button
            disabled
            className="inline-flex items-center gap-1.5 rounded-card border border-border bg-surface px-4 py-2 text-xs font-semibold text-secondary opacity-50 cursor-not-allowed"
          >
            <span>Next Question</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>

          <span className="text-border px-1">|</span>

          <button
            disabled={isRunning || !hasQuestion}
            onClick={handleRun}
            className="inline-flex items-center gap-1.5 rounded-card border border-border bg-surface px-4 py-2 text-xs font-semibold text-secondary hover:bg-elevated hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isRunning ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin text-accent" />
            ) : (
              <Play className="h-3.5 w-3.5 text-accent" />
            )}
            <span>{isRunning ? "Running..." : "Run Code"}</span>
          </button>

           <button
            disabled={isSubmitting || !hasQuestion}
            onClick={handleSubmit}
            className="inline-flex items-center gap-1.5 rounded-card bg-accent px-5 py-2 text-xs font-semibold text-white hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <CheckSquare className="h-3.5 w-3.5" />
            )}
            <span>{isSubmitting ? "Submitting..." : "Submit Solution"}</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
