/**
 * Case studies. Bodies live in content/work/<slug>.mdx.
 * Concept projects are clearly labelled; real projects set `concept: false`.
 * TODO(owner): confirm Al-Mu'minun International Academy is happy to be featured publicly, and add outcomes
 * (e.g. online applications received) once they agree to share them.
 */

export type CaseStudy = {
  slug: string;
  title: string;
  concept: boolean;
  pillar: "Front Gate" | "Engine Room" | "Study Room";
  kind: string;
  summary: string;
  year: string;
  location?: string;
  liveUrl?: string;
  cover: "greenfield" | "studywise" | "almuminun";
  modules: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "al-muminun-international-academy",
    title: "Al-Mu’minun International Academy",
    concept: false,
    pillar: "Engine Room",
    kind: "School website & management system",
    summary:
      "A bilingual school website with online admissions and application tracking, connected to a school management system with staff and parent portals.",
    year: "2026",
    location: "Suleja, Niger State",
    liveUrl: "https://al-muminun-school-management-system.vercel.app",
    cover: "almuminun",
    modules: [
      "School website (English & Arabic)",
      "Online admissions",
      "Application status tracker",
      "Staff & admin portal",
      "Parent & guardian portal",
      "Report cards, grades & attendance",
    ],
  },
  {
    slug: "studywise-ai",
    title: "StudyWise AI",
    concept: false,
    pillar: "Study Room",
    kind: "Our own product · AI exam prep",
    summary:
      "A gamified AI exam-prep platform for WAEC, NECO and JAMB, with past questions, AI feedback and a crew of six tutor characters.",
    year: "2026",
    liveUrl: "https://www.studywiseai.org",
    cover: "studywise",
    modules: ["WAEC, NECO & JAMB practice", "AI-powered feedback", "Tutor characters", "Points, badges & leaderboards", "Progress tracking"],
  },
  {
    slug: "greenfield-academy",
    title: "Greenfield Academy",
    concept: true,
    pillar: "Front Gate",
    kind: "School website & portal",
    summary: "A warm, fast website for a nursery-to-secondary school, with online admissions, a result checker and fee payments.",
    year: "2026",
    cover: "greenfield",
    modules: ["Online admissions", "Result checker", "Fee payments", "News & events", "Gallery"],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
