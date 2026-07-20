"use client";

import React from "react";

interface QuestionDescriptionProps {
  description: string;
}

export function QuestionDescription({ description }: QuestionDescriptionProps) {
  // Simple paragraph styling, split by newlines for markdown-like readability
  const paragraphs = description.split("\n\n");

  return (
    <div className="space-y-4 text-sm text-secondary leading-relaxed">
      {paragraphs.map((p, idx) => {
        // Highlight inline code segments formatted like `nums`
        const parts = p.split(/(`[^`]+`)/g);
        
        return (
          <p key={idx}>
            {parts.map((part, partIdx) => {
              if (part.startsWith("`") && part.endsWith("`")) {
                return (
                  <code key={partIdx} className="rounded border border-border bg-elevated px-1.5 py-0.5 font-mono text-2xs text-accent">
                    {part.slice(1, -1)}
                  </code>
                );
              }
              return part;
            })}
          </p>
        );
      })}
    </div>
  );
}
