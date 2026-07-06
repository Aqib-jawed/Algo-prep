import { NextResponse } from "next/server";
import { PATTERNS } from "@/data/patterns";
import type { VisualisationResponse } from "@/types/visualiser";
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

    const systemPrompt = `You are an algorithm visualisation engine for a LeetCode prep platform.
Your job: given a coding problem and a sample input, produce a step-by-step JSON trace
of exactly how the optimal algorithm executes on that input — like a debugger at each iteration.

STRICT RULES:
1. Return ONLY a valid JSON object. No explanation, no markdown, no code blocks.
2. Show EVERY meaningful step: pointer moves, comparisons, swaps, pushes, pops, hashmap inserts.
3. Keep total steps between 5 and 18. If input would produce more, show:
   first 4 steps fully → one summary step ("... N more iterations ...") → last 3 steps.
4. Each step must include: stepNumber (int), title (short string), explanation (1-2 plain sentences),
   dataStructure (one of the allowed values), and the relevant state fields.
5. dataStructure must be exactly one of:
   array | two-pointer | sliding-window | tree | graph | stack | queue | hashmap | linked-list | matrix
6. Highlight rules for array cells:
   "active"  = cell(s) being examined right now
   "window"  = cells inside the current sliding window
   "match"   = cells that match/satisfy the condition
   "result"  = cells in the final answer
   "visited" = cells already processed
   "none"    = default, unexamined
7. For two-pointer problems: always include BOTH array and pointers fields.
8. For sliding-window: include array, pointers, windowStart, windowEnd fields.
9. For hashmap problems: include BOTH array (being iterated) and hashmap (current state) fields.
10. pointers array: each pointer has name (e.g. "left","right","i","j"), index (int), color (hex string).
    Use these colors: left/i pointer = "#f97316", right/j pointer = "#00b8a3", slow = "#AFA9EC", fast = "#ffc01e"
11. result field = current running answer as a string (e.g. "3", "[0,1]", "true").
12. code field = the Java line(s) executing at this step (optional but include when meaningful).
13. finalAnswer = the exact answer for the given input as a string.

JSON schema to return (fill all applicable fields):
{
  "problemTitle": "string",
  "pattern": "string — full pattern name",
  "patternSlug": "string — slug",
  "totalSteps": number,
  "steps": [
    {
      "stepNumber": number,
      "title": "string",
      "explanation": "string",
      "code": "string or omit",
      "dataStructure": "string",
      "array": [{ "value": "string|number", "highlight": "string", "label": "string or omit" }],
      "pointers": [{ "name": "string", "index": number, "color": "string" }],
      "stack": [{ "value": "string|number", "highlight": boolean }],
      "hashmap": [{ "key": "string", "value": "string|number", "highlight": boolean }],
      "treeNodes": [{ "id": "string", "value": "string|number", "left": "string or omit", "right": "string or omit", "highlight": "string" }],
      "windowStart": number,
      "windowEnd": number,
      "result": "string"
    }
  ],
  "finalAnswer": "string"
}`;

    const userPrompt = `Problem: ${problemTitle}
${problemDescription ? "Description: " + problemDescription : ""}
${patternContext}
Input: ${userInput}

Trace the optimal algorithm step by step on this exact input.
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
        max_tokens: 4096,
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

    setCached(key, parsed);
    return NextResponse.json(parsed);
  } catch (err) {
    console.error("Visualise route unexpected error:", err);
    return NextResponse.json({ error: "Something went wrong. Try again." }, { status: 500 });
  }
}