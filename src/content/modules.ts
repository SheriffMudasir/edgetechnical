/** School website & portal modules. `id` is the anchor on /schools (e.g. /schools#admissions). */

export type SchoolModule = {
  id: string;
  title: string;
  short: string;
  body: string;
  features: string[];
};

export const schoolModules: SchoolModule[] = [
  {
    id: "admissions",
    title: "Online Admissions",
    short: "Parents apply from their phones; you review applications in one dashboard.",
    body: "Replace paper forms and queues at the gate. Parents fill a clean, mobile-friendly application, upload documents and pay the form fee online. Your admissions team sees every application in one place, schedules entrance assessments and sends offers by SMS and email.",
    features: ["Mobile-first application form", "Document & passport uploads", "Online form-fee payment", "Entrance exam scheduling", "Offer letters by SMS / email"],
  },
  {
    id: "result-checker",
    title: "Result Checker",
    short: "Students check results with a scratch-card PIN or portal login.",
    body: "Publish term results online with secure scratch-card PINs or portal logins. Results display beautifully on any phone and download as a formatted PDF report card, in the WAEC/NECO-style grading formats your parents already understand.",
    features: ["Scratch-card PIN or login", "PIN usage limits", "Printable PDF report cards", "WAEC/NECO-style grading", "Withhold results for unpaid fees (optional)"],
  },
  {
    id: "fee-payments",
    title: "Fee Payment",
    short: "Paystack / Flutterwave payments with automatic receipts.",
    body: "Let parents pay school fees, levies and form fees by card, bank transfer or USSD through Paystack or Flutterwave. Every payment is matched to a student, receipts go out automatically, and your bursar sees who has paid without chasing bank alerts on WhatsApp.",
    features: ["Paystack & Flutterwave", "Card, transfer & USSD", "Instalment plans", "Automatic receipts", "Bursar dashboard & exports"],
  },
  {
    id: "parent-portal",
    title: "Parent & Student Portal",
    short: "One login for results, fees, timetables and notices.",
    body: "Parents log in with their phone number to see every child's results, fee balance, attendance and school notices. Students get timetables, assignments and learning materials in the same place.",
    features: ["Login by phone number", "Multiple children per parent", "Fee balances & history", "Assignments & timetables", "Push, SMS & email notices"],
  },
  {
    id: "news-events",
    title: "News, Events & Calendar",
    short: "Keep parents informed without another WhatsApp broadcast.",
    body: "Publish news, PTA notices and the term calendar from a simple dashboard. Events sync to parents' phone calendars, and every post is shareable to WhatsApp with a proper preview.",
    features: ["Easy publishing dashboard", "Term & events calendar", "Add-to-calendar links", "WhatsApp-friendly previews"],
  },
  {
    id: "gallery-tour",
    title: "Gallery & Virtual Tour",
    short: "Show the campus to parents who haven't visited yet.",
    body: "Fast, low-data photo galleries of your classrooms, labs, sports and events, plus an optional guided virtual tour so families in other cities can feel your school before they visit.",
    features: ["Low-data image galleries", "Albums by event or term", "Guided virtual tour", "Video embeds"],
  },
  {
    id: "sms-integration",
    title: "School Management Integration",
    short: "Your website and school software share one database.",
    body: "Your website connects directly to our school management system, so admissions become student records, results flow to the result checker and fees update the parent portal. One system, not five.",
    features: ["One shared database", "No double data entry", "Single sign-on for staff", "Works with our school software"],
  },
  {
    id: "elearning",
    title: "E-learning / LMS",
    short: "Lessons, assignments and CBT practice online.",
    body: "Share lesson materials, collect assignments and run computer-based tests online, with optional AI exam-prep tools for students in exam classes.",
    features: ["Lesson materials & videos", "Assignments & submissions", "CBT practice tests", "Optional AI exam prep"],
  },
];

export const schoolTypes = [
  { title: "Nursery & Primary", body: "Warm, parent-friendly sites with admissions, fees and photo-rich news that busy parents actually read." },
  { title: "Secondary schools", body: "Result checkers, exam-class updates, CBT practice and a portal parents and students both use." },
  { title: "International schools", body: "A premium front gate that holds its own against schools anywhere, with multi-currency fee options." },
  { title: "Colleges & tertiary", body: "Programme pages, online applications, departmental news and student portals at scale." },
];

export const builtForNigeria = [
  { title: "Paystack & Flutterwave", body: "Local payments by card, transfer and USSD, with receipts parents trust." },
  { title: "Cheap Android phones", body: "Tested on budget phones, because that's what most parents use." },
  { title: "Slow networks", body: "Pages under a second or two on 3G, with low-data images and offline-friendly portals." },
  { title: "SMS & WhatsApp notifications", body: "Admissions, results and fee reminders reach parents where they already are." },
  { title: "WAEC/NECO-style results", body: "Grading, positions and report formats your teachers and parents already understand." },
  { title: ".edu.ng & .com.ng domains", body: "We register and manage your Nigerian domain, hosting and SSL for you." },
];

/** Sample site structure shown on /schools. */
export const siteStructure = [
  { title: "Home", children: ["Welcome", "Why Greenfield", "News highlights"] },
  { title: "About", children: ["Our story", "Leadership", "Facilities"] },
  { title: "Admissions", children: ["How to apply", "Apply online", "Fees", "Entrance exams"] },
  { title: "Academics", children: ["Nursery & Primary", "Secondary", "Clubs"] },
  { title: "Portals", children: ["Result checker", "Parent portal", "Pay fees"] },
  { title: "News & Events", children: ["Calendar", "Gallery", "Virtual tour"] },
];
