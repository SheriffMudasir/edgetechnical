"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

function format(v: number, prefix: string, suffix: string, decimals: number) {
  return `${prefix}${v.toLocaleString("en-NG", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`;
}

/** Counts up to `to` when scrolled into view. Server-renders the final value. */
export function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1.6,
  decimals = 0,
  className,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    if (!inView) {
      el.textContent = format(0, prefix, suffix, decimals);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = format(v, prefix, suffix, decimals);
      },
    });
    return () => controls.stop();
  }, [inView, reduced, to, prefix, suffix, decimals, duration]);

  return (
    <span ref={ref} className={className}>
      {format(to, prefix, suffix, decimals)}
    </span>
  );
}
