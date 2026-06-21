export type DataStructure =
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

export type PointerState = {
  name: string;
  index: number;
  color: string;
};

export type ArrayCell = {
  value: string | number;
  highlight?: "active" | "match" | "window" | "visited" | "result" | "none";
  label?: string;
};

export type TreeNode = {
  id: string;
  value: string | number;
  left?: string;
  right?: string;
  highlight?: "active" | "visited" | "result" | "none";
};

export type StackItem = {
  value: string | number;
  highlight?: boolean;
};

export type HashmapEntry = {
  key: string;
  value: string | number;
  highlight?: boolean;
};

export type VisualisationStep = {
  stepNumber: number;
  title: string;
  explanation: string;
  code?: string;
  dataStructure: DataStructure;
  array?: ArrayCell[];
  pointers?: PointerState[];
  stack?: StackItem[];
  hashmap?: HashmapEntry[];
  treeNodes?: TreeNode[];
  windowStart?: number;
  windowEnd?: number;
  result?: string;
};

export type VisualisationResponse = {
  problemTitle: string;
  pattern: string;
  patternSlug: string;
  totalSteps: number;
  steps: VisualisationStep[];
  finalAnswer: string;
};
