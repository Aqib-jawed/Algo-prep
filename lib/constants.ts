import {
  BarChart3,
  BookOpen,
  Brain,
  CalendarDays,
  GitBranch,
  Home,
  ListChecks,
  Target
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Dashboard", icon: Home },
  { href: "/roadmap", label: "Roadmap", icon: CalendarDays },
  { href: "/patterns", label: "Patterns", icon: GitBranch },
  { href: "/problems", label: "Problems", icon: ListChecks },
  { href: "/strategy", label: "Strategy", icon: Brain },
  { href: "/interview", label: "Interview", icon: Target },
  { href: "/progress", label: "Progress", icon: BarChart3 }
];

export const patternCategoryColors: Record<string, string> = {
  "Arrays/Hash": "#3b82f6",
  Pointers: "#8b5cf6",
  "Trees/Graphs": "#10b981",
  DP: "#f59e0b",
  Greedy: "#ec4899",
  "Stack/Queue": "#06b6d4",
  "Binary Search": "#6366f1",
  "Math/Bits": "#84cc16"
};

export const companyNames = ["Amazon", "Google", "Meta", "Microsoft", "Apple", "Netflix"];

export const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3 } as const;
