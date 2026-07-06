import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireAuth } from "@/lib/auth";

function todayKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function addDays(date: Date, days: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function isYesterday(dateKey: string, today: string) {
  return dateKey === todayKey(addDays(new Date(today), -1));
}

async function ensureSettings(userId: string) {
  return db.userSettings.upsert({
    where: { userId },
    update: {},
    create: { userId }
  });
}

export async function GET() {
  const user = await requireAuth();
  if (!user) return NextResponse.json({ error: "Not signed in." }, { status: 401 });

  const settings = await db.userSettings.findUnique({ where: { userId: user.id } });
  if (!settings) {
    // Never synced before — the client should fall back to a one-time
    // migrate call with whatever it has in localStorage.
    return NextResponse.json({ synced: false });
  }

  const [solved, starred, patterns, activity] = await Promise.all([
    db.solvedProblem.findMany({ where: { userId: user.id } }),
    db.starredProblem.findMany({ where: { userId: user.id } }),
    db.patternProgress.findMany({ where: { userId: user.id } }),
    db.dailyActivity.findMany({ where: { userId: user.id } })
  ]);

  return NextResponse.json({
    synced: true,
    solvedProblems: solved.map((s) => s.problemId),
    starredProblems: starred.map((s) => s.problemId),
    patternsCompleted: patterns.map((p) => p.patternSlug),
    dailyLog: Object.fromEntries(activity.map((a) => [a.date, a.count])),
    solveTime: Object.fromEntries(
      solved.filter((s) => s.timeSpentSeconds != null).map((s) => [s.problemId, s.timeSpentSeconds])
    ),
    currentWeek: settings.currentWeek,
    targetDate: settings.targetDate ? settings.targetDate.toISOString().slice(0, 10) : null,
    weeklyGoal: settings.weeklyGoal,
    lastActiveDate: settings.lastActiveDate,
    streak: settings.streak
  });
}

export async function POST(req: Request) {
  const user = await requireAuth();
  if (!user) return NextResponse.json({ error: "Not signed in." }, { status: 401 });

  const userId = user.id;
  const body = await req.json();

  try {
    switch (body.type) {
      case "markSolved": {
        const today = todayKey();
        await db.solvedProblem.upsert({
          where: { userId_problemId: { userId, problemId: body.problemId } },
          update: {},
          create: { userId, problemId: body.problemId }
        });
        await db.dailyActivity.upsert({
          where: { userId_date: { userId, date: today } },
          update: { count: { increment: 1 } },
          create: { userId, date: today, count: 1 }
        });
        const settings = await ensureSettings(userId);
        let streak = settings.streak;
        if (settings.lastActiveDate === today) streak = settings.streak;
        else if (isYesterday(settings.lastActiveDate, today)) streak = settings.streak + 1;
        else streak = 1;
        await db.userSettings.update({ where: { userId }, data: { streak, lastActiveDate: today } });
        break;
      }

      case "unmarkSolved": {
        await db.solvedProblem.deleteMany({ where: { userId, problemId: body.problemId } });
        break;
      }

      case "toggleStarred": {
        const existing = await db.starredProblem.findUnique({
          where: { userId_problemId: { userId, problemId: body.problemId } }
        });
        if (existing) {
          await db.starredProblem.delete({ where: { id: existing.id } });
        } else {
          await db.starredProblem.create({ data: { userId, problemId: body.problemId } });
        }
        break;
      }

      case "markPatternComplete": {
        await db.patternProgress.upsert({
          where: { userId_patternSlug: { userId, patternSlug: body.patternSlug } },
          update: {},
          create: { userId, patternSlug: body.patternSlug }
        });
        break;
      }

      case "logSolveTime": {
        const seconds = Math.max(0, Math.round(body.seconds));
        await db.solvedProblem.upsert({
          where: { userId_problemId: { userId, problemId: body.problemId } },
          update: { timeSpentSeconds: seconds },
          create: { userId, problemId: body.problemId, timeSpentSeconds: seconds }
        });
        break;
      }

      case "setTargetDate": {
        await ensureSettings(userId);
        await db.userSettings.update({
          where: { userId },
          data: { targetDate: body.date ? new Date(body.date) : null }
        });
        break;
      }

      case "setCurrentWeek": {
        await ensureSettings(userId);
        await db.userSettings.update({
          where: { userId },
          data: { currentWeek: Math.max(1, Math.min(16, Math.round(body.week))) }
        });
        break;
      }

      case "setWeeklyGoal": {
        await ensureSettings(userId);
        await db.userSettings.update({
          where: { userId },
          data: { weeklyGoal: Math.max(1, Math.min(100, Math.round(body.goal))) }
        });
        break;
      }

      default:
        return NextResponse.json({ error: "Unknown mutation type." }, { status: 400 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Progress sync error:", err);
    return NextResponse.json({ error: "Failed to save progress." }, { status: 500 });
  }
}