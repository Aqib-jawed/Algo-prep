"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { PATTERNS } from "@/data/patterns";

/* ─── Accordion data ─── */
const insights = [
  {
    title: "Pattern-first beats random grinding",
    bullets: [
      "Identify the pattern BEFORE writing any code. Write \"This is [PATTERN] because [TRIGGER]\" at the top of every problem.",
      "Re-attempt every failed problem within 48 hours — not by reading the solution but by solving from memory after understanding the approach.",
      "Track two things per problem: time to identify pattern, time to implement once identified. High identify time → drill recognition. High implement time → drill templates.",
      "Never move to the next problem until you can explain time and space complexity out loud.",
      "Cluster failed problems by pattern weekly. If you fail 3 sliding window problems, that's a signal — not bad luck.",
    ],
  },
  {
    title: "NeetCode-style progression layers prerequisites",
    bullets: [
      "Arrays and HashMaps first — Two Pointers and Sliding Window are broken without understanding O(1) lookup and index traversal.",
      "Never jump to Trees before Recursion. Never jump to Graphs before Trees. The dependency graph is the learning graph.",
      "NeetCode's 150 list is ordered by dependency, not difficulty. Follow the order, not your mood.",
      "After finishing each pattern, write the cheat code from memory. If you can't — you haven't learned it.",
    ],
  },
  {
    title: "Sean Prashad lists work as frequency filters",
    bullets: [
      "Sean Prashad's LC Patterns sheet tags every problem with companies and frequency. Use it to prioritise within a pattern.",
      "After finishing a pattern's 5-6 core problems, use Sean's list to find 2-3 high-frequency problems for your target company.",
      "\"Very High\" frequency problems should be solvable in under 15 minutes after pattern study. If 30+, re-read the template next day.",
    ],
  },
  {
    title: "Clement-style explanation practice matters",
    bullets: [
      "After every problem, explain your approach out loud as if the interviewer asked \"walk me through your thinking.\" Do this even alone.",
      "The 3-step interview narration: (1) State the pattern and why. (2) State the invariant. (3) Walk through complexity before coding.",
      "Record yourself doing a 45-minute mock every Saturday. Watch it back Sunday — you'll see where you go silent and rush.",
    ],
  },
  {
    title: "Postmortems compound faster than new solves",
    bullets: [
      "After every failed problem or mock, write a 3-line postmortem: What pattern did I miss and why? What was the key insight? What next?",
      "Keep a \"missed pattern\" log. If sliding window appears 4+ times, that pattern is your interview liability.",
      "Re-solve every problem you got wrong in a mock within 24 hours — by re-attempting, not reading the solution.",
    ],
  },
  {
    title: "Final month is a weak-area sprint",
    bullets: [
      "Stop learning new patterns in the final 4 weeks. Use your readiness score to find 2-3 patterns with lowest mastery and sprint those.",
      "Final 2 weeks: only mocks and revision. No new problems.",
      "Final week: 2 mocks/day, review postmortem log, sleep 8 hours. Fatigue is the #1 cause of failure in technically-ready students.",
    ],
  },
];

/* ─── Mock interview card data ─── */
const mockCards = [
  {
    name: "Pramp",
    badge: "Free",
    badgeColor: "#00b8a3",
    content: [
      "Pramp provides a free, reciprocal peer-to-peer interview format where you alternate roles as candidate and interviewer.",
      "It is best for practice under real-time peer pressure, verbalizing solutions, and learning by grading others.",
      "We recommend scheduling 2 sessions per week starting from Week 8, ensuring a 10-minute debrief immediately after to log feedback."
    ],
    link: "pramp.com",
  },
  {
    name: "Self-Mock",
    badge: "Weekly",
    badgeColor: "#8b5cf6",
    content: [
      "The Self-Mock protocol replicates exam conditions by picking a random unseen LeetCode Medium/Hard matching your active patterns.",
      "You must set a strict 45-minute timer, disable all IDE hints, write code on paper or a whiteboard first, and explain your approach out loud.",
      "This forces independence and helps diagnose whether translation speed or conceptual understanding is your primary bottleneck."
    ],
    link: "self",
  },
  {
    name: "Interviewing.io",
    badge: "$50–100",
    badgeColor: "#f97316",
    content: [
      "Interviewing.io offers anonymous, paid mock interviews with senior engineers currently working at Google, Meta, and Amazon.",
      "It provides highly detailed, realistic signal on your design trade-offs, communication clarity, and coding speed relative to actual hiring bars.",
      "Use 1-2 sessions as a final calibration pass right before your real onsite loops to resolve remaining optimization issues."
    ],
    link: "interviewing.io",
  },
  {
    name: "Scoring Rubric",
    badge: "Max 20",
    badgeColor: "#ffc01e",
    content: [
      "Evaluate each mock session across 4 core dimensions: Pattern Recognition, Code Correctness, Communication, and Edge Case handling.",
      "Score each dimension from 1 to 5, aiming for a total score of 16+ to indicate FAANG readiness.",
      "A score of 12-15 represents mid-tier target readiness, while anything below 12 signals that you need to return to fundamental pattern templates."
    ],
    link: null,
  },
];

