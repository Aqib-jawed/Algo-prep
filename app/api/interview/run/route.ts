import { NextResponse } from "next/server";
import { PROBLEMS } from "@/data/problems";
import { evaluateUserCode } from "@/lib/evaluation/codeEvaluator";
import { submitToJudge0 } from "@/lib/judge0/judge0Client";
import { pollJudge0Submission } from "@/lib/judge0/judge0Polling";
import { ProgrammingLanguage } from "@/types/interview";
import { STARTER_TEMPLATES } from "@/data/interview/starterTemplates";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    let { code, language, problemId } = body;

    // 1. Validation & Fallbacks
    if (!language || problemId === undefined) {
      return NextResponse.json(
        { error: "Missing required execution parameters (language, problemId)." },
        { status: 400 }
      );
    }

    const langKey = language as ProgrammingLanguage;
    if (!code || typeof code !== "string" || !code.trim()) {
      code = STARTER_TEMPLATES[langKey] || "console.log('Hello World');";
    }

    const problem = PROBLEMS.find((p) => p.id === Number(problemId));
    const title = problem ? problem.title : "Algorithm Problem";

    // If Judge0 API credentials exist, execute remotely via Judge0
    if (process.env.JUDGE0_API_URL && process.env.JUDGE0_API_KEY) {
      const token = await submitToJudge0(code, langKey, "", "");
      const result = await pollJudge0Submission(token);
      return NextResponse.json(result);
    }

    // Otherwise evaluate code dynamically against multiple sample testcases locally
    const evaluated = evaluateUserCode(code, langKey, Number(problemId), title);
    return NextResponse.json(evaluated);
  } catch (error: any) {
    console.error("Code run route error:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error during code execution." },
      { status: 500 }
    );
  }
}


