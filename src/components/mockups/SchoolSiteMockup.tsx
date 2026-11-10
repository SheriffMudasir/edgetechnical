"use client";

import { motion, useTransform, type MotionValue } from "motion/react";
import { Check, Search } from "lucide-react";
import { BrowserFrame } from "./BrowserFrame";
import { cn } from "@/lib/utils";

/** Greenfield Academy crest (fictional school). */
export function Crest({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 36" className={className} aria-hidden>
      <path d="M16 1 30 6v11c0 9-6 15-14 18C8 32 2 26 2 17V6Z" fill="#1F4D3A" />
      <path d="M16 6 25 9.5v7.5c0 6-4 10-9 12-5-2-9-6-9-12V9.5Z" fill="none" stroke="#F5F2EB" strokeWidth="1.2" opacity=".5" />
      <path d="M16 11c-2.6 2.2-4 4.6-4 7.2 0 2.4 1.7 4.3 4 4.8 2.3-.5 4-2.4 4-4.8 0-2.6-1.4-5-4-7.2Z" fill="#F5F2EB" />
      <path d="M16 15v10" stroke="#1F4D3A" strokeWidth="1" />
    </svg>
  );
}

/** Illustrated campus block (no photos needed) */
function CampusArt() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="400" height="300" fill="#1F4D3A" />
      <circle cx="310" cy="82" r="34" fill="#FF5A1F" />
      <path d="M0 210c60-20 120-24 200-10s140 10 200-6v106H0Z" fill="#163A2B" />
      <g fill="#F5F2EB">
        <rect x="95" y="128" width="210" height="92" />
        <path d="M80 132 200 78l120 54Z" />
        <rect x="186" y="96" width="28" height="22" fill="#1F4D3A" />
      </g>
      <g fill="#1F4D3A">
        {[115, 145, 235, 265].map((x) => (
          <rect key={x} x={x} y="146" width="20" height="26" rx="2" />
        ))}
        {[115, 145, 235, 265].map((x) => (
          <rect key={`b${x}`} x={x} y="182" width="20" height="22" rx="2" />
        ))}
        <path d="M184 220v-36a16 16 0 0 1 32 0v36Z" />
      </g>
      <rect x="0" y="218" width="400" height="4" fill="#0E1116" opacity=".25" />
      <g fill="#2C6A50">
        <circle cx="52" cy="200" r="26" />
        <circle cx="352" cy="206" r="22" />
        <circle cx="74" cy="214" r="16" />
      </g>
    </svg>
  );
}

