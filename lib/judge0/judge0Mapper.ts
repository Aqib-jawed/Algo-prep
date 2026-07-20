import { ProgrammingLanguage } from "@/types/interview";

export interface NormalizedExecutionResult {
  status: "success" | "compilation_error" | "runtime_error" | "timeout" | "error";
  statusDescription: string;
  stdout?: string;
  stderr?: string;
  compileOutput?: string;
  time?: string; // in seconds
  memory?: number; // in KB
}

// Map internal ProgrammingLanguage types to Judge0 language IDs
// Java (91), Python (71), C++ (54), JS (93), C (50)
export function mapLanguageToJudge0Id(language: ProgrammingLanguage): number {
  switch (language) {
    case "java":
      return 91; // OpenJDK 17
    case "python":
      return 71; // Python 3.8.1
    case "cpp":
      return 54; // GCC 9.2.0
    case "javascript":
      return 93; // Node.js 18.15.0
    case "c":
      return 50; // GCC 9.2.0
    default:
      return 93;
  }
}

export function normalizeJudge0Response(response: any): NormalizedExecutionResult {
  const statusId = response?.status?.id;
  const statusDescription = response?.status?.description || "Unknown Status";
  
  const baseResult = {
    stdout: response?.stdout ? Buffer.from(response.stdout, "base64").toString("utf8") : "",
    stderr: response?.stderr ? Buffer.from(response.stderr, "base64").toString("utf8") : "",
    compileOutput: response?.compile_output ? Buffer.from(response.compile_output, "base64").toString("utf8") : "",
    time: response?.time || "0.000",
    memory: response?.memory || 0,
  };

  switch (statusId) {
    case 3: // Accepted
      return {
        status: "success",
        statusDescription,
        ...baseResult,
      };
    case 6: // Compilation Error
      return {
        status: "compilation_error",
        statusDescription,
        ...baseResult,
      };
    case 5: // Time Limit Exceeded
      return {
        status: "timeout",
        statusDescription,
        ...baseResult,
      };
    case 4: // Wrong Answer (still ran successfully, but output mismatch)
      return {
        status: "success",
        statusDescription,
        ...baseResult,
      };
    case 7: // Runtime Error (SIGSEGV, etc)
    case 8: // Runtime Error (SIGXFSZ, etc)
    case 9: // Runtime Error (SIGFPE, etc)
    case 10: // Runtime Error (SIGABRT, etc)
    case 11: // Runtime Error (NZEC, etc)
    case 12: // Runtime Error (Other)
      return {
        status: "runtime_error",
        statusDescription,
        ...baseResult,
      };
    default:
      return {
        status: "error",
        statusDescription,
        ...baseResult,
      };
  }
}
export type { ProgrammingLanguage };
