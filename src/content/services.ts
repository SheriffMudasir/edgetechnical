/** The three pillars ("The Digital Campus") and secondary services. */

export const pillars = [
  {
    key: "front-gate",
    index: 1,
    name: "The Front Gate",
    service: "School websites & portals",
    flagship: true,
    href: "/schools",
    summary: "Your school's first impression, admissions office and notice board, open 24/7.",
    offerings: ["Beautiful school websites", "Online admissions", "Result checker", "Fee payments & parent portal"],
    timeline: "2–6 weeks",
  },
  {
    key: "engine-room",
    index: 2,
    name: "The Engine Room",
    service: "School management software",
    flagship: false,
    href: "/school-software",
    summary: "The software that runs the school: records, results, report cards, attendance and fees.",
    offerings: ["Results & report-card PDFs", "Attendance", "Teacher & parent logins", "Offline-first mobile app"],
    timeline: "4–10 weeks",
  },
  {
    key: "study-room",
    index: 3,
    name: "The Study Room",
    service: "AI for learning",
    flagship: false,
    href: "/ai",
    summary: "AI that helps students learn and teachers teach, from StudyWise AI to custom tools.",
    offerings: ["StudyWise AI exam prep", "AI tutors & CBT practice", "AI for teachers", "Website AI assistant"],
    timeline: "2–12 weeks",
  },
] as const;

export type ServiceRow = {
  title: string;
  description: string;
  included: string[];
  timeline: string;
  href?: string;
};

export const pillarServices: ServiceRow[] = [
  {
    title: "School websites & portals",
    description: "Fast, beautiful school websites with online admissions, result checkers, fee payments, news and parent portals.",
    included: ["Design & copywriting help", "Admissions, results & payments", "CMS + staff training", "Hosting, domain & SSL"],
    timeline: "2–6 weeks",
    href: "/schools",
  },
  {
    title: "School management software",
    description: "Student records, results entry, report-card PDFs, attendance, parent logins and an offline-first app, connected to your website.",
    included: ["Data migration from Excel", "Teacher & parent roles", "Report-card templates", "Offline mobile app"],
    timeline: "4–10 weeks",
    href: "/school-software",
  },
  {
    title: "AI for learning",
    description: "StudyWise AI for your students, AI tools for teachers, website AI assistants and custom AI for education organisations.",
    included: ["Discovery workshop", "Prototype & pilot", "Responsible-AI review", "Ongoing evaluation"],
    timeline: "2–12 weeks",
    href: "/ai",
  },
];

export const otherServices: ServiceRow[] = [
  {
    title: "Web applications",
    description: "Custom web apps and dashboards for businesses and organisations, built on the same stack we use for schools.",
    included: ["Product discovery", "UI/UX design", "Build & testing", "Hosting & support"],
    timeline: "4–12 weeks",
  },
  {
    title: "Business websites",
    description: "Fast, well-designed marketing websites for companies that want to look as good online as they are in person.",
    included: ["Design & copy", "CMS", "SEO basics", "Analytics"],
    timeline: "2–4 weeks",
  },
  {
    title: "Mobile apps",
    description: "Android and iOS apps, including offline-first apps that work in low-connectivity areas.",
    included: ["Cross-platform build", "Offline sync", "Store submission", "Analytics"],
    timeline: "6–14 weeks",
  },
  {
    title: "UI/UX design",
    description: "Interface design, design systems and prototypes for products that need to be clear and usable.",
    included: ["Research & flows", "Design system", "Clickable prototypes", "Developer handover"],
    timeline: "2–6 weeks",
  },
  {
    title: "Hosting & maintenance",
    description: "Managed hosting, backups, security updates, uptime monitoring and small changes every month.",
    included: ["Managed hosting", "Daily backups", "Uptime monitoring", "Monthly change hours"],
    timeline: "Ongoing",
  },
];
