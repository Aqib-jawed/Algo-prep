import { NextResponse } from "next/server";
import { PATTERNS } from "@/data/patterns";
import type { VisualisationResponse, VisualisationStep } from "@/types/visualiser";
import { requireAuth } from "@/lib/auth";
import { checkRateLimit } from "@/lib/rate-limit";
import { cacheKey, getCached, setCached } from "@/lib/visualise-cache";

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = "llama-3.3-70b-versatile";
const RATE_LIMIT = 6;
const RATE_WINDOW_MS = 10 * 60 * 1000;

export async function POST(req: Request) {
  try {
    const user = await requireAuth();
    if (!user) {
      return NextResponse.json({ error: "Sign in to use the visualiser." }, { status: 401 });
    }

    const { problemTitle, problemDescription, userInput, patternSlug } = await req.json();

    if (!problemTitle?.trim() || !userInput?.trim()) {
      return NextResponse.json({ error: "Problem title and input are required." }, { status: 400 });
    }

    const key = cacheKey(problemTitle, userInput, patternSlug);
    const cached = getCached(key);
    if (cached) {
      return NextResponse.json(cached);
    }

    const { allowed, retryAfterMs } = checkRateLimit(`visualise:${user.id}`, RATE_LIMIT, RATE_WINDOW_MS);
    if (!allowed) {
      const seconds = Math.ceil((retryAfterMs ?? 0) / 1000);
      return NextResponse.json(
        { error: `Too many visualisations right now. Try again in ${seconds}s.` },
        { status: 429 }
      );
    }

    const pattern = PATTERNS.find((p) => p.slug === patternSlug);
    const patternContext = pattern
      ? `Pattern: ${pattern.name}. Core invariant: ${pattern.coreInvariant}. Cheat code: ${pattern.cheatCode}`
      : "Auto-detect the correct pattern from the problem.";

    const systemPrompt = `You are an algorithm visualisation + teaching engine for a LeetCode prep platform.
Your audience is a student who has never seen this problem before. Your output must let them
do THREE things, in order, using nothing but what you return:
  (1) Watch the algorithm run on the exact given input, iteration by iteration.
  (2) Understand WHY each iteration did what it did, in terms of the real values involved.
  (3) See how that exact reasoning becomes real, optimal code — so they could write it themselves.

Return ONLY a valid JSON object. No markdown, no code fences, no prose outside the JSON.

===================================================================
PART A — STEP-BY-STEP VISUAL TRACE (the "steps" array)
===================================================================
1. Show EVERY meaningful step: pointer moves, comparisons, swaps, pushes, pops, hashmap inserts.
2. Keep total steps between 5 and 18. If the true run is longer, show:
   first 4 steps fully → one summary step ("... N more iterations, same pattern ...") → last 3 steps.
3. dataStructure must be exactly one of:
   array | two-pointer | sliding-window | tree | graph | stack | queue | hashmap | linked-list | matrix
4. Highlight values for array cells: active | window | match | result | visited | none
5. Two-pointer: include array + pointers. Sliding-window: include array + pointers + windowStart/windowEnd.
   Hashmap problems: include array (being iterated) + hashmap (current state).
6. pointers: { name, index, color }. Colors: left/i = "#f97316", right/j = "#00b8a3", slow = "#AFA9EC", fast = "#ffc01e".

EXPLANATION QUALITY (critical — every "explanation" string must obey this):
Never write vague filler ("comparing elements", "checking the condition", "some values").
Always name the real index/pointer and its real value from THIS input, do the real
arithmetic, then state the resulting decision and why it follows the algorithm's invariant.
  BAD:  "We compare the two pointers and decide whether to move one."
  GOOD: "left=0 → nums[0]=2, right=3 → nums[3]=15. Sum = 2+15 = 17 > target=9, so move
         right pointer left to shrink the sum."

"variables": full current snapshot of every non-pointer tracked value (sum, count, target,
maxLength, current char, etc.) at THIS step — every step, not just when something changes.
  [{ "name": "sum", "value": "17" }, { "name": "target", "value": "9" }]

"comparison" (when this step makes a decision): structured version of the same reasoning:
  { "left": "nums[0]=2", "right": "nums[3]=15", "operator": "+", "computed": "17",
    "against": "target=9", "outcome": "17 > 9 → move right pointer left" }

===================================================================
PART B — TRACE TABLE (the "traceTable" object)
===================================================================
This is a classic DSA trace table: one row PER ITERATION (not per micro-step — collapse an
iteration's pointer-move + comparison + update into one row), with a column per tracked
variable, so a student can read it top to bottom like a spreadsheet and see every value
evolve. This is the same underlying run as "steps" but condensed into table form.

"columns": ordered list of column names relevant to THIS algorithm, e.g. for two-pointer:
  ["Iteration", "left", "right", "nums[left]", "nums[right]", "Sum", "Decision"]
  for sliding window: ["Iteration", "right", "window", "windowSum", "Decision"]
  for hashmap: ["Iteration", "i", "nums[i]", "Complement", "In HashMap?", "Decision"]
Pick columns that actually matter for THIS problem's invariant. Do not pad with irrelevant columns.

"rows": one object per iteration:
  { "iteration": 1,
    "values": { "left": 0, "right": 3, "nums[left]": 2, "nums[right]": 15, "Sum": 17, "Decision": "17>9, move right" },
    "why": "Sum of nums[left]=2 and nums[right]=15 is 17, which exceeds target=9, so the
            right pointer must move inward to reduce the sum — moving left would only
            increase it further.",
    "relatedStep": 1 }
Every "why" must follow the same real-values-only rule as PART A explanations. The keys
inside "values" must exactly match the strings in "columns".

===================================================================
PART C — CODE WALKTHROUGH + OPTIMAL SOLUTION (teach them to write it themselves)
===================================================================
"optimalCode": the full, clean, optimal solution in Java (the platform's primary practice
language), correctly solving this exact problem. Production-quality: proper variable names,
no dead code, no unnecessary complexity. This is the code a student should end up able to
write on their own after understanding the trace.

"codeWalkthrough.language": "java"
"codeWalkthrough.lines": one entry per meaningful line/block of "optimalCode", in order:
  { "line": "int left = 0, right = nums.length - 1;",
    "explanation": "Initialize two pointers at the array's boundaries — this is the standard
                    two-pointer setup because the array is sorted and we need to search
                    inward from both ends.",
    "relatedSteps": [1] }
"relatedSteps" must reference actual stepNumber values from PART A, so the UI can highlight
which code line was "live" during which visual step. Every line that corresponds to
something the student just watched happen in the trace MUST list those step numbers.

"complexity": { "time": "O(n)", "space": "O(1)",
  "why": "Each pointer moves at most n times total and never backtracks, so the two pointers
          together perform at most 2n comparisons — giving a single linear pass instead of
          the O(n^2) brute-force of checking every pair." }
Explain WHY this is optimal, not just state the complexity class.

===================================================================
FULL JSON SCHEMA
===================================================================
{
  "problemTitle": "string",
  "pattern": "string",
  "patternSlug": "string",
  "totalSteps": number,
  "steps": [ { "stepNumber": number, "title": "string", "explanation": "string", "code": "string or omit",
      "dataStructure": "string", "array": [...], "pointers": [...], "stack": [...], "hashmap": [...],
      "treeNodes": [...], "windowStart": number, "windowEnd": number,
      "variables": [{"name":"string","value":"string|number"}],
      "comparison": {"left":"string","right":"string","operator":"string","computed":"string","against":"string","outcome":"string"},
      "result": "string" } ],
  "traceTable": { "columns": ["string", ...], "rows": [ { "iteration": number, "values": {"col":"val"}, "why": "string", "relatedStep": number } ] },
  "codeWalkthrough": { "language": "java", "lines": [ { "line": "string", "explanation": "string", "relatedSteps": [number] } ] },
  "optimalCode": "string — full Java solution",
  "complexity": { "time": "string", "space": "string", "why": "string" },
  "finalAnswer": "string"
}`;

    const userPrompt = `Problem: ${problemTitle}
${problemDescription ? "Description: " + problemDescription : ""}
${patternContext}
Input: ${userInput}

Trace the optimal algorithm on this exact input. Every explanation and every "why" in the
trace table must use the real values from THIS input — no generic language anywhere.
Build the trace table with one row per iteration, matched to the steps via "relatedStep".
Write the full optimal Java solution and connect every line of it back to the steps that
demonstrate it, via "relatedSteps", so a student can see the trace becoming the code.
Return the JSON object only — no other text.`;

    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.1,
        max_tokens: 8000,
        response_format: { type: "json_object" }
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Groq API error:", response.status, errText);
      if (response.status === 429) {
        return NextResponse.json({ error: "Rate limit reached. Wait a moment and try again." }, { status: 429 });
      }
      return NextResponse.json({ error: "AI service error. Try again." }, { status: 500 });
    }

    const data = await response.json();
    const raw = data.choices?.[0]?.message?.content ?? "";

    if (!raw) {
      return NextResponse.json({ error: "Empty response from AI. Try again." }, { status: 500 });
    }

    let parsed: VisualisationResponse;
    try {
      parsed = JSON.parse(raw);
    } catch {
      console.error("JSON parse failed. Raw:", raw);
      return NextResponse.json(
        { error: "Could not parse visualisation. Try a simpler input or problem." },
        { status: 500 }
      );
    }

    if (!parsed.steps || !Array.isArray(parsed.steps) || parsed.steps.length === 0) {
      return NextResponse.json({ error: "No steps generated. Try rephrasing the problem or input." }, { status: 500 });
    }

    if (!parsed.traceTable || !Array.isArray(parsed.traceTable.rows) || parsed.traceTable.rows.length === 0) {
      return NextResponse.json(
        { error: "Trace table generation failed. Try again." },
        { status: 500 }
      );
    }

    if (!parsed.optimalCode || !parsed.codeWalkthrough?.lines?.length) {
      return NextResponse.json(
        { error: "Code walkthrough generation failed. Try again." },
        { status: 500 }
      );
    }

    // Safety net: ground any step/table-row explanation that slipped through generic.
    parsed.steps = parsed.steps.map(enrichStepExplanation);
    parsed.traceTable.rows = parsed.traceTable.rows.map(enrichRowWhy);

    setCached(key, parsed);
    return NextResponse.json(parsed);
  } catch (err) {
    console.error("Visualise route unexpected error:", err);
    return NextResponse.json({ error: "Something went wrong. Try again." }, { status: 500 });
  }
}

