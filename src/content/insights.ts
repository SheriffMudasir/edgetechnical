/** Blog index. Post bodies live in content/insights/<slug>.mdx. */

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readingTime: string;
  tag: string;
};

export const posts: Post[] = [
  {
    slug: "school-website-essentials-nigeria-2026",
    title: "7 things every Nigerian school website needs in 2026",
    description:
      "From online admissions to a result checker that works on cheap phones: the seven features that turn a school website into your best admissions officer.",
    date: "2026-10-06",
    readingTime: "6 min read",
    tag: "School websites",
  },
  {
    slug: "online-admissions-save-time",
    title: "How online admissions save your school time (and win more families)",
    description:
      "Paper forms at the gate cost your school applicants and staff hours. Here's what changes when admissions move online, step by step.",
    date: "2026-10-20",
    readingTime: "5 min read",
    tag: "Admissions",
  },
  {
    slug: "ai-exam-prep-offline-nigeria",
    title: "How AI can help Nigerian students prepare for exams, even offline",
    description:
      "AI tutors don't need a fast connection, and they shouldn't just give answers. What good AI exam prep looks like for Nigerian students.",
    date: "2026-11-03",
    readingTime: "6 min read",
    tag: "AI for learning",
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
