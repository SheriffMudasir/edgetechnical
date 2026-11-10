"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { useRef } from "react";
import { process } from "@/content/home";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/Button";
import { pad2 } from "@/lib/utils";

/** 5-step timeline (ivy) with a progress line that fills on scroll. */
export function ProcessTimeline({ showLink = true, index = 7 }: { showLink?: boolean; index?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <section aria-labelledby="process-title" className="grain section-y relative bg-ivy text-paper">
      <div className="container-x relative z-10">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionLabel index={index} className="text-paper/70" tone="edge">
              How we work
            </SectionLabel>
            <Reveal as="h2" id="process-title" className="h-section mt-8 max-w-[14ch]">
              Five calm steps from first call to <span className="italic">launch day.</span>
            </Reveal>
          </div>
          <div className="flex flex-col justify-end gap-5 lg:col-span-4 lg:col-start-9">
            <p className="text-paper/75">
              Clear timelines, one point of contact, and progress you can see on a staging link every week.
            </p>
            {showLink && (
              <TextLink href="/process" className="text-paper">
                Our process in detail
              </TextLink>
            )}
          </div>
        </div>

        <div ref={ref} className="relative mt-16 md:mt-24">
          {/* track (desktop horizontal) */}
          <div className="absolute left-0 right-0 top-[7px] hidden h-px bg-paper/20 lg:block" aria-hidden>
            <motion.div className="h-full origin-left bg-edge" style={{ scaleX: reduced ? 1 : progress }} />
          </div>
          {/* track (mobile vertical) */}
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-paper/20 lg:hidden" aria-hidden>
            <motion.div className="h-full w-full origin-top bg-edge" style={{ scaleY: reduced ? 1 : progress }} />
          </div>

          <ol className="grid gap-12 lg:grid-cols-5 lg:gap-6">
            {process.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 90} className="relative pl-10 lg:pl-0 lg:pt-12">
                <span className="absolute left-0 top-0 size-[15px] rounded-full border-2 border-paper bg-ivy" aria-hidden />
                <p className="label-mono text-paper/60">
                  {pad2(i + 1)} · {s.duration}
                </p>
                <h3 className="mt-3 font-display text-[2.4rem] leading-none">{s.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-paper/75">{s.body}</p>
                <ul className="mt-5 space-y-1.5 border-t border-paper/15 pt-4 text-[14px] text-paper/85">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2">
                      <span className="size-1 rounded-full bg-edge" aria-hidden />
                      {d}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
