import { normalizeJudge0Response, NormalizedExecutionResult } from "./judge0Mapper";

export async function pollJudge0Submission(token: string): Promise<NormalizedExecutionResult> {
  const apiUrl = process.env.JUDGE0_API_URL;
  const apiKey = process.env.JUDGE0_API_KEY;

  // Handle simulation tokens immediately
  if (token.startsWith("sim-")) {
    await new Promise((resolve) => setTimeout(resolve, 1200)); // simulate compilation lag
    return {
      status: "success",
      statusDescription: "Accepted",
      stdout: "Case passed successfully.\nExecution Output matches expected result.",
      stderr: "",
      compileOutput: "",
      time: "0.045",
      memory: 3240,
    };
  }

  if (!apiUrl || !apiKey) {
    throw new Error("Missing Judge0 credentials.");
  }

  const maxRetries = 10;
  let retries = 0;

  while (retries < maxRetries) {
    try {
      const res = await fetch(`${apiUrl}/submissions/${token}?base64_encoded=true`, {
        method: "GET",
        headers: {
          "x-rapidapi-host": new URL(apiUrl).hostname,
          "x-rapidapi-key": apiKey,
        },
      });

      if (!res.ok) {
        throw new Error(`Judge0 API error during poll: ${res.statusText}`);
      }

      const data = await res.json();
      const statusId = data?.status?.id;

      // Status 1 = Queue, 2 = Processing
      if (statusId === 1 || statusId === 2) {
        retries++;
        await new Promise((resolve) => setTimeout(resolve, 1500));
        continue;
      }

      return normalizeJudge0Response(data);
    } catch (error) {
      console.error("Polling attempt failed:", error);
      retries++;
      await new Promise((resolve) => setTimeout(resolve, 1500));
    }
  }

  return {
    status: "timeout",
    statusDescription: "Time Limit Exceeded",
    time: "10.000",
    memory: 0,
    stderr: "Polling request timed out after maximum attempts.",
  };
}
