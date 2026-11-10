import type { Metadata } from "next";
import { company, siteUrl, socials } from "@/content/site";

/** Per-page metadata helper: canonical, OG + Twitter with the branded dynamic OG image. */
export function pageMetadata({
  title,
  description,
  path,
  ogTitle,
  ogLabel,
}: {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogLabel?: string;
}): Metadata {
  const params = new URLSearchParams({ title: ogTitle ?? title });
  if (ogLabel) params.set("label", ogLabel);
  const image = `/api/og?${params.toString()}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} · Edgetechnical`,
      description,
      url: path,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title: `${title} · Edgetechnical`, description, images: [image] },
  };
}

export function organizationJsonLd() {
  const realSocials = socials.map((s) => s.href).filter((h) => h.startsWith("http"));
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${siteUrl}/#organization`,
    name: company.legalName,
    alternateName: company.shortName,
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
    image: `${siteUrl}/api/og`,
    description: `A Nigerian software agency for education technology. ${company.descriptor}`,
    email: company.email,
    foundingDate: company.incorporatedISO,
    identifier: { "@type": "PropertyValue", propertyID: "CAC RC Number", value: company.rcNumber.replace("RC ", "") },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abuja",
      addressRegion: "FCT",
      addressCountry: "NG",
    },
    areaServed: [{ "@type": "Country", name: "Nigeria" }, { "@type": "Continent", name: "Africa" }],
    knowsAbout: [
      "School website design",
      "School portals",
      "Result checker websites",
      "School management software",
      "AI for education",
      "AI exam preparation",
    ],
    ...(realSocials.length ? { sameAs: realSocials } : {}),
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function articleJsonLd(a: { title: string; description: string; slug: string; date: string; author?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    datePublished: a.date,
    dateModified: a.date,
    mainEntityOfPage: `${siteUrl}/insights/${a.slug}`,
    image: `${siteUrl}/api/og?title=${encodeURIComponent(a.title)}&label=Insights`,
    author: { "@type": "Organization", name: a.author ?? company.legalName },
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

export function studyWiseJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "StudyWise AI",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Android, Web",
    description:
      "An offline-first AI exam-prep app for Nigerian students, with on-device AI and Socratic, multi-persona tutoring built for Nigerian exams.",
    creator: { "@id": `${siteUrl}/#organization` },
    publisher: { "@id": `${siteUrl}/#organization` },
    url: `${siteUrl}/products/studywise`,
    offers: { "@type": "Offer", priceCurrency: "NGN", category: "AI Points (pay as you go via Paystack)" },
  };
}
