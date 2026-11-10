/** Copy for /school-software — The Engine Room. */

export const softwarePage = {
  hero: {
    label: "The Engine Room · School management software",
    title: "The engine room that runs your *school.*",
    sub: "Student records, results, beautiful report cards, attendance, fees and parent logins in one calm system, with an offline-first app for classrooms where the network comes and goes.",
  },
  features: [
    { id: "records", title: "Student records", body: "Every student's bio-data, class history, guardians and documents in one searchable place. Import from Excel on day one." },
    { id: "results", title: "Results entry by teachers", body: "Subject teachers enter CA and exam scores for their own classes. Totals, grades and positions calculate themselves." },
    { id: "report-cards", title: "Report-card PDFs", body: "Beautifully formatted report cards with your crest, CA and exam scores, remarks and attendance, generated for a whole class in seconds." },
    { id: "attendance", title: "Attendance", body: "Take the register on a phone in under a minute. Parents can be notified when a child is absent." },
    { id: "parents", title: "Parent logins by phone number", body: "No usernames to forget. Parents sign in with their phone number to see results, attendance and fee balances." },
    { id: "roles", title: "Teacher roles", body: "Form masters, subject teachers, heads of section and admins each see exactly what they need, and nothing they shouldn't." },
    { id: "offline", title: "Offline-first mobile app", body: "Teachers keep working when the network drops. Everything saves on the phone and syncs automatically when it returns." },
    { id: "fees", title: "Fee tracking", body: "Know who has paid, who owes, and how much, by class or by family. Online payments from your website reconcile automatically." },
  ],
  reportCard: {
    title: "Report cards parents *keep.*",
    body: "Your report card is the document parents study most closely. We design it like it matters: clear grades, CA and exam breakdowns, remarks, attendance and your school's crest, as a crisp PDF that prints beautifully.",
    callouts: [
      "Your crest, colours and signature",
      "CA 1, CA 2 and exam with automatic totals",
      "WAEC/NECO-style grading and positions",
      "Teacher and principal remarks",
      "Bulk-generate a whole class in seconds",
    ],
  },
  offline: {
    title: "Works when the network *doesn't.*",
    body: "Our teacher app is offline-first. Registers, scores and remarks save on the phone instantly, and sync quietly in the background when a connection returns. No lost work, no 'try again later'.",
  },
  oneSystem: {
    title: "One system, *not five.*",
    body: "Your website, admissions, results, fees and parent app share one database. An admission becomes a student record; a score becomes a report card; a payment updates the parent's balance. Nothing is typed twice.",
    nodes: ["School website", "Admissions", "Results & report cards", "Attendance", "Fees", "Parent app"],
  },
};
