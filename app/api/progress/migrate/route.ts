import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireAuth } from "@/lib/auth";

export async function POST(req: Request) {
  const user = await requireAuth();
  if (!user) return NextResponse.json({ error: "Not signed in." }, { status: 401 });

  const userId = user.id;
  const body = await req.json();

  const existing = await db.userSettings.findUnique({ where: { userId } });
  if (existing) {
    // Already synced before — never let an old local snapshot clobber
    // server history. The client should call GET and hydrate instead.
    return NextResponse.json({ error: "Already synced." }, { status: 409 });
  }

  const solvedProblems: number[] = Array.isArray(body.solvedProblems) ? body.solvedProblems : [];
  const starredProblems: number[] = Array.isArray(body.starredProblems) ? body.starredProblems : [];
  const patternsCompleted: string[] = Array.isArray(body.patternsCompleted) ? body.patternsCompleted : [];
  const dailyLog: Record<string, number> = body.dailyLog ?? {};
  const solveTime: Record<string, number> = body.solveTime ?? {};

  await db.$transaction([
    db.userSettings.create({
      data: {
        userId,
        currentWeek: body.currentWeek ?? 1,
        targetDate: body.targetDate ? new Date(body.targetDate) : null,
        weeklyGoal: body.weeklyGoal ?? 15,
        streak: body.streak ?? 0,
        lastActiveDate: body.lastActiveDate ?? ""
      }
    }),
    ...(solvedProblems.length
      ? [
          db.solvedProblem.createMany({
            data: solvedProblems.map((problemId) => ({
              userId,
              problemId,
              timeSpentSeconds: solveTime[String(problemId)] ?? null
            })),
            skipDuplicates: true
          })
        ]
      : []),
    ...(starredProblems.length
      ? [
          db.starredProblem.createMany({
            data: starredProblems.map((problemId) => ({ userId, problemId })),
            skipDuplicates: true
          })
        ]
      : []),
    ...(patternsCompleted.length
      ? [
          db.patternProgress.createMany({
            data: patternsCompleted.map((patternSlug) => ({ userId, patternSlug })),
            skipDuplicates: true
          })
        ]
      : []),
    ...(Object.keys(dailyLog).length
      ? [
          db.dailyActivity.createMany({
            data: Object.entries(dailyLog).map(([date, count]) => ({ userId, date, count: Number(count) })),
            skipDuplicates: true
          })
        ]
      : [])
  ]);

  return NextResponse.json({ ok: true });
}