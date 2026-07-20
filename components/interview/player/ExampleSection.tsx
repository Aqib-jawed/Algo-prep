"use client";

import React from "react";

interface Example {
  input: string;
  output: string;
  explanation?: string;
}

interface ExampleSectionProps {
  examples: Example[];
}

export function ExampleSection({ examples }: ExampleSectionProps) {
  return (
    <div className="space-y-4">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">Examples</h4>
      <div className="space-y-4">
        {examples.map((ex, idx) => (
          <div key={idx} className="space-y-2.5">
            <span className="text-2xs font-semibold text-accent uppercase tracking-wider block">
              Example {idx + 1}
            </span>
            <div className="rounded-card border border-border bg-[#0a0a0a] p-4 font-mono text-2xs space-y-2 text-secondary overflow-x-auto">
              <div>
                <span className="text-primary font-semibold">Input: </span>
                <span>{ex.input}</span>
              </div>
              <div>
                <span className="text-primary font-semibold">Output: </span>
                <span>{ex.output}</span>
              </div>
              {ex.explanation && (
                <div className="pt-2 border-t border-border/40 text-muted leading-relaxed font-sans">
                  <span className="text-primary font-semibold font-mono">Explanation: </span>
                  <span>{ex.explanation}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
