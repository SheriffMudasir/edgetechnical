"use client";

import { motion, useAnimationControls, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const EASE = [0.76, 0, 0.24, 1] as const;

/**
 * Quick ink-wipe between routes. The panel sweeps up on an internal link click and
 * wipes away once the new route renders. Navigation is never blocked: the click
 * proceeds normally and a safety timeout always clears the panel.
 */
export function PageTransition() {
  const pathname = usePathname();
  const controls = useAnimationControls();
  const reduced = useReducedMotion();
  const covering = useRef(false);
  const first = useRef(true);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (reduced) return;
    const uncover = () => {
      covering.current = false;
      controls.set({ transformOrigin: "50% 0%" });
      void controls.start({ scaleY: 0, transition: { duration: 0.26, ease: EASE } });
    };
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement | null)?.closest("a");
      if (!a || a.target === "_blank" || a.hasAttribute("download") || !a.href) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
      covering.current = true;
      controls.set({ transformOrigin: "50% 100%", scaleY: 0 });
      void controls.start({ scaleY: 1, transition: { duration: 0.2, ease: EASE } });
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => covering.current && uncover(), 1200);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [controls, reduced]);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (!covering.current) return;
    covering.current = false;
    window.clearTimeout(timer.current);
    controls.set({ transformOrigin: "50% 0%" });
    void controls.start({ scaleY: 0, transition: { duration: 0.26, ease: EASE, delay: 0.05 } });
  }, [pathname, controls]);

  if (reduced) return null;
  return (
    <motion.div
      aria-hidden
      initial={{ scaleY: 0 }}
      animate={controls}
      className="pointer-events-none fixed inset-0 z-[90] bg-ink"
    />
  );
}
