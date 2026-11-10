/**
 * Pricing. ALL PRICES ARE PLACEHOLDERS.
 * TODO(owner): set real prices
 */

export const pricingIsPlaceholder = true;

export type Tier = {
  key: "starter" | "standard" | "premium";
  name: string;
  price: number; // one-off, naira
  priceNote: string;
  blurb: string;
  highlight?: string;
  features: string[];
  launch: string;
};

export const tiers: Tier[] = [
  {
    key: "starter",
    name: "Starter",
    price: 450_000, // TODO(owner): set real price
    priceNote: "one-off",
    blurb: "A beautiful, fast school website that makes a strong first impression.",
    features: ["5–7 page school website", "Mobile-first design", "Photo gallery", "News & notices", "Contact & enquiry form", "1 year hosting & domain"],
    launch: "14-day launch",
  },
  {
    key: "standard",
    name: "Standard",
    price: 950_000, // TODO(owner): set real price
    priceNote: "one-off",
    blurb: "Everything in Starter, plus the tools that take admissions and results online.",
    highlight: "Most schools choose this",
    features: ["Everything in Starter", "Online admissions", "Result checker (PIN or login)", "Events calendar", "CMS training for staff"],
    launch: "3–4 week launch",
  },
  {
    key: "premium",
    name: "Premium",
    price: 1_850_000, // TODO(owner): set real price
    priceNote: "one-off",
    blurb: "The complete front gate: payments, portals and notifications.",
    features: ["Everything in Standard", "Online fee payments", "Parent & student portal", "SMS & email notifications", "Priority support"],
    launch: "4–6 week launch",
  },
];

export const comparison: { feature: string; values: [boolean | string, boolean | string, boolean | string] }[] = [
  { feature: "Pages", values: ["5–7", "Up to 12", "Unlimited"] },
  { feature: "Mobile-first design", values: [true, true, true] },
  { feature: "Gallery, news & contact", values: [true, true, true] },
  { feature: "Hosting, domain & SSL (1 year)", values: [true, true, true] },
  { feature: "Online admissions", values: [false, true, true] },
  { feature: "Result checker", values: [false, true, true] },
  { feature: "Events calendar", values: [false, true, true] },
  { feature: "CMS training", values: ["Guide", "Live session", "Live session"] },
  { feature: "Fee payments (Paystack / Flutterwave)", values: [false, false, true] },
  { feature: "Parent & student portal", values: [false, false, true] },
  { feature: "SMS & email notifications", values: [false, false, true] },
  { feature: "Support", values: ["Email", "Email & WhatsApp", "Priority"] },
];

export const maintenance = {
  name: "Care plan",
  price: 35_000, // TODO(owner): set real price
  period: "per month",
  features: ["Hosting, backups & SSL renewals", "Security & software updates", "24/7 uptime monitoring", "Up to 3 hours of changes per month", "Start-of-term check-in"],
};

export const extras = {
  sms: {
    title: "School Management System",
    price: "from ₦X per term / per student", // TODO(owner): set real price
    body: "Records, results, report-card PDFs, attendance, parent logins and an offline app, connected to your website.",
    href: "/school-software",
  },
  ai: {
    title: "AI add-ons",
    items: ["Website AI admissions assistant", "StudyWise AI for your students", "AI tools for teachers"],
    price: "Talk to us",
    href: "/ai",
  },
  enterprise: {
    title: "Enterprise / Custom",
    body: "School groups, multi-campus schools, edtechs and exam bodies. Custom scope, integrations and SLAs.",
  },
};

/** Quote estimator. Indicative only. TODO(owner): calibrate these numbers. */
export const estimator = {
  base: 400_000,
  modules: [
    { id: "admissions", label: "Online admissions", price: 200_000 },
    { id: "result-checker", label: "Result checker", price: 200_000 },
    { id: "fee-payments", label: "Fee payments", price: 250_000 },
    { id: "parent-portal", label: "Parent & student portal", price: 350_000 },
    { id: "news-events", label: "News, events & calendar", price: 80_000 },
    { id: "gallery-tour", label: "Gallery & virtual tour", price: 120_000 },
    { id: "elearning", label: "E-learning / CBT", price: 300_000 },
    { id: "sms", label: "School management system", price: 600_000 },
    { id: "ai-assistant", label: "AI admissions assistant", price: 250_000 },
  ],
  sizes: [
    { id: "small", label: "Under 300 students", multiplier: 1 },
    { id: "medium", label: "300 – 800", multiplier: 1.15 },
    { id: "large", label: "800 – 2,000", multiplier: 1.35 },
    { id: "xl", label: "2,000+ / multi-campus", multiplier: 1.6 },
  ],
  spread: 0.15, // ± range shown
};
