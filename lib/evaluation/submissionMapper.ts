import { SubmissionResult } from "@/types/interview";

/**
 * Maps a list of test case execution results from Judge0 to the internal SubmissionResult model.
 */
export function mapJudge0ResponseToSubmissionResult(
  results: Array<{
    statusId: number;
    time: number; // seconds
    memory: number; // KB
    stdout?: string;
    stderr?: string;
    compileOutput?: string;
    expectedOutput?: string;
  }>
): SubmissionResult {
  const totalTests = results.length;
  let passedTests = 0;
  let maxTime = 0;
  let maxMemory = 0;
  let overallStatus: SubmissionResult["status"] = "Accepted";
  let compilerMessage: string | null = null;
  let runtimeMessage: string | null = null;

  for (const res of results) {
    if (res.time > maxTime) maxTime = res.time;
    if (res.memory > maxMemory) maxMemory = res.memory;

    // Check compilation errors
    if (res.statusId === 6) {
      overallStatus = "Compilation Error";
      compilerMessage = res.compileOutput || "Compilation failed.";
      break;
    }

    // Check runtime errors
    if (res.statusId >= 7 && res.statusId <= 12) {
      overallStatus = "Runtime Error";
      runtimeMessage = res.stderr || "Runtime error occurred.";
      break;
    }

    // Check time limit exceeded
    if (res.statusId === 5) {
      overallStatus = "Time Limit Exceeded";
      runtimeMessage = "Time Limit Exceeded.";
      break;
    }

    // Check memory limit exceeded
    if (res.statusId === 13) {
      overallStatus = "Memory Limit Exceeded";
      runtimeMessage = "Memory Limit Exceeded.";
      break;
    }

    // Check output matching
    if (res.statusId === 3) {
      passedTests++;
    } else if (res.statusId === 4) {
      if (overallStatus === "Accepted") {
        overallStatus = "Wrong Answer";
      }
    } else {
      if (overallStatus === "Accepted") {
        overallStatus = "Wrong Answer";
      }
    }
  }

  if (totalTests === 0) {
    overallStatus = "Wrong Answer";
  }

  const passed = passedTests === totalTests && totalTests > 0;
  if (passed) {
    overallStatus = "Accepted";
  }

  return {
    status: overallStatus,
    passed,
    passedTests,
    totalTests,
    runtime: maxTime,
    memory: maxMemory,
    submittedAt: new Date().toISOString(),
    compilerMessage,
    runtimeMessage,
  };
}
