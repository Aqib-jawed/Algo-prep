import type { Metadata } from "next";
import { RoadmapClient } from "@/components/roadmap/RoadmapClient";

export const metadata: Metadata = {
  title: "16-Week Roadmap | Algo Prep",
  description: "A structured 16-week DSA interview roadmap with daily plans, dependency graph, and activity heatmap."
};

export default function RoadmapPage() {
  return <RoadmapClient />;
}
