import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { requireFaculty } from "@/lib/auth";
import { FacultyDashboardClient } from "@/components/faculty/FacultyDashboardClient";

export const metadata: Metadata = {
  title: "Faculty Dashboard | Algo Prep",
  description: "Cohort-wide DSA readiness for the placement cell."
};

export default async function FacultyPage() {
  const faculty = await requireFaculty();
  if (!faculty) redirect("/");

  return <FacultyDashboardClient />;
}