"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { PhoneFrame } from "./PhoneFrame";
import { useSteps } from "./useSequence";
import { tutorScript } from "@/content/studywise";
import { cn } from "@/lib/utils";

function Typing() {
  return (
    <span className="flex gap-1 px-1 py-1" aria-label="Tutor is typing">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="size-1.5 rounded-full bg-current"
          animate={{ opacity: [0.25, 1, 0.25] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </span>
  );
}

/**
 * StudyWise AI demo: a student asks, the Socratic tutor replies with a guiding question.
 * Plays (and loops) while in view. Reduced motion shows the full conversation.
 */
export function AITutorChat({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-15% 0px" });
  const reduced = useReducedMotion();
  // For each message: student → appear after 900ms; tutor → typing for 1300ms then appear.
  const delays = tutorScript.flatMap((m) => (m.from === "tutor" ? [700, 1300] : [1100]));
  delays.push(3600); // hold before looping
  const step = useSteps(delays, inView, true);

  // map step → number of messages shown + whether tutor is typing
  let shown = 0;
  let typing = false;
  if (reduced) shown = tutorScript.length;
  else {
    let s = 0;
    for (const m of tutorScript) {
      if (m.from === "tutor") {
        if (step === s + 1) {
          typing = true;
          break;
        }
        if (step >= s + 2) shown += 1;
        else break;
        s += 2;
      } else {
        if (step >= s + 1) shown += 1;
        else break;
        s += 1;
      }
    }
  }

  return (
    <div ref={ref} className={cn("w-full", className)}>
      <PhoneFrame offline tone="light">
        <div className="flex h-full flex-col" aria-hidden>
          <div className="flex items-center gap-2.5 border-b border-line px-4 pb-3">
            <span className="flex size-8 items-center justify-center rounded-full bg-ivy font-display text-lg italic text-paper">
              B
            </span>
            <div className="leading-tight">
              <p className="text-[13px] font-semibold">Baba · Wise Mentor</p>
              <p className="text-[11px] text-slate">On-device · no data used</p>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-end gap-2 overflow-hidden px-3 pb-3 text-[13px] leading-snug">
            <AnimatePresence initial={false}>
              {tutorScript.slice(0, shown).map((m, i) => (
                <motion.div
                  key={`${i}-${m.text}`}
                  layout={!reduced}
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    "max-w-[82%] rounded-2xl px-3 py-2",
                    m.from === "student"
                      ? "self-end rounded-br-md bg-ink text-paper"
                      : "self-start rounded-bl-md border border-line bg-chalk",
                  )}
                >
                  {m.text}
                </motion.div>
              ))}
              {typing && (
                <motion.div
                  key="typing"
                  layout={!reduced}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="self-start rounded-2xl rounded-bl-md border border-line bg-chalk px-3 py-2 text-slate"
                >
                  <Typing />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="mx-3 mb-2 flex h-10 items-center rounded-full border border-line bg-chalk px-4 text-[12px] text-slate">
            Ask your tutor…
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}
