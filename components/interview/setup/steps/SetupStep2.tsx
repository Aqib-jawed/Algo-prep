"use client";

import React from "react";
import { SelectionCard } from "../SelectionCard";
import { Company, CompanyTier } from "@/types/interview";
import { COMPANIES } from "@/data/interview/companies";
import { Landmark } from "lucide-react";

interface SetupStep2Props {
  category: CompanyTier | null;
  selectedCompany: Company | null;
  onSelect: (company: Company) => void;
}

export function SetupStep2({ category, selectedCompany, onSelect }: SetupStep2Props) {
  const filteredCompanies = COMPANIES.filter((c) => c.tier === category);

  return (
    <div className="space-y-6">
      <div className="text-center sm:text-left">
        <h2 className="text-lg font-semibold text-primary">Select Target Company</h2>
        <p className="text-xs text-secondary mt-1">
          Select a specific company to load their unique interview structure, timing constraints, and focus patterns.
        </p>
      </div>

      {filteredCompanies.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {filteredCompanies.map((company) => (
            <SelectionCard
              key={company.id}
              selected={selectedCompany?.id === company.id}
              onClick={() => onSelect(company)}
              title={company.name}
              description={`${company.defaultRounds} rounds · ${company.estimatedDuration}m`}
              icon={<Landmark className="h-4 w-4" />}
            />
          ))}
        </div>
      ) : (
        <div className="card p-8 text-center text-secondary">
          Please select a company category in Step 1 first.
        </div>
      )}
    </div>
  );
}
