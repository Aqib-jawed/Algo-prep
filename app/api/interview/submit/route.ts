import { NextResponse } from "next/server";
import { evaluateSubmission } from "@/lib/evaluation/evaluateSubmission";
import { ProgrammingLanguage } from "@/types/interview";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { code, language, problemId } = body;

    // 1. Validate request parameters
    if (code === undefined || !language || problemId === undefined) {
      return NextResponse.json(
        { error: "Missing required submission parameters (code, language, problemId)." },
        { status: 400 }
      );
    }

    // 2. Perform evaluation against hidden test cases
    const result = await evaluateSubmission(code, language as ProgrammingLanguage, Number(problemId));

    // 3. Return normalized result to frontend
    return NextResponse.json(result);
  } catch (error: any) {
    console.error("Code submission route error:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error during evaluation." },
      { status: 500 }
    );
  }
}
