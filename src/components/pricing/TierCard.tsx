import Link from "next/link";
import { Check } from "lucide-react";
import type { Tier } from "@/content/pricing";
import { pricingIsPlaceholder } from "@/content/pricing";
import { buttonClasses, ButtonArrow } from "@/components/ui/Button";
import { cn, naira } from "@/lib/utils";

/** Package card. `tone` adapts to ink or paper sections. */
export function TierCard({
  tier,
  tone = "ink",
  className,
  headingAs: H = "h3",
}: {
  tier: Tier;
  tone?: "ink" | "paper";
  className?: string;
  headingAs?: "h2" | "h3";
}) {
  const hl = Boolean(tier.highlight);
  const onInk = tone === "ink";
  return (
    <article
      className={cn(
        "relative flex flex-col rounded-[14px] border p-7 md:p-8",
        hl
          ? "border-edge bg-paper text-ink"
          : onInk
            ? "border-line-inv bg-ink-2 text-paper"
            : "border-line bg-chalk text-ink",
        className,
      )}
    >
      {hl && (
        <span className="label-mono absolute -top-3 left-7 rounded-full bg-edge px-3 py-1.5 text-[10px] text-ink md:left-8">
          {tier.highlight}
        </span>
      )}
      <H className="font-display text-[2.4rem] leading-none">{tier.name}</H>
      <p className={cn("mt-4 min-h-[3.2em] text-[15px] leading-snug", hl ? "text-ink/70" : onInk ? "text-paper/65" : "text-ink/70")}>
        {tier.blurb}
      </p>
      <p className="mt-8 flex items-baseline gap-2">
        <span className={cn("label-mono", hl ? "text-slate" : onInk ? "text-mist" : "text-slate")}>from</span>
        <span className="font-display text-5xl tracking-tight">{naira(tier.price)}</span>
      </p>
      <p className={cn("label-mono mt-2 text-[11px]", hl ? "text-slate" : onInk ? "text-mist" : "text-slate")}>
        {tier.priceNote} · {tier.launch}
        {pricingIsPlaceholder && " · indicative"}
      </p>
      <ul className={cn("mt-8 space-y-3 border-t pt-6 text-[15px]", hl ? "border-line" : onInk ? "border-line-inv" : "border-line")}>
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <Check className={cn("mt-1 size-4 shrink-0", hl ? "text-ivy" : onInk ? "text-edge" : "text-ivy")} aria-hidden />
            {f}
          </li>
        ))}
      </ul>
      <Link
        href={`/contact?package=${tier.key}`}
        className={cn(buttonClasses(hl ? "primary" : onInk ? "outline-inv" : "outline", "md"), "mt-10 w-full")}
      >
        Choose {tier.name}
        <ButtonArrow />
      </Link>
    </article>
  );
}
