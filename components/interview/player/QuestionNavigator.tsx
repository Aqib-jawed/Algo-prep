"use client";

import React from "react";
import { InterviewQuestion } from "@/types/interview";
import { cn } from "@/lib/utils";
import { CheckCircle2, Lock, Play } from "lucide-react";

interface QuestionNavigatorProps {
  questions: InterviewQuestion[];
  activeIndex: number;
  currentRound: number;
  onSelectQuestion?: (index: number) => void;
}

export function QuestionNavigator({
  questions,
  activeIndex,
  currentRound,
  onSelectQuestion,
}: QuestionNavigatorProps) {
  return (
    <div className="card p-5 bg-surface space-y-4">
      <h3 className="text-sm font-semibold text-primary border-b border-border pb-2">
        Target OA Questions Roadmap
      </h3>
      <div className="space-y-2">
        {questions.map((question, index) => {
          const isActive = index === activeIndex;
          const isCompleted = question.status === "completed";
          const isLocked = question.round > currentRound;

          return (
            <div
              key={question.problemId}
              onClick={() => {
                if (!isLocked && onSelectQuestion) {
                  onSelectQuestion(index);
                }
              }}
              className={cn(
                "flex items-center justify-between p-3 rounded-card border transition-all text-xs cursor-pointer",
                isActive
                  ? "border-accent bg-accent-dim/35 text-accent font-bold"
                  : isLocked
                  ? "border-border bg-base text-muted cursor-not-allowed opacity-50"
                  : "border-border bg-surface text-secondary hover:border-accent/40"
              )}
            >
              <div className="flex items-center gap-2.5">
                <div className="rounded-full bg-elevated p-1 flex items-center justify-center">
                  {isLocked ? (
                    <Lock className="h-3 w-3 text-muted" />
                  ) : isCompleted ? (
                    <CheckCircle2 className="h-3 w-3 text-easy" />
                  ) : (
                    <Play className={cn("h-3 w-3", isActive ? "text-accent" : "text-secondary")} />
                  )}
                </div>
                <div className="space-y-0.5">
                  <span className="text-2xs uppercase tracking-wider block text-muted">
                    Round {question.round}
                  </span>
                  <span className="font-semibold">{question.title}</span>
                </div>
              </div>

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
            </div>
          );
        })}
      </div>
    </div>
  );
}
