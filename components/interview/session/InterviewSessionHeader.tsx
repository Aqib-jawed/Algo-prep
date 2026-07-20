"use client";

import React from "react";
import { InterviewSession } from "@/types/interview";
import { InterviewStatusBadge } from "./InterviewStatusBadge";
import { Calendar, Play } from "lucide-react";

interface InterviewSessionHeaderProps {
  session: InterviewSession;
}

export function InterviewSessionHeader({ session }: InterviewSessionHeaderProps) {
  const formattedDate = new Date(session.createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border pb-6">
      <div className="space-y-1.5">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-2xl font-bold tracking-tight text-primary">
            {session.company.name} Mock Run
          </h1>
          <InterviewStatusBadge status={session.status} />
        </div>
        <div className="flex items-center gap-2 text-xs text-secondary">
          <Calendar className="h-4 w-4 text-accent" />
          <span>Initialized on {formattedDate}</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="flex items-center gap-1.5 text-xs text-muted">
          <Play className="h-3.5 w-3.5 text-accent animate-pulse" />
          <span>Workspace Environment Setup Complete</span>
        </span>
      </div>
    </div>
  );
}
