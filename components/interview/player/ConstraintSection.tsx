"use client";

import React from "react";

interface ConstraintSectionProps {
  constraints: string[];
}

export function ConstraintSection({ constraints }: ConstraintSectionProps) {
  return (
    <div className="space-y-3">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">Constraints</h4>
      <ul className="list-disc pl-5 space-y-1.5 text-xs text-secondary leading-relaxed">
        {constraints.map((c, idx) => {
          // Format inline code/operators like <= or variables
          const parts = c.split(/(`[^`]+`)/g);

          return (
            <li key={idx}>
              {parts.map((part, partIdx) => {
                if (part.startsWith("`") && part.endsWith("`")) {
                  return (
                    <code key={partIdx} className="rounded border border-border bg-elevated px-1 py-0.5 font-mono text-2xs text-accent">
                      {part.slice(1, -1)}
                    </code>
                  );
                }
                return part;
              })}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