/* ─── Interview round data ─── */
const rounds = [
  { round: "OA Screening", patterns: "Arrays, HashMaps, Sliding Window, Two Pointers", freq: 80 },
  { round: "First Technical", patterns: "Trees BFS/DFS, Binary Search, Stack", freq: 60 },
  { round: "Onsite Coding", patterns: "DP, Graphs, Heaps, Intervals", freq: 40 },
  { round: "Final Onsite", patterns: "Mixed hard, Greedy proofs, System Design DSA", freq: 20 },
];

/* ─── Pattern timeline transition reasoning ─── */
const patternReasons: Record<string, { why: string; unlocks: string }> = {
  "two-pointers": { why: "Start here — arrays are the base data structure. Two pointers teaches maintaining a valid window without extra memory.", unlocks: "Unlocks Sliding Window — same mental model, new dimension." },
  "sliding-window": { why: "Extends two pointers — instead of two endpoints, you now manage a variable-size window incrementally.", unlocks: "Unlocks Prefix Sum — you'll need range queries for complex window conditions." },
  "prefix-sum": { why: "Unlocks O(1) range queries on arrays. Essential before Binary Search — many BS problems need prefix sums to evaluate mid-point conditions.", unlocks: "Unlocks Binary Search on Answer — O(1) range evaluation to binary search answer spaces." },
  "binary-search": { why: "Binary search finds answers in O(log n) on any monotonic function — not just sorted arrays.", unlocks: "Unlocks BS on Answer and Kadane's — both extend the 'eliminate half' thinking." },
  "binary-search-on-answer": { why: "Hardest unlock in the first half: apply binary search to the answer space instead of the input.", unlocks: "Unlocks DP patterns — the 'is X feasible?' function maps directly to DP subproblems." },
  "kadanes-algorithm": { why: "First DP-adjacent pattern. Teaches 'local vs global optimal' — the foundation of all 1D DP.", unlocks: "Unlocks 1D DP — dp[i] = max(nums[i], dp[i-1] + nums[i]) is the core of linear DP." },
  "hashmap-frequency": { why: "Moves you from O(n²) brute force to O(n) lookups. Pre-requisite for almost every medium-hard array problem.", unlocks: "Unlocks Monotonic Stack — fast lookups let you maintain the invariant efficiently." },
  "stack-basic": { why: "Introduces LIFO state management — when to store context rather than recompute. The key insight behind monotonic patterns.", unlocks: "Unlocks Monotonic Stack and Deque — stack with invariant maintained on every push." },
  "monotonic-stack": { why: "Stack with an invariant. Covers Next Greater Element, Histogram, Trapping Rain Water — all FAANG favourites.", unlocks: "Unlocks Monotonic Deque — sliding window + stack combined." },
  "monotonic-deque": { why: "Sliding window + monotonic stack combined. Used for sliding window maximum — constant at Google interviews.", unlocks: "Unlocks Backtracking — you've mastered iterative; now move to recursive." },
  "recursion-backtracking": { why: "The bridge to Trees and Graphs. Without recursion fluency, tree traversal and DFS feel impossible.", unlocks: "Unlocks BFS, DFS on Trees, DFS on Graphs — all use recursion as foundation." },
  "bfs": { why: "Level-order traversal and shortest path. Most-asked graph pattern in FAANG screening. Always prefer BFS for 'minimum steps' problems.", unlocks: "Unlocks DFS on Trees — once you understand level-by-level, depth-first is the complement." },
  "dfs-tree": { why: "Recursive tree traversal. Covers inorder, preorder, postorder, path sum, LCA — backbone of 40% of tree problems.", unlocks: "Unlocks DFS on Graphs — same DFS logic but with a visited set for cycles." },
  "dfs-graph": { why: "Extends tree DFS to cycles and disconnected components. Introduces visited sets and connected components.", unlocks: "Unlocks Topological Sort and Union Find — two more graph connectivity patterns." },
  "topological-sort": { why: "DAG traversal. Pre-requisite for course scheduling and any dependency-ordering problem. BFS (Kahn's) or DFS.", unlocks: "Unlocks Union Find — alternative connectivity for dynamic graphs." },
  "union-find": { why: "Disjoint set data structure — alternative to BFS/DFS for connectivity. Faster for dynamic graph problems with many union operations.", unlocks: "Unlocks Heaps — you now have all graph patterns; move to priority-based." },
  "heaps": { why: "Priority queue pattern. Used for K-th element, merge K lists, task scheduling. Almost always O(n log k).", unlocks: "Unlocks Merge Intervals and Two Heap — both rely on sorted order maintained by heaps." },
  "merge-intervals": { why: "Sorting + greedy on intervals. Appears in calendar problems, meeting rooms, and CPU scheduling. Easy to get wrong on edge cases.", unlocks: "Unlocks Two Heap — the interval median problem combines both patterns." },
  "two-heap": { why: "Min-heap + max-heap pair. The pattern for sliding window median and data stream problems. Appears at Google and Meta.", unlocks: "Unlocks 1D DP — hardest conceptual jump begins." },
  "dp-1d": { why: "Hardest conceptual jump in the roadmap. Start with Fibonacci, then Climbing Stairs, then House Robber. Build the recurrence reflex.", unlocks: "Unlocks 2D Grid DP — same recurrence thinking, two dimensions." },
  "dp-2d-grid": { why: "Extends 1D DP to a matrix. Covers unique paths, minimum path sum, edit distance setup. The key: define what dp[i][j] means.", unlocks: "Unlocks String DP — edit distance and LCS are 2D grid DP on character pairs." },
  "dp-strings": { why: "LCS, LIS, Edit Distance, Palindrome DP. Most common DP category in Amazon and Atlassian interviews.", unlocks: "Unlocks Knapsack DP — the 'include or exclude' decision on each item." },
  "dp-knapsack": { why: "Decides whether to include or exclude each item to reach a target. Covers Coin Change, Subset Sum, Partition Equal Subset Sum.", unlocks: "Unlocks DP on Trees — combines recursion + DP for tree-structured subproblems." },
  "dp-trees": { why: "DP on tree structure — diameter, max path sum, house robber on trees. Appears in final onsite rounds.", unlocks: "Unlocks Greedy — after DP, compare when greedy is a valid shortcut." },
  "greedy": { why: "Last because it requires intuition built from all other patterns. Greedy works when local optimal leads to global optimal.", unlocks: "Unlocks Tries, Bit Manipulation, and advanced patterns — full foundation achieved." },
  "tries": { why: "Prefix tree for string matching in O(m). Covers autocomplete, word search, and prefix problems.", unlocks: "Unlocks Bit Manipulation — bit-level string operations are the natural next step." },
  "bit-manipulation": { why: "Bitwise operators for O(1) space solutions. The XOR trick solves 'find the single number'. Bit masking solves subset enumeration.", unlocks: "Unlocks Divide and Conquer — combine bit thinking with recursive splitting." },
  "fast-slow-pointers": { why: "Floyd's cycle detection: moves one pointer 2× as fast as the other. Extends two-pointers to linked lists.", unlocks: "Unlocks linked list problems and cycle-detection variants across arrays." },
  "divide-conquer": { why: "Split into independent subproblems, solve recursively, combine results. The template: split, recurse, merge.", unlocks: "Completes the pattern library — merge sort, quick sort, maximum subarray." },
};

