import type { Metadata } from "next";
import { Check } from "lucide-react";
import { SplitText } from "@/components/motion/SplitText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button, TextLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { CountUp } from "@/components/motion/CountUp";
import { EdgeMark } from "@/components/ui/EdgeMark";
import { AITutorChat } from "@/components/mockups/AITutorChat";
import { StudyWisePractice } from "@/components/mockups/StudyWisePractice";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { BigCta } from "@/components/sections/shared/BigCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { studywise } from "@/content/studywise";
import { pageMetadata, studyWiseJsonLd } from "@/lib/seo";
import { pad2 } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "StudyWise AI — offline AI exam prep for Nigerian students",
  description:
    "StudyWise AI is an offline-first AI exam-prep app for Nigerian students, with on-device AI and Socratic, multi-persona tutors that teach rather than tell. Built by Edgetechnical.",
  path: "/products/studywise",
  ogTitle: "StudyWise AI: the tutor that works offline.",
  ogLabel: "Our product",
});

export default function StudyWisePage() {
  const { links } = studywise;
  const hasStore = Boolean(links.playStore || links.appStore || links.web);
  return (
    <>
      <JsonLd data={studyWiseJsonLd()} />

      {/* Hero (sub-brand: ivy) */}
      <section data-hero="dark" className="grain relative overflow-hidden bg-ivy text-paper">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-20 h-[800px] w-[800px] rounded-full"
          style={{ background: "radial-gradient(closest-side, rgba(143,211,176,0.28), rgba(31,77,58,0))" }}
        />
        <div className="container-x relative z-10 grid gap-16 pb-24 pt-[calc(var(--header-h)+40px)] md:pt-[calc(var(--header-h)+72px)] lg:grid-cols-12 lg:pb-32">
          <div className="lg:col-span-6">
            <p className="label-mono flex items-center gap-2.5 text-paper/80">
              <EdgeMark className="size-2.5" /> Our product · Built by Edgetechnical
            </p>
            <SplitText
              text="The exam tutor that keeps teaching *offline.*"
              className="h-hero mt-10"
              emClassName="italic text-[#8FD3B0]"
            />
            <div className="rise-in" style={{ ["--rise-delay" as string]: "500ms" }}>
              <p className="mt-8 max-w-[46ch] text-lg leading-relaxed text-paper/80">{studywise.pitch}</p>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Magnetic>
                  {hasStore ? (
                    <Button href={links.playStore ?? links.web ?? links.appStore ?? "#"} variant="light" size="lg" target="_blank" rel="noopener noreferrer">
                      Get StudyWise AI
                    </Button>
                  ) : (
                    <Button href="/contact?need=studywise-waitlist" variant="light" size="lg">
                      Join the waitlist
                    </Button>
                  )}
                </Magnetic>
                <TextLink href="#schools" className="text-paper">
                  For schools
                </TextLink>
              </div>
            </div>
          </div>
          <div className="rise-in relative flex items-end justify-center gap-4 lg:col-span-6" style={{ ["--rise-delay" as string]: "650ms" }}>
            <div className="w-[48%] max-w-[300px] translate-y-10">
              <StudyWisePractice />
            </div>
            <div className="w-[48%] max-w-[300px]">
              <AITutorChat />
            </div>
          </div>
        </div>
      </section>

      {/* Stats (hidden until confirmed) */}
      {studywise.showStats && (
        <section aria-label="StudyWise in numbers" className="border-b border-line bg-paper py-16">
          <dl className="container-x grid gap-8 sm:grid-cols-3">
            {studywise.stats.map((s) => (
              <div key={s.label}>
                <dt className="label-mono text-slate">{s.label}</dt>
                <dd className="font-display text-6xl">
                  <CountUp to={s.value} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {/* How it works */}
      <section aria-labelledby="how-title" className="section-y bg-paper">
        <div className="container-x">
          <SectionLabel index={1} className="text-slate">
            How it works
          </SectionLabel>
          <Reveal as="h2" id="how-title" className="h-section mt-8 max-w-[14ch]">
            Download once. <span className="italic text-ivy">Study anywhere.</span>
          </Reveal>
          <ol className="mt-14 grid gap-3 md:grid-cols-3">
            {studywise.howItWorks.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 90} className="flex flex-col justify-between gap-16 rounded-[14px] border border-line bg-chalk p-7">
                <span className="font-display text-7xl leading-none text-ivy">{i + 1}</span>
                <div>
                  <h3 className="font-display text-[2rem] leading-none">{s.title}</h3>
                  <p className="mt-3 text-ink/70">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Features */}
      <section aria-labelledby="features-title" className="grain section-y relative bg-ink text-paper">
        <div className="container-x relative z-10">
          <SectionLabel index={2} className="text-mist" tone="edge">
            Features
          </SectionLabel>
          <Reveal as="h2" id="features-title" className="h-section mt-8 max-w-[16ch]">
            A tutor that makes students <span className="italic text-[#8FD3B0]">think.</span>
          </Reveal>
          <div className="mt-14 border-t border-line-inv">
            {studywise.features.map((f, i) => (
              <Reveal key={f.key} className="grid gap-4 border-b border-line-inv py-8 md:grid-cols-12 md:gap-8">
                <span className="label-mono text-mist md:col-span-1">{pad2(i + 1)}</span>
                <h3 className="font-display text-[clamp(1.9rem,3vw,2.6rem)] leading-[1.02] md:col-span-5">{f.title}</h3>
                <p className="text-paper/70 md:col-span-5 md:col-start-8">{f.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Built for students everywhere */}
      <section aria-labelledby="everywhere-title" className="section-y bg-paper">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel index={3} className="text-slate">
              Built for students everywhere
            </SectionLabel>
            <Reveal as="h2" id="everywhere-title" className="h-section mt-8">
              From Lagos to the village with <span className="italic text-ivy">one bar of signal.</span>
            </Reveal>
          </div>
          <div className="grid gap-3 self-end sm:grid-cols-3 lg:col-span-6 lg:col-start-7">
            {studywise.everywhere.map((e, i) => (
              <Reveal key={e.title} delay={i * 80} className="rounded-[14px] bg-ivy p-6 text-paper">
                <Check className="size-5 text-[#8FD3B0]" aria-hidden />
                <h3 className="mt-8 font-display text-2xl leading-none">{e.title}</h3>
                <p className="mt-2 text-[14px] text-paper/75">{e.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing note */}
      <section aria-labelledby="points-title" className="bg-paper pb-[clamp(80px,11vw,176px)]">
        <div className="container-x">
          <Reveal className="grid gap-8 rounded-[14px] border border-line bg-chalk p-8 md:grid-cols-12 md:p-12">
            <div className="md:col-span-5">
              <p className="label-mono text-slate">Pricing</p>
              <h2 id="points-title" className="mt-4 font-display text-[clamp(2.2rem,3.6vw,3.2rem)] leading-none">
                Pay for tutoring with <span className="italic text-ivy">AI Points.</span>
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="text-ink/75">{studywise.pricingNote}</p>
              {/* TODO(owner): confirm pricing to display (set studywise.pricingConfirmed and add bundles) */}
              {!studywise.pricingConfirmed && <p className="label-mono mt-4 text-[11px] text-slate">Points bundles and prices announced at launch.</p>}
              <p className="mt-4 flex items-center gap-2 text-sm text-ink/70">
                <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px]">Paystack</span> Secure payments in naira.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* For schools */}
      <section id="schools" aria-labelledby="sw-schools-title" className="grain section-y relative scroll-mt-16 bg-ivy text-paper">
        <div className="container-x relative z-10 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionLabel index={4} className="text-paper/70" tone="edge">
              For schools
            </SectionLabel>
            <Reveal as="h2" id="sw-schools-title" className="h-section mt-8">
              Get StudyWise for your <span className="italic">students.</span>
            </Reveal>
          </div>
          <div className="flex flex-col justify-end gap-6 lg:col-span-4 lg:col-start-9">
            <p className="text-paper/80">
              Give your exam classes an offline AI tutor. We set up school accounts, track progress for teachers, and agree a simple
              per-student arrangement.
            </p>
            <div>
              <Button href="/contact?need=studywise" variant="light">
                StudyWise for schools
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FaqSection items={studywise.faq} index={5} title="StudyWise questions" />
      <BigCta
        title={hasStore ? "Start studying *smarter* today." : "Be first when StudyWise *opens up.*"}
        button={hasStore ? "Get StudyWise AI" : "Join the waitlist"}
        href={hasStore ? (links.playStore ?? links.web ?? links.appStore ?? "/contact") : "/contact?need=studywise-waitlist"}
      />
    </>
  );
}
