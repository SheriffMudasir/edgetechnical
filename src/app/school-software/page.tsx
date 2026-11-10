import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/sections/shared/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button, TextLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { Emph } from "@/components/motion/SplitText";
import { ReportCardPreview } from "@/components/mockups/ReportCardPreview";
import { OfflineAttendance } from "@/components/mockups/OfflineAttendance";
import { OneSystem } from "@/components/sections/shared/OneSystem";
import { BigCta } from "@/components/sections/shared/BigCta";
import { softwarePage as c } from "@/content/software";
import { pageMetadata } from "@/lib/seo";
import { pad2 } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "School management software in Nigeria",
  description:
    "School management software for Nigerian schools: student records, results entry, beautiful report-card PDFs, attendance, parent logins, fee tracking and an offline-first teacher app, connected to your school website.",
  path: "/school-software",
  ogTitle: "The engine room that runs your school.",
  ogLabel: "School management software",
});

export default function SchoolSoftwarePage() {
  return (
    <>
      <PageHero label={c.hero.label} title={c.hero.title} sub={c.hero.sub}>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <Magnetic>
            <Button href="/contact?need=sms" size="lg">
              Book a demo
            </Button>
          </Magnetic>
          <TextLink href="#report-cards">See the report card</TextLink>
        </div>
      </PageHero>

      {/* Feature grid */}
      <section aria-labelledby="features-title" className="bg-paper pb-[clamp(80px,11vw,176px)]">
        <div className="container-x">
          <div className="border-t border-line pt-16">
            <SectionLabel index={1} className="text-slate">
              What it does
            </SectionLabel>
            <Reveal as="h2" id="features-title" className="h-section mt-8 max-w-[16ch]">
              Everything the school office does, <span className="italic">in one place.</span>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[14px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {c.features.map((f, i) => (
              <Reveal key={f.id} id={f.id} delay={(i % 4) * 70} className="flex scroll-mt-28 flex-col justify-between gap-12 bg-paper p-7">
                <span className="label-mono text-slate">{pad2(i + 1)}</span>
                <div>
                  <h3 className="font-display text-[1.9rem] leading-none">{f.title}</h3>
                  <p className="mt-3 text-[15px] text-ink/70">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Report card showcase */}
      <section id="report-cards" aria-labelledby="rc-title" className="grain section-y relative scroll-mt-16 overflow-hidden bg-ink text-paper">
        <div className="container-x relative z-10 grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel index={2} className="text-mist" tone="edge">
              Report cards
            </SectionLabel>
            <Reveal as="h2" id="rc-title" className="h-section mt-8">
              <Emph text={c.reportCard.title} emClassName="italic text-edge" />
            </Reveal>
            <p className="mt-6 text-paper/75">{c.reportCard.body}</p>
            <ul className="mt-8 space-y-3 border-t border-line-inv pt-6">
              {c.reportCard.callouts.map((x) => (
                <li key={x} className="flex items-start gap-3">
                  <Check className="mt-1 size-4 shrink-0 text-edge" aria-hidden />
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <div className="mx-auto max-w-[560px] rotate-[1.5deg]">
              <ReportCardPreview />
            </div>
            <p className="label-mono mt-8 text-center text-[11px] text-mist">Concept report card · sample data</p>
          </Reveal>
        </div>
      </section>

      {/* Offline */}
      <section id="offline" aria-labelledby="offline-title" className="section-y scroll-mt-16 bg-paper">
        <div className="container-x grid items-center gap-16 lg:grid-cols-12">
          <Reveal className="order-2 mx-auto w-full max-w-[320px] lg:order-1 lg:col-span-4 lg:col-start-2">
            <OfflineAttendance />
          </Reveal>
          <div className="order-1 lg:order-2 lg:col-span-5 lg:col-start-7">
            <SectionLabel index={3} className="text-slate">
              Offline-first app
            </SectionLabel>
            <Reveal as="h2" id="offline-title" className="h-section mt-8">
              <Emph text={c.offline.title} emClassName="italic text-ivy" />
            </Reveal>
            <p className="mt-6 text-ink/75">{c.offline.body}</p>
            <p className="mt-6 text-ink/75">
              It&apos;s the same approach we use in{" "}
              <TextLink href="/products/studywise" className="inline-flex">
                StudyWise AI
              </TextLink>
              , our own offline-first product.
            </p>
          </div>
        </div>
      </section>

      {/* One system */}
      <section aria-labelledby="one-title" className="section-y border-t border-line bg-paper">
        <div className="container-x grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel index={4} className="text-slate">
              Connected
            </SectionLabel>
            <Reveal as="h2" id="one-title" className="h-section mt-8">
              <Emph text={c.oneSystem.title} emClassName="italic text-edge-deep" />
            </Reveal>
            <p className="mt-6 text-ink/75">{c.oneSystem.body}</p>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              <Button href="/contact?need=sms">Book a demo</Button>
              <TextLink href="/schools">See the website side</TextLink>
            </div>
          </div>
          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <OneSystem nodes={c.oneSystem.nodes} />
          </Reveal>
        </div>
      </section>

      <BigCta title="See your school's *engine room* in a 30-minute demo." button="Book a demo" href="/contact?need=sms" />
    </>
  );
}