/* ─── Compact Flowchart — clean top-down layered flow ─── */
type FNode = { id: string; label: string; type: "root" | "q" | "a"; x: number; y: number; w: number; h: number; link?: string };
type FEdge = { fromX: number; fromY: number; toX: number; toY: number; label?: string; idx: number };

// Layout: 6 columns × 5 rows in a 760×300 viewBox
const NODES: FNode[] = [
  // Row 0: root (center)
  { id: "root",   label: "New Problem",          type: "root", x: 305, y: 6,   w: 150, h: 32 },

  // Row 1: 4 signal-type branches
  { id: "q-arr",  label: "Sorted / Range?",       type: "q",    x: 10,  y: 68,  w: 132, h: 30 },
  { id: "q-sub",  label: "Subarray / String?",    type: "q",    x: 190, y: 68,  w: 145, h: 30 },
  { id: "q-grf",  label: "Graph / Grid / Tree?",  type: "q",    x: 400, y: 68,  w: 148, h: 30 },
  { id: "q-cmp",  label: "Complexity Bottleneck?",type: "q",    x: 610, y: 68,  w: 150, h: 30 },

  // Row 2: sub-decisions
  { id: "a-bs",   label: "Binary Search",         type: "a",    x: 10,  y: 132, w: 115, h: 28, link: "binary-search" },
  { id: "a-bso",  label: "BS on Answer",          type: "a",    x: 138, y: 132, w: 110, h: 28, link: "binary-search-on-answer" },
  { id: "a-sw",   label: "Sliding Window",        type: "a",    x: 265, y: 132, w: 110, h: 28, link: "sliding-window" },
  { id: "a-tp",   label: "Two Pointers",          type: "a",    x: 388, y: 132, w: 100, h: 28, link: "two-pointers" },
  { id: "q-sht",  label: "Min Steps?",            type: "q",    x: 500, y: 132, w: 110, h: 28 },
  { id: "a-top",  label: "Topo Sort",             type: "a",    x: 625, y: 132, w: 90,  h: 28, link: "topological-sort" },
  { id: "a-dp2",  label: "Knapsack / 2D DP",      type: "a",    x: 725, y: 132, w: 115, h: 28, link: "dp-knapsack" },

  // Row 3: deeper
  { id: "a-ps",   label: "Prefix Sum",            type: "a",    x: 10,  y: 196, w: 100, h: 28, link: "prefix-sum" },
  { id: "a-bfs",  label: "BFS",                   type: "a",    x: 480, y: 196, w: 65,  h: 28, link: "bfs" },
  { id: "a-dfs",  label: "DFS / UF",              type: "a",    x: 562, y: 196, w: 75,  h: 28, link: "dfs-graph" },
  { id: "a-dp1",  label: "1D DP / Kadane",        type: "a",    x: 650, y: 196, w: 115, h: 28, link: "dp-1d" },

  // Row 4: leaf patterns
  { id: "a-mst",  label: "Mono Stack",            type: "a",    x: 10,  y: 258, w: 95,  h: 28, link: "monotonic-stack" },
  { id: "a-hp",   label: "Heap / PQ",             type: "a",    x: 120, y: 258, w: 80,  h: 28, link: "heaps" },
  { id: "a-hsh",  label: "HashMap",               type: "a",    x: 215, y: 258, w: 80,  h: 28, link: "hashmap-frequency" },
  { id: "a-grd",  label: "Greedy",                type: "a",    x: 310, y: 258, w: 72,  h: 28, link: "greedy" },
  { id: "a-bt",   label: "Backtrack",             type: "a",    x: 397, y: 258, w: 80,  h: 28, link: "recursion-backtracking" },
  { id: "a-trie", label: "Trie",                  type: "a",    x: 492, y: 258, w: 60,  h: 28, link: "tries" },
  { id: "a-bit",  label: "Bit Manip",             type: "a",    x: 568, y: 258, w: 80,  h: 28, link: "bit-manipulation" },
  { id: "a-str",  label: "String DP",             type: "a",    x: 665, y: 258, w: 80,  h: 28, link: "dp-strings" },
  { id: "a-uf",   label: "Union Find",            type: "a",    x: 760, y: 258, w: 85,  h: 28, link: "union-find" },
];

