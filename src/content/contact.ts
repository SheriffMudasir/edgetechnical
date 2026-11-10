/** Options for the quote form. Values are stable keys; labels are what visitors see. */

export const roles = ["Proprietor", "Principal", "Admin", "Other"] as const;

export const needs = [
  { value: "website", label: "School website" },
  { value: "sms", label: "School management system" },
  { value: "ai", label: "AI solutions" },
  { value: "studywise", label: "StudyWise AI for our school" },
  { value: "other", label: "Other software" },
] as const;

export const schoolTypes = ["Nursery & Primary", "Secondary", "Nursery to Secondary", "International", "College / Tertiary", "Not a school"] as const;

export const studentRanges = ["Under 300", "300 – 800", "800 – 2,000", "2,000+"] as const;

export const formModules = [
  "Online admissions",
  "Result checker",
  "Fee payments",
  "Parent & student portal",
  "News & events",
  "Gallery & virtual tour",
  "E-learning / CBT",
  "AI admissions assistant",
] as const;

export const budgets = ["Under ₦500k", "₦500k – ₦1m", "₦1m – ₦2.5m", "₦2.5m – ₦5m", "₦5m+", "Not sure yet"] as const;

export const timelines = ["As soon as possible", "Within 1 month", "1 – 3 months", "Next term", "Just exploring"] as const;

export const contactCopy = {
  title: "Tell us about your *school.*",
  sub: "Share a few details and we'll come back with ideas, a timeline and an honest quote. Prefer to talk? WhatsApp is usually fastest.",
  success: "Thanks. We'll reply within one working day.",
};

/** Maps ?need=… query values to form selections. */
export const needPrefill: Record<string, { needs: string[]; message?: string }> = {
  website: { needs: ["website"] },
  sms: { needs: ["sms"], message: "We'd like to book a demo of the school management system." },
  ai: { needs: ["ai"] },
  studywise: { needs: ["studywise"], message: "StudyWise for schools: we'd like to give our students access to StudyWise AI." },
  "studywise-waitlist": { needs: ["studywise"], message: "Please add me to the StudyWise AI waitlist." },
  other: { needs: ["other"] },
};
