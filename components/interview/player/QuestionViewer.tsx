"use client";

import React from "react";
import { InterviewQuestion } from "@/types/interview";
import { getProblemDetails } from "@/lib/interview/problemDetails";
import { QuestionDescription } from "./QuestionDescription";
import { ExampleSection } from "./ExampleSection";
import { ConstraintSection } from "./ConstraintSection";
import { PatternTag } from "@/components/ui/PatternTag";

interface QuestionViewerProps {
  question: InterviewQuestion;
}

export function QuestionViewer({ question }: QuestionViewerProps) {
  const details = getProblemDetails(question.problemId, question.title);

  return (
    <div className="card p-6 bg-surface space-y-6">
      {/* Question Details Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
        <div>
          <span className="text-2xs text-accent uppercase tracking-wider font-semibold">
            Round {question.round} problem
          </span>
          <h2 className="text-md font-bold text-primary tracking-tight mt-0.5">
            {question.title}
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <span className={cn(
            "rounded px-2 py-0.5 text-2xs font-semibold uppercase",
            question.difficulty === "Easy"
              ? "bg-easy/5 text-easy border border-easy/10"
              : question.difficulty === "Medium"
              ? "bg-medium/5 text-medium border border-medium/10"
              : "bg-hard/5 text-hard border border-hard/10"
          )}>
            {question.difficulty}
          </span>
          
          <span className="rounded bg-elevated px-2 py-0.5 text-2xs text-secondary font-medium font-mono border border-border">
            {question.pattern}
          </span>
        </div>
      </div>

      {/* Description Copy */}
      <QuestionDescription description={details.description} />

      {/* Examples */}
      <ExampleSection examples={details.examples} />

      {/* Constraints */}
      <ConstraintSection constraints={details.constraints} />

      {/* Notes Block */}
      {details.notes && (
        <div className="bg-elevated/20 border-l-2 border-accent/40 rounded-r-card p-4 space-y-1.5">
          <h4 className="text-2xs font-semibold uppercase tracking-wider text-primary">Notes</h4>
          <p className="text-xs text-secondary leading-relaxed">{details.notes}</p>
        </div>
      )}
    </div>
  );
}

// Simple Tailwind className builder helper to avoid style mismatch
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
