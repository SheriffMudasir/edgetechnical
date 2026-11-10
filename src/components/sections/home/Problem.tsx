import { problem } from "@/content/home";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";
import { Emph } from "@/components/motion/SplitText";
import { pad2 } from "@/lib/utils";
import { BeforeAfter } from "./BeforeAfter";

export function Problem() {
  return (
    <section aria-labelledby="problem-title" className="section-y bg-paper">
      <div className="container-x">
        <SectionLabel index={1}className="text-slate">
          The problem
        </SectionLabel>
        <div className="mt-10 grid gap-14 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-6">
            <h2 id="problem-title" className="h-section max-w-[16ch]">
              <Emph text={problem.statement} emClassName="italic text-edge-deep" />
            </h2>
          </Reveal>
          <ol className="lg:col-span-5 lg:col-start-8">
            {problem.points.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 90} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-6 last:border-b">
                <span className="label-mono pt-1.5 text-slate">{pad2(i + 1)}</span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-1.5 text-ink/70">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal className="mt-20 grid gap-8 lg:mt-28 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <p className="label-mono text-slate">Before → after</p>
            <p className="mt-4 font-display text-3xl leading-tight">Same school. Very different first impression.</p>
            <p className="mt-4 text-ink/70">
              Toggle to see how a dated site becomes a calm, modern front gate that parents trust.
            </p>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <BeforeAfter />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
