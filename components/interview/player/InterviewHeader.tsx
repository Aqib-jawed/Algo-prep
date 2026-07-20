"use client";

import React, { useEffect, useState } from "react";
import { InterviewSession } from "@/types/interview";
import { Clock, Code, Award, ShieldAlert } from "lucide-react";
import { InterviewStatusBadge } from "../session/InterviewStatusBadge";

interface InterviewHeaderProps {
  session: InterviewSession;
  activeQuestionIndex: number;
}

export function InterviewHeader({ session, activeQuestionIndex }: InterviewHeaderProps) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs: number) => {
    const hrs = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const languageLabels = {
    java: "Java",
    python: "Python",
    cpp: "C++",
    javascript: "JavaScript",
    c: "C",
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-base/95 backdrop-blur py-4 px-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between max-w-7xl mx-auto">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-semibold text-accent text-sm uppercase tracking-wider">
              {session.company.name} Target OA Test
            </span>
            <span className="text-secondary text-xs font-medium">|</span>
            <span className="text-primary text-sm font-semibold">
              Round {session.currentRound} of {session.totalRounds}
            </span>
            <InterviewStatusBadge status={session.status} />
          </div>
          <h1 className="text-lg font-bold text-primary tracking-tight">
            Question {activeQuestionIndex + 1}: {session.assignedQuestions[activeQuestionIndex]?.title || "Problem Details"}
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs text-secondary">
          <div className="flex items-center gap-2 bg-elevated px-3 py-1.5 rounded-card border border-border">
            <ShieldAlert className="h-4 w-4 text-emerald-400" />
            <span className="font-mono text-emerald-400 text-2xs">OA Proctoring Active</span>
          </div>

          <div className="flex items-center gap-2 bg-elevated px-3 py-1.5 rounded-card border border-border">
            <Code className="h-4 w-4 text-accent" />
            <span className="font-medium">{languageLabels[session.language]}</span>
          </div>

          <div className="flex items-center gap-2 bg-elevated px-3 py-1.5 rounded-card border border-border">
            <Award className="h-4 w-4 text-accent" />
            <span className="font-medium">Questions: {session.totalQuestions}</span>
          </div>

          <div className="flex items-center gap-2 bg-elevated px-3 py-1.5 rounded-card border border-accent/20">
            <Clock className="h-4 w-4 text-accent animate-pulse" />
            <span className="font-mono font-bold text-accent tracking-wider">{formatTime(seconds)}</span>
            <span className="text-muted">/ 70m</span>
          </div>
        </div>
      </div>
    </header>
  );
}
