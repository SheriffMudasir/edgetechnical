import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/shared/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { Pill } from "@/components/ui/Pill";
import { BigCta } from "@/components/sections/shared/BigCta";
import { otherServices, pillarServices, pillars, type ServiceRow } from "@/content/services";
import { pageMetadata } from "@/lib/seo";
import { cn, pad2 } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "School websites and portals, school management software and AI for learning, plus web apps, business websites, mobile apps, UI/UX design and hosting from Edgetechnical, Abuja.",
  path: "/services",
  ogTitle: "Websites, software and AI for education.",
  ogLabel: "Services",
});

function Row({ s, i, quiet }: { s: ServiceRow; i: number; quiet?: boolean }) {
  return (
    <Reveal as="article" className="grid gap-6 border-b border-line py-10 md:grid-cols-12 md:gap-8">
      <span className="label-mono text-slate md:col-span-1">{pad2(i + 1)}</span>
      <div className="md:col-span-5">
        <h3 className={cn("font-display leading-[1.02]", quiet ? "text-[2rem]" : "text-[clamp(2.2rem,3.6vw,3.2rem)]")}>
          {s.href ? (
            <Link href={s.href} className="group inline-flex items-start gap-2">
              <span className="link-draw">{s.title}</span>
              <ArrowUpRight className="mt-2 size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </Link>
          ) : (
            s.title
          )}
        </h3>
        <p className="mt-4 max-w-[46ch] text-ink/70">{s.description}</p>
      </div>
      <div className="md:col-span-4 md:col-start-7">
        <p className="label-mono text-[11px] text-slate">What&apos;s included</p>
        <ul className="mt-3 space-y-1.5 text-[15px]">
          {s.included.map((x) => (
            <li key={x} className="flex items-center gap-2.5">
              <span className="size-1.5 rounded-full bg-ivy" aria-hidden />
              {x}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:col-span-2 md:text-right">
        <p className="label-mono text-[11px] text-slate">Typical timeline</p>
        <p className="mt-2 font-display text-2xl">{s.timeline}</p>
      </div>
    </Reveal>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Websites, software and AI for *education.*"
        sub="Three pillars, one partner. Schools are our centre of gravity, and we also build for businesses and organisations that want the same care."
      >
        <div className="flex flex-wrap gap-2">
          {pillars.map((p) => (
            <a key={p.key} href={`#${p.key}`} className="rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-ink hover:bg-ink hover:text-paper">
              {p.name}
            </a>
          ))}
        </div>
      </PageHero>

      <section aria-labelledby="pillars-title" className="bg-paper pb-[clamp(80px,11vw,176px)]">
        <div className="container-x">
          <div className="border-t border-line pt-16">
            <SectionLabel index={1} className="text-slate">
              The digital campus
            </SectionLabel>
            <h2 id="pillars-title" className="sr-only">
              Our three pillars
            </h2>
          </div>
          <div className="mt-8 border-t border-line">
            {pillarServices.map((s, i) => (
              <div key={s.title} id={pillars[i].key} className="scroll-mt-24">
                <div className="flex items-center gap-3 pt-8">
                  <Pill tone={i === 0 ? "ivy" : "line"}>{pillars[i].name}</Pill>
                  {i === 0 && <Pill tone="edge">Flagship</Pill>}
                </div>
                <Row s={s} i={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="also-title" className="border-t border-line bg-paper-2/50 py-[clamp(80px,10vw,150px)]">
        <div className="container-x">
          <SectionLabel index={2} className="text-slate">
            We also build
          </SectionLabel>
          <Reveal as="h2" id="also-title" className="mt-6 max-w-[22ch] font-display text-[clamp(2rem,3.4vw,3rem)] leading-[1.02]">
            The same craft, for businesses and organisations <span className="italic">beyond schools.</span>
          </Reveal>
          <div className="mt-10 border-t border-line">
            {otherServices.map((s, i) => (
              <Row key={s.title} s={s} i={i} quiet />
            ))}
          </div>
          <div className="mt-12">
            <Button href="/contact?need=other" variant="dark">
              Tell us about your project
            </Button>
          </div>
        </div>
      </section>

      <BigCta />
    </>
  );
}
