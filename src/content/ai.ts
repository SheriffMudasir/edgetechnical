/** Copy for /ai — AI for Learning. */

export const aiPage = {
  hero: {
    label: "The Study Room · AI for learning",
    title: "AI that helps students *learn* and teachers *teach*.",
    sub: "Calm, credible AI built for Nigerian classrooms: exam prep that teaches rather than tells, tools that give teachers their evenings back, and assistants that answer parents while the office is closed.",
  },
  groups: [
    {
      id: "students",
      label: "For students",
      title: "Exam prep that builds understanding",
      items: [
        { title: "AI exam prep & tutoring", body: "Featuring StudyWise AI, our own offline-first tutor that guides students to answers with Socratic questions." },
        { title: "CBT practice with explanations", body: "Timed computer-based tests that feel like the real thing, with a clear explanation after every question." },
      ],
    },
    {
      id: "teachers",
      label: "For teachers",
      title: "Less paperwork, more teaching",
      items: [
        { title: "Lesson-note drafts", body: "First drafts of lesson notes aligned to your scheme of work, ready for the teacher to edit and own." },
        { title: "Question-bank generation", body: "Build objective and theory questions by topic and difficulty in minutes, not weekends." },
        { title: "Marking assistance", body: "Suggested marks and comments for written work, always reviewed and approved by the teacher." },
        { title: "Student-performance insights", body: "Spot who is slipping and which topics a whole class is struggling with, from the results you already enter." },
      ],
    },
    {
      id: "schools",
      label: "For schools",
      title: "An office that never closes",
      items: [
        { title: "AI admissions & enquiries assistant", body: "A chat assistant on your website that answers parents 24/7 from your own school information, and hands warm leads to your admissions team." },
        { title: "AI-generated term reports & summaries", body: "Draft report-card remarks and term summaries from scores and attendance, for teachers to review and sign off." },
      ],
    },
  ],
  custom: {
    title: "Custom AI for education",
    body: "We design and build AI solutions for education organisations, edtechs and exam bodies: tutoring engines, content-generation pipelines, assessment tools and on-device models for low-connectivity regions.",
    points: ["Discovery & feasibility", "Prototype in weeks", "Production build & hosting", "Evaluation and safety testing"],
  },
  responsible: [
    { title: "Student data privacy", body: "Built to the Nigeria Data Protection Act (NDPA) 2023. We collect the minimum, protect it properly, and never sell student data." },
    { title: "AI that teaches, not does homework", body: "Our tutors guide with questions and hints. The goal is understanding, not copied answers." },
    { title: "Teachers stay in charge", body: "Every AI-drafted mark, remark or lesson note is reviewed and approved by a human before it counts." },
    { title: "Works offline, on-device", body: "Where connectivity is poor, models can run on the device, which also keeps more data on the student's phone." },
  ],
};

/** Scripted school-website assistant (no API calls). */
export const assistantScript = {
  schoolName: "Greenfield Academy",
  greeting: "Hello! I'm the Greenfield Academy assistant. Ask me about admissions, fees or visiting the school.",
  suggestions: ["When does admission close?", "How much are school fees?", "Can I book a school visit?"],
  answers: [
    {
      match: ["admission", "close", "deadline", "apply", "entrance"],
      reply:
        "Admission for the 2026/27 session closes on Friday, 31 July. The entrance assessment holds every Saturday in July at 9am. You can apply online in about 5 minutes. Shall I send you the link?",
    },
    {
      match: ["fee", "fees", "cost", "price", "how much", "tuition"],
      reply:
        "Fees depend on the class. For example, Primary 1–3 is ₦185,000 per term and JSS 1–3 is ₦240,000 per term, including books. You can pay online by card, transfer or USSD. Want the full fee schedule?",
    },
    {
      match: ["visit", "tour", "see", "book", "come"],
      reply:
        "We'd love to show you around! Visits run Monday to Friday, 10am–2pm. Share your name and phone number and the admissions office will confirm a time today.",
    },
  ],
  fallback:
    "Good question. I'll pass it to the admissions office and they'll get back to you within one working day. Can I take your phone number?",
  disclaimer: "Demo with scripted answers for a fictional school. No data is sent anywhere.",
};
