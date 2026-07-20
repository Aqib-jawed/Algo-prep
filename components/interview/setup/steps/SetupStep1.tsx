"use client";

import React from "react";
import { SelectionCard } from "../SelectionCard";
import { CompanyTier } from "@/types/interview";
import { Laptop, Building, Globe } from "lucide-react";

interface SetupStep1Props {
  selectedCategory: CompanyTier | null;
  onSelect: (category: CompanyTier) => void;
}

export function SetupStep1({ selectedCategory, onSelect }: SetupStep1Props) {
  const categories = [
    {
      id: "service" as CompanyTier,
      title: "Service Based",
      description: "Interviews focused on programming fundamentals, basic data structures, database queries, and logical problem solving.",
      badge: "Tier 3",
      icon: <Laptop className="h-5 w-5" />,
    },
    {
      id: "mid-product" as CompanyTier,
      title: "Mid-Level Product",
      description: "Interviews testing medium difficulty DSA, clean coding standards, system design fundamentals, and API architecture.",
      badge: "Tier 2",
      icon: <Building className="h-5 w-5" />,
    },
    {
      id: "product" as CompanyTier,
      title: "Product / FAANG",
      description: "Rigorous interviews testing advanced algorithms, complex graph structures, scale design, concurrency, and performance.",
      badge: "Tier 1",
      icon: <Globe className="h-5 w-5" />,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center sm:text-left">
        <h2 className="text-lg font-semibold text-primary">Select Company Category</h2>
        <p className="text-xs text-secondary mt-1">
          Choose the company tier to specialize the question bank, evaluation rigor, and mock interview rounds.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {categories.map((cat) => (
          <SelectionCard
            key={cat.id}
            selected={selectedCategory === cat.id}
            onClick={() => onSelect(cat.id)}
            title={cat.title}
            description={cat.description}
            badge={cat.badge}
            icon={cat.icon}
          />
        ))}
      </div>
    </div>
  );
}
