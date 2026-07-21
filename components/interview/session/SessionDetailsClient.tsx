"use client";

import React, { useEffect, useState } from "react";
import { useInterviewSessionStore } from "@/store/useInterviewSessionStore";
import { useExecutionStore } from "@/store/useExecutionStore";
import { EmptySessionState } from "./EmptySessionState";
import { PageSkeleton } from "@/components/ui/PageSkeleton";

// Player UI components
import { InterviewHeader } from "../player/InterviewHeader";
import { QuestionViewer } from "../player/QuestionViewer";
import { QuestionNavigator } from "../player/QuestionNavigator";
import { InterviewSidebar } from "../player/InterviewSidebar";
import { EditorControls } from "../editor/EditorControls";
import { InterviewFooter } from "../player/InterviewFooter";
import { Console } from "../console/Console";
import { OAMcqSection } from "../OAMcqSection";
import { Code, HelpCircle } from "lucide-react";

interface SessionDetailsClientProps {
  id: string;
}

export function SessionDetailsClient({ id }: SessionDetailsClientProps) {
  const { getSessionById } = useInterviewSessionStore();
  const { isConsoleOpen, setConsoleOpen } = useExecutionStore();
  const [mounted, setMounted] = useState(false);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [activeSection, setActiveSection] = useState<"coding" | "mcq">("coding");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <PageSkeleton />;
  }

  const session = getSessionById(id);

  if (!session) {
    return <EmptySessionState />;
  }

  const activeQuestion = session.assignedQuestions[activeQuestionIndex];

  return (
    <div className="flex flex-col min-h-screen -mx-4 -mt-20 md:-mx-6 lg:-mx-8">
      {/* Sticky Header */}
      <InterviewHeader session={session} activeQuestionIndex={activeQuestionIndex} />

      {/* OA Section Navigation Bar */}
      <div className="bg-surface/90 border-b border-border px-6 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveSection("coding")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-card text-xs font-semibold transition-all ${
                activeSection === "coding"
                  ? "bg-accent text-base-dark shadow-sm"
                  : "bg-base text-secondary hover:text-primary border border-border"
              }`}
            >
              <Code size={14} />
              Section 1: Coding Problems ({session.assignedQuestions.length})
            </button>

            <button
              onClick={() => setActiveSection("mcq")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-card text-xs font-semibold transition-all ${
                activeSection === "mcq"
                  ? "bg-accent text-base-dark shadow-sm"
                  : "bg-base text-secondary hover:text-primary border border-border"
              }`}
            >
              <HelpCircle size={14} />
              Section 2: Aptitude & Technical MCQs (5)
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-2xs text-muted font-mono">
            <span>Passmark Threshold: 75% for HR Callback</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      {activeSection === "coding" ? (
        <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-6 grid gap-6 md:grid-cols-12 md:max-h-[calc(100vh-180px)] md:overflow-hidden">
          {/* Left Panel: Scrollable Column (Span 7) */}
          <div className="md:col-span-7 space-y-6 md:overflow-y-auto md:pr-2">
            {activeQuestion ? (
              <QuestionViewer question={activeQuestion} />
            ) : (
              <div className="card p-6 bg-surface text-center text-secondary">
                No active question is assigned to this round.
              </div>
            )}
            
            <QuestionNavigator
              questions={session.assignedQuestions}
              activeIndex={activeQuestionIndex}
              currentRound={session.currentRound}
              onSelectQuestion={setActiveQuestionIndex}
            />
            
            <InterviewSidebar
              session={session}
              activeQuestionIndex={activeQuestionIndex}
            />
          </div>

          {/* Right Panel: Fixed Column (Span 5) */}
          <div className="md:col-span-5 flex flex-col md:h-full md:overflow-y-auto">
            <EditorControls initialLanguage={session.language} />
            <Console isOpen={isConsoleOpen} onClose={() => setConsoleOpen(false)} />
          </div>
        </main>
      ) : (
        <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-6">
          <OAMcqSection />
        </main>
      )}

      {/* Sticky/Fixed bottom footer */}
      <InterviewFooter
        activeQuestionIndex={activeQuestionIndex}
        onSelectQuestion={setActiveQuestionIndex}
        totalQuestions={session.assignedQuestions.length}
      />
    </div>
  );
}