function DesignedSite() {
  return (
    <div className="flex h-full flex-col bg-[#FBF9F4] text-ink">
      {/* nav */}
      <div className="flex items-center justify-between border-b border-ink/8 px-[4cqw] py-[1.6cqw]">
        <div className="flex items-center gap-[0.9cqw]">
          <Crest className="h-[3.2cqw] w-[2.8cqw]" />
          <span className="font-display text-[1.9cqw] leading-none">Greenfield Academy</span>
        </div>
        <div className="hidden items-center gap-[2.2cqw] text-[1.15cqw] text-ink/70 @[420px]:flex">
          <span>About</span>
          <span>Admissions</span>
          <span>Results</span>
          <span>News</span>
          <span>Portal</span>
        </div>
        <span className="rounded-full bg-ivy px-[1.6cqw] py-[0.7cqw] text-[1.1cqw] font-medium text-paper">Apply now</span>
      </div>
      {/* hero */}
      <div className="grid flex-1 grid-cols-[1.05fr_1fr] gap-[3cqw] px-[4cqw] py-[3.6cqw]">
        <div className="flex flex-col justify-center">
          <span className="font-mono text-[0.95cqw] uppercase tracking-[0.12em] text-edge-deep">
            Admissions 2026/27 now open
          </span>
          <p className="mt-[1.4cqw] font-display text-[5.4cqw] leading-[0.95] tracking-[-0.02em]">
            Where curious minds <span className="italic text-ivy">grow.</span>
          </p>
          <p className="mt-[1.6cqw] max-w-[34cqw] text-[1.25cqw] leading-[1.5] text-ink/65">
            A nursery, primary and secondary school in Abuja, raising thoughtful, confident young people since day one.
          </p>
          <div className="mt-[2.2cqw] flex gap-[1cqw]">
            <span className="rounded-full bg-ivy px-[2cqw] py-[1cqw] text-[1.15cqw] font-medium text-paper">
              Apply online
            </span>
            <span className="rounded-full border border-ink/20 px-[2cqw] py-[1cqw] text-[1.15cqw]">Book a visit</span>
          </div>
        </div>
        <div className="overflow-hidden rounded-[1.2cqw]">
          <CampusArt />
        </div>
      </div>
      {/* quick links */}
      <div className="grid grid-cols-3 border-t border-ink/8">
        {[
          ["01", "Online admissions", "Apply in 5 minutes"],
          ["02", "Result checker", "Enter your PIN"],
          ["03", "Pay school fees", "Card, transfer, USSD"],
        ].map(([n, t, s], i) => (
          <div key={n} className={cn("px-[4cqw] py-[1.8cqw]", i > 0 && "border-l border-ink/8")}>
            <span className="font-mono text-[0.9cqw] text-ink/65">{n}</span>
            <p className="mt-[0.4cqw] text-[1.35cqw] font-semibold leading-tight">{t}</p>
            <p className="text-[1.05cqw] text-ink/65">{s}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function WireframeSite() {
  const box = "rounded-[0.5cqw] border border-dashed border-ink/25 bg-ink/[0.03]";
  const note = "font-mono text-[0.85cqw] uppercase tracking-[0.1em] text-ink/40";
  return (
    <div
      className="flex h-full flex-col bg-chalk"
      style={{
        backgroundImage:
          "linear-gradient(rgba(14,17,22,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14,17,22,.05) 1px, transparent 1px)",
        backgroundSize: "2.5cqw 2.5cqw",
      }}
    >
      <div className="flex items-center justify-between border-b border-dashed border-ink/20 px-[4cqw] py-[1.6cqw]">
        <div className="flex items-center gap-[0.9cqw]">
          <div className={cn(box, "h-[3.2cqw] w-[2.8cqw]")} />
          <div className="h-[1.4cqw] w-[16cqw] rounded-full bg-ink/12" />
        </div>
        <div className="flex gap-[2cqw]">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="h-[0.9cqw] w-[5cqw] rounded-full bg-ink/10" />
          ))}
        </div>
        <div className={cn(box, "h-[3cqw] w-[9cqw] rounded-full")} />
      </div>
      <div className="grid flex-1 grid-cols-[1.05fr_1fr] gap-[3cqw] px-[4cqw] py-[3.6cqw]">
        <div className="flex flex-col justify-center gap-[1.2cqw]">
          <span className={note}>label</span>
          <div className="h-[4.4cqw] w-[90%] rounded-[0.6cqw] bg-ink/12" />
          <div className="h-[4.4cqw] w-[70%] rounded-[0.6cqw] bg-ink/12" />
          <div className="mt-[0.6cqw] h-[1cqw] w-[80%] rounded-full bg-ink/8" />
          <div className="h-[1cqw] w-[64%] rounded-full bg-ink/8" />
          <div className="mt-[1cqw] flex gap-[1cqw]">
            <div className={cn(box, "h-[3.4cqw] w-[12cqw] rounded-full")} />
            <div className={cn(box, "h-[3.4cqw] w-[12cqw] rounded-full")} />
          </div>
        </div>
        <div className={cn(box, "relative flex items-center justify-center")}>
          <svg className="absolute inset-0 h-full w-full text-ink/15" aria-hidden preserveAspectRatio="none">
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" />
          </svg>
          <span className={cn(note, "relative bg-chalk px-[0.6cqw]")}>campus image</span>
        </div>
      </div>
      <div className="grid grid-cols-3 border-t border-dashed border-ink/20">
        {[0, 1, 2].map((i) => (
          <div key={i} className={cn("space-y-[0.6cqw] px-[4cqw] py-[1.8cqw]", i > 0 && "border-l border-dashed border-ink/20")}>
            <div className="h-[0.8cqw] w-[3cqw] rounded-full bg-ink/10" />
            <div className="h-[1.2cqw] w-[14cqw] rounded-full bg-ink/14" />
            <div className="h-[0.9cqw] w-[10cqw] rounded-full bg-ink/8" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ToastCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-[14px] border border-line bg-chalk/95 px-4 py-3 shadow-[0_20px_40px_-18px_rgba(14,17,22,0.35)] backdrop-blur",
        className,
      )}
    >
      <span className="flex size-8 items-center justify-center rounded-full bg-ivy text-paper">
        <Check className="size-4" aria-hidden />
      </span>
      <div className="leading-tight">
        <p className="text-[13px] font-semibold">New application received ✓</p>
        <p className="text-[12px] text-slate">Amina B. · JSS 1 · 2 min ago</p>
      </div>
    </div>
  );
}

export function CheckResultCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-[250px] rounded-[14px] border border-line bg-chalk p-4 shadow-[0_24px_50px_-20px_rgba(14,17,22,0.4)]",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-semibold">Check Result</p>
        <span className="font-mono text-[10px] text-slate">1ST TERM</span>
      </div>
      <div className="mt-3 space-y-2 text-[12px]">
        <div className="rounded-md border border-line px-2.5 py-1.5 font-mono text-ink/80">GFA/2026/0142</div>
        <div className="rounded-md border border-line px-2.5 py-1.5 font-mono tracking-[0.3em] text-ink/80">••••••••</div>
      </div>
      <div className="mt-3 flex items-center justify-between rounded-md bg-ivy/8 px-2.5 py-2">
        <span className="flex items-center gap-1.5 text-[12px] font-medium text-ivy">
          <Search className="size-3" aria-hidden /> Average
        </span>
        <span className="font-mono text-[13px] font-semibold text-ivy">78.4%</span>
      </div>
    </div>
  );
}

export function AdmissionCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-[260px] rounded-[14px] border border-line bg-chalk p-4 shadow-[0_24px_50px_-20px_rgba(14,17,22,0.4)]",
        className,
      )}
    >
      <p className="text-[13px] font-semibold">Apply for 2026/27</p>
      <div className="mt-3 space-y-2 text-[12px]">
        {[
          ["Child's name", "Amina Bello"],
          ["Class sought", "JSS 1"],
          ["Parent's phone", "0803 ••• 4417"],
        ].map(([k, v]) => (
          <div key={k} className="flex items-center justify-between rounded-md border border-line px-2.5 py-1.5">
            <span className="text-slate">{k}</span>
            <span className="font-medium">{v}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-full bg-ivy py-2 text-center text-[12px] font-medium text-paper">Submit application</div>
    </div>
  );
}

/**
 * Greenfield Academy (fictional) school site in a browser frame.
 * - With `progress`: assembles in 3 states as progress goes 0 → 1 (wireframe → designed → live).
 * - Without: shows the final "live" state with a gentle looping toast.
 */
export function SchoolSiteMockup({ progress, className }: { progress?: MotionValue<number>; className?: string }) {
  return (
    <div className={cn("relative", className)} aria-hidden>
      <BrowserFrame>
        <div className="relative aspect-[16/10] w-full">
          <div className="absolute inset-0">
            <DesignedSite />
          </div>
          {progress && <WireLayer progress={progress} />}
        </div>
      </BrowserFrame>
      {progress ? <LiveLayerScroll progress={progress} /> : <LiveLayerLoop />}
    </div>
  );
}

function WireLayer({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.18, 0.42], [1, 0]);
  const clip = useTransform(progress, [0.18, 0.42], ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 100%)"]);
  return (
    <motion.div className="absolute inset-0" style={{ opacity, clipPath: clip }}>
      <WireframeSite />
    </motion.div>
  );
}

