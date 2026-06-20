import type { Metadata } from "next";
import { DashboardClient } from "@/components/dashboard/DashboardClient";

export const metadata: Metadata = {
  title: "Dashboard | Algo Prep",
  description: "Personal DSA interview prep dashboard with recommendations, progress, pattern radar, and recent solves."
};

export default function HomePage() {
  return <DashboardClient />;
}
