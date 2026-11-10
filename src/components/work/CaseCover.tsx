import { BrowserFrame } from "@/components/mockups/BrowserFrame";
import { PhoneFrame } from "@/components/mockups/PhoneFrame";
import { MiniSite } from "@/components/sections/home/PillarVisuals";
import type { CaseStudy } from "@/content/work";
import { cn } from "@/lib/utils";

const NAVY = "#13235A";
const GOLD = "#F2B321";

/** Simple shield (not the school's real crest) for the Al-Mu'minun cover. */
function Shield({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 36" className={className} aria-hidden>
      <path d="M16 1 30 6v11c0 9-6 15-14 18C8 32 2 26 2 17V6Z" fill="#fff" />
      <path d="M16 4 27 8v9c0 7.4-4.8 12.4-11 15-6.2-2.6-11-7.6-11-15V8Z" fill={NAVY} />
      <path d="M10 22c2-4 4-6 6-6s4 2 6 6" fill="none" stroke={GOLD} strokeWidth="1.6" />
      <circle cx="16" cy="12" r="2.4" fill={GOLD} />
    </svg>
  );
}

/** Code-built recreation of the Al-Mu'minun public site hero. */
function AlMuminunSite() {
  return (
    <div className="flex aspect-[16/10] flex-col text-white" style={{ background: `linear-gradient(160deg, ${NAVY}, #0B163D)` }} aria-hidden>
      <div className="flex items-center justify-between bg-white px-[4cqw] py-[2cqw] text-[#13235A]">
        <span className="flex items-center gap-[1.4cqw]">
          <Shield className="h-[4.6cqw] w-[4cqw]" />
          <span className="leading-none">
            <span className="block font-serif text-[2.4cqw] font-bold tracking-wide">AL-MU&rsquo;MINUN</span>
            <span className="block text-[1.4cqw] tracking-[0.2em]">INTERNATIONAL ACADEMY</span>
          </span>
        </span>
        <span className="rounded-[1cqw] px-[2cqw] py-[1cqw] text-[1.5cqw] font-semibold text-white" style={{ background: NAVY }}>
          Apply for 2026/2027
        </span>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center px-[6cqw] text-center">
        <span className="rounded-full border border-white/20 px-[2cqw] py-[0.8cqw] text-[1.4cqw] text-white/80">Suleja, Niger State</span>
        <p className="mt-[2.4cqw] font-serif text-[5.6cqw] font-bold leading-[1.05]">
          Excellence in <span style={{ color: GOLD }}>Faith</span>, Character &amp; Modern Learning
        </p>
        <div className="mt-[3cqw] flex gap-[1.4cqw] text-[1.5cqw] font-semibold">
          <span className="rounded-[1cqw] px-[2.4cqw] py-[1.2cqw] text-[#13235A]" style={{ background: GOLD }}>
            Apply online
          </span>
          <span className="rounded-[1cqw] border border-white/25 px-[2.4cqw] py-[1.2cqw]">Explore programs</span>
        </div>
      </div>
    </div>
  );
}

function TrackCard({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-[12px] bg-white p-3 text-[#13235A] shadow-[0_24px_50px_-20px_rgba(0,0,0,0.5)]", className)} aria-hidden>
      <p className="font-mono text-[9px] uppercase tracking-wider text-slate">Admission status</p>
      <p className="mt-1 font-mono text-[13px] font-semibold">APP/2026/0001</p>
      <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[#E8F3EC] px-2 py-0.5 text-[10px] font-medium text-[#1F4D3A]">
        <span className="size-1.5 rounded-full bg-[#1F4D3A]" /> Screening scheduled
      </p>
    </div>
  );
}

/** Code-built case-study covers (no stock photos). */
export function CaseCover({ cover, className }: { cover: CaseStudy["cover"]; className?: string }) {
  if (cover === "almuminun") {
    return (
      <div className={cn("relative flex items-center justify-center overflow-hidden px-[8%]", className)} style={{ background: "#E9ECF5" }}>
        <div className="w-full max-w-[640px] translate-y-[4%]">
          <BrowserFrame url="almuminun · school website">
            <AlMuminunSite />
          </BrowserFrame>
        </div>
        <TrackCard className="absolute bottom-[8%] right-[5%] w-[min(40%,190px)] rotate-[2deg]" />
      </div>
    );
  }
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
              <p className="label-mono text-[9px] text-slate">WAEC · Physics</p>
              <p className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-ink px-2.5 py-1.5 text-paper">
                Why does a stone fall faster than a feather?
              </p>
              <p className="max-w-[85%] rounded-2xl rounded-bl-md border border-line bg-chalk px-2.5 py-1.5">
                What would happen in a tube with no air?
              </p>
              <p className="label-mono mt-auto mb-2 text-[9px] text-slate">Baba · Wise Mentor</p>
            </div>
          </PhoneFrame>
        </div>
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
