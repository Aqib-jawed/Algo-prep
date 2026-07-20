import crypto from "crypto";
import { mapLanguageToJudge0Id } from "./judge0Mapper";
import { ProgrammingLanguage } from "@/types/interview";

interface SubmissionPayload {
  source_code: string;
  language_id: number;
  stdin?: string;
  expected_output?: string;
}

export async function submitToJudge0(
  code: string,
  language: ProgrammingLanguage,
  stdin: string = "",
  expectedOutput: string = ""
): Promise<string> {
  const apiUrl = process.env.JUDGE0_API_URL;
  const apiKey = process.env.JUDGE0_API_KEY;

  const languageId = mapLanguageToJudge0Id(language);

  // If credentials are not configured, simulate the response immediately
  if (!apiUrl || !apiKey) {
    return `sim-${crypto.randomUUID()}`;
  }

  // Base64 encode the values for Judge0 compatibility
  const payload: SubmissionPayload = {
    source_code: Buffer.from(code).toString("base64"),
    language_id: languageId,
    stdin: Buffer.from(stdin).toString("base64"),
    expected_output: Buffer.from(expectedOutput).toString("base64"),
  };

  try {
    const res = await fetch(`${apiUrl}/submissions?base64_encoded=true&wait=false`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-rapidapi-host": new URL(apiUrl).hostname,
        "x-rapidapi-key": apiKey,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(`Judge0 API error: ${res.statusText}`);
    }

    const data = await res.json();
    return data.token;
  } catch (error) {
    console.warn("Judge0 submission failed, falling back to simulation:", error);
    return `sim-${crypto.randomUUID()}`;
  }
}
export type { ProgrammingLanguage };
