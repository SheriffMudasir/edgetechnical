"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Bell, CalendarDays } from "lucide-react";
import { schoolModules } from "@/content/modules";
import { AdmissionsForm } from "@/components/mockups/AdmissionsForm";
import { ResultCard } from "@/components/mockups/ResultCard";
import { PaymentSuccess } from "@/components/mockups/PaymentSuccess";
import { useActive } from "@/components/ui/useActive";
import { Reveal } from "@/components/motion/Reveal";
import { cn, pad2 } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

function PortalVisual({ active }: { active: boolean }) {
  const kids = [
    ["Chidinma O.", "Primary 4", "Fees paid", true],
    ["Emeka O.", "JSS 1", "₦45,000 due", false],
  ] as const;
  return (
    <div className="w-full space-y-2" aria-hidden>
      {kids.map(([n, c, f, ok], i) => (
        <motion.div
          key={n}
          animate={{ x: active ? 0 : i * 8, opacity: active ? 1 : 0.75 }}
          transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
          className="flex items-center justify-between rounded-lg border border-line-inv bg-ink px-3 py-2.5"
        >
          <div className="flex items-center gap-2.5">
            <span className="flex size-7 items-center justify-center rounded-full bg-paper/10 text-[11px] font-semibold">{n[0]}</span>
            <div className="leading-tight">
              <p className="text-[13px] font-medium">{n}</p>
              <p className="text-[11px] text-mist">{c}</p>
            </div>
          </div>
          <span className={cn("rounded-full px-2 py-0.5 text-[11px]", ok ? "bg-ivy text-paper" : "bg-edge/15 text-edge")}>{f}</span>
        </motion.div>
      ))}
      <motion.div
        animate={{ opacity: active ? 1 : 0, y: active ? 0 : 8 }}
        transition={{ duration: 0.4, ease: EASE, delay: 0.15 }}
        className="flex items-center gap-2 rounded-lg bg-paper/5 px-3 py-2 text-[12px] text-paper/80"
      >
        <Bell className="size-3.5 text-edge" /> 1st term results are out
      </motion.div>
    </div>
  );
}

