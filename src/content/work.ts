/**
 * Case studies. Bodies live in content/work/<slug>.mdx.
 * Concept projects are clearly labelled until real client work is confirmed.
 * TODO(owner): if a real client (e.g. a school we've built a management system and website for) agrees to be
 * featured, replace a concept with it and set `concept: false`.
 */

export type CaseStudy = {
  slug: string;
  title: string;
  concept: boolean;
  pillar: "Front Gate" | "Engine Room" | "Study Room";
  kind: string;
  summary: string;
  year: string;
  cover: "greenfield" | "crestview" | "studywise" | "report";
  modules: string[];
};

export const caseStudies: CaseStudy[] = [
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
  {
    slug: "studywise-ai",
    title: "StudyWise AI",
    concept: false,
    pillar: "Study Room",
    kind: "Our own product · AI exam prep",
    summary: "An offline-first AI exam-prep app with on-device AI and Socratic, multi-persona tutors for Nigerian students.",
    year: "2026",
    cover: "studywise",
    modules: ["On-device AI", "Socratic tutor", "Exam practice", "AI Points via Paystack", "Offline sync"],
  },
  {
    slug: "crestview-college",
    title: "Crestview College",
    concept: true,
    pillar: "Engine Room",
    kind: "School management system",
    summary: "Results entry, report-card PDFs, attendance and parent logins for a secondary school, with an offline app for teachers.",
    year: "2026",
    cover: "report",
    modules: ["Results entry", "Report-card PDFs", "Attendance", "Parent logins", "Offline teacher app"],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
