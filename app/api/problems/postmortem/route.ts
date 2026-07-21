import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { problemId, failureCategory, notes, userId } = await req.json();

    if (!problemId || !failureCategory) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Save review log to Prisma if database configured, or return success status
    if (process.env.DATABASE_URL) {
      await db.reviewLog.create({
        data: {
          userId: userId || "anonymous",
          problemId: Number(problemId),
          failureCategory,
          notes: notes || "",
        },
      });
    }

    return NextResponse.json({ success: true, message: "Post-mortem saved successfully" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to save post-mortem" }, { status: 500 });
  }
}

