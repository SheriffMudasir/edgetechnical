import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/sections/shared/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button, TextLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { SchoolSiteMockup } from "@/components/mockups/SchoolSiteMockup";
import { ModulePanel } from "@/components/schools/ModulePanel";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { BigCta } from "@/components/sections/shared/BigCta";
import { PricingTeaser } from "@/components/sections/home/PricingTeaser";
import { builtForNigeria, schoolModules, schoolTypes, siteStructure } from "@/content/modules";
import { homeFaq } from "@/content/faq";
import { Defer } from "@/components/layout/Defer";
import { pageMetadata } from "@/lib/seo";
import { pad2 } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "School website design & school portals in Nigeria",
  description:
    "Beautiful, fast school websites with online admissions, result checkers, Paystack/Flutterwave fee payments, news, events and parent portals. Built for Nigerian schools by Edgetechnical, Abuja.",
  path: "/schools",
  ogTitle: "Everything your school needs online, in one place.",
  ogLabel: "School websites & portals",
});

const schoolFaq = homeFaq.filter((f) => /website|hosting|pay|update|need from us|outside/i.test(f.q));

export default function SchoolsPage() {
  return (
    <>
      <PageHero
        label="The Front Gate · School websites & portals"
        title="Everything your school needs *online*, in one place."
        sub="A school website that parents trust at first glance, and the portals behind it that take admissions, results and fees off paper and out of WhatsApp."
      >
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <Magnetic>
            <Button href="/contact?need=website" size="lg">
              Get a quote
            </Button>
          </Magnetic>
          <TextLink href="#modules">See every module</TextLink>
        </div>
      </PageHero>

      {/* Mockup + module index */}
      <section aria-label="Overview" className="bg-paper pb-24 md:pb-36">
        <div className="container-x grid items-start gap-12 lg:grid-cols-12">
          <Reveal className="relative lg:col-span-8">
            <SchoolSiteMockup />
            <p className="label-mono mt-10 text-[11px] text-slate">Greenfield Academy · concept site, built in code</p>
          </Reveal>
          <nav aria-label="Modules" className="lg:col-span-3 lg:col-start-10">
            <p className="label-mono text-slate">Jump to a module</p>
            <ol className="mt-4 border-t border-line">
              {schoolModules.map((m, i) => (
                <li key={m.id} className="border-b border-line">
                  <a href={`#${m.id}`} className="group flex items-baseline gap-3 py-3">
                    <span className="label-mono text-[11px] text-slate">{pad2(i + 1)}</span>
                    <span className="link-draw">{m.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      {/* Who it's for */}
      <section aria-labelledby="for-title" className="section-y border-t border-line bg-paper">
        <div className="container-x">
          <SectionLabel index={1} className="text-slate">
            Who it&apos;s for
          </SectionLabel>
          <Reveal as="h2" id="for-title" className="h-section mt-8 max-w-[16ch]">
            Built for every kind of <span className="italic">school.</span>
          </Reveal>
          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {schoolTypes.map((t, i) => (
              <Reveal key={t.title} delay={i * 80} className="flex flex-col justify-between gap-16 rounded-[14px] border border-line bg-chalk p-7">
                <span className="label-mono text-slate">{pad2(i + 1)}</span>
                <div>
                  <h3 className="font-display text-[2rem] leading-none">{t.title}</h3>
                  <p className="mt-3 text-[15px] text-ink/70">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modules in detail */}
      <Defer>
      <section id="modules" aria-labelledby="modules-detail-title" className="bg-paper pb-[clamp(80px,11vw,176px)]">
        <div className="container-x">
          <div className="border-t border-line pt-16">
            <SectionLabel index={2} className="text-slate">
              Every module, in detail
            </SectionLabel>
            <Reveal as="h2" id="modules-detail-title" className="h-section mt-8 max-w-[18ch]">
              Pick what you need now. <span className="italic">Add the rest</span> as you grow.
            </Reveal>
          </div>
          <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
            {schoolModules.map((m, i) => (
              <article key={m.id} id={m.id} className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-12 lg:gap-8">
                <Reveal className={i % 2 ? "lg:order-2 lg:col-span-5 lg:col-start-8" : "lg:col-span-5"}>
                  <p className="label-mono text-slate">Module {pad2(i + 1)}</p>
                  <h3 className="mt-4 font-display text-[clamp(2.4rem,4vw,3.6rem)] leading-[0.98]">{m.title}</h3>
                  <p className="mt-5 text-ink/75">{m.body}</p>
                  <ul className="mt-7 grid gap-x-6 gap-y-2.5 border-t border-line pt-6 text-[15px] sm:grid-cols-2">
                    {m.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check className="mt-1 size-4 shrink-0 text-ivy" aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={120} className={i % 2 ? "lg:order-1 lg:col-span-6" : "lg:col-span-6 lg:col-start-7"}>
                  <ModulePanel id={m.id} />
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      </Defer>
      {/* Built for Nigerian schools */}
      <section aria-labelledby="ng-title" className="grain section-y relative bg-ivy text-paper">
        <div className="container-x relative z-10">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionLabel index={3} className="text-paper/70" tone="edge">
                Built for Nigerian schools
              </SectionLabel>
              <Reveal as="h2" id="ng-title" className="h-section mt-8">
                Designed for the phones, networks and payments <span className="italic">parents actually use.</span>
              </Reveal>
            </div>
          </div>
          <div className="mt-16 grid border-t border-paper/15 sm:grid-cols-2 lg:grid-cols-3">
            {builtForNigeria.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 80} className="border-b border-paper/15 py-8 sm:pr-8 lg:[&:not(:nth-child(3n))]:border-r lg:[&:not(:nth-child(3n+1))]:pl-8">
                <span className="label-mono text-paper/60">{pad2(i + 1)}</span>
                <h3 className="mt-4 font-display text-[2rem] leading-none">{b.title}</h3>
                <p className="mt-3 text-[15px] text-paper/75">{b.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sample site structure */}
      <section aria-labelledby="structure-title" className="section-y bg-paper">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionLabel index={4} className="text-slate">
                Sample site structure
              </SectionLabel>
              <Reveal as="h2" id="structure-title" className="h-section mt-8 max-w-[14ch]">
                A clear map parents can <span className="italic">find their way</span> around.
              </Reveal>
            </div>
            <p className="self-end text-ink/70 lg:col-span-4 lg:col-start-9">
              A typical Standard or Premium school site. We shape the final structure around your school in the Discover step.
            </p>
          </div>
          <Reveal className="mt-16">
            <div className="flex justify-center">
              <span className="rounded-full bg-ink px-5 py-2.5 font-mono text-sm text-paper">greenfieldacademy.edu.ng</span>
            </div>
            <div className="mx-auto hidden h-8 w-px bg-ink/25 lg:block" aria-hidden />
            <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
              <div className="absolute left-[8.33%] right-[8.33%] top-0 hidden h-px bg-ink/25 lg:block" aria-hidden />
              {siteStructure.map((s) => (
                <div key={s.title} className="relative lg:pt-8">
                  <span className="absolute left-1/2 top-0 hidden h-8 w-px bg-ink/25 lg:block" aria-hidden />
                  <div className="rounded-[14px] border border-line bg-chalk p-5">
                    <p className="font-display text-2xl">{s.title}</p>
                    <ul className="mt-3 space-y-1.5 text-[14px] text-ink/70">
                      {s.children.map((c) => (
                        <li key={c} className="flex items-center gap-2">
                          <span className="h-px w-3 bg-ink/30" aria-hidden />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4">
            <Button href="/contact?need=website">Plan my school&apos;s site</Button>
            <TextLink href="/school-software">Connect it to school software</TextLink>
          </div>
        </div>
      </section>

      <Defer><PricingTeaser index={5} /></Defer>
      <Defer><FaqSection items={schoolFaq} index={6} title="School website questions" /></Defer>
      <Defer><BigCta title="Let's open your school's *front gate* online." /></Defer>
    </>
  );
}
