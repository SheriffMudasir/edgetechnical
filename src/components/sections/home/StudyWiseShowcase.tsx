import { studywise } from "@/content/studywise";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button, TextLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { AITutorChat } from "@/components/mockups/AITutorChat";
import { pad2 } from "@/lib/utils";

const points = [
  { title: "Offline-first, on-device AI", body: "The tutor runs on the phone. One bar of signal, or none, is enough." },
  { title: "A Socratic tutor that teaches rather than tells", body: "It asks the next good question instead of handing over the answer." },
  { title: "Built for Nigerian exams", body: "Practice shaped around the papers Nigerian students actually sit." },
];

export function StudyWiseShowcase() {
  return (
    <section aria-labelledby="studywise-title" className="grain section-y relative overflow-hidden bg-ink text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/2 h-[900px] w-[900px] -translate-y-1/2 rounded-full opacity-90"
        style={{ background: "radial-gradient(closest-side, rgba(44,106,80,0.55), rgba(31,77,58,0.18) 55%, rgba(14,17,22,0) 100%)" }}
      />
      <div className="container-x relative z-10 grid items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionLabel className="text-mist">
            <span className="text-edge">04</span> — Our product
          </SectionLabel>
          <Reveal>
            <h2 id="studywise-title" className="h-section mt-8 max-w-[14ch]">
              We don&apos;t just build for education. We build <span className="italic text-[#8FD3B0]">our own.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-paper/75">
              <strong className="font-semibold text-paper">StudyWise AI</strong> is {studywise.oneLiner.charAt(0).toLowerCase()}
              {studywise.oneLiner.slice(1)} Building it taught us how students really learn, and that understanding goes into
              everything we make for schools.
            </p>
          </Reveal>
          <ol className="mt-10 border-t border-line-inv">
            {points.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 80} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-line-inv py-5">
                <span className="label-mono pt-1 text-mist">{pad2(i + 1)}</span>
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-1 text-[15px] text-paper/65">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          {studywise.showStats && (
            <dl className="mt-10 grid grid-cols-3 gap-6">
              {studywise.stats.map((s) => (
                <div key={s.label}>
                  <dt className="label-mono text-mist">{s.label}</dt>
                  <dd className="mt-1 font-display text-4xl">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          )}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href="/products/studywise" variant="light" size="lg">
              Explore StudyWise AI
            </Button>
            <TextLink href="/ai" className="text-paper">
              Want AI for your school?
            </TextLink>
          </div>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal className="mx-auto max-w-[340px]">
            <AITutorChat />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
