/**
 * StudyWise AI — our own product.
 * Live at https://www.studywiseai.org (free to start).
 * TODO(owner): confirm which StudyWise stats to show publicly (user count, revenue), add app-store links if/when
 * mobile apps ship, and add real screenshots and the StudyWise logo.
 */

export const studywise = {
  name: "StudyWise AI",
  url: "https://www.studywiseai.org",
  signupUrl: "https://www.studywiseai.org/auth/signup",
  exams: ["JAMB (UTME)", "WAEC (SSCE)", "NECO (SSCE)"],
  oneLiner: "An AI exam-prep tutor for WAEC, NECO and JAMB, built to keep working for students anywhere in Nigeria.",
  pitch:
    "StudyWise AI is our own product: a gamified exam-prep platform for WAEC, NECO and JAMB. Students practise past questions, get AI feedback on their weak areas, and learn with a crew of tutor characters. It's free to start, and built for the networks and phones Nigerian students actually have.",
  features: [
    {
      key: "offline",
      title: "Offline-first, on-device AI",
      body: "Lessons, practice questions and the AI tutor run on the phone itself. No data, no problem: progress syncs quietly when a connection returns.",
    },
    {
      key: "socratic",
      title: "A Socratic tutor that teaches rather than tells",
      body: "Instead of handing over answers, StudyWise asks the next good question, so students reason their way to the answer and remember it.",
    },
    {
      key: "personas",
      title: "A crew of six tutors",
      body: "Ada the tech guide, Aisha the creative, Baba the wise mentor, Ijeoma the calm scholar, Tunde the motivator and Zino the gamer. Students learn with the personality that suits them.",
    },
    {
      key: "exams",
      title: "WAEC, NECO and JAMB, with past questions",
      body: "Tailored practice modes and an extensive bank of past questions with detailed solutions and explanations.",
    },
    {
      key: "gamified",
      title: "Gamified, with progress you can see",
      body: "Points, badges and weekly leaderboards keep students motivated, while progress tracking shows strengths, weak areas and how ready they are.",
    },
    {
      key: "points",
      title: "AI Points, paid via Paystack",
      body: "No forced subscriptions. Students (or parents) top up AI Points when they need more tutoring, paid securely through Paystack.",
    },
  ],
  howItWorks: [
    { title: "Sign up free", body: "Create an account at studywiseai.org and pick your exam: JAMB, WAEC or NECO." },
    { title: "Practise and ask", body: "Work through past questions and practice modes, with a tutor that guides you to the answer." },
    { title: "Track and climb", body: "See your weak areas, earn points and badges, and climb the weekly leaderboard." },
  ],
  everywhere: [
    { title: "Low connectivity", body: "Designed for one bar of signal, or none." },
    { title: "Affordable phones", body: "Tuned to run on the budget Android phones students actually own." },
    { title: "Light on data", body: "Built to stay usable on slow, expensive mobile data." },
  ],
  pricingNote:
    "StudyWise uses AI Points: top up small amounts when you need more tutoring, paid via Paystack. Practice questions and offline study are always available.",
  // TODO(owner): confirm pricing to display (points bundles and naira prices)
  pricingConfirmed: false,
  // TODO(owner): add app-store links if/when mobile apps ship
  links: {
    playStore: null as string | null,
    appStore: null as string | null,
    web: "https://www.studywiseai.org/auth/signup" as string | null,
  },
  // TODO(owner): confirm public stats, then set showStats to true
  showStats: false,
  stats: [
    { value: 0, suffix: "+", label: "Students" },
    { value: 0, suffix: "+", label: "Questions answered" },
    { value: 0, suffix: "", label: "States reached" },
  ],
  faq: [
    {
      q: "Is StudyWise free?",
      a: "Yes, it's free to get started at studywiseai.org. AI Points top up extra AI tutoring when you need more.",
    },
    {
      q: "Does StudyWise really work without internet?",
      a: "StudyWise is designed offline-first, with on-device AI so students in low-connectivity areas can keep studying. You need a connection to sign up, sync progress and top up AI Points.",
    },
    {
      q: "Will the AI just give me the answers?",
      a: "No, on purpose. StudyWise is a Socratic tutor: it asks guiding questions and gives hints so you work the answer out yourself. That's how it sticks on exam day.",
    },
    {
      q: "Which exams does it cover?",
      a: "JAMB (UTME), WAEC (SSCE) and NECO (SSCE), with practice modes and past questions for each.",
    },
    {
      q: "How do AI Points work?",
      a: "AI Points pay for tutoring conversations. You top up when you need more, paid securely via Paystack. There's no forced monthly subscription.",
    },
    {
      q: "Can my school get StudyWise for all our students?",
      a: "Yes. We partner with schools to give whole classes access. Talk to us and we'll set it up for your students.",
    },
  ],
};

/** Scripted demo conversation for the phone mockup. */
export const tutorScript: { from: "student" | "tutor"; text: string }[] = [
  { from: "student", text: "Why does a stone fall faster than a feather?" },
  { from: "tutor", text: "Good question. What do you think would happen if we dropped both in a tube with all the air pumped out?" },
  { from: "student", text: "Hmm… they'd land at the same time?" },
  { from: "tutor", text: "Exactly. So what's slowing the feather down here?" },
  { from: "student", text: "Air resistance!" },
  { from: "tutor", text: "You got there yourself. Ready for an exam-style question on it?" },
];
