"use client";

import React from "react";
import { InterviewSession } from "@/types/interview";
import { Code, Hash, Layers, ShieldQuestion, HelpCircle, Activity } from "lucide-react";

interface SessionInfoCardProps {
  session: InterviewSession;
}

export function SessionInfoCard({ session }: SessionInfoCardProps) {
  const categoryLabels = {
    service: "Service Based",
    "mid-product": "Mid-Level Product",
    product: "Product / FAANG",
  };

  const experienceLabels = {
    fresher: "Fresher",
    "1-2": "1-2 Years Experience",
    "3-5": "3-5 Years Experience",
  };

  const languageLabels = {
    java: "Java",
    python: "Python",
    cpp: "C++",
    javascript: "JavaScript",
    c: "C",
  };

  const infoItems = [
    {
      label: "Session ID",
      value: session.id,
      icon: Hash,
      detail: "Unique trace identifier",
    },
    {
      label: "Category Tier",
      value: categoryLabels[session.category],
      icon: Activity,
    },
    {
      label: "Language Config",
      value: languageLabels[session.language],
      icon: Code,
    },
    {
      label: "Target Experience",
      value: experienceLabels[session.experience],
      icon: Layers,
    },
    {
      label: "Current Round",
      value: `Round ${session.currentRound} of ${session.company.defaultRounds}`,
      icon: ShieldQuestion,
    },
    {
      label: "Active Question",
      value: session.currentQuestion || "None (Generate to start)",
      icon: HelpCircle,
    },
  ];

  return (
    <div className="card divide-y divide-border overflow-hidden bg-surface">
      <div className="px-6 py-4 bg-gradient-to-r from-accent/5 to-transparent">
        <h3 className="text-sm font-semibold text-primary">Session Configuration Metrics</h3>
      </div>
      <div className="grid gap-6 p-6 sm:grid-cols-2 md:grid-cols-3">
        {infoItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex gap-4 items-start p-2 rounded-lg bg-elevated/10">
              <div className="rounded-lg bg-elevated p-2 text-accent">
                <Icon className="h-4 w-4" />
              </div>
              <div className="space-y-1">
                <span className="text-2xs text-secondary font-medium uppercase tracking-wider block">
                  {item.label}
                </span>
                <span className="text-sm font-semibold text-primary block break-all">
                  {item.value}
                </span>
                {item.detail && (
                  <span className="text-2xs text-muted block">{item.detail}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
