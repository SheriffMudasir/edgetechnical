import { commitments } from "@/content/home";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";

export function Numbers() {
  return (
    <section aria-labelledby="numbers-title" className="bg-paper pb-[clamp(80px,10vw,160px)] pt-[clamp(80px,11vw,176px)]">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel index={5} className="text-slate">
              Our commitments
            </SectionLabel>
            <h2 id="numbers-title" className="mt-6 max-w-[20ch] font-display text-[clamp(2rem,3.4vw,3.25rem)] leading-[1.02]">
              We&apos;re new, so we&apos;ll show you <span className="italic">promises</span>, not vanity numbers.
            </h2>
          </div>
        </div>
        <dl className="mt-14 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((c, i) => (
            <Reveal
              key={c.label}
              delay={i * 80}
              className="flex flex-col justify-between gap-10 border-b border-line py-8 sm:px-6 sm:[&:nth-child(odd)]:pl-0 lg:border-b-0 lg:border-r lg:py-10 lg:first:pl-0 lg:last:border-r-0 lg:[&:nth-child(odd)]:pl-6 lg:[&:first-child]:pl-0"
            >
              <dt className="order-2 max-w-[24ch] text-[15px] leading-snug text-ink/70">{c.label}</dt>
              <dd className="order-1 font-display text-[clamp(4rem,7vw,6.5rem)] leading-[0.85] tracking-[-0.03em]">
                <CountUp to={c.value} prefix={c.prefix} suffix={c.suffix} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
