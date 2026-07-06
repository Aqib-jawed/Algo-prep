"use client";

import { useEffect, useMemo, useState } from "react";
import { AlertTriangle, Flame, Trophy, Users } from "lucide-react";
import { companySheets } from "@/data/companies";
import { FilterBar } from "@/components/ui/FilterBar";
import { SearchBar } from "@/components/ui/SearchBar";
import { Badge } from "@/components/ui/Badge";

type Overview = {
  totalStudents: number;
  activeLast7Days: number;
  avgSolved: number;
  avgStreak: number;
  readinessDistribution: { label: string; count: number }[];
  patternCoverage: { slug: string; name: string; avgMasteryPct: number }[];
};

type StudentRow = {
  id: string;
  name: string | null;
  email: string | null;
  solvedCount: number;
  streak: number;
  readinessScore: number;
  readinessLabel: string;
  lastActiveDate: string;
  companyReadiness?: { solved: number; total: number; pct: number };
};

function readinessTone(label: string): "neutral" | "accent" | "success" {
  if (label === "FAANG Ready") return "success";
  if (label === "Interview Ready") return "accent";
  return "neutral";
}

const companyOptions = ["All", ...companySheets.map((c) => c.name)];

export function FacultyDashboardClient() {
  const [overview, setOverview] = useState<Overview | null>(null);
  const [students, setStudents] = useState<StudentRow[]>([]);
  const [companyName, setCompanyName] = useState("All");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/faculty/overview")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load overview");
        return res.json();
      })
      .then(setOverview)
      .catch(() => setError("Couldn't load the cohort overview."));
  }, []);

  useEffect(() => {
    setLoading(true);
    const slug = companySheets.find((c) => c.name === companyName)?.slug;
    const params = companyName !== "All" && slug ? `?company=${slug}` : "";
    fetch(`/api/faculty/students${params}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load students");
        return res.json();
      })
      .then((data) => {
        setStudents(data.students);
        setLoading(false);
      })
      .catch(() => {
        setError("Couldn't load the student roster.");
        setLoading(false);
      });
  }, [companyName]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return students;
    return students.filter(
      (student) => student.name?.toLowerCase().includes(q) || student.email?.toLowerCase().includes(q)
    );
  }, [students, query]);

  if (error) {
    return (
      <div className="card p-6 text-secondary">
        <p>{error}</p>
      </div>
    );
  }

  const statCards = overview
    ? [
        { label: "Total Students", value: overview.totalStudents, icon: Users },
        { label: "Active Last 7 Days", value: overview.activeLast7Days, icon: Flame },
        { label: "Avg. Problems Solved", value: overview.avgSolved, icon: Trophy },
        { label: "Avg. Streak", value: overview.avgStreak, suffix: "days", icon: Flame }
      ]
    : [];

  const weakestPatterns = overview?.patternCoverage.slice(0, 5) ?? [];

  return (
    <div className="space-y-6">
      <header className="rounded-card border border-border bg-surface p-6">
        <p className="label">Placement Cell</p>
        <h1>Cohort readiness</h1>
        <p className="mt-2 text-secondary">
          Aggregate view of the junior batch&apos;s DSA prep. Students are told this activity — including
          individual rows below — is visible to faculty.
        </p>
      </header>

      {overview && (
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {statCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.label} className="card p-5">
                <Icon size={18} className="text-accent" />
                <p className="label mt-4">{card.label}</p>
                <p className="mt-1 font-mono text-2xl font-semibold">
                  {card.value} <span className="text-sm text-muted">{card.suffix}</span>
                </p>
              </div>
            );
          })}
        </section>
      )}

      {overview && (
        <section className="grid gap-4 lg:grid-cols-2">
          <div className="card p-5">
            <p className="label">Readiness distribution</p>
            <div className="mt-4 space-y-3">
              {overview.readinessDistribution.map((bucket) => {
                const pct = overview.totalStudents ? Math.round((bucket.count / overview.totalStudents) * 100) : 0;
                return (
                  <div key={bucket.label}>
                    <div className="mb-1 flex justify-between text-xs text-secondary">
                      <span>{bucket.label}</span>
                      <span>{bucket.count} students</span>
                    </div>
                    <div className="h-2 rounded-full bg-border">
                      <div className="h-full rounded-full bg-accent" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="card p-5">
            <p className="label flex items-center gap-2">
              <AlertTriangle size={14} className="text-hard" />
              Weakest patterns, cohort-wide
            </p>
            <p className="mt-1 text-xs text-muted">Lowest average mastery — good candidates for an extra session.</p>
            <div className="mt-4 space-y-3">
              {weakestPatterns.map((pattern) => (
                <div key={pattern.slug}>
                  <div className="mb-1 flex justify-between text-xs text-secondary">
                    <span>{pattern.name}</span>
                    <span>{pattern.avgMasteryPct}% avg</span>
                  </div>
                  <div className="h-2 rounded-full bg-border">
                    <div className="h-full rounded-full bg-hard" style={{ width: `${pattern.avgMasteryPct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="space-y-3">
        <div className="flex flex-wrap items-center gap-3">
          <SearchBar value={query} onChange={setQuery} placeholder="Search by name or email" />
          <FilterBar label="Company readiness" options={companyOptions} value={companyName} onChange={setCompanyName} />
        </div>

        <div className="overflow-hidden rounded-card border border-border bg-base">
          <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-3 text-sm text-secondary">
            <span>
              Showing <span className="font-mono text-primary">{filtered.length}</span> of{" "}
              <span className="font-mono text-primary">{students.length}</span> students
            </span>
            {loading && <span className="text-xs text-muted">Loading…</span>}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left">
              <thead className="bg-surface">
                <tr className="border-b border-border">
                  {["Student", "Solved", "Streak", "Readiness", companyName !== "All" ? "Company match" : null, "Last active"]
                    .filter((head): head is string => Boolean(head))
                    .map((head) => (
                      <th key={head} className="px-3 py-3 label">
                        {head}
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((student) => (
                  <tr key={student.id} className="border-b border-border last:border-0">
                    <td className="px-3 py-3">
                      <p className="text-sm text-primary">{student.name ?? "Unnamed"}</p>
                      <p className="text-xs text-muted">{student.email}</p>
                    </td>
                    <td className="px-3 py-3 font-mono text-sm">{student.solvedCount}</td>
                    <td className="px-3 py-3 font-mono text-sm">{student.streak}d</td>
                    <td className="px-3 py-3">
                      <Badge tone={readinessTone(student.readinessLabel)}>{student.readinessLabel}</Badge>
                      <span className="ml-2 font-mono text-xs text-muted">{student.readinessScore}</span>
                    </td>
                    {companyName !== "All" && (
                      <td className="px-3 py-3 font-mono text-sm">
                        {student.companyReadiness
                          ? `${student.companyReadiness.solved}/${student.companyReadiness.total}`
                          : "—"}
                      </td>
                    )}
                    <td className="px-3 py-3 text-xs text-muted">{student.lastActiveDate || "Never"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}