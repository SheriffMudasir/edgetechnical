"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

/**
 * Types a list of strings one after another while `active` is true.
 * Returns how many characters of each string are visible. Resets when inactive.
 * Reduced motion: everything is shown immediately.
 */
export function useTypewriter(strings: string[], active: boolean, speed = 45) {
  const reduced = useReducedMotion();
  const total = strings.reduce((n, s) => n + s.length, 0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reduced) return;
    if (!active) {
      const t = window.setTimeout(() => setCount(0), 400);
      return () => window.clearTimeout(t);
    }
    const id = window.setInterval(() => {
      setCount((c) => {
        if (c >= total) {
          window.clearInterval(id);
          return c;
        }
        return c + 1;
      });
    }, speed);
    return () => window.clearInterval(id);
  }, [active, total, speed, reduced]);

  const shown = reduced ? total : count;
  const starts = strings.map((_, i) => strings.slice(0, i).reduce((n, s) => n + s.length, 0));
  const visible = strings.map((s, i) => s.slice(0, Math.max(0, Math.min(s.length, shown - starts[i]))));
  return { visible, done: shown >= total, cursorIndex: visible.findIndex((v, i) => v.length < strings[i].length) };
}

/** Steps through 0..steps-1 with the given delays (ms) while active, then holds on the last step. */
export function useSteps(delays: number[], active: boolean, loop = false) {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduced) return;
    if (!active) {
      const t = window.setTimeout(() => setStep(0), 300);
      return () => window.clearTimeout(t);
    }
    let i = 0;
    let t: number;
    const next = () => {
      if (i >= delays.length) {
        if (!loop) return;
        i = 0;
        setStep(0);
      }
      t = window.setTimeout(() => {
        i += 1;
        setStep(i);
        next();
      }, delays[i]);
    };
    next();
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- delays are static per component
  }, [active, reduced, loop]);

  return reduced ? delays.length : step;
}
