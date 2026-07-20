"use client";

import React from "react";
import { InterviewSession } from "@/types/interview";
import { Briefcase, Building2, Code, Layers, FileText, Bookmark, Calendar } from "lucide-react";

interface InterviewSidebarProps {
  session: InterviewSession;
  activeQuestionIndex: number;
}

export function InterviewSidebar({ session, activeQuestionIndex }: InterviewSidebarProps) {
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

  const metadataItems = [
    { label: "Company", value: session.company.name, icon: Building2 },
    { label: "Category", value: categoryLabels[session.category], icon: Layers },
    { label: "Experience", value: experienceLabels[session.experience], icon: Briefcase },
    { label: "Language", value: languageLabels[session.language], icon: Code },
  ];

  return (
    <div className="space-y-6">
      {/* Session Metadata Card */}
      <div className="card p-5 bg-surface space-y-4">
        <h3 className="text-sm font-semibold text-primary border-b border-border pb-2">
          Interview Overview
        </h3>
        <div className="space-y-3.5">
          {metadataItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3 text-xs">
                <Icon className="h-4 w-4 text-accent" />
                <div className="space-y-0.5">
                  <span className="text-muted block text-2xs uppercase tracking-wider">
                    {item.label}
                  </span>
                  <span className="font-semibold text-primary">{item.value}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bookmarks & Notes Placeholders */}
      <div className="card p-5 bg-surface space-y-4">
        <h3 className="text-sm font-semibold text-primary border-b border-border pb-2">
          Workspace Utilities
        </h3>
        <div className="space-y-4 text-xs">
          <div className="flex items-start gap-3 opacity-60">
            <Bookmark className="h-4 w-4 text-secondary mt-0.5" />
            <div className="space-y-1">
              <span className="font-semibold text-primary">Bookmarks</span>
              <p className="text-2xs text-secondary leading-relaxed">
                Save code snippets or bookmarks here. (Integrated in Phase 6)
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 opacity-60">
            <FileText className="h-4 w-4 text-secondary mt-0.5" />
            <div className="space-y-1">
              <span className="font-semibold text-primary">Scratchpad Notes</span>
              <p className="text-2xs text-secondary leading-relaxed">
                Write draft layouts or system architecture schemas here. (Integrated in Phase 7)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
