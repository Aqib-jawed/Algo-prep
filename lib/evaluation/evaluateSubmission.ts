import { ProgrammingLanguage, SubmissionResult } from "@/types/interview";
import { runHiddenTests } from "./hiddenTestRunner";
import { mapJudge0ResponseToSubmissionResult } from "./submissionMapper";

/**
 * High-level function to evaluate a user's code against hidden test cases.
 * Orchestrates running hidden test cases and mapping the output into a SubmissionResult.
 */
export async function evaluateSubmission(
  code: string,
  language: ProgrammingLanguage,
  problemId: number
): Promise<SubmissionResult> {
  // 1. Execute all hidden test cases
  const executionResults = await runHiddenTests(code, language, problemId);

  // 2. Map and normalize results into internal models
  const submissionResult = mapJudge0ResponseToSubmissionResult(executionResults);

  return submissionResult;
}
