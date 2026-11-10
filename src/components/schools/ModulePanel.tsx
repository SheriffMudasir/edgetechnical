"use client";

import { useInView } from "motion/react";
import { useRef } from "react";
import { ModuleVisual } from "@/components/sections/home/Bento";

/** Ink panel that plays a module's micro-interaction while in view. */
export function ModulePanel({ id }: { id: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  return (
    <div ref={ref} className="grain relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-[14px] bg-ink p-8 text-paper md:p-12">
      <div className="relative z-10 w-full max-w-[360px]">
        <ModuleVisual id={id} active={inView} />
      </div>
    </div>
  );
}
