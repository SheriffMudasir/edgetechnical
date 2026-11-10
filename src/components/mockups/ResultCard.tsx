"use client";

import { motion, useReducedMotion } from "motion/react";
import { useTypewriter } from "./useSequence";
import { cn } from "@/lib/utils";

const SUBJECTS = [
  ["Mathematics", 84, "A1"],
  ["English Language", 76, "B2"],
  ["Basic Science", 81, "A1"],
  ["Civic Education", 72, "B3"],
] as const;

/** Enter a PIN → the card flips to show the result. */
export function ResultCard({ active, className }: { active: boolean; className?: string }) {
  const reduced = useReducedMotion();
  const { visible, done } = useTypewriter(["4417 2093 1185"], active, 55);
  const flipped = active && done;

  return (
    <div className={cn("w-full [perspective:1000px]", className)} aria-hidden>
      <motion.div
        className="relative h-[200px] w-full [transform-style:preserve-3d]"
        initial={false}
        animate={{ rotateY: flipped && !reduced ? 180 : 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: flipped ? 0.35 : 0 }}
      >
        {/* front: PIN entry */}
        <div className="absolute inset-0 flex flex-col justify-between rounded-xl border border-line-inv bg-ink p-4 [backface-visibility:hidden]">
          <div>
            <p className="label-mono text-[10px] text-mist">Result checker</p>
            <p className="mt-1 font-display text-2xl leading-none">Enter scratch-card PIN</p>
          </div>
          <div className="space-y-2">
            <div className="flex h-10 items-center rounded-lg border border-line-inv px-3 font-mono text-[15px] tracking-[0.12em]">
              {reduced ? "4417 2093 1185" : visible[0]}
              {!done && active && <span className="ml-0.5 h-4 w-px animate-blink bg-edge" />}
            </div>
            <div className={cn("flex h-9 items-center justify-center rounded-full text-[13px] font-medium transition-colors", done && active ? "bg-edge text-ink" : "bg-paper/10 text-paper/60")}>
              Check result
            </div>
          </div>
        </div>
        {/* back: result */}
        <div className="absolute inset-0 rounded-xl bg-paper p-4 text-ink [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex items-start justify-between">
            <div>
              <p className="label-mono text-[10px] text-slate">1st Term · JSS 2</p>
              <p className="text-[13px] font-semibold">Ibrahim Musa</p>
            </div>
            <div className="text-right">
              <p className="font-display text-3xl leading-none text-ivy">78.4%</p>
              <p className="text-[10px] text-slate">3rd of 42</p>
            </div>
          </div>
          <ul className="mt-3 space-y-1.5">
            {SUBJECTS.map(([s, score, grade]) => (
              <li key={s} className="flex items-center gap-2 text-[11px]">
                <span className="w-28 shrink-0 truncate text-ink/70">{s}</span>
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink/8">
                  <span className="block h-full rounded-full bg-ivy" style={{ width: `${score}%` }} />
                </span>
                <span className="w-6 text-right font-mono font-medium">{grade}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
