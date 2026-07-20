import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireAuth } from "@/lib/auth";

export async function GET() {
  const user = await requireAuth();
  if (!user) return NextResponse.json({ error: "Not signed in." }, { status: 401 });

  const sessions = await db.mockSession.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    take: 20
  });

  return NextResponse.json({ sessions });
}

export async function POST(req: Request) {
  const user = await requireAuth();
  if (!user) return NextResponse.json({ error: "Not signed in." }, { status: 401 });

  const body = await req.json();
  const mode = body.mode === "behavioral" ? "behavioral" : "coding";
  const durationSeconds = Math.max(0, Math.round(Number(body.durationSeconds) || 0));
  const score = body.score != null ? Math.max(0, Math.min(20, Math.round(Number(body.score)))) : null;

  const session = await db.mockSession.create({
    data: {
      userId: user.id,
      mode,
      companySlug: body.companySlug || null,
      problemId: body.problemId != null ? Number(body.problemId) : null,
      questionId: body.questionId || null,
      durationSeconds,
      score
    }
  });

  return NextResponse.json({ ok: true, session });
}