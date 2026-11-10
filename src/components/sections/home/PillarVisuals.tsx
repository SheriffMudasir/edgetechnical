import { Crest } from "@/components/mockups/SchoolSiteMockup";
import { ReportCardPreview } from "@/components/mockups/ReportCardPreview";

export function MiniSite() {
  return (
    <div className="@container overflow-hidden rounded-[10px] border border-line bg-[#FBF9F4] shadow-[0_20px_40px_-20px_rgba(14,17,22,0.3)]" aria-hidden>
      <div className="flex items-center gap-1 border-b border-line bg-paper-2/60 px-2.5 py-1.5">
        <span className="size-1.5 rounded-full bg-ink/15" />
        <span className="size-1.5 rounded-full bg-ink/15" />
        <span className="size-1.5 rounded-full bg-edge/80" />
      </div>
      <div className="flex items-center justify-between px-[5cqw] py-[3cqw]">
        <span className="flex items-center gap-[1.5cqw]">
          <Crest className="h-[6cqw] w-[5cqw]" />
          <span className="font-display text-[4cqw]">Greenfield</span>
        </span>
        <span className="rounded-full bg-ivy px-[3cqw] py-[1.2cqw] text-[2.6cqw] text-paper">Apply</span>
      </div>
      <div className="px-[5cqw] pb-[5cqw]">
        <p className="font-display text-[9cqw] leading-[0.95]">
          Where curious minds <span className="italic text-ivy">grow.</span>
        </p>
        <div className="mt-[3cqw] grid grid-cols-3 gap-[2cqw] text-[2.6cqw]">
          {["Admissions", "Results", "Pay fees"].map((t) => (
            <span key={t} className="rounded-[1.5cqw] border border-line px-[2cqw] py-[2cqw] font-medium">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MiniReport() {
  return (
    <div className="mx-auto w-[78%] rotate-[-2deg]" aria-hidden>
      <ReportCardPreview compact />
    </div>
  );
}

export function MiniChat() {
  return (
    <div className="space-y-2 text-[13px] leading-snug" aria-hidden>
      <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-ink px-3 py-2 text-paper">
        How do I find the area of a trapezium?
      </p>
      <p className="w-fit max-w-[85%] rounded-2xl rounded-bl-md border border-line bg-chalk px-3 py-2">
        Let&apos;s work it out. If you cut it into a rectangle and two triangles, what would you add up?
      </p>
      <p className="label-mono flex items-center gap-1.5 text-[10px] text-slate">
        <span className="size-1.5 rounded-full bg-ivy" /> StudyWise AI · works offline
      </p>
    </div>
  );
}
