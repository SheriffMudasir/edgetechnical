"use client";

import { useRef } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { caseStudies } from "@/content/work";
import { CaseCard } from "@/components/work/CaseCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/Button";

/** Horizontal drag/scroll rail on desktop; stacked on mobile. */
export function SelectedWork() {
  const rail = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; left: number; moved: boolean } | null>(null);

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !rail.current) return;
    drag.current = { x: e.clientX, left: rail.current.scrollLeft, moved: false };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current || !rail.current) return;
    const dx = e.clientX - drag.current.x;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    rail.current.scrollLeft = drag.current.left - dx;
  };
  const end = () => {
    setTimeout(() => (drag.current = null), 0);
  };
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current?.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <section aria-labelledby="work-title" className="overflow-hidden bg-paper pb-[clamp(80px,11vw,176px)]">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 border-t border-line pt-16 md:flex-row md:items-end">
          <div>
            <SectionLabel index={6} className="text-slate">
              Selected work
            </SectionLabel>
            <Reveal as="h2" id="work-title" className="h-section mt-8 max-w-[13ch]">
              Built in code, <span className="italic">not stock photos.</span>
            </Reveal>
          </div>
          <div className="max-w-sm space-y-4">
            <p className="text-ink/70">
              Live work for a real school and our own product, StudyWise AI. Concept work is labelled honestly.
            </p>
            <TextLink href="/work">All work</TextLink>
          </div>
        </div>
      </div>

      <div
        ref={rail}
        data-cursor="Drag"
        data-lenis-prevent-horizontal
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={end}
        onPointerLeave={end}
        onClickCapture={onClickCapture}
        className="no-scrollbar mt-14 md:mt-20 lg:cursor-grab lg:overflow-x-auto lg:active:cursor-grabbing"
        tabIndex={-1}
      >
        <ul className="container-x flex flex-col gap-14 lg:w-max lg:max-w-none lg:flex-row lg:gap-6 lg:pr-[var(--gutter)]">
          {caseStudies.map((c) => (
            <Reveal as="li" key={c.slug} className="lg:w-[min(46vw,640px)] lg:shrink-0" onDragStart={(e) => e.preventDefault()}>
              <CaseCard study={c} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