function useCardIn(progress: MotionValue<number>, start: number) {
  const opacity = useTransform(progress, [start, start + 0.1], [0, 1]);
  const y = useTransform(progress, [start, start + 0.14], [40, 0]);
  const scale = useTransform(progress, [start, start + 0.14], [0.92, 1]);
  return { opacity, y, scale };
}

function LiveLayerScroll({ progress }: { progress: MotionValue<number> }) {
  const result = useCardIn(progress, 0.5);
  const form = useCardIn(progress, 0.6);
  const toast = useCardIn(progress, 0.72);
  return (
    <>
      <motion.div style={result} className="absolute -left-[4%] bottom-[8%] hidden lg:block">
        <CheckResultCard />
      </motion.div>
      <motion.div style={form} className="absolute -right-[4%] bottom-[-6%] hidden lg:block">
        <AdmissionCard />
      </motion.div>
      <motion.div style={toast} className="absolute -right-[3%] top-[9%] hidden lg:block">
        <ToastCard />
      </motion.div>
    </>
  );
}

function LiveLayerLoop() {
  return (
    <>
      <motion.div
        className="absolute -bottom-6 right-3 sm:-right-4"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ToastCard className="scale-90 sm:scale-100" />
      </motion.div>
      <motion.div
        className="absolute -bottom-12 -left-4 hidden sm:block"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      >
        <CheckResultCard className="scale-90" />
      </motion.div>
    </>
  );
}
