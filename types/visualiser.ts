// types/visualiser.ts

export interface ArrayCell {
  value: string | number;
  highlight: "active" | "window" | "match" | "result" | "visited" | "none";
  label?: string;
}

export interface Pointer {
  name: string;
  index: number;
  color: string;
}

export interface StackItem {
  value: string | number;
  highlight: boolean;
}

export interface HashmapEntry {
  key: string;
  value: string | number;
  highlight: boolean;
}

export interface TreeNode {
  id: string;
  value: string | number;
  left?: string;
  right?: string;
  highlight: "active" | "match" | "result" | "visited" | "none";
}

export interface VisualisationVariable {
  name: string;
  value: string | number;
}

export interface VisualisationComparison {
  left: string;
  right: string;
  operator: string;
  computed: string;
  against: string;
  outcome: string;
}

export type DataStructureType =
  | "array"
  | "two-pointer"
  | "sliding-window"
  | "tree"
  | "graph"
  | "stack"
  | "queue"
  | "hashmap"
  | "linked-list"
  | "matrix";

export interface VisualisationStep {
  stepNumber: number;
  title: string;
  explanation: string;
  code?: string;
  dataStructure: DataStructureType;
  array?: ArrayCell[];
  pointers?: Pointer[];
  stack?: StackItem[];
  hashmap?: HashmapEntry[];
  treeNodes?: TreeNode[];
  windowStart?: number;
  windowEnd?: number;
  variables?: VisualisationVariable[];
  comparison?: VisualisationComparison;
  result?: string;
}

// --- Trace table: the "every iteration, every variable" view ---
export interface TraceTableRow {
  iteration: number;
  values: Record<string, string | number>; // keyed by column name
  why: string; // value-grounded reasoning for this exact row
  relatedStep: number; // stepNumber this row corresponds to
}

export interface TraceTable {
  columns: string[]; // e.g. ["i", "left", "right", "sum", "Decision"]
  rows: TraceTableRow[];
}

// --- Code walkthrough: ties the optimal solution back to the trace ---
export interface CodeWalkthroughLine {
  line: string; // the actual code text for this line
  explanation: string; // why this line exists / what it's doing
  relatedSteps?: number[]; // stepNumbers where this line is "live"
}

export interface ComplexityInfo {
  time: string;
  space: string;
  why: string; // why this is the optimal complexity for this problem
}

export interface VisualisationResponse {
  problemTitle: string;
  pattern: string;
  patternSlug: string;
  totalSteps: number;
  steps: VisualisationStep[];
  traceTable: TraceTable;
  codeWalkthrough: {
    language: string;
    lines: CodeWalkthroughLine[];
  };
  optimalCode: string;
  complexity: ComplexityInfo;
  finalAnswer: string;
}