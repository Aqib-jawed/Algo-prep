"use client";

import React, { useEffect, useState } from "react";
import { InterviewSession } from "@/types/interview";
import { Clock, Code, Award, ShieldAlert, Maximize2, Minimize2, AlertTriangle } from "lucide-react";
import { InterviewStatusBadge } from "../session/InterviewStatusBadge";
import { showGlobalToast } from "@/components/ui/Toast";

interface InterviewHeaderProps {
  session: InterviewSession;
  activeQuestionIndex: number;
}

export function InterviewHeader({ session, activeQuestionIndex }: InterviewHeaderProps) {
  const [seconds, setSeconds] = useState(0);
  const [tabSwitches, setTabSwitches] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Monitor visibilitychange for proctored OA mode
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setTabSwitches((prev) => {
          const next = prev + 1;
          showGlobalToast(`⚠️ Proctoring Notice: Focus loss detected during OA test! (Tab Switch ${next})`, "info");
          return next;
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

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
    <header className="sticky top-0 z-40 w-full border-b border-border bg-base/95 backdrop-blur py-3 px-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between max-w-7xl mx-auto">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-semibold text-accent text-xs uppercase tracking-wider">
              {session.company.name} Target OA Test
            </span>
            <span className="text-secondary text-xs font-medium">|</span>
            <span className="text-primary text-xs font-semibold">
              Round {session.currentRound} of {session.totalRounds}
            </span>
            <InterviewStatusBadge status={session.status} />
          </div>
          <h1 className="text-base font-bold text-primary tracking-tight">
            Question {activeQuestionIndex + 1}: {session.assignedQuestions[activeQuestionIndex]?.title || "Problem Details"}
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs text-secondary">
          {/* Proctoring Pill */}
          <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-card border ${
            tabSwitches > 0 ? "bg-amber-500/10 border-amber-500/30 text-amber-400" : "bg-elevated border-border text-emerald-400"
          }`}>
            {tabSwitches > 0 ? <AlertTriangle className="h-3.5 w-3.5" /> : <ShieldAlert className="h-3.5 w-3.5" />}
            <span className="font-mono text-2xs">
              {tabSwitches > 0 ? `${tabSwitches} Focus Loss` : "Proctor Active"}
            </span>
          </div>

          {/* Fullscreen Mode */}
          <button
            onClick={toggleFullscreen}
            className="flex items-center gap-1.5 bg-elevated px-2.5 py-1 rounded-card border border-border hover:border-accent/40 transition-colors text-2xs"
            title="Toggle Fullscreen OA Mode"
          >
            {isFullscreen ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
            <span>{isFullscreen ? "Exit Fullscreen" : "OA Fullscreen"}</span>
          </button>

          <div className="flex items-center gap-1.5 bg-elevated px-2.5 py-1 rounded-card border border-border">
            <Code className="h-3.5 w-3.5 text-accent" />
            <span className="font-medium text-2xs">{languageLabels[session.language]}</span>
          </div>

          <div className="flex items-center gap-1.5 bg-elevated px-2.5 py-1 rounded-card border border-border">
            <Award className="h-3.5 w-3.5 text-accent" />
            <span className="font-medium text-2xs">Questions: {session.totalQuestions}</span>
          </div>

          <div className="flex items-center gap-1.5 bg-elevated px-2.5 py-1 rounded-card border border-accent/20">
            <Clock className="h-3.5 w-3.5 text-accent animate-pulse" />
            <span className="font-mono font-bold text-accent tracking-wider text-xs">{formatTime(seconds)}</span>
            <span className="text-muted text-2xs">/ 90m</span>
          </div>
        </div>
      </div>
    </header>
  );
}

