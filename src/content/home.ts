/** Home page copy. Emphasis words are wrapped in *asterisks* (rendered in serif italic). */

export const homeHero = {
  label: "Software agency · Abuja, Nigeria",
  title: "Websites that make schools look as *good* as they teach.",
  sub: "Edgetechnical builds beautiful websites, school software and AI learning tools for schools across Nigeria, from online admissions and result checkers to AI exam prep.",
  stages: ["Wireframe", "Designed", "Live"],
};

export const problem = {
  statement: "Parents judge your school online before they ever visit the *gate.*",
  points: [
    { title: "Outdated or broken websites", body: "A slow, dated site (or none at all) tells parents something about your school that isn't true." },
    { title: "Admissions still on paper", body: "Forms bought at the gate, filled by hand, lost in files. Parents in other cities simply give up." },
    { title: "Results and fees in WhatsApp chaos", body: "PDFs in group chats, payment alerts to screenshot, the bursar chasing balances one by one." },
  ],
};

/** Commitment stats (not history stats) — the company is new. */
// TODO(owner): confirm these commitments
export const commitments = [
  { prefix: "< ", value: 2, suffix: "s", label: "Load-time target on 3G for every page we ship" },
  { prefix: "", value: 100, suffix: "%", label: "Mobile-first: designed for the phones parents use" },
  { prefix: "", value: 14, suffix: "-day", label: "Launch on the Starter package, from content to live" },
  { prefix: "", value: 24, suffix: "/7", label: "Uptime monitoring on every site we host" },
];

export const process = [
  {
    title: "Discover",
    duration: "Week 1",
    body: "We visit (in person or on video), learn how your school runs and agree what success looks like.",
    deliverables: ["Kick-off call", "Site map", "Content checklist"],
  },
  {
    title: "Design",
    duration: "Week 1–2",
    body: "We design your homepage and key pages around your school's character, then refine with you.",
    deliverables: ["Homepage design", "Mobile layouts", "Two revision rounds"],
  },
  {
    title: "Build",
    duration: "Week 2–4",
    body: "We build the site and modules (admissions, results, payments) and load your content.",
    deliverables: ["Working staging site", "Modules configured", "Content loaded"],
  },
  {
    title: "Launch",
    duration: "Launch day",
    body: "Domain, SSL, speed and SEO checks, then we go live and train your staff to run it.",
    deliverables: ["Go-live", "Staff training", "Handover guide"],
  },
  {
    title: "Support",
    duration: "Ongoing",
    body: "We stay: hosting, backups, monitoring, updates and help whenever a new term starts.",
    deliverables: ["Monitoring", "Backups", "Priority help"],
  },
];

export const whyUs = [
  {
    title: "We specialise in education",
    body: "Schools are our core, not a side project. We know admissions seasons, result days and PTA meetings, and we design for them.",
  },
  {
    title: "We build our own AI education product",
    body: "StudyWise AI means we understand learners as well as administrators, and we bring that product thinking to your school.",
  },
  {
    title: "We build for Nigerian realities",
    body: "Slow networks, budget Android phones, low-data images, local payments via Paystack and Flutterwave, SMS and WhatsApp.",
  },
  {
    title: "You own your site and content",
    body: "Your domain, your content and your data stay yours. No lock-in, no hostage situations at renewal time.",
  },
  {
    title: "We stay after launch",
    body: "Training for your staff, hosting, monitoring and support every term. Launch day is the start of the relationship.",
  },
];

export const bigCta = {
  title: "Let's build your *digital campus.*",
  button: "Book a free consultation",
};
