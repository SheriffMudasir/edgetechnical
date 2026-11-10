import { whyUs } from "@/content/home";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";
import { pad2 } from "@/lib/utils";

export function WhyUs() {
  return (
    <section aria-labelledby="why-title" className="section-y bg-paper">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionLabel index={8} className="text-slate">
              Why Edgetechnical
            </SectionLabel>
            <Reveal as="h2" id="why-title" className="h-section mt-8">
              Education is our <span className="italic">core.</span>
            </Reveal>
          </div>
        </div>
        <ol className="lg:col-span-7 lg:col-start-6">
          {whyUs.map((w, i) => (
            <Reveal
              as="li"
              key={w.title}
              className="group grid grid-cols-[4.5rem_1fr] gap-4 border-t border-line py-8 last:border-b md:grid-cols-[7rem_1fr] md:py-10"
            >
              <span className="font-mono text-4xl leading-none tracking-tight text-ink/25 transition-colors duration-500 group-hover:text-edge md:text-6xl">
                {pad2(i + 1)}
              </span>
              <div>
                <h3 className="font-display text-[2rem] leading-[1.05] md:text-[2.4rem]">{w.title}</h3>
                <p className="mt-3 max-w-[52ch] text-ink/70">{w.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
