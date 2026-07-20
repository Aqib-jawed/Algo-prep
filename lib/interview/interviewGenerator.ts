import { InterviewSession, InterviewQuestion } from "@/types/interview";
import { PROBLEMS } from "@/data/problems";
import {
  getCompanyProfile,
  buildDifficultyPlan,
  selectProblems,
  removeDuplicateProblems,
  assignQuestionOrder,
} from "./selectionStrategy";

/**
 * Pure orchestration function for generating interview questions deterministically.
 * Business-logic only (no react, no zustand dependencies).
 */
export function generateInterviewQuestions(
  session: Omit<InterviewSession, "assignedQuestions" | "totalQuestions" | "totalRounds">
): InterviewQuestion[] {
  // 1. Fetch company profile matching selection
  const profile = getCompanyProfile(session.company.id);

  if (!profile) {
    // Graceful fallback profile strategy if no profile config is found
    const defaultRounds = session.company.defaultRounds || 3;
    const defaultPlan = Array(defaultRounds).fill("Medium");
    const fallbackProblems = PROBLEMS.slice(0, defaultRounds);
    return assignQuestionOrder(fallbackProblems, defaultPlan);
  }

  // 2. Build target difficulty plan depending on experience level
  const difficultyPlan = buildDifficultyPlan(profile, session.experience);

  // 3. Select matching problems based on company, tier rules, difficulty, and preferred patterns
  let selectedProblems = selectProblems(difficultyPlan, profile, PROBLEMS, session.company.name);

  // 4. De-duplicate problems
  selectedProblems = removeDuplicateProblems(selectedProblems);

  // 5. Transform problems into typed InterviewQuestion items with round assignment
  return assignQuestionOrder(selectedProblems, difficultyPlan);
}
