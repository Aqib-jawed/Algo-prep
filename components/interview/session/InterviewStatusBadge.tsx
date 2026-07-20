"use client";

import React from "react";
import { SessionStatus } from "@/types/interview";
import { cn } from "@/lib/utils";

interface InterviewStatusBadgeProps {
  status: SessionStatus;
}

export function InterviewStatusBadge({ status }: InterviewStatusBadgeProps) {
  const styles: Record<SessionStatus, string> = {
    created: "border-accent/20 bg-accent-dim text-accent",
    active: "border-easy/20 bg-easy/5 text-easy animate-pulse",
    completed: "border-easy/20 bg-easy/5 text-easy",
    abandoned: "border-hard/20 bg-hard/5 text-hard",
  };

  const labels: Record<SessionStatus, string> = {
    created: "Created",
    active: "Active",
    completed: "Completed",
    abandoned: "Abandoned",
  };

  return (
    <span className={cn(
      "rounded-full border px-2.5 py-0.5 text-2xs font-semibold uppercase tracking-wider",
      styles[status]
    )}>
      {labels[status]}
    </span>
  );
}