function CalendarVisual({ active }: { active: boolean }) {
  const days = Array.from({ length: 21 }, (_, i) => i + 1);
  const marked: Record<number, string> = { 4: "PTA", 11: "Sports", 18: "Exams" };
  return (
    <div className="w-full" aria-hidden>
      <div className="mb-2 flex items-center justify-between text-[12px] text-mist">
        <span className="flex items-center gap-1.5">
          <CalendarDays className="size-3.5" /> October
        </span>
        <span>3 events</span>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((d) => (
          <motion.span
            key={d}
            animate={{ scale: active && marked[d] ? 1.08 : 1 }}
            transition={{ duration: 0.4, ease: EASE, delay: (d % 7) * 0.02 }}
            className={cn(
              "flex aspect-square items-center justify-center rounded-md text-[11px]",
              marked[d] ? (active ? "bg-edge font-semibold text-ink" : "bg-paper/15 text-paper") : "bg-paper/[0.04] text-paper/50",
            )}
          >
            {d}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

function GalleryVisual({ active }: { active: boolean }) {
  const tiles = ["#1F4D3A", "#2C6A50", "#FF5A1F", "#F5F2EB", "#163A2B", "#5B6472"];
  return (
    <div className="grid h-[140px] w-full grid-cols-4 grid-rows-2 gap-1.5" aria-hidden>
      {tiles.map((c, i) => (
        <motion.span
          key={i}
          className={cn("rounded-md", i === 0 && "col-span-2 row-span-2", i === 3 && "col-span-2")}
          style={{ backgroundColor: c }}
          animate={{ scale: active ? (i === 0 ? 0.96 : 1) : 1, opacity: active ? 1 : 0.6 + (i % 3) * 0.1 }}
          transition={{ duration: 0.5, ease: EASE, delay: i * 0.04 }}
        />
      ))}
    </div>
  );
}

function IntegrationVisual({ active }: { active: boolean }) {
  const nodes = ["Website", "Admissions", "Results", "Fees", "Parent app"];
  return (
    <div className="relative flex w-full items-center justify-between gap-2" aria-hidden>
      <div className="flex flex-col gap-1.5">
        {nodes.slice(0, 3).map((n) => (
          <span key={n} className="rounded-full border border-line-inv px-3 py-1 text-[12px]">{n}</span>
        ))}
      </div>
      <svg viewBox="0 0 120 100" className="h-24 flex-1" preserveAspectRatio="none">
        {[18, 50, 82].map((y, i) => (
          <motion.path
            key={y}
            d={`M0 ${y} C 50 ${y}, 60 50, 120 50`}
            fill="none"
            stroke={active ? "#FF5A1F" : "rgba(245,242,235,0.25)"}
            strokeWidth="1.2"
            initial={false}
            animate={{ pathLength: active ? 1 : 0.35 }}
            transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
          />
        ))}
      </svg>
      <motion.span
        animate={{ scale: active ? 1.06 : 1 }}
        className="flex size-20 shrink-0 flex-col items-center justify-center rounded-full bg-paper text-center text-ink"
      >
        <span className="label-mono text-[9px] text-slate">One</span>
        <span className="text-[12px] font-semibold leading-tight">database</span>
      </motion.span>
    </div>
  );
}

function CbtVisual({ active }: { active: boolean }) {
  const opts = ["9.8 m/s²", "8.9 m/s²", "10.8 m/s²", "0.98 m/s²"];
  return (
    <div className="w-full" aria-hidden>
      <div className="mb-2 flex items-center justify-between text-[11px] text-mist">
        <span>Q 12 of 40 · Physics</span>
        <span className="font-mono">18:42</span>
      </div>
      <p className="text-[13px] leading-snug">The acceleration due to gravity near the Earth&apos;s surface is approximately…</p>
      <div className="mt-2.5 grid grid-cols-2 gap-1.5">
        {opts.map((o, i) => (
          <span
            key={o}
            className={cn(
              "rounded-md border px-2.5 py-1.5 text-[12px] transition-colors duration-500",
              active && i === 0 ? "border-ivy-soft bg-ivy text-paper" : "border-line-inv",
            )}
          >
            {String.fromCharCode(65 + i)}. {o}
          </span>
        ))}
      </div>
    </div>
  );
}

const layout: Record<string, string> = {
  admissions: "lg:col-span-5 lg:row-span-2",
  "result-checker": "lg:col-span-4 lg:row-span-2",
  "fee-payments": "lg:col-span-3 lg:row-span-2",
  "parent-portal": "lg:col-span-4",
  "news-events": "lg:col-span-3",
  "gallery-tour": "lg:col-span-5",
  "sms-integration": "lg:col-span-7",
  elearning: "lg:col-span-5",
};

export function ModuleVisual({ id, active }: { id: string; active: boolean }) {
  switch (id) {
    case "admissions":
      return <AdmissionsForm active={active} />;
    case "result-checker":
      return <ResultCard active={active} />;
    case "fee-payments":
      return <PaymentSuccess active={active} />;
    case "parent-portal":
      return <PortalVisual active={active} />;
    case "news-events":
      return <CalendarVisual active={active} />;
    case "gallery-tour":
      return <GalleryVisual active={active} />;
    case "sms-integration":
      return <IntegrationVisual active={active} />;
    default:
      return <CbtVisual active={active} />;
  }
}

function Tile({ index, id, title, short }: { index: number; id: string; title: string; short: string }) {
  const { ref, active, handlers } = useActive<HTMLAnchorElement>();
  const tall = ["admissions", "result-checker", "fee-payments"].includes(id);
  return (
    <Reveal delay={(index % 4) * 70} className={cn("flex", layout[id])}>
    <Link
      ref={ref}
      href={`/schools#${id}`}
      {...handlers}
      data-cursor="Open"
      className={cn(
        "group relative flex w-full flex-col justify-between gap-8 overflow-hidden rounded-[14px] border border-line-inv bg-ink-2 p-5 transition-colors duration-500 hover:border-paper/30 md:p-6",
        tall && "lg:min-h-[520px]",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="label-mono text-[11px] text-mist">{pad2(index + 1)}</span>
          <h3 className="mt-2 font-display text-[1.9rem] leading-[1.02] md:text-[2.2rem]">{title}</h3>
          <p className="mt-2 max-w-[34ch] text-[15px] leading-snug text-paper/65">{short}</p>
        </div>
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line-inv transition-colors duration-300 group-hover:border-edge group-hover:bg-edge group-hover:text-ink">
          <ArrowUpRight className="size-4" aria-hidden />
        </span>
      </div>
      <div className="flex min-h-[120px] items-end">
        <ModuleVisual id={id} active={active} />
      </div>
    </Link>
    </Reveal>
  );
}

export function Bento() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:gap-4">
      {schoolModules.map((m, i) => (
        <Tile key={m.id} index={i} id={m.id} title={m.title} short={m.short} />
      ))}
    </div>
  );
}
