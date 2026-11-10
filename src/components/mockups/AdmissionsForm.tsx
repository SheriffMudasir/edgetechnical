"use client";

import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";
import { useTypewriter } from "./useSequence";
import { cn } from "@/lib/utils";

const FIELDS = [
  { label: "Child's full name", value: "Chidinma Okafor" },
  { label: "Class sought", value: "Primary 4" },
  { label: "Parent's phone", value: "0803 512 4417" },
];

/** Mini admissions form that fills itself in when active. */
export function AdmissionsForm({ active, tone = "dark", className }: { active: boolean; tone?: "dark" | "light"; className?: string }) {
  const { visible, done, cursorIndex } = useTypewriter(
    FIELDS.map((f) => f.value),
    active,
    38,
  );
  const dark = tone === "dark";
  return (
    <div className={cn("w-full space-y-2.5", className)} aria-hidden>
      {FIELDS.map((f, i) => (
        <div key={f.label}>
          <p className={cn("mb-1 text-[11px]", dark ? "text-mist" : "text-slate")}>{f.label}</p>
          <div
            className={cn(
              "flex h-9 items-center rounded-lg border px-3 font-mono text-[13px] transition-colors",
              dark ? "border-line-inv bg-ink" : "border-line bg-chalk",
              cursorIndex === i && active && (dark ? "border-paper/40" : "border-ink/40"),
            )}
          >
            <span>{visible[i]}</span>
            {cursorIndex === i && active && <span className="ml-px h-4 w-px animate-blink bg-edge" />}
          </div>
        </div>
      ))}
      <div
        className={cn(
          "relative mt-1 flex h-9 items-center justify-center overflow-hidden rounded-full text-[13px] font-medium transition-colors duration-500",
          done && active ? "bg-ivy text-paper" : dark ? "bg-paper/10 text-paper/60" : "bg-ink/5 text-ink/50",
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          {done && active ? (
            <motion.span key="ok" initial={{ y: 14, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex items-center gap-1.5">
              <Check className="size-3.5" /> Application received
            </motion.span>
          ) : (
            <motion.span key="send" exit={{ y: -14, opacity: 0 }}>
              Submit application
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
