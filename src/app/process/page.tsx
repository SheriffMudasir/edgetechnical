import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/sections/shared/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";
import { ProcessTimeline } from "@/components/sections/home/ProcessTimeline";
import { BigCta } from "@/components/sections/shared/BigCta";
import { process } from "@/content/home";
import { pageMetadata } from "@/lib/seo";
import { pad2 } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "How we work",
  description:
    "Our five-step process for school websites and software: Discover, Design, Build, Launch and Support — with clear timelines and a list of what we need from your school.",
  path: "/process",
  ogTitle: "Five calm steps from first call to launch day.",
  ogLabel: "Process",
});

const weNeed = [
  { title: "Your logo", body: "In the best quality you have. If you only have a photo of it, we can redraw it." },
  { title: "Good photos", body: "Classrooms, labs, sports, events and people (with permission). We can recommend a photographer in your city." },
  { title: "Staff list", body: "Names and roles for leadership pages, and for logins if you're adding portals or school software." },
  { title: "Your content", body: "History, vision, admissions process, fees and term dates. We'll send a simple checklist and help you write it." },
  { title: "One point of contact", body: "One person who can answer questions and approve designs quickly keeps everything on schedule." },
  { title: "Domain access", body: "If you already own a domain, we'll need access to point it at your new site. If not, we'll register one in your school's name." },
];

const timeline = [
  { pkg: "Starter", weeks: "~2 weeks", detail: "Discover and Design in week 1, Build and Launch in week 2 once content is ready." },
  { pkg: "Standard", weeks: "3–4 weeks", detail: "Extra time to configure admissions and the result checker, and to train staff." },
  { pkg: "Premium", weeks: "4–6 weeks", detail: "Payments, portals and notifications need careful setup and testing with real data." },
  { pkg: "School software", weeks: "4–10 weeks", detail: "Depends on data migration from your existing records and the number of modules." },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        label="Process"
        title="Calm, clear and *on schedule.*"
        sub="Building a school website shouldn't add to your workload. Here's exactly what happens, how long it takes, and what we'll need from you."
      />

      <section aria-label="The five steps in detail" className="bg-paper pb-[clamp(80px,11vw,176px)]">
        <div className="container-x border-t border-line">
          {process.map((s, i) => (
            <Reveal as="article" key={s.title} className="grid gap-6 border-b border-line py-12 md:grid-cols-12 md:gap-8">
              <span className="font-display text-7xl leading-none text-ink/20 md:col-span-2">{pad2(i + 1)}</span>
              <div className="md:col-span-5">
                <p className="label-mono text-slate">{s.duration}</p>
                <h2 className="mt-2 font-display text-[clamp(2.4rem,4vw,3.6rem)] leading-none">{s.title}</h2>
                <p className="mt-4 max-w-[46ch] text-ink/75">{s.body}</p>
              </div>
              <div className="md:col-span-4 md:col-start-9">
                <p className="label-mono text-[11px] text-slate">Deliverables</p>
                <ul className="mt-3 space-y-2">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2.5">
                      <Check className="size-4 text-ivy" aria-hidden />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ProcessTimeline showLink={false} index={1} />

      <section aria-labelledby="need-title" className="section-y bg-paper">
        <div className="container-x">
          <SectionLabel index={2} className="text-slate">
            What we need from your school
          </SectionLabel>
          <Reveal as="h2" id="need-title" className="h-section mt-8 max-w-[16ch]">
            A short list, and we&apos;ll <span className="italic">help with all of it.</span>
          </Reveal>
          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {weNeed.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 80} className="rounded-[14px] border border-line bg-chalk p-7">
                <span className="label-mono text-slate">{pad2(i + 1)}</span>
                <h3 className="mt-6 font-display text-[2rem] leading-none">{w.title}</h3>
                <p className="mt-3 text-[15px] text-ink/70">{w.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="timeline-title" className="bg-paper pb-[clamp(80px,11vw,176px)]">
        <div className="container-x">
          <div className="border-t border-line pt-16">
            <SectionLabel index={3} className="text-slate">
              Timelines
            </SectionLabel>
            <h2 id="timeline-title" className="mt-6 font-display text-[clamp(2.2rem,3.6vw,3.4rem)] leading-none">
              How long it takes
            </h2>
          </div>
          <dl className="mt-10 border-t border-line">
            {timeline.map((t) => (
              <Reveal key={t.pkg} className="grid gap-2 border-b border-line py-6 md:grid-cols-12 md:items-baseline md:gap-8">
                <dt className="font-display text-3xl md:col-span-3">{t.pkg}</dt>
                <dd className="label-mono text-edge-deep md:col-span-2">{t.weeks}</dd>
                <dd className="text-ink/70 md:col-span-6 md:col-start-7">{t.detail}</dd>
              </Reveal>
            ))}
          </dl>
          <p className="mt-6 text-sm text-slate">Timelines start once we have your content. We&apos;ll agree exact dates at kick-off.</p>
        </div>
      </section>

      <BigCta />
    </>
  );
}
