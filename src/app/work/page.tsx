import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CaseCard } from "@/components/work/CaseCard";
import { Reveal } from "@/components/motion/Reveal";
import { BigCta } from "@/components/sections/shared/BigCta";
import { caseStudies } from "@/content/work";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Work",
  description:
    "School websites, school management software and AI for learning by Edgetechnical, including our own product, StudyWise AI. Concept projects are clearly labelled.",
  path: "/work",
  ogTitle: "Built in code, not stock photos.",
  ogLabel: "Work",
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        label="Work"
        title="Built in code, *not stock photos.*"
        sub="We're a new studio, founded in 2026, so we're honest about it: school projects marked Concept show how we work until client stories can be shared. StudyWise AI is our own product."
      />
      <section aria-label="Case studies" className="bg-paper pb-[clamp(80px,11vw,176px)]">
        <ul className="container-x grid gap-x-6 gap-y-16 md:grid-cols-2">
          {caseStudies.map((c, i) => (
            <Reveal as="li" key={c.slug} delay={(i % 2) * 100} className={i % 2 ? "md:mt-24" : ""}>
              <CaseCard study={c} priority={i === 0} />
              <p className="mt-3 max-w-[48ch] text-[15px] text-ink/70">{c.summary}</p>
            </Reveal>
          ))}
        </ul>
      </section>
      <BigCta title="Your school could be our *first story.*" />
    </>
  );
}
