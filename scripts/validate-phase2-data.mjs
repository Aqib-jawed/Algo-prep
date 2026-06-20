import fs from "node:fs";
import vm from "node:vm";

const requiredIds = [1,2,3,11,15,19,20,21,23,33,34,39,42,45,46,48,49,53,55,56,57,62,70,72,76,78,84,85,98,100,101,102,104,105,121,124,125,127,128,133,138,141,143,146,153,200,206,207,208,213,215,217,226,230,235,236,238,239,242,268,279,287,295,297,300,309,312,322,338,347,378,380,416,424,435,437,494,518,525,543,560,567,572,621,647,684,695,721,739,743,763,787,853,875,876,904,934,983,994,1004,1011,1143,1235,1312,1335,1345,1438,1514];
const expectedSlugs = ["two-pointers","sliding-window","prefix-sum","binary-search","binary-search-on-answer","kadanes-algorithm","hashmap-frequency","stack-basic","monotonic-stack","monotonic-deque","recursion-backtracking","bfs","dfs-tree","dfs-graph","topological-sort","union-find","heaps","merge-intervals","two-heap","dp-1d","dp-2d-grid","dp-strings","dp-knapsack","dp-trees","greedy","tries","bit-manipulation","fast-slow-pointers","divide-conquer"];

function evalTsData(path, names) {
  let code = fs.readFileSync(path, "utf8");
  code = code.replace(/^import type .*$/gm, "");
  code = code.replace(/export type[\s\S]*?;\n\n/g, "");
  code = code.replace(/export const /g, "const ");
  code = code.replace(/const (\w+): [^=]+ =/g, "const $1 =");
  code = code.replace(/function buildJavaTemplate\(title: string, coreMethod: string\)/, "function buildJavaTemplate(title, coreMethod)");
  code = code.replace(/\) as Record<[^;]+>;/g, ");");
  code += `\n__result = { ${names.join(", ")} };`;
  const context = { __result: null };
  vm.createContext(context);
  vm.runInContext(code, context, { filename: path });
  return context.__result;
}

const { PATTERNS } = evalTsData("data/patterns.ts", ["PATTERNS"]);
const { PROBLEMS } = evalTsData("data/problems.ts", ["PROBLEMS"]);
const { ROADMAP_WEEKS } = evalTsData("data/roadmap.ts", ["ROADMAP_WEEKS"]);
const { COMPANY_DATA } = evalTsData("data/companies.ts", ["COMPANY_DATA"]);

const errors = [];
if (PATTERNS.length !== expectedSlugs.length) errors.push(`Expected ${expectedSlugs.length} patterns, got ${PATTERNS.length}`);
if (PROBLEMS.length !== 160) errors.push(`Expected 160 problems, got ${PROBLEMS.length}`);
if (ROADMAP_WEEKS.length !== 16) errors.push(`Expected 16 roadmap weeks, got ${ROADMAP_WEEKS.length}`);
if (Object.keys(COMPANY_DATA).length !== 9) errors.push(`Expected 9 companies, got ${Object.keys(COMPANY_DATA).length}`);

PATTERNS.forEach((pattern, index) => {
  if (pattern.slug !== expectedSlugs[index]) errors.push(`Pattern slug order mismatch at ${index + 1}: ${pattern.slug}`);
  if (pattern.topMistakes.length !== 5) errors.push(`${pattern.slug} has ${pattern.topMistakes.length} top mistakes`);
  const lines = pattern.javaTemplate.trim().split(/\r?\n/).length;
  if (lines < 50 || lines > 100) errors.push(`${pattern.slug} template has ${lines} lines`);
});

const problemIds = new Set(PROBLEMS.map((problem) => problem.id));
for (const id of requiredIds) {
  if (!problemIds.has(id)) errors.push(`Missing required LC ${id}`);
}

for (const week of ROADMAP_WEEKS) {
  if (week.dailyBreakdown.length !== 7) errors.push(`Week ${week.week} has ${week.dailyBreakdown.length} days`);
  for (const id of week.problemIds) {
    if (!problemIds.has(id)) errors.push(`Week ${week.week} references missing LC ${id}`);
  }
}

for (const [slug, company] of Object.entries(COMPANY_DATA)) {
  if (company.patternEmphasis.length !== 4) errors.push(`${slug} patternEmphasis length is ${company.patternEmphasis.length}`);
  if (company.topProblems.length !== 10) errors.push(`${slug} topProblems length is ${company.topProblems.length}`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Phase 2 data validation passed.");
