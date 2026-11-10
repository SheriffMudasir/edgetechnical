import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/sections/shared/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button, TextLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { SchoolAssistantChat } from "@/components/mockups/SchoolAssistantChat";
import { BigCta } from "@/components/sections/shared/BigCta";
import { aiPage } from "@/content/ai";
import { pageMetadata } from "@/lib/seo";
import { pad2 } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "AI for schools in Nigeria",
  description:
    "Responsible AI for Nigerian schools: AI exam prep and tutoring (StudyWise AI), AI tools for teachers, AI admissions assistants for school websites, and custom AI for education organisations.",
  path: "/ai",
  ogTitle: "AI that helps students learn and teachers teach.",
  ogLabel: "AI for learning",
});

export default function AiPage() {
  return (
    <>
      <PageHero label={aiPage.hero.label} title={aiPage.hero.title} sub={aiPage.hero.sub}>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <Magnetic>
            <Button href="/contact?need=ai" size="lg">
              Talk to us about AI
            </Button>
          </Magnetic>
          <TextLink href="#demo">Try the demo</TextLink>
        </div>
      </PageHero>

      {/* Groups */}
      {aiPage.groups.map((g, gi) => (
        <section key={g.id} id={g.id} aria-labelledby={`${g.id}-title`} className="scroll-mt-16 bg-paper pb-[clamp(64px,8vw,128px)]">
          <div className="container-x grid gap-10 border-t border-line pt-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionLabel index={gi + 1} className="text-slate">
                {g.label}
              </SectionLabel>
              <Reveal as="h2" id={`${g.id}-title`} className="mt-6 font-display text-[clamp(2.2rem,3.6vw,3.4rem)] leading-[1]">
                {g.title}
              </Reveal>
              {g.id === "students" && (
                <Link
                  href="/products/studywise"
                  className="group mt-8 flex items-center justify-between rounded-[14px] bg-ivy p-5 text-paper"
                >
                  <span>
                    <span className="label-mono block text-[10px] text-paper/70">Featuring our own product</span>
                    <span className="font-display text-2xl">
                      StudyWise <span className="italic">AI</span>
                    </span>
                  </span>
                  <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                </Link>
              )}
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
              {g.items.map((it, i) => (
                <Reveal key={it.title} delay={i * 80} className="rounded-[14px] border border-line bg-chalk p-6">
                  <span className="label-mono text-slate">{pad2(i + 1)}</span>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">{it.title}</h3>
                  <p className="mt-2 text-[15px] text-ink/70">{it.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Interactive demo */}
      <section id="demo" aria-labelledby="demo-title" className="grain section-y relative scroll-mt-16 bg-ink text-paper">
        <div className="container-x relative z-10 grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel index={4} className="text-mist" tone="edge">
              Try it
            </SectionLabel>
            <Reveal as="h2" id="demo-title" className="h-section mt-8">
              An admissions office that <span className="italic">never closes.</span>
            </Reveal>
            <p className="mt-6 text-paper/75">
              Parents ask the same questions every admissions season, usually at night. An AI assistant on your website answers
              from your school&apos;s own information, 24/7, and passes warm leads to your team in the morning.
            </p>
            <p className="mt-4 text-paper/75">
              Try asking: <em className="not-italic text-paper">&ldquo;When does admission close?&rdquo;</em> or{" "}
              <em className="not-italic text-paper">&ldquo;How much are school fees?&rdquo;</em>
            </p>
          </div>
          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <SchoolAssistantChat />
          </Reveal>
        </div>
      </section>

      {/* Custom AI */}
      <section id="custom" aria-labelledby="custom-title" className="section-y scroll-mt-16 bg-paper">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionLabel index={5} className="text-slate">
              Custom AI
            </SectionLabel>
            <Reveal as="h2" id="custom-title" className="h-section mt-8">
              {aiPage.custom.title.replace("education", "")}
              <span className="italic">education.</span>
            </Reveal>
            <p className="mt-6 max-w-[52ch] text-ink/75">{aiPage.custom.body}</p>
            <div className="mt-10">
              <Button href="/contact?need=ai">Discuss a custom project</Button>
            </div>
          </div>
          <ol className="self-end lg:col-span-5 lg:col-start-8">
            {aiPage.custom.points.map((p, i) => (
              <Reveal as="li" key={p} delay={i * 70} className="flex items-baseline gap-5 border-t border-line py-5 last:border-b">
                <span className="label-mono text-slate">{pad2(i + 1)}</span>
                <span className="font-display text-3xl">{p}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Responsible AI */}
      <section aria-labelledby="responsible-title" className="grain section-y relative bg-ivy text-paper">
        <div className="container-x relative z-10">
          <SectionLabel index={6} className="text-paper/70" tone="edge">
            Responsible AI
          </SectionLabel>
          <Reveal as="h2" id="responsible-title" className="h-section mt-8 max-w-[18ch]">
            Calm, careful AI that schools and parents can <span className="italic">trust.</span>
          </Reveal>
          <div className="mt-14 grid gap-3 md:grid-cols-2">
            {aiPage.responsible.map((r, i) => (
              <Reveal key={r.title} delay={(i % 2) * 80} className="rounded-[14px] border border-paper/15 p-7">
                <Check className="size-5 text-edge" aria-hidden />
                <h3 className="mt-5 font-display text-[2rem] leading-none">{r.title}</h3>
                <p className="mt-3 text-paper/75">{r.body}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-sm text-paper/70">
            Read how we handle data in our{" "}
            <Link href="/privacy" className="underline underline-offset-4">
              privacy policy
            </Link>
            .
          </p>
        </div>
      </section>

      <BigCta title="Bring *calm, useful* AI to your school." button="Talk to us about AI" href="/contact?need=ai" />
    </>
  );
}
