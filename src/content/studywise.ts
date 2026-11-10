/**
 * StudyWise AI — our own product.
 * TODO(owner): confirm which StudyWise stats to show publicly (user count, revenue), app store / web links,
 * screenshots, and its logo.
 */

export const studywise = {
  name: "StudyWise AI",
  oneLiner: "An AI exam-prep tutor that works offline, on-device, for students anywhere in Nigeria.",
  pitch:
    "StudyWise AI is our own product: an exam-prep app for Nigerian students that keeps teaching when the network drops. The AI runs on the phone, so a student in a village with one bar of signal studies with the same tutor as a student in Lagos.",
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
      title: "Multi-persona tutoring",
      body: "Different tutor personalities for different moods: a patient explainer, a quick-fire drill coach, an exam examiner who marks like the real thing.",
    },
    {
      key: "exams",
      title: "Built for Nigerian exams",
      body: "Practice shaped around the papers Nigerian students actually sit, with explanations in clear, everyday English.",
    },
    {
      key: "points",
      title: "AI Points, paid via Paystack",
      body: "No forced subscriptions. Students (or parents) top up AI Points when they need more tutoring, paid securely through Paystack.",
    },
  ],
  howItWorks: [
    { title: "Download once", body: "Install StudyWise and download your subjects on Wi-Fi or data. The AI model comes with it." },
    { title: "Study anywhere", body: "Practise past-question style papers and talk to your tutor with no connection at all." },
    { title: "Sync when you can", body: "When you're back online, your progress and points sync automatically." },
  ],
  everywhere: [
    { title: "Low connectivity", body: "Designed for one bar of signal, or none." },
    { title: "Affordable phones", body: "Tuned to run on the budget Android phones students actually own." },
    { title: "Light on data", body: "Download once; study for weeks without burning data." },
  ],
  pricingNote:
    "StudyWise uses AI Points: top up small amounts when you need more tutoring, paid via Paystack. Practice questions and offline study are always available.",
  // TODO(owner): confirm pricing to display (points bundles and naira prices)
  pricingConfirmed: false,
  // TODO(owner): store links — set to real URLs to show download buttons; null shows the waitlist CTA
  links: {
    playStore: null as string | null,
    appStore: null as string | null,
    web: null as string | null,
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
      q: "Does StudyWise really work without internet?",
      a: "Yes. Once your subjects are downloaded, lessons, practice and the AI tutor run on your phone. You only need a connection to download content, top up AI Points and sync progress.",
    },
    {
      q: "Will the AI just give me the answers?",
      a: "No, on purpose. StudyWise is a Socratic tutor: it asks guiding questions and gives hints so you work the answer out yourself. That's how it sticks on exam day.",
    },
    {
      q: "Which exams does it cover?",
      a: "StudyWise is built for Nigerian exams and the subjects students sit for them. Ask us for the current list of subjects.",
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
