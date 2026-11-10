"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function ResetOnRoute() {
  const lenis = useLenis();
  const pathname = usePathname();
  useEffect(() => {
    if (!lenis) return;
    const hash = window.location.hash;
    if (!hash) {
      lenis.scrollTo(0, { immediate: true, force: true });
      return;
    }
    // Deep links (/pricing#estimator): land on the target once layout has settled.
    const t = window.setTimeout(() => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) lenis.scrollTo(el, { offset: -88, immediate: true, force: true });
    }, 60);
    return () => window.clearTimeout(t);
  }, [pathname, lenis]);
  return null;
}

/** Lenis smooth scrolling — switched off entirely for reduced-motion users. */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  if (reduced) return <>{children}</>;
  return (
    <ReactLenis root options={{ lerp: 0.11, anchors: { offset: -88 } }}>
      <ResetOnRoute />
      {children}
    </ReactLenis>
  );
}
