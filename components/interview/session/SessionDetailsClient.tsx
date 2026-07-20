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

interface SessionDetailsClientProps {
  id: string;
}

export function SessionDetailsClient({ id }: SessionDetailsClientProps) {
  const { getSessionById } = useInterviewSessionStore();
  const { isConsoleOpen, setConsoleOpen } = useExecutionStore();
  const [mounted, setMounted] = useState(false);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

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

      {/* Main Split Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-6 grid gap-6 md:grid-cols-12 md:max-h-[calc(100vh-160px)] md:overflow-hidden">
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

      {/* Sticky/Fixed bottom footer */}
      <InterviewFooter />
    </div>
  );
}
