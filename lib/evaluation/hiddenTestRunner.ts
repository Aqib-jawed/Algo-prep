import { ProgrammingLanguage } from "@/types/interview";
import { submitToJudge0 } from "../judge0/judge0Client";
import { pollJudge0Submission } from "../judge0/judge0Polling";

export interface HiddenTestCase {
  input: string;
  expectedOutput: string;
}

export interface TestCaseExecutionResult {
  statusId: number;
  time: number;
  memory: number;
  stdout?: string;
  stderr?: string;
  compileOutput?: string;
  expectedOutput?: string;
}

const HIDDEN_TEST_CASES: Record<number, HiddenTestCase[]> = {
  // Two Sum
  1: [
    { input: "nums = [2,7,11,15], target = 9", expectedOutput: "[0,1]" },
    { input: "nums = [3,2,4], target = 6", expectedOutput: "[1,2]" },
    { input: "nums = [3,3], target = 6", expectedOutput: "[0,1]" },
  ],
  // Add Two Numbers
  2: [
    { input: "l1 = [2,4,3], l2 = [5,6,4]", expectedOutput: "[7,0,8]" },
    { input: "l1 = [0], l2 = [0]", expectedOutput: "[0]" },
    { input: "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]", expectedOutput: "[8,9,9,9,0,0,0,1]" },
  ],
  // Longest Substring Without Repeating Characters
  3: [
    { input: 's = "abcabcbb"', expectedOutput: "3" },
    { input: 's = "bbbbb"', expectedOutput: "1" },
    { input: 's = "pwwkew"', expectedOutput: "3" },
  ],
};

export function getHiddenTestCases(problemId: number): HiddenTestCase[] {
  if (HIDDEN_TEST_CASES[problemId]) {
    return HIDDEN_TEST_CASES[problemId];
  }
  // Generic fallback for any other problem
  return [
    { input: "nums = [1, 2, 3]", expectedOutput: "true" },
    { input: "nums = [4, 5, 6]", expectedOutput: "true" },
  ];
}

/**
 * Runs the code against all hidden test cases using Judge0.
 */
export async function runHiddenTests(
  code: string,
  language: ProgrammingLanguage,
  problemId: number
): Promise<TestCaseExecutionResult[]> {
  const testCases = getHiddenTestCases(problemId);
  const results: TestCaseExecutionResult[] = [];

  // Check for local simulation mode triggers (no API key set)
  const isSimulationMode = !process.env.JUDGE0_API_KEY;

  for (const tc of testCases) {
    if (isSimulationMode) {
      // Simulate response directly based on user code contents
      await new Promise((resolve) => setTimeout(resolve, 300));

      const codeTrimmed = code.trim();
      
      // 1. Basic Compilation Error simulation
      const openBraces = (code.match(/\{/g) || []).length;
      const closeBraces = (code.match(/\}/g) || []).length;
      if (openBraces !== closeBraces) {
        results.push({
          statusId: 6, // Compilation Error
          time: 0,
          memory: 0,
          compileOutput: "Syntax Error: Unbalanced curly braces detected.",
        });
        continue;
      }

      // 2. Default Hello World code -> Wrong Answer
      if (code.includes("Hello World") || code.includes("Hello, World") || codeTrimmed.length < 50) {
        results.push({
          statusId: 4, // Wrong Answer
          time: 0.015,
          memory: 2400,
          stdout: "Hello World",
          expectedOutput: tc.expectedOutput,
        });
        continue;
      }

      // 3. Simulating runtime exception if requested
      if (code.includes("throw") || code.includes("Exception")) {
        results.push({
          statusId: 11, // Runtime Error (NZEC)
          time: 0.02,
          memory: 3100,
          stderr: "java.lang.RuntimeException: Simulated runtime error.",
        });
        continue;
      }

      // 4. Accepted simulation
      results.push({
        statusId: 3, // Accepted
        time: 0.035,
        memory: 3200,
        stdout: tc.expectedOutput,
        expectedOutput: tc.expectedOutput,
      });
    } else {
      // Execute using Judge0 API
      try {
        const token = await submitToJudge0(code, language, tc.input, tc.expectedOutput);
        const execution = await pollJudge0Submission(token);

        // Map NormalizedExecutionResult back to TestCaseExecutionResult
        let statusId = 3; // Accepted default
        if (execution.status === "compilation_error") statusId = 6;
        else if (execution.status === "runtime_error") statusId = 11;
        else if (execution.status === "timeout") statusId = 5;
        else if (execution.status === "error") statusId = 4;
        else {
          // If status is success but stdout doesn't match expected, it's WA (Wrong Answer)
          const trimmedStdout = (execution.stdout || "").trim();
          const trimmedExpected = tc.expectedOutput.trim();
          if (trimmedStdout !== trimmedExpected) {
            statusId = 4; // Wrong Answer
          }
        }

        results.push({
          statusId,
          time: parseFloat(execution.time || "0"),
          memory: execution.memory || 0,
          stdout: execution.stdout,
          stderr: execution.stderr,
          compileOutput: execution.compileOutput,
          expectedOutput: tc.expectedOutput,
        });
      } catch (err: any) {
        console.error("Error executing hidden test case:", err);
        results.push({
          statusId: 4, // Fail gracefully as Wrong Answer
          time: 0,
          memory: 0,
          stderr: err?.message || "Execution failed",
        });
      }
    }
  }

  return results;
}
