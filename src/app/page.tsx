import type { Metadata } from "next";
import { Suspense } from "react";
import { Hero } from "@/components/sections/home/Hero";
import { MarqueeStrip } from "@/components/sections/home/MarqueeStrip";
import { Problem } from "@/components/sections/home/Problem";
import { SchoolModules } from "@/components/sections/home/SchoolModules";
import { Pillars } from "@/components/sections/home/Pillars";
import { StudyWiseShowcase } from "@/components/sections/home/StudyWiseShowcase";
import { Numbers } from "@/components/sections/home/Numbers";
import { SelectedWork } from "@/components/sections/home/SelectedWork";
import { ProcessTimeline } from "@/components/sections/home/ProcessTimeline";
import { WhyUs } from "@/components/sections/home/WhyUs";
import { PricingTeaser } from "@/components/sections/home/PricingTeaser";
import { Testimonials } from "@/components/sections/shared/Testimonials";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { BigCta } from "@/components/sections/shared/BigCta";
import { homeFaq } from "@/content/faq";
import { Defer } from "@/components/layout/Defer";
import { pageMetadata } from "@/lib/seo";
import { company } from "@/content/site";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "School website design & school software in Nigeria",
    description:
      "Edgetechnical builds beautiful school websites with online admissions, result checkers and fee payments, plus school management software and AI learning tools, for schools across Nigeria.",
    path: "/",
    ogTitle: "Websites that make schools look as good as they teach.",
  }),
  title: { absolute: `Edgetechnical — ${company.descriptor}` },
};

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <Suspense fallback={null}>
        <Problem />
      </Suspense>
      <Defer><SchoolModules /></Defer>
      <Defer><Pillars /></Defer>
      <Defer><StudyWiseShowcase /></Defer>
      <Defer><Numbers /></Defer>
      <Defer><SelectedWork /></Defer>
      <Defer><ProcessTimeline /></Defer>
      <Defer><WhyUs /></Defer>
      <Defer><PricingTeaser /></Defer>
      <Testimonials />
      <Defer><FaqSection items={homeFaq} index={10} /></Defer>
      <Defer><BigCta /></Defer>
    </>
  );
}
