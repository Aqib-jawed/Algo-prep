import type { Metadata } from "next";
import { InterviewClient } from "@/components/interview/InterviewClient";

export const metadata: Metadata = {
  title: "Interview Analysis | Algo Prep",
  description: "Company-specific interview strategy, pattern frequency, repeated questions, and target lists."
};

export default function InterviewPage() {
  return <InterviewClient />;
}
