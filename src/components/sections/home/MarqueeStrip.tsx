import { Marquee } from "@/components/motion/Marquee";
import { marqueeModules } from "@/content/site";

export function MarqueeStrip() {
  return (
    <section aria-label="School modules we build" className="grain relative overflow-hidden bg-ink py-7 text-paper md:py-9">
      <Marquee
        items={marqueeModules}
        duration={80}
        className="relative z-10 font-display text-[clamp(2rem,4.4vw,4rem)] leading-none"
        itemClassName="[&:nth-child(even)>span:first-child]:italic"
      />
    </section>
  );
}
