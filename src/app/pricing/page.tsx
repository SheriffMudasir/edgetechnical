import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";
import { PageHero } from "@/components/sections/shared/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button, TextLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { TierCard } from "@/components/pricing/TierCard";
import { QuoteEstimator } from "@/components/pricing/QuoteEstimator";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { BigCta } from "@/components/sections/shared/BigCta";
import { comparison, extras, maintenance, pricingIsPlaceholder, tiers } from "@/content/pricing";
import { pageMetadata } from "@/lib/seo";
import { naira } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Pricing — school website packages",
  description:
    "Clear school website packages (Starter, Standard, Premium), a monthly care plan, school management system and AI add-ons. Build an instant indicative quote for your school.",
  path: "/pricing",
  ogTitle: "Clear packages you can plan a term around.",
  ogLabel: "Pricing",
});

const pricingFaq = [
  {
    q: "Are these prices final?",
    a: "They're indicative starting points. Every school is different, so we confirm a fixed quote in writing after a short call. No surprises later.",
  },
  {
    q: "Can we pay in instalments?",
    a: "Yes. Most schools pay a deposit to start and the balance at launch. For larger projects we can spread payments across milestones.",
  },
  {
    q: "What happens after the first year?",
    a: "Hosting and domain renew yearly. You can stay on our Care plan for hosting, updates and support, or move your site elsewhere. You own it.",
  },
  {
    q: "Can we start with Starter and upgrade later?",
    a: "Absolutely. Modules like admissions, results and payments plug into your existing site whenever you're ready.",
  },
];

