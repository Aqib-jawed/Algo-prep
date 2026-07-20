import React from "react";
import type { Metadata } from "next";
import { SessionDetailsClient } from "@/components/interview/session/SessionDetailsClient";

export const metadata: Metadata = {
  title: "Mock Interview Workspace | Algo Prep",
  description: "View mock interview session configurations, parameters, and workspace setup status."
};

interface PageProps {
  params: {
    id: string;
  };
}

export default function SessionPage({ params }: PageProps) {
  return <SessionDetailsClient id={params.id} />;
}
