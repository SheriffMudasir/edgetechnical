"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useSteps } from "./useSequence";
import { cn } from "@/lib/utils";

/** Fee payment: card → processing → success check, Paystack / Flutterwave style. */
export function PaymentSuccess({ active, className }: { active: boolean; className?: string }) {
  const reduced = useReducedMotion();
  const step = useSteps([500, 1100], active); // 0 idle, 1 processing, 2 success
  const s = reduced ? 2 : step;

  return (
    <div className={cn("w-full rounded-xl border border-line-inv bg-ink p-4", className)} aria-hidden>
      <div className="flex items-center justify-between text-[12px]">
        <span className="text-mist">2nd Term fees · Primary 4</span>
        <span className="label-mono text-[10px] text-mist">Paystack</span>
      </div>
      <p className="mt-1 font-display text-4xl leading-none">₦185,000</p>
      <div className="relative mt-4 h-[92px]">
        <AnimatePresence mode="wait" initial={false}>
          {s < 2 ? (
            <motion.div
              key="pay"
              exit={{ opacity: 0, y: -10 }}
              className="absolute inset-0 flex flex-col justify-end gap-2"
            >
              <div className="flex gap-2 text-[11px]">
                {["Card", "Transfer", "USSD"].map((m, i) => (
                  <span
                    key={m}
                    className={cn(
                      "rounded-full border px-2.5 py-1",
                      i === 0 ? "border-paper/50 text-paper" : "border-line-inv text-mist",
                    )}
                  >
                    {m}
                  </span>
                ))}
              </div>
              <div className="relative flex h-10 items-center justify-center overflow-hidden rounded-full bg-edge text-[13px] font-medium text-ink">
                {s === 1 ? (
                  <span className="flex items-center gap-2">
                    <motion.span
                      className="size-3.5 rounded-full border-2 border-ink border-t-transparent"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                    />
                    Processing…
                  </span>
                ) : (
                  "Pay ₦185,000"
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="ok"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center gap-3"
            >
              <svg viewBox="0 0 52 52" className="size-14 shrink-0">
                <motion.circle
                  cx="26"
                  cy="26"
                  r="24"
                  fill="none"
                  stroke="#2C6A50"
                  strokeWidth="3"
                  initial={{ pathLength: reduced ? 1 : 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.path
                  d="M15 27l7 7 15-16"
                  fill="none"
                  stroke="#F5F2EB"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: reduced ? 1 : 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.35, delay: 0.35 }}
                />
              </svg>
              <div className="leading-tight">
                <p className="text-[14px] font-semibold">Payment successful</p>
                <p className="text-[12px] text-mist">Receipt sent to parent · Bursar notified</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