/**
 * Deterministic fallback for step explanations that have no real value in them
 * (heuristic: no digit present). Builds a concrete watch-line from the step's own
 * structured fields — never invents data, only surfaces what's already there.
 */
function enrichStepExplanation(step: VisualisationStep): VisualisationStep {
  const explanation = step.explanation ?? "";
  if (/\d/.test(explanation)) return step;

  const parts: string[] = [];

  if (step.pointers?.length) {
    const pointerValues = step.pointers
      .map((p) => {
        const cell = step.array?.[p.index];
        return cell ? `${p.name}=${p.index} (value=${cell.value})` : `${p.name}=${p.index}`;
      })
      .join(", ");
    if (pointerValues) parts.push(pointerValues);
  }

  if (step.variables?.length) {
    parts.push(step.variables.map((v) => `${v.name}=${v.value}`).join(", "));
  }

  if (step.comparison) {
    const c = step.comparison;
    parts.push(`${c.left} ${c.operator} ${c.right} = ${c.computed} → ${c.outcome}`);
  }

  if (parts.length === 0) return step;
  return { ...step, explanation: `${explanation.trim()} (${parts.join(" | ")})`.trim() };
}

/**
 * Same safety net for trace table rows: if "why" has no digit in it, ground it using
 * the row's own "values" map instead.
 */
function enrichRowWhy(row: VisualisationResponse["traceTable"]["rows"][number]) {
  const why = row.why ?? "";
  if (/\d/.test(why)) return row;

  const snapshot = Object.entries(row.values ?? {})
    .map(([k, v]) => `${k}=${v}`)
    .join(", ");

  if (!snapshot) return row;
  return { ...row, why: `${why.trim()} (${snapshot})`.trim() };
}