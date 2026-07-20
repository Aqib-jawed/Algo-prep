"use client";

import React from "react";
import { Calendar, ChevronRight, CheckCircle2, AlertCircle } from "lucide-react";

export interface PastInterview {
  id: string;
  companyName: string;
  date: string;
  score: number;
  status: "Completed" | "Incomplete";
  durationMinutes: number;
  focusedTopics: string[];
}

export function InterviewHistory() {
  const history: PastInterview[] = [
    {
      id: "int-001",
      companyName: "Google Track",
      date: "2026-07-05",
      score: 84,
      status: "Completed",
      durationMinutes: 45,
      focusedTopics: ["Dynamic Programming", "Trees"],
    },
    {
      id: "int-002",
      companyName: "Meta Simulation",
      date: "2026-06-28",
      score: 72,
      status: "Completed",
      durationMinutes: 40,
      focusedTopics: ["Two Pointers", "Hashing"],
    },
    {
      id: "int-003",
      companyName: "Stripe System Run",
      date: "2026-06-15",
      score: 0,
      status: "Incomplete",
      durationMinutes: 12,
      focusedTopics: ["API Design", "Rate Limiting"],
    },
  ];

  return (
    <div className="card overflow-hidden">
      <div className="border-b border-border px-6 py-4">
        <h2 className="text-md font-semibold text-primary">Past Interview History</h2>
        <p className="text-xs text-secondary mt-1">Review your scores, feedback, and performance stats.</p>
      </div>

      <div className="divide-y divide-border">
        {history.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 hover:bg-elevated/40 transition-colors"
          >
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-primary text-sm">{item.companyName}</span>
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-2xs font-medium ${
                    item.status === "Completed"
                      ? "bg-easy/5 text-easy border border-easy/10"
                      : "bg-medium/5 text-medium border border-medium/10"
                  }`}
                >
                  {item.status === "Completed" ? (
                    <CheckCircle2 className="h-3 w-3" />
                  ) : (
                    <AlertCircle className="h-3 w-3" />
                  )}
                  {item.status}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-secondary">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{item.date}</span>
                </div>
                <span>•</span>
                <span>{item.durationMinutes} mins</span>
                <span>•</span>
                <div className="flex gap-1">
                  {item.focusedTopics.map((t) => (
                    <span key={t} className="rounded bg-elevated px-1.5 py-0.5 text-2xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right sm:text-right">
                <span className="text-2xs text-secondary block">Score</span>
                <span className="text-md font-bold text-primary">
                  {item.status === "Completed" ? `${item.score}/100` : "--"}
                </span>
              </div>
              <button className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent/80 transition-colors">
                <span>Details</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
