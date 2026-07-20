"use client";

import React from "react";
import { ArrowRight, Building2 } from "lucide-react";

export interface CompanyCategory {
  id: string;
  name: string;
  description: string;
  roundsCount: number;
  difficulty: "Easy" | "Medium" | "Hard" | "Mixed";
  tags: string[];
}

interface CompanyCategoryCardProps {
  category: CompanyCategory;
  onSelect?: (id: string) => void;
}

export function CompanyCategoryCard({ category, onSelect }: CompanyCategoryCardProps) {
  const difficultyColors = {
    Easy: "border-easy/20 text-easy bg-easy/5",
    Medium: "border-medium/20 text-medium bg-medium/5",
    Hard: "border-hard/20 text-hard bg-hard/5",
    Mixed: "border-accent/20 text-accent bg-accent/5",
  };

  return (
    <div 
      onClick={() => onSelect?.(category.id)}
      className="card group flex flex-col justify-between p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 cursor-pointer"
    >
      <div>
        <div className="flex items-start justify-between">
          <div className="rounded-lg bg-elevated p-2 text-secondary group-hover:text-accent transition-colors">
            <Building2 className="h-5 w-5" />
          </div>
          <span className={`rounded-full border px-2 py-0.5 text-2xs font-medium ${difficultyColors[category.difficulty]}`}>
            {category.difficulty}
          </span>
        </div>

        <h3 className="mt-4 text-md font-semibold text-primary group-hover:text-accent transition-colors">
          {category.name}
        </h3>
        <p className="mt-2 text-xs text-secondary leading-relaxed">
          {category.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {category.tags.map((tag) => (
            <span key={tag} className="rounded bg-elevated px-2 py-0.5 text-2xs text-secondary font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs font-medium text-secondary group-hover:text-accent transition-colors">
        <span>{category.roundsCount} interview rounds</span>
        <div className="flex items-center gap-1">
          <span>Explore</span>
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );
}
