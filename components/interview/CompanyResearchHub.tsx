"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { COMPANY_DATA } from "@/data/companies";
import { COMPANY_PROFILES } from "@/data/interview/companyProfiles";
import { PROBLEMS } from "@/data/problems";
import { useInterviewStore } from "@/store/useInterviewStore";
import { useInterviewSessionStore } from "@/store/useInterviewSessionStore";
import { Search, Building2, Clock, Award, Play, ChevronRight, Zap, Target, BookOpen } from "lucide-react";
import { CompanyTier, Company } from "@/types/interview";

export function CompanyResearchHub() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<string>("All");
  const { setCompanyCategory, setCompany, setExperience, setLanguage, setStep } = useInterviewStore();
  const { createSession } = useInterviewSessionStore();

  const companiesList = useMemo(() => {
    return Object.entries(COMPANY_DATA).map(([slug, data]) => {
      const profile = COMPANY_PROFILES.find((p) => p.companyId === slug);
      // Map company to tier
      let tier: CompanyTier = "mid-product";
      if (["google", "meta", "amazon", "microsoft", "uber", "adobe", "atlassian"].includes(slug)) {
        tier = "product";
      } else if (["tcs", "infosys", "wipro", "cognizant", "accenture"].includes(slug)) {
        tier = "service";
      }

      const topProblemObjs = (data.topProblems || [])
        .map((id) => PROBLEMS.find((p) => p.id === id))
        .filter(Boolean);

      return {
        slug,
        name: data.name,
        interviewStyle: data.interviewStyle,
        patternEmphasis: data.patternEmphasis,
        roundStructure: data.roundStructure,
        difficulty: data.difficulty,
        avgRounds: data.avgRounds,
        topProblems: topProblemObjs,
        profile,
        tier,
      };
    });
  }, []);

  const filteredCompanies = useMemo(() => {
    return companiesList.filter((c) => {
      const matchesSearch =
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.patternEmphasis.some((p) => p.toLowerCase().includes(search.toLowerCase())) ||
        c.interviewStyle.toLowerCase().includes(search.toLowerCase());

      if (activeTab === "All") return matchesSearch;
      if (activeTab === "Tech Giants") return matchesSearch && c.tier === "product";
      if (activeTab === "Unicorns & Product") return matchesSearch && c.tier === "mid-product";
      if (activeTab === "Service Based") return matchesSearch && c.tier === "service";
      return matchesSearch;
    });
  }, [companiesList, search, activeTab]);

  const handleLaunchTargetOA = (companyItem: typeof companiesList[0]) => {
    const selectedCompany: Company = {
      id: companyItem.slug,
      name: companyItem.name,
      tier: companyItem.tier,
      estimatedDuration: companyItem.profile?.estimatedDuration || 70,
      defaultRounds: companyItem.avgRounds || 3,
    };

    const sessionId = createSession(
      selectedCompany,
      companyItem.tier,
      "1-2", // Default to mid-level experience for realistic OA
      "javascript"
    );

    router.push(`/interview/session/${sessionId}`);
  };

  return (
    <div className="space-y-6 pt-4">
      {/* Header & Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-5">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-primary flex items-center gap-2">
            <Building2 className="text-accent" size={22} />
            Company Intelligence & OA Research Hub
          </h2>
          <p className="text-xs text-secondary mt-1">
            Real OA test formats, interview style evaluations, pattern weightage, and target company simulations.
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search company or pattern..."
            className="w-full h-9 rounded-card border border-border bg-surface pl-9 pr-3 text-xs text-primary placeholder:text-muted outline-none focus:border-accent"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        {["All", "Tech Giants", "Unicorns & Product", "Service Based"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all ${
              activeTab === tab
                ? "border-accent bg-accent/10 text-accent"
                : "border-border bg-surface text-secondary hover:border-border/80"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Company Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCompanies.map((c) => (
          <div
            key={c.slug}
            className="card p-6 bg-surface border border-border/80 hover:border-accent/50 transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-4">
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-accent-dim/20 border border-accent/20 flex items-center justify-center font-bold text-accent text-sm">
                    {c.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-primary group-hover:text-accent transition-colors">
                      {c.name}
                    </h3>
                    <span className="text-2xs text-muted font-mono capitalize">{c.tier} Tier</span>
                  </div>
                </div>

                <span
                  className={`px-2.5 py-0.5 rounded-full text-2xs font-semibold ${
                    c.difficulty === "Extreme"
                      ? "bg-red-500/10 text-red-400 border border-red-500/20"
                      : c.difficulty === "Very High"
                      ? "bg-orange-500/10 text-orange-400 border border-orange-500/20"
                      : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  }`}
                >
                  {c.difficulty} Difficulty
                </span>
              </div>

              {/* Format stats */}
              <div className="grid grid-cols-2 gap-2 text-2xs font-mono bg-elevated/40 p-2.5 rounded-card border border-border/40">
                <div className="flex items-center gap-1.5 text-secondary">
                  <Clock size={13} className="text-accent" />
                  <span>OA: 70-90 Mins</span>
                </div>
                <div className="flex items-center gap-1.5 text-secondary">
                  <Award size={13} className="text-accent" />
                  <span>{c.avgRounds} Total Rounds</span>
                </div>
              </div>

              {/* Interview Style */}
              <p className="text-xs text-secondary line-clamp-3 leading-relaxed">
                {c.interviewStyle}
              </p>

              {/* Pattern Emphasis */}
              <div className="space-y-1.5">
                <p className="text-2xs font-medium text-muted uppercase tracking-wider">Top Weighted Patterns</p>
                <div className="flex flex-wrap gap-1.5">
                  {c.patternEmphasis.map((pat) => (
                    <span
                      key={pat}
                      className="px-2 py-0.5 rounded border border-border bg-base text-2xs font-mono text-secondary"
                    >
                      {pat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sample Top Questions */}
              {c.topProblems.length > 0 && (
                <div className="space-y-1.5 pt-1">
                  <p className="text-2xs font-medium text-muted uppercase tracking-wider flex items-center gap-1">
                    <BookOpen size={12} /> Curated OA Questions ({c.topProblems.length})
                  </p>
                  <div className="space-y-1">
                    {c.topProblems.slice(0, 3).map((prob) => (
                      <div key={prob?.id} className="text-2xs text-secondary flex items-center justify-between font-mono bg-base/60 px-2 py-1 rounded border border-border/30">
                        <span className="truncate max-w-[190px]">{prob?.title}</span>
                        <span className={`text-2xs ${prob?.difficulty === "Hard" ? "text-red-400" : prob?.difficulty === "Medium" ? "text-amber-400" : "text-emerald-400"}`}>
                          {prob?.difficulty}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Launch Button */}
            <button
              onClick={() => handleLaunchTargetOA(c)}
              className="w-full h-9 mt-2 rounded-card bg-accent text-base-dark font-medium text-xs flex items-center justify-center gap-2 hover:bg-accent/90 transition-all shadow-sm group-hover:shadow-accent/20"
            >
              <Zap size={14} fill="currentColor" />
              Launch Target OA Test
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
