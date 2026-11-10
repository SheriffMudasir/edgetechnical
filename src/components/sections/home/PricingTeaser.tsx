import { tiers, pricingIsPlaceholder } from "@/content/pricing";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { TierCard } from "@/components/pricing/TierCard";

export function PricingTeaser({ index = 9 }: { index?: number }) {
  return (
    <section aria-labelledby="pricing-title" className="grain section-y relative bg-ink text-paper">
      <div className="container-x relative z-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionLabel index={index} className="text-mist" tone="edge">
              Packages
            </SectionLabel>
            <Reveal as="h2" id="pricing-title" className="h-section mt-8 max-w-[14ch]">
              Clear packages you can plan a <span className="italic">term</span> around.
            </Reveal>
          </div>
          <div className="max-w-sm space-y-4">
            <p className="text-paper/70">
              One-off build prices with hosting included for the first year.
              {pricingIsPlaceholder && " Prices shown are indicative while we finalise our 2026 rates."}
            </p>
            <TextLink href="/pricing" className="text-paper">
              Compare all packages
            </TextLink>
          </div>
        </div>
        <div className="mt-14 grid gap-4 md:mt-20 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.key} delay={i * 90} className="flex">
              <TierCard tier={t} className="w-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
