import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";
import { TextLink } from "@/components/ui/Button";
import { EdgeMark } from "@/components/ui/EdgeMark";
import { BigCta } from "@/components/sections/shared/BigCta";
import { team, values } from "@/content/people";
import { company } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { pad2 } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "About Edgetechnical",
  description:
    "Edgetechnical Solutions Limited is a software agency for education technology, founded in 2026 in Abuja (CAC RC 9259130). We build school websites, school software and AI for learning.",
  path: "/about",
  ogTitle: "We build the digital campus.",
  ogLabel: "About",
});

export default function AboutPage() {
  const registration = [
    ["Legal name", company.legalName],
    ["Registration", `${company.rcNumber}`],
    ["Registered with", company.registeredWith],
    ["Company type", company.companyType],
    ["Incorporated", `${company.incorporated}, ${company.city}`],
  ];

  return (
    <>
      <PageHero
        label="About"
        title="We build the digital *campus.*"
        sub="Edgetechnical is a software agency for education technology, based in Abuja. Everything we build serves learning, schools and students."
      />

      {/* Story */}
      <section aria-labelledby="story-title" className="bg-paper pb-[clamp(80px,11vw,176px)]">
        <div className="container-x grid gap-12 border-t border-line pt-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index={1} className="text-slate">
              Our story
            </SectionLabel>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal as="h2" id="story-title" className="font-display text-[clamp(2.2rem,4vw,3.75rem)] leading-[1.02]">
              We started by building for students. Then we saw how much schools <span className="italic text-ivy">needed better technology too.</span>
            </Reveal>
            <div className="prose-edge mt-10 text-ink/80">
              <p>
                Edgetechnical began with StudyWise AI, our own exam-prep app for Nigerian students. Building it meant solving hard,
                very Nigerian problems: networks that drop, phones with little storage, data that costs real money, and students who
                deserve a tutor that teaches rather than tells.
              </p>
              <p>
                As we worked with students, we kept meeting the schools around them, and we saw the same story again and again:
                excellent teachers and proud communities, let down by dated websites, paper admissions, and results and fees managed
                over WhatsApp.
              </p>
              <p>
                So in February 2026 we incorporated {company.legalName} in {company.city} to do one thing well: build the digital
                campus. The website is the front gate, the school software is the engine room, and AI is the private tutor in every
                student&apos;s pocket.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section aria-labelledby="mission-title" className="grain section-y relative bg-ivy text-paper">
        <div className="container-x relative z-10 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SectionLabel index={2} className="text-paper/70" tone="edge">
              Mission
            </SectionLabel>
          </div>
          <Reveal as="p" id="mission-title" className="font-display text-[clamp(2.4rem,5vw,4.75rem)] leading-[1] lg:col-span-9">
            To give every school in Nigeria, and across Africa, technology that makes it look as good as it teaches, and helps every
            student <span className="italic">learn better.</span>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section aria-labelledby="values-title" className="section-y bg-paper">
        <div className="container-x">
          <SectionLabel index={3} className="text-slate">
            Values
          </SectionLabel>
          <h2 id="values-title" className="sr-only">
            Our values
          </h2>
          <div className="mt-12 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className="border-b border-line py-8 sm:pr-8 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0">
                <span className="label-mono text-slate">{pad2(i + 1)}</span>
                <h3 className="mt-6 font-display text-[2.6rem] leading-none">{v.title}</h3>
                <p className="mt-3 text-[15px] text-ink/70">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section aria-labelledby="team-title" className="bg-paper pb-[clamp(80px,11vw,176px)]">
        <div className="container-x">
          <div className="border-t border-line pt-16">
            <SectionLabel index={4} className="text-slate">
              Team
            </SectionLabel>
            <h2 id="team-title" className="mt-6 font-display text-[clamp(2.2rem,3.6vw,3.4rem)] leading-none">
              The people behind the work
            </h2>
          </div>
          {/* TODO(owner): replace placeholder team cards in content/people.ts */}
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal as="li" key={`${m.role}-${i}`} delay={i * 80}>
                <div className="flex aspect-[4/5] items-end rounded-[14px] border border-dashed border-ink/20 bg-paper-2/60 p-6">
                  {m.placeholder && <span className="label-mono text-[11px] text-slate">Photo coming soon</span>}
                </div>
                <p className="mt-4 text-lg font-semibold">{m.placeholder ? m.role : m.name}</p>
                <p className="text-[15px] text-ink/65">{m.placeholder ? "Profile coming soon" : m.role}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Registration */}
      <section aria-labelledby="reg-title" className="grain relative bg-ink py-[clamp(72px,9vw,140px)] text-paper">
        <div className="container-x relative z-10 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel index={5} className="text-mist" tone="edge">
              Company registration
            </SectionLabel>
            <h2 id="reg-title" className="mt-6 font-display text-[clamp(2.2rem,3.6vw,3.4rem)] leading-[1.02]">
              A registered Nigerian company. <span className="italic">Check us out.</span>
            </h2>
            <p className="mt-6 max-w-[44ch] text-paper/70">
              Trust matters when you hand over your school&apos;s website and data. You can verify our registration with the
              Corporate Affairs Commission using our RC number.
            </p>
            <TextLink href="/contact" className="mt-6 text-paper">
              Ask us anything
            </TextLink>
          </div>
          <dl className="self-end rounded-[14px] border border-line-inv lg:col-span-6 lg:col-start-7">
            {registration.map(([k, v], i) => (
              <div key={k} className={`grid gap-1 px-6 py-5 sm:grid-cols-[11rem_1fr] sm:gap-6 ${i > 0 ? "border-t border-line-inv" : ""}`}>
                <dt className="label-mono text-[11px] text-mist">{k}</dt>
                <dd className="flex items-center gap-2">
                  {k === "Registration" && <EdgeMark className="size-2.5" />}
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <BigCta />
    </>
  );
}
