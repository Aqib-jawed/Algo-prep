import type { Metadata } from "next";
import { auth } from "@/auth";
import { DashboardClient } from "@/components/dashboard/DashboardClient";
import { LandingPage } from "@/components/dashboard/LandingPage";

export const metadata: Metadata = {
  title: "Dashboard | Algo Prep",
  description: "Personal DSA interview prep dashboard with recommendations, progress, pattern radar, and recent solves."
};

export default async function HomePage() {
  const session = await auth();
  
  if (session) {
    return <DashboardClient />;
  }

  return <LandingPage />;
}