const VB_W = 860, VB_H = 302;

const EDGES: FEdge[] = [
  // root → 4 branches (row0→row1)
  { fromX: 355, fromY: 38,  toX: 76,  toY: 68,  idx: 0 },
  { fromX: 380, fromY: 38,  toX: 262, toY: 68,  idx: 1 },
  { fromX: 410, fromY: 38,  toX: 474, toY: 68,  idx: 2 },
  { fromX: 435, fromY: 38,  toX: 685, toY: 68,  idx: 3 },

  // q-arr → a-bs (sorted=yes), a-bso (range=yes)
  { fromX: 60,  fromY: 98,  toX: 67,  toY: 132, label: "Sorted", idx: 4 },
  { fromX: 100, fromY: 98,  toX: 193, toY: 132, label: "Range",  idx: 5 },

  // q-sub → a-sw (fixed), a-tp (var)
  { fromX: 240, fromY: 98,  toX: 320, toY: 132, label: "Fixed",  idx: 6 },
  { fromX: 290, fromY: 98,  toX: 438, toY: 132, label: "Var",    idx: 7 },

  // q-grf → q-sht, a-top
  { fromX: 474, fromY: 98,  toX: 555, toY: 132, label: "Path",   idx: 8 },
  { fromX: 520, fromY: 98,  toX: 670, toY: 132, label: "DAG",    idx: 9 },

  // q-sht → a-bfs (yes), a-dfs (no)
  { fromX: 530, fromY: 160, toX: 512, toY: 196, label: "Yes",    idx: 10 },
  { fromX: 575, fromY: 160, toX: 600, toY: 196, label: "No",     idx: 11 },

  // q-cmp → a-dp2, a-dp1
  { fromX: 660, fromY: 98,  toX: 782, toY: 132, label: "2D",     idx: 12 },
  { fromX: 720, fromY: 98,  toX: 707, toY: 196, label: "1D",     idx: 13 },

  // a-bs → a-ps (with prefix knowledge)
  { fromX: 67,  fromY: 160, toX: 60,  toY: 196, label: "+Prefix",idx: 14 },

  // leaf connections — compact, row3→row4
  { fromX: 60,  fromY: 224, toX: 57,  toY: 258, idx: 15 },  // from ps area → mono
  { fromX: 193, fromY: 160, toX: 160, toY: 258, idx: 16 },  // bso → heap
  { fromX: 320, fromY: 160, toX: 255, toY: 258, idx: 17 },  // sw → hashmap
  { fromX: 438, fromY: 160, toX: 352, toY: 258, idx: 18 },  // tp → greedy
  { fromX: 512, fromY: 224, toX: 437, toY: 258, idx: 19 },  // bfs → backtrack
  { fromX: 600, fromY: 224, toX: 522, toY: 258, idx: 20 },  // dfs → trie
  { fromX: 650, fromY: 224, toX: 608, toY: 258, idx: 21 },  // dfs → bit
  { fromX: 782, fromY: 160, toX: 705, toY: 258, idx: 22 },  // dp2 → str dp
  { fromX: 782, fromY: 160, toX: 802, toY: 258, idx: 23 },  // dp2 → uf
];

