import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Cursor } from "@/components/motion/Cursor";
import { PageTransition } from "@/components/motion/PageTransition";
import { Analytics } from "@/components/layout/Analytics";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd } from "@/lib/seo";
import { company, seoKeywords, siteUrl } from "@/content/site";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
// Mono is only used for small labels: no preload, so it never competes with the headline font
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap", preload: false });
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `Edgetechnical — ${company.descriptor}`,
    template: "%s · Edgetechnical",
  },
  description:
    "Edgetechnical builds beautiful school websites, school management software and AI learning tools for schools across Nigeria — from online admissions and result checkers to AI exam prep.",
  keywords: seoKeywords,
  applicationName: "Edgetechnical",
  authors: [{ name: company.legalName }],
  creator: company.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Edgetechnical",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#F5F2EB",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-NG"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Marks JS as available before first paint so reveal styles only apply when they can resolve */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a
          href="#main"
          className="fixed left-4 top-4 z-[200] -translate-y-24 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <JsonLd data={organizationJsonLd()} />
        <SmoothScroll>
          <Header />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
        <WhatsAppFloat />
        <PageTransition />
        <Cursor />
        <Analytics />
      </body>
    </html>
  );
}
