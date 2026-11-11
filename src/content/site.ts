/**
 * Global company + site copy. Edit text here — components read from this file.
 * Anything marked TODO(owner) needs real information before launch.
 */

export const company = {
  legalName: "Edgetechnical Solutions Limited",
  shortName: "Edgetechnical",
  rcNumber: "RC 9259130",
  incorporated: "3 February 2026",
  incorporatedISO: "2026-02-03",
  registeredWith: "Corporate Affairs Commission (CAC), Nigeria",
  companyType: "Private company limited by shares",
  city: "Abuja",
  country: "Nigeria",
  descriptor: "Websites, software and AI for education.",
  // TODO(owner): confirm public email address and domain
  email: "hello@edgetechnical.ng",
  phone: "+234 810 230 1860",
  phoneHref: "+2348102301860",
  // TODO(owner): replace with real office address
  address: "Office address coming soon · Abuja, FCT, Nigeria",
  hours: "Monday – Friday, 8:00am – 6:00pm WAT",
  replyPromise: "We reply within one working day.",
} as const;

/** Public site URL — set NEXT_PUBLIC_SITE_URL in production. */
// TODO(owner): confirm final domain
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://edgetechnical.ng").replace(/\/$/, "");

/** WhatsApp number in international format without "+" (e.g. 2348102301860). */
export const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "2348102301860").replace(/\D/g, "");

export function whatsappLink(message = "Hello Edgetechnical, I'd like to talk about a website for our school.") {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const taglines = [
  "Websites that make schools look as good as they teach.",
  "We build the digital campus.",
  "Your school's front gate is online now.",
  "Software and AI for schools that mean business about learning.",
] as const;

export const primaryTagline = taglines[0];

export const footerSignOff = "Let's build your digital campus.";

// TODO(owner): replace with real social profile URLs (or remove the ones you don't use)
export const socials = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "X (Twitter)", href: "#" },
  { label: "Facebook", href: "#" },
] as const;

export type NavLink = { label: string; href: string; description?: string };

export const mainNav: NavLink[] = [
  { label: "Schools", href: "/schools" },
  { label: "StudyWise AI", href: "/products/studywise" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export const megaMenu = [
  {
    key: "front-gate",
    title: "The Front Gate",
    caption: "School websites & portals",
    href: "/schools",
    links: [
      { label: "School websites", href: "/schools" },
      { label: "Online admissions", href: "/schools#admissions" },
      { label: "Result checker", href: "/schools#result-checker" },
      { label: "Fee payments", href: "/schools#fee-payments" },
    ],
  },
  {
    key: "engine-room",
    title: "The Engine Room",
    caption: "School management software",
    href: "/school-software",
    links: [
      { label: "School management system", href: "/school-software" },
      { label: "Report cards & results", href: "/school-software#report-cards" },
      { label: "Attendance", href: "/school-software#attendance" },
      { label: "Offline apps", href: "/school-software#offline" },
    ],
  },
  {
    key: "study-room",
    title: "The Study Room",
    caption: "AI for learning",
    href: "/ai",
    links: [
      { label: "StudyWise AI", href: "/products/studywise" },
      { label: "AI tutors", href: "/ai#students" },
      { label: "AI for teachers", href: "/ai#teachers" },
      { label: "Custom AI", href: "/ai#custom" },
    ],
  },
] as const;

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Solutions",
    links: [
      { label: "School websites", href: "/schools" },
      { label: "School software", href: "/school-software" },
      { label: "AI for learning", href: "/ai" },
      { label: "StudyWise AI", href: "/products/studywise" },
      { label: "All services", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Process", href: "/process" },
      { label: "Pricing", href: "/pricing" },
      { label: "Insights", href: "/insights" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

/** Shown in the scrolling marquee strip. */
export const marqueeModules = [
  "Online Admissions",
  "Result Checker",
  "Fee Payment",
  "Parent Portal",
  "News & Events",
  "Report Cards",
  "Attendance",
  "Virtual Tour",
  "E-learning",
  "AI Exam Prep",
  "Staff Portal",
  "SMS Alerts",
];

export const seoKeywords = [
  "school website design Nigeria",
  "school website developer Abuja",
  "school portal Nigeria",
  "result checker website",
  "school management software Nigeria",
  "AI for schools Nigeria",
  "AI exam prep app Nigeria",
];