/* animated dash offset */
function useAnimatedDash(count: number) {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    let frame = 0;
    const id = setInterval(() => {
      frame++;
      setOffset(-(frame % 20));
    }, 40);
    return () => clearInterval(id);
  }, []);
  return offset;
}

function FlowEdgeLine({ edge, active, dashOffset }: { edge: FEdge; active: boolean; dashOffset: number }) {
  const color = active ? "#f97316" : "#2a2a2a";
  return (
    <g>
      <line
  x1={edge.fromX}
  y1={edge.fromY}
  x2={edge.toX}
  y2={edge.toY}
        stroke={color}
        strokeWidth={active ? 2 : 1.2}
        strokeDasharray={active ? "5 3" : "none"}
        strokeDashoffset={active ? dashOffset : 0}
        markerEnd={active ? "url(#arrow-active)" : "url(#arrow-idle)"}
      />
      {edge.label && (
        <text
          x={(edge.fromX + edge.toX) / 2 + 3}
          y={(edge.fromY + edge.toY) / 2 - 4}
          fontSize={8} fill={active ? "#f97316" : "#444"} textAnchor="middle"
          style={{ fontFamily: "monospace" }}
        >
          {edge.label}
        </text>
      )}
    </g>
  );
}

function FlowNodeEl({ node, active, pulse, onClick }: { node: FNode; active: boolean; pulse: boolean; onClick: () => void }) {
  const isQ = node.type === "q";
  const isRoot = node.type === "root";
  const cx = node.x + node.w / 2;
  const cy = node.y + node.h / 2;

  if (isQ) {
    const pts = `${cx},${node.y} ${node.x + node.w},${cy} ${cx},${node.y + node.h} ${node.x},${cy}`;
    return (
      <g onClick={onClick} style={{ cursor: "pointer" }}>
        {pulse && <polygon points={pts} fill="none" stroke="#f97316" strokeWidth={6} opacity={0.18}
          style={{ animation: "fc-pulse 1.2s ease-in-out infinite" }} />}
        <polygon points={pts} fill={active ? "#1a0800" : "#111"} stroke={active ? "#f97316" : "#2a2a2a"} strokeWidth={active ? 2 : 1} />
        <text x={cx} y={cy + 4} textAnchor="middle" fill={active ? "#f97316" : "#999"} fontSize={9.5} fontFamily="monospace">
          {node.label}
        </text>
      </g>
    );
  }

  const fill = isRoot ? "#1a0800" : node.link ? "#0d1a0d" : "#111";
  const stroke = isRoot ? "#f97316" : active ? "#f97316" : node.link ? "#1a4a1a" : "#222";
  const textCol = isRoot ? "#f97316" : node.link ? "#4ade80" : "#666";

  return (
    <g onClick={node.link ? onClick : undefined} style={{ cursor: node.link ? "pointer" : "default" }}>
      {active && <rect x={node.x - 3} y={node.y - 3} width={node.w + 6} height={node.h + 6} rx={8} fill="none"
        stroke="#f97316" strokeWidth={4} opacity={0.2}
        style={{ animation: "fc-pulse 1s ease-in-out infinite" }} />}
      <rect x={node.x} y={node.y} width={node.w} height={node.h} rx={5}
        fill={fill} stroke={stroke} strokeWidth={isRoot ? 1.5 : 1} />
      <text x={cx} y={cy + 4} textAnchor="middle"
        fill={textCol} fontSize={isRoot ? 12 : 9.5} fontFamily="monospace" fontWeight={isRoot ? 700 : 400}>
        {node.label}
      </text>
    </g>
  );
}

