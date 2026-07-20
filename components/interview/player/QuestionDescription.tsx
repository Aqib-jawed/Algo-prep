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
        if (p.startsWith("### ")) {
          return (
            <h3 key={idx} className="text-base font-bold text-primary border-b border-border/40 pb-1 mt-2">
              {p.replace("### ", "")}
            </h3>
          );
        }

        // Highlight inline code segments formatted like `nums` and bold text **text**
        const parts = p.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
        
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
              if (part.startsWith("**") && part.endsWith("**")) {
                return (
                  <strong key={partIdx} className="font-semibold text-primary">
                    {part.slice(2, -2)}
                  </strong>
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