function Cell({ v }: { v: boolean | string }) {
  if (v === true) return <Check className="mx-auto size-4 text-ivy" aria-label="Included" />;
  if (v === false) return <Minus className="mx-auto size-4 text-ink/25" aria-label="Not included" />;
  return <span className="text-[14px]">{v}</span>;
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        label="Pricing"
        title="Clear packages you can plan a *term* around."
        sub={
          <>
            One-off build prices with hosting included for the first year.{" "}
            {pricingIsPlaceholder && <span className="text-slate">Prices shown are indicative while we finalise our 2026 rates.</span>}
          </>
        }
      >
        <TextLink href="#estimator">Build your quote</TextLink>
      </PageHero>

      {/* Tiers */}
      <section aria-label="Website packages" className="bg-paper pb-24">
        <div className="container-x grid gap-4 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.key} delay={i * 90} className="flex">
              <TierCard tier={t} tone="paper" headingAs="h2" className="w-full" />
            </Reveal>
          ))}
        </div>
        <div className="container-x mt-4">
          <Reveal className="grid gap-6 rounded-[14px] border border-line bg-chalk p-7 md:grid-cols-12 md:items-center md:p-8">
            <div className="md:col-span-4">
              <p className="label-mono text-slate">Enterprise / Custom</p>
              <h2 className="mt-2 font-display text-3xl">{extras.enterprise.title.split(" / ")[0]} &amp; custom</h2>
            </div>
            <p className="text-ink/70 md:col-span-5">{extras.enterprise.body}</p>
            <div className="md:col-span-3 md:text-right">
              <Button href="/contact?need=other" variant="dark">
                Talk to us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Comparison */}
      <section aria-labelledby="compare-title" className="bg-paper pb-[clamp(80px,10vw,150px)]">
        <div className="container-x">
          <div className="border-t border-line pt-16">
            <SectionLabel index={1} className="text-slate">
              Compare packages
            </SectionLabel>
            <h2 id="compare-title" className="mt-6 font-display text-[clamp(2.2rem,3.6vw,3.4rem)] leading-none">
              What&apos;s in each package
            </h2>
          </div>
          <div className="no-scrollbar mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <caption className="sr-only">Feature comparison of Starter, Standard and Premium packages</caption>
              <thead>
                <tr className="border-b border-ink">
                  <th scope="col" className="py-4 pr-4 text-[14px] font-medium text-slate">
                    Feature
                  </th>
                  {tiers.map((t) => (
                    <th key={t.key} scope="col" className="w-[18%] py-4 text-center">
                      <span className="font-display text-2xl">{t.name}</span>
                      <span className="block font-mono text-[11px] text-slate">from {naira(t.price)}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-b border-line">
                    <th scope="row" className="py-3.5 pr-4 text-[15px] font-normal">
                      {row.feature}
                    </th>
                    {row.values.map((v, i) => (
                      <td key={i} className={i === 1 ? "bg-edge/[0.06] py-3.5 text-center" : "py-3.5 text-center"}>
                        <Cell v={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Care plan + extras */}
      <section aria-labelledby="extras-title" className="grain section-y relative bg-ink text-paper">
        <div className="container-x relative z-10">
          <SectionLabel index={2} className="text-mist" tone="edge">
            Beyond the website
          </SectionLabel>
          <Reveal as="h2" id="extras-title" className="h-section mt-8 max-w-[16ch]">
            Care, software and <span className="italic">AI add-ons.</span>
          </Reveal>
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            <Reveal className="flex flex-col rounded-[14px] bg-paper p-7 text-ink md:p-8">
              <p className="label-mono text-slate">Monthly maintenance</p>
              <h3 className="mt-3 font-display text-[2.4rem] leading-none">{maintenance.name}</h3>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-5xl">{naira(maintenance.price)}</span>
                <span className="text-slate">{maintenance.period}</span>
              </p>
              <ul className="mt-6 flex-1 space-y-2.5 border-t border-line pt-5 text-[15px]">
                {maintenance.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="mt-1 size-4 shrink-0 text-ivy" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <Button href="/contact?need=website" variant="dark" className="mt-8 w-full">
                Add the Care plan
              </Button>
            </Reveal>
            <Reveal delay={90} className="flex flex-col rounded-[14px] border border-line-inv p-7 md:p-8">
              <p className="label-mono text-mist">Engine Room</p>
              <h3 className="mt-3 font-display text-[2.4rem] leading-none">{extras.sms.title}</h3>
              <p className="mt-6 font-display text-3xl text-paper/90">{extras.sms.price}</p>
              <p className="mt-4 flex-1 text-paper/70">{extras.sms.body}</p>
              <Button href="/contact?need=sms" variant="outline-inv" className="mt-8 w-full">
                Book a demo
              </Button>
            </Reveal>
            <Reveal delay={180} className="flex flex-col rounded-[14px] border border-line-inv p-7 md:p-8">
              <p className="label-mono text-mist">Study Room</p>
              <h3 className="mt-3 font-display text-[2.4rem] leading-none">{extras.ai.title}</h3>
              <ul className="mt-6 flex-1 space-y-2.5 text-[15px] text-paper/85">
                {extras.ai.items.map((x) => (
                  <li key={x} className="flex items-start gap-2.5">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-edge" aria-hidden />
                    {x}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-display text-3xl">{extras.ai.price}</p>
              <Button href="/contact?need=ai" variant="outline-inv" className="mt-6 w-full">
                Talk to us
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Estimator */}
      <section id="estimator" aria-labelledby="estimator-title" className="section-y scroll-mt-16 bg-paper">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionLabel index={3} className="text-slate">
                Build your quote
              </SectionLabel>
              <Reveal as="h2" id="estimator-title" className="h-section mt-8">
                Get an <span className="italic">instant</span> estimate.
              </Reveal>
            </div>
            <p className="self-end text-ink/70 lg:col-span-4 lg:col-start-9">
              Tick the modules you want and pick your school size. We&apos;ll carry your choices into the quote form.
            </p>
          </div>
          <div className="mt-12">
            <QuoteEstimator />
          </div>
        </div>
      </section>

      <FaqSection items={pricingFaq} index={4} title="Pricing questions" />
      <BigCta />
    </>
  );
}
