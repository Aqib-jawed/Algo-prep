import { NextResponse } from "next/server";
import { PROBLEMS } from "@/data/problems";
import { getProblemDetails } from "@/lib/interview/problemDetails";
import { submitToJudge0 } from "@/lib/judge0/judge0Client";
import { pollJudge0Submission } from "@/lib/judge0/judge0Polling";
import { ProgrammingLanguage } from "@/types/interview";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { code, language, problemId } = body;

    // 1. Validation
    if (!code || !language || !problemId) {
      return NextResponse.json(
        { error: "Missing required execution parameters (code, language, problemId)." },
        { status: 400 }
      );
    }

    // 2. Fetch problem title and detailed sample test cases
    const problem = PROBLEMS.find((p) => p.id === problemId);
    const title = problem ? problem.title : "Fallback Problem";
    const details = getProblemDetails(problemId, title);

    const firstExample = details.examples[0] || { input: "", output: "" };

    // 3. Submit code execution to Judge0 using first sample test case
    const token = await submitToJudge0(
      code,
      language as ProgrammingLanguage,
      firstExample.input,
      firstExample.output
    );

    // 4. Poll execution result
    const result = await pollJudge0Submission(token);

    // Attach sample test case metrics for frontend console rendering
    return NextResponse.json({
      ...result,
      input: firstExample.input,
      expectedOutput: firstExample.output,
    });
  } catch (error: any) {
    console.error("Code run route error:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error during code execution." },
      { status: 500 }
    );
  }
}
