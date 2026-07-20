import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireFaculty } from "@/lib/auth";
import { companySheets } from "@/data/companies";
import { getReadinessScore } from "@/lib/recommendations";

export async function GET(req: Request) {
  const faculty = await requireFaculty();
  if (!faculty) return NextResponse.json({ error: "Faculty access required." }, { status: 403 });

  const { searchParams } = new URL(req.url);
  const companySlug = searchParams.get("company");
  const company = companySlug ? companySheets.find((c) => c.slug === companySlug) : null;

  const students = await db.user.findMany({
    where: { role: { equals: "STUDENT" } },
    include: {
      patternProgress: { select: { patternSlug: true } },
      settings: { select: { streak: true, lastActiveDate: true } }
    },
    orderBy: { name: "asc" }
  });

  const rows = students.map((student) => {
    const solvedIds = ((student as any).solvedProblems ?? []).map((s: any) => s.problemId);
    const patternSlugs = (student as any).patternProgress?.map((p: any) => p.patternSlug) ?? [];
    const streak = (student as any).settings?.streak ?? 0;
    const { score, label } = getReadinessScore(solvedIds, streak, patternSlugs);

    let companyReadiness: { solved: number; total: number; pct: number } | undefined;
    if (company) {
      const targetIds = company.topProblems;
      const solved = targetIds.filter((id) => solvedIds.includes(id)).length;
      companyReadiness = {
        solved,
        total: targetIds.length,
        pct: targetIds.length ? Math.round((solved / targetIds.length) * 100) : 0
      };
    }

    return {
      id: student.id,
      name: student.name,
      email: student.email,
      solvedCount: solvedIds.length,
      streak,
      readinessScore: score,
      readinessLabel: label,
      lastActiveDate: (student as any).settings?.lastActiveDate ?? "",
      companyReadiness
    };
  });

  return NextResponse.json({ students: rows });
}