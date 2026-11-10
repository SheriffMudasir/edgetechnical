import { BrowserFrame } from "@/components/mockups/BrowserFrame";
import { PhoneFrame } from "@/components/mockups/PhoneFrame";
import { ReportCardPreview } from "@/components/mockups/ReportCardPreview";
import { MiniSite } from "@/components/sections/home/PillarVisuals";
import type { CaseStudy } from "@/content/work";
import { cn } from "@/lib/utils";

function CrestviewSite() {
  return (
    <div className="aspect-[16/10] bg-[#10213A] p-[5cqw] text-paper" aria-hidden>
      <div className="flex items-center justify-between">
        <span className="font-display text-[3.4cqw]">Crestview College</span>
        <span className="rounded-full border border-paper/30 px-[2.4cqw] py-[1cqw] text-[1.8cqw]">Portal login</span>
      </div>
      <p className="mt-[8cqw] max-w-[60cqw] font-display text-[7.4cqw] leading-[0.95]">
        Results, records and reports, <span className="italic text-[#F2C14E]">in one place.</span>
      </p>
    </div>
  );
}

/** Coded case-study covers (no stock photos). */
export function CaseCover({ cover, className }: { cover: CaseStudy["cover"]; className?: string }) {
  if (cover === "studywise") {
    return (
      <div className={cn("relative flex items-center justify-center overflow-hidden bg-ivy", className)}>
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={{ background: "radial-gradient(60% 60% at 50% 40%, rgba(143,211,176,0.35), rgba(31,77,58,0))" }}
        />
        <div className="relative w-[46%] max-w-[230px] translate-y-[18%]">
          <PhoneFrame offline>
            <div className="flex h-full flex-col gap-2 px-3 pt-2 text-[11px] leading-snug" aria-hidden>
              <p className="label-mono text-[9px] text-slate">Physics · Offline</p>
              <p className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-ink px-2.5 py-1.5 text-paper">
                Why does a stone fall faster than a feather?
              </p>
              <p className="max-w-[85%] rounded-2xl rounded-bl-md border border-line bg-chalk px-2.5 py-1.5">
                What would happen in a tube with no air?
              </p>
            </div>
          </PhoneFrame>
        </div>
      </div>
    );
  }
  if (cover === "report") {
    return (
      <div className={cn("relative flex items-center justify-center overflow-hidden bg-paper-2", className)}>
        <div className="w-[52%] max-w-[300px] translate-y-[14%] rotate-[-3deg]">
          <ReportCardPreview compact />
        </div>
        <div className="absolute right-[6%] top-[10%] w-[40%] max-w-[220px] rotate-[4deg]">
          <BrowserFrame url="portal.crestview.edu.ng">
            <CrestviewSite />
          </BrowserFrame>
        </div>
      </div>
    );
  }
  if (cover === "crestview") {
    return (
      <div className={cn("flex items-center justify-center bg-[#10213A] p-[8%]", className)}>
        <BrowserFrame url="crestviewcollege.edu.ng" className="w-full" tone="dark">
          <CrestviewSite />
        </BrowserFrame>
      </div>
    );
  }
  return (
    <div className={cn("flex items-end justify-center overflow-hidden bg-[#DDE6DF] px-[9%] pt-[9%]", className)}>
      <div className="w-full translate-y-[6%]">
        <MiniSite />
      </div>
    </div>
  );
}
