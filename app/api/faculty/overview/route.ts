import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireFaculty } from "@/lib/auth";
import { PATTERNS } from "@/data/patterns";
import { getReadinessScore, getPatternMasteryFromIds } from "@/lib/recommendations";

export async function GET() {
  const faculty = await requireFaculty();
  if (!faculty) return NextResponse.json({ error: "Faculty access required." }, { status: 403 });

  const students = await db.user.findMany({
    where: { role: "STUDENT" },
    select: {
      solvedProblems: { select: { problemId: true } },
      patternProgress: { select: { patternSlug: true } },
      settings: { select: { streak: true, lastActiveDate: true } }
    }
  });

  const totalStudents = students.length;
  const today = new Date();
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 7);
  const sevenDaysAgoKey = sevenDaysAgo.toISOString().slice(0, 10);

  let activeLast7Days = 0;
  let solvedSum = 0;
  let streakSum = 0;
  const distributionCounts: Record<string, number> = {
    Beginner: 0,
    Building: 0,
    "Interview Ready": 0,
    "FAANG Ready": 0
  };

  for (const student of students) {
    const solvedIds = student.solvedProblems.map((s) => s.problemId);
    const patternSlugs = student.patternProgress.map((p) => p.patternSlug);
    const streak = student.settings?.streak ?? 0;
    const lastActive = student.settings?.lastActiveDate ?? "";

    solvedSum += solvedIds.length;
    streakSum += streak;
    if (lastActive && lastActive >= sevenDaysAgoKey) activeLast7Days += 1;

    const { label } = getReadinessScore(solvedIds, streak, patternSlugs);
    distributionCounts[label] = (distributionCounts[label] ?? 0) + 1;
  }

  const patternCoverage = PATTERNS.map((pattern) => {
    const pcts = students.map((student) => {
      const solvedIds = student.solvedProblems.map((s) => s.problemId);
      return getPatternMasteryFromIds(pattern.slug, solvedIds).pct;
    });
    const avgMasteryPct = pcts.length ? Math.round(pcts.reduce((sum, pct) => sum + pct, 0) / pcts.length) : 0;
    return { slug: pattern.slug, name: pattern.name, avgMasteryPct };
  }).sort((a, b) => a.avgMasteryPct - b.avgMasteryPct);

  return NextResponse.json({
    totalStudents,
    activeLast7Days,
    avgSolved: totalStudents ? Math.round(solvedSum / totalStudents) : 0,
    avgStreak: totalStudents ? Math.round(streakSum / totalStudents) : 0,
    readinessDistribution: Object.entries(distributionCounts).map(([label, count]) => ({ label, count })),
    patternCoverage
  });
}