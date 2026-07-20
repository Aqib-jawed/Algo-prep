import { ExperienceLevel } from "@/types/interview";

export interface ExperienceItem {
  id: ExperienceLevel;
  label: string;
  description: string;
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "fresher",
    label: "Fresher",
    description: "Ideal for entry-level university graduates and junior engineers.",
  },
  {
    id: "1-2",
    label: "1-2 Years",
    description: "Geared towards early career software professionals with some commercial coding experience.",
  },
  {
    id: "3-5",
    label: "3-5 Years",
    description: "Designed for mid-level or senior candidates showing deep system and algorithmic maturity.",
  },
];
