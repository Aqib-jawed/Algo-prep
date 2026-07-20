export type BehavioralQuestion = {
  id: string;
  category: string;
  question: string;
  tip: string;
};

export const BEHAVIORAL_QUESTIONS: BehavioralQuestion[] = [
  {
    id: "b01",
    category: "Leadership & Initiative",
    question: "Tell me about a time you took ownership of something outside your defined role.",
    tip: "Name the gap you noticed before anyone assigned it to you."
  },
  {
    id: "b02",
    category: "Leadership & Initiative",
    question: "Describe a project where you had to convince others to follow your approach.",
    tip: "Focus on the evidence you used, not just the outcome."
  },
  {
    id: "b03",
    category: "Leadership & Initiative",
    question: "Tell me about a time you mentored or helped a struggling teammate.",
    tip: "Be specific about what you actually did, not just that you \"helped.\""
  },
  {
    id: "b04",
    category: "Conflict & Disagreement",
    question: "Tell me about a time you disagreed with a technical decision made by someone senior to you.",
    tip: "Show you pushed back with evidence, and how you handled losing (or winning) the argument."
  },
  {
    id: "b05",
    category: "Conflict & Disagreement",
    question: "Describe a conflict with a teammate and how you resolved it.",
    tip: "Interviewers want to see de-escalation skill, not who was \"right.\""
  },
  {
    id: "b06",
    category: "Conflict & Disagreement",
    question: "Tell me about a time you had to deliver critical feedback to someone.",
    tip: "Focus on how you framed it, not just what you said."
  },
  {
    id: "b07",
    category: "Failure & Mistakes",
    question: "Tell me about a time you shipped a bug that affected users or a grade.",
    tip: "Own the mistake fully before explaining the fix — don't bury the failure."
  },
  {
    id: "b08",
    category: "Failure & Mistakes",
    question: "Describe a project that failed or didn't go as planned.",
    tip: "The lesson learned matters more than the failure itself."
  },
  {
    id: "b09",
    category: "Failure & Mistakes",
    question: "Tell me about a time you missed a deadline.",
    tip: "Show what you changed afterward, so it reads as growth, not an excuse."
  },
  {
    id: "b10",
    category: "Teamwork & Collaboration",
    question: "Tell me about a time you worked with someone whose working style was very different from yours.",
    tip: "Show adaptability, not just tolerance."
  },
  {
    id: "b11",
    category: "Teamwork & Collaboration",
    question: "Describe your role in the most successful team project you've been part of.",
    tip: "Say \"I\" for your specific contribution, not just \"we.\""
  },
  {
    id: "b12",
    category: "Teamwork & Collaboration",
    question: "Tell me about a time you had to coordinate with people who weren't reporting to you.",
    tip: "Influence-without-authority is exactly what this question is testing."
  },
  {
    id: "b13",
    category: "Ambiguity & Problem-Solving",
    question: "Tell me about a time you had to start a project with unclear or incomplete requirements.",
    tip: "Show how you narrowed the ambiguity down, not that you waited for clarity."
  },
  {
    id: "b14",
    category: "Ambiguity & Problem-Solving",
    question: "Describe a time you had to learn a new technology quickly to finish something.",
    tip: "Name the specific resource or method you used to get up to speed fast."
  },
  {
    id: "b15",
    category: "Ambiguity & Problem-Solving",
    question: "Tell me about the hardest technical decision you've made with limited information.",
    tip: "Walk through your reasoning, not just the final choice."
  },
  {
    id: "b16",
    category: "Ownership & Impact",
    question: "Tell me about the project you're most proud of and why.",
    tip: "Quantify the impact if you possibly can — numbers stick with interviewers."
  },
  {
    id: "b17",
    category: "Ownership & Impact",
    question: "Describe a time you went beyond what was asked of you.",
    tip: "Frame it as initiative, not unpaid overtime."
  },
  {
    id: "b18",
    category: "Ownership & Impact",
    question: "Why do you want to work at this company specifically?",
    tip: "Generic answers are the #1 way this one goes wrong — reference something concrete about them."
  }
];

export const BEHAVIORAL_CATEGORIES = Array.from(new Set(BEHAVIORAL_QUESTIONS.map((q) => q.category)));