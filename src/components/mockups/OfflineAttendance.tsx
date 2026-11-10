"use client";

import { AnimatePresence, motion, useInView } from "motion/react";
import { Check, CloudOff, RefreshCw } from "lucide-react";
import { useRef } from "react";
import { PhoneFrame } from "./PhoneFrame";
import { useSteps } from "./useSequence";
import { cn } from "@/lib/utils";

const STUDENTS = ["Abdullahi Bello", "Blessing Eze", "Chukwuemeka Obi", "Fatima Yusuf", "Grace Adeyemi", "Hauwa Musa"];

/** Teacher app taking the register offline, then syncing when the network returns. */
export function OfflineAttendance({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  // steps: 1..6 mark students, 7 offline-saved, 8 syncing, 9 synced, then hold & loop
  const step = useSteps([600, 380, 380, 380, 380, 380, 700, 1400, 1300, 3000], inView, true);
  const marked = Math.min(step, STUDENTS.length);
  const online = step >= 8;
  const synced = step >= 9;

  return (
    <div ref={ref} className={cn("w-full", className)}>
      <PhoneFrame offline={!online} time="8:02">
        <div className="flex h-full flex-col" aria-hidden>
          <div className="border-b border-line px-4 pb-3">
            <p className="label-mono text-[9px] text-slate">Register · JSS 2 Gold</p>
            <p className="font-display text-[22px] leading-tight">Tuesday, morning</p>
          </div>
          <ul className="flex-1 space-y-1.5 px-3 py-3">
            {STUDENTS.map((s, i) => {
              const done = i < marked;
              const absent = i === 3;
              return (
                <li key={s} className="flex items-center justify-between rounded-lg border border-line bg-chalk px-3 py-2 text-[12px]">
                  <span>{s}</span>
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 font-mono text-[10px] transition-colors duration-300",
                      !done && "bg-ink/5 text-ink/40",
                      done && !absent && "bg-ivy text-paper",
                      done && absent && "bg-edge text-ink",
                    )}
                  >
                    {done ? (absent ? "ABSENT" : "PRESENT") : "—"}
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="mx-3 mb-2 flex h-10 items-center justify-center gap-2 rounded-full bg-ink text-[12px] text-paper">
            <AnimatePresence mode="wait" initial={false}>
              {synced ? (
                <motion.span key="synced" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-1.5">
                  <Check className="size-3.5 text-[#8FD3B0]" /> Synced · parents of 1 absentee notified
                </motion.span>
              ) : online ? (
                <motion.span key="syncing" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-1.5">
                  <motion.span animate={{ rotate: 360 }} transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}>
                    <RefreshCw className="size-3.5" />
                  </motion.span>
                  Network back · syncing…
                </motion.span>
              ) : (
                <motion.span key="offline" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-1.5">
                  <CloudOff className="size-3.5 text-edge" /> {marked === STUDENTS.length ? "Saved on phone · will sync" : "No network · saving offline"}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}
