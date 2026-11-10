"use client";

import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SchoolSiteMockup } from "@/components/mockups/SchoolSiteMockup";
import { cn, pad2 } from "@/lib/utils";

/**
 * Desktop: sticky stage where the Greenfield mockup assembles itself across scroll
 * (wireframe → designed → live). Mobile / reduced motion: final state with a gentle loop.
 */
export function HeroMockup({ stages }: { stages: string[] }) {
  const reduced = useReducedMotion();
  const [desktop, setDesktop] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [stage, setStage] = useState(0);
  const scale = useTransform(scrollYProgress, [0, 0.16], [0.94, 1]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (p) => setStage(p < 0.3 ? 0 : p < 0.56 ? 1 : 2));

  const scrollMode = desktop && !reduced;

  return (
    <div ref={ref} className={cn("relative", scrollMode ? "h-[250vh]" : "")}>
      <div
        className={cn(
          scrollMode
            ? "sticky top-[var(--header-h)] flex h-[calc(100svh-var(--header-h))] items-center"
            : "pb-24 pt-14 md:pb-32 md:pt-20",
        )}
      >
        <div className="container-x relative grid w-full items-center gap-8 lg:grid-cols-12">
          {/* Stage tracker */}
          <ol className="hidden lg:col-span-2 lg:flex lg:flex-col lg:gap-5" aria-label="Build stages">
            {stages.map((s, i) => (
              <li
                key={s}
                aria-current={scrollMode && stage === i ? "step" : undefined}
                className={cn(
                  "flex items-center gap-3 transition-opacity duration-500",
                  !scrollMode || stage === i ? "opacity-100" : "opacity-35",
                )}
              >
                <span className="label-mono text-slate">{pad2(i + 1)}</span>
                <span
                  className={cn(
                    "h-px bg-ink transition-[width] duration-500",
                    scrollMode && stage === i ? "w-10 bg-edge" : "w-4",
                  )}
                />
                <span className="font-display text-2xl">{s}</span>
              </li>
            ))}
            <li className="label-mono mt-4 max-w-[18ch] text-[11px] leading-relaxed text-slate">
              Greenfield Academy is a concept site, built in code.
            </li>
          </ol>

          <div className="rise-in relative lg:col-span-10" style={{ ["--rise-delay" as string]: "650ms" }}>
            {/* the one allowed glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-[12%] -z-0 opacity-70"
              style={{ background: "radial-gradient(50% 50% at 50% 55%, rgba(31,77,58,0.16), rgba(245,242,235,0) 70%)" }}
            />
            <motion.div
              style={scrollMode ? { scale, maxWidth: "calc((100svh - var(--header-h) - 150px) * 1.6)" } : undefined}
              className="relative mx-auto origin-top"
            >
              <SchoolSiteMockup progress={scrollMode ? scrollYProgress : undefined} />
            </motion.div>
            <p className="label-mono mt-8 text-[11px] text-slate lg:hidden">Greenfield Academy · concept site, built in code</p>
          </div>
        </div>
      </div>
    </div>
  );
}