export function StrategyClient() {
  const [open, setOpen] = useState<number | null>(null);
  const [selectedPattern, setSelectedPattern] = useState(PATTERNS[0]);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const dashOffset = useAnimatedDash(EDGES.length);
  const ordered = useMemo(() => [...PATTERNS].sort((a, b) => a.orderInRoadmap - b.orderInRoadmap).slice(0, 25), []);

  const activeNodeObj = NODES.find(n => n.id === activeNode) ?? null;

  // categories for grouping pattern sequence
  const phaseColors: Record<string, string> = {
    "Pointers": "#3b82f6",
    "Binary Search": "#8b5cf6",
    "Hashing": "#ec4899",
    "Stack": "#f59e0b",
    "Recursion": "#10b981",
    "Graphs": "#06b6d4",
    "Trees": "#06b6d4",
    "Heap": "#f97316",
    "Intervals": "#f97316",
    "DP": "#a855f7",
    "Greedy": "#84cc16",
    "Math/Bits": "#64748b",
    "Trie": "#14b8a6",
  };

  return (
    <div style={{ maxWidth: "100%", overflow: "hidden" }}>
      <style>{`
        @keyframes fc-pulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(1.05); }
        }
        @keyframes fc-glow {
          0%, 100% { filter: drop-shadow(0 0 3px #f9731640); }
          50% { filter: drop-shadow(0 0 8px #f9731680); }
        }
        .fc-root-glow { animation: fc-glow 2s ease-in-out infinite; }
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pattern-detail { animation: slide-in 0.18s ease; }
        @keyframes prog-fill {
          from { width: 0; }
        }
        .prog-bar { animation: prog-fill 0.6s ease forwards; }
      `}</style>

      {/* ── PAGE: Two-Column Grid ── */}
      <div className="grid gap-5" style={{ gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto" }}>

        {/* ── HERO spans full width ── */}
        <div style={{ gridColumn: "1 / -1" }} className="flex items-center justify-between">
          <div>
            <p className="label">Strategy guide</p>
            <h1 className="mt-1 text-xl font-semibold tracking-tight">FAANG Prep Operating System</h1>
            <p className="mt-1 text-sm text-secondary">The strategy layer between knowing patterns and clearing interviews.</p>
          </div>
          <div className="hidden sm:flex gap-2 flex-shrink-0">
            {["16 wks", "25 patterns", "160 probs", "1 system"].map(label => (
              <span key={label} className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-secondary">{label}</span>
            ))}
          </div>
        </div>

        {/* ── LEFT COLUMN: Accordion ── */}
        <div className="space-y-1.5">
          <p className="label mb-2">How top candidates prepared</p>
          {insights.map((item, index) => (
            <div key={item.title} className="card overflow-hidden">
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between px-4 py-3 text-left"
              >
                <span className="font-medium" style={{ fontSize: 13 }}>{item.title}</span>
                <span className="ml-3 flex-shrink-0 font-mono text-muted text-base leading-none">{open === index ? "−" : "+"}</span>
              </button>
              {open === index && (
                <ul className="border-t border-border space-y-2 px-4 pb-4 pt-3">
                  {item.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-2.5 text-xs text-secondary leading-relaxed">
                      <span className="mt-1.5 flex-shrink-0 h-1 w-1 rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* ── RIGHT COLUMN: Rounds + Mock Cards ── */}
        <div className="space-y-4">
          {/* Interview Rounds */}
          <div className="card p-4">
            <p className="label mb-3">Interview round breakdown</p>
            <div className="space-y-3">
              {rounds.map((row, i) => (
                <div key={row.round}>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-xs font-medium">{row.round}</span>
                    <span className="text-xs text-muted font-mono">{row.freq}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-elevated w-full overflow-hidden">
                    <div className="h-full rounded-full prog-bar" style={{ width: `${row.freq}%`, background: `hsl(${20 + i * 20}, 90%, 60%)` }} />
                  </div>
                  <p className="text-xs text-muted mt-0.5">{row.patterns}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mock Cards 2×2 */}
          <div>
            <p className="label mb-2">Mock interview platforms</p>
            <div className="grid grid-cols-2 gap-2">
              {mockCards.map(card => (
                <div key={card.name} className="card p-3 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold">{card.name}</span>
                    <span className="text-xs font-mono rounded-full px-2 py-0.5" style={{ background: card.badgeColor + "22", color: card.badgeColor }}>{card.badge}</span>
                  </div>
                  <ul className="space-y-1 flex-1">
                    {card.content.map((l, i) => <li key={i} className="text-xs text-secondary leading-snug">{l}</li>)}
                  </ul>
                  {card.link && <a href={`https://${card.link}`} target="_blank" rel="noreferrer" className="text-xs text-accent hover:underline">↗ {card.link}</a>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── PATTERN MASTERY SEQUENCE — full width ── */}
        <div style={{ gridColumn: "1 / -1" }} className="card p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="label">Pattern mastery sequence</p>
              <p className="text-xs text-muted">Click any pattern to understand the transition logic</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted">{selectedPattern.orderInRoadmap}/25</span>
              <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted font-mono">{selectedPattern.estimatedDaysToMaster}d</span>
            </div>
          </div>

          {/* Compact pattern grid — 5 columns × 5 rows */}
          <div className="grid gap-1.5 mb-4" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
            {ordered.map((pattern, i) => {
              const isSelected = selectedPattern.slug === pattern.slug;
              const color = phaseColors[pattern.category] || "#f97316";
              return (
                <button
                  key={pattern.slug}
                  onClick={() => setSelectedPattern(pattern)}
                  className="rounded-lg border text-left p-2.5 transition-all"
                  style={{
                    borderColor: isSelected ? color : "var(--bg-border)",
                    background: isSelected ? color + "15" : "var(--bg-surface)",
                    boxShadow: isSelected ? `0 0 0 1px ${color}40` : "none",
                  }}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="flex-shrink-0 flex items-center justify-center rounded text-xs font-mono font-semibold"
                      style={{ width: 18, height: 18, background: isSelected ? color : "var(--bg-elevated)", color: isSelected ? "#fff" : "var(--text-muted)", fontSize: 9 }}>
                      {i + 1}
                    </span>
                    <span className="h-1 w-1 rounded-full flex-shrink-0" style={{ background: color }} />
                  </div>
                  <p className="leading-tight" style={{ fontSize: 10.5, color: isSelected ? "var(--text-primary)" : "var(--text-secondary)", fontWeight: isSelected ? 600 : 400 }}>
                    {pattern.name}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          {patternReasons[selectedPattern.slug] && (
            <div className="pattern-detail rounded-lg border border-border bg-elevated p-3 grid grid-cols-2 gap-4">
              <div>
                <p className="label mb-1">Why this comes here</p>
                <p className="text-xs text-secondary leading-relaxed">{patternReasons[selectedPattern.slug].why}</p>
              </div>
              <div>
                <p className="label mb-1">What you unlock next</p>
                <p className="text-xs text-secondary leading-relaxed">{patternReasons[selectedPattern.slug].unlocks}</p>
              </div>
            </div>
          )}
        </div>

        {/* ── FLOWCHART — full width, compact ── */}
        <div style={{ gridColumn: "1 / -1" }} className="card p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="label">Mental models decision tree</p>
              <p className="text-xs text-muted">Click any node to highlight its path and see the pattern</p>
            </div>
            {activeNodeObj && (
              <div className="flex items-center gap-2">
                {activeNodeObj.link ? (
                  <a href={`/patterns/${activeNodeObj.link}`} className="text-xs text-accent border border-accent/30 rounded px-2 py-1 hover:bg-accent/10 transition-colors">
                    → {activeNodeObj.label}
                  </a>
                ) : (
                  <span className="text-xs text-muted border border-border rounded px-2 py-1">{activeNodeObj.label}</span>
                )}
                <button onClick={() => setActiveNode(null)} className="text-xs text-muted hover:text-primary">✕</button>
              </div>
            )}
          </div>

          <div className="w-full overflow-hidden rounded-lg" style={{ background: "#080808", border: "1px solid #1a1a1a" }}>
            <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="w-full" style={{ height: "auto", maxHeight: 380 }}>
              <defs>
                <marker id="arrow-idle" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L6,3 z" fill="#2a2a2a" />
                </marker>
                <marker id="arrow-active" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L6,3 z" fill="#f97316" />
                </marker>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              {/* Grid lines */}
              {[74, 140, 206, 272, 334].map(y => (
                <line key={y} x1={0} y1={y} x2={VB_W} y2={y} stroke="#111" strokeWidth={1} />
              ))}

              {/* Edges */}
              {EDGES.map((edge) => (
                <FlowEdgeLine key={edge.idx} edge={edge} active={activeNode !== null} dashOffset={dashOffset} />
              ))}

              {/* Root glow */}
              <g className="fc-root-glow" filter="url(#glow)">
                <FlowNodeEl node={NODES[0]} active={activeNode === NODES[0].id} pulse={false} onClick={() => setActiveNode(activeNode === NODES[0].id ? null : NODES[0].id)} />
              </g>

              {/* All other nodes */}
              {NODES.slice(1).map(node => (
                <FlowNodeEl
                  key={node.id}
                  node={node}
                  active={activeNode === node.id}
                  pulse={activeNode === node.id}
                  onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                />
              ))}

              {/* Row labels */}
              {[
                { y: 57, label: "Signal type" },
                { y: 123, label: "Sub-decision" },
                { y: 188, label: "Pattern" },
                { y: 255, label: "Complexity" },
                { y: 318, label: "Pattern" },
              ].map(({ y, label }) => (
                <text key={y} x={VB_W - 4} y={y} textAnchor="end" fontSize={8} fill="#333" fontFamily="monospace">{label}</text>
              ))}
            </svg>
          </div>

          {/* Legend */}
          <div className="mt-3 flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-3 rounded-sm" style={{ background: "#1a0800", border: "1px solid #f97316" }} />
              <span className="text-xs text-muted">Entry / Answer pattern</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-3" style={{ background: "#111", border: "1px solid #2a2a2a", clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
              <span className="text-xs text-muted">Decision node (click to trace)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-3 rounded-sm" style={{ background: "#0d1a0d", border: "1px solid #1a4a1a" }} />
              <span className="text-xs text-muted">Pattern → go to page</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
