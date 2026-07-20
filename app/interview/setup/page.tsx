import type { Metadata } from "next";
import React from "react";
import { SetupWizard } from "@/components/interview/setup/SetupWizard";

export const metadata: Metadata = {
  title: "Setup Mock Interview | Algo Prep",
  description: "Configure target company tier, selection, experience level, and programming language."
};

export default function SetupPage() {
  return <SetupWizard />;
}
