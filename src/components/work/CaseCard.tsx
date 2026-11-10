import Link from "next/link";
import type { CaseStudy } from "@/content/work";
import { CaseCover } from "./CaseCover";
import { Pill } from "@/components/ui/Pill";
import { cn } from "@/lib/utils";

export function CaseCard({ study, className, priority = false }: { study: CaseStudy; className?: string; priority?: boolean }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      data-cursor="View"
      className={cn("group block", className)}
      aria-label={`${study.title}${study.concept ? " (concept)" : ""} — ${study.kind}`}
      prefetch={priority ? true : undefined}
    >
      <div className="overflow-hidden rounded-[14px]">
        <CaseCover
          cover={study.cover}
          className="aspect-[4/3.2] transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-[2rem] leading-none">
            {study.title}
            {study.concept && <span className="italic text-slate"> (Concept)</span>}
          </h3>
          <p className="mt-2 text-[15px] text-ink/65">{study.kind}</p>
        </div>
        <Pill className="mt-1 shrink-0">{study.pillar}</Pill>
      </div>
    </Link>
  );
}
