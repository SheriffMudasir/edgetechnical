"use client";

import { useEffect, useRef, useState, type ComponentPropsWithoutRef, type ElementType, type Ref } from "react";
import { cn } from "@/lib/utils";

/* One shared IntersectionObserver for every Reveal on the page. */
const callbacks = new WeakMap<Element, () => void>();
let observer: IntersectionObserver | null = null;
function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          callbacks.get(e.target)?.();
          callbacks.delete(e.target);
          observer?.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );
  }
  return observer;
}

/** Returns a ref + `is-in` class once the element has entered the viewport (once only). */
export function useReveal<T extends Element>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = getObserver();
    callbacks.set(el, () => setInView(true));
    io.observe(el);
    return () => {
      callbacks.delete(el);
      io.unobserve(el);
    };
  }, []);
  return { ref, revealClass: inView ? "is-in" : "" };
}

/**
 * Fades + lifts its content 24px when it enters the viewport (once).
 * Styles live in globals.css ([data-reveal]); they only apply when JS is available,
 * so content is never hidden for no-JS visitors.
 */
export function Reveal<T extends ElementType = "div">({
  as,
  delay = 0,
  className,
  style,
  ...rest
}: { as?: T; delay?: number } & ComponentPropsWithoutRef<T>) {
  const Tag = (as ?? "div") as ElementType;
  const { ref, revealClass } = useReveal<HTMLElement>();
  return (
    <Tag
      ref={ref as Ref<HTMLElement>}
      data-reveal=""
      className={cn(className, revealClass)}
      style={{ ...(style as object), ["--reveal-delay" as string]: `${delay}ms` }}
      {...rest}
    />
  );
}
