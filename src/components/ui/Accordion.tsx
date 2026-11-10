"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccordionItem = { q: string; a: string };

/** Accessible accordion (button + region). Height animates via grid-rows 0fr → 1fr. */
export function Accordion({ items, tone = "paper", defaultOpen = 0 }: { items: AccordionItem[]; tone?: "paper" | "ink"; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const base = useId();
  const onInk = tone === "ink";
  return (
    <div className={cn("border-t", onInk ? "border-line-inv" : "border-line")}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const id = `${base}-${i}`;
        return (
          <div key={item.q} className={cn("border-b", onInk ? "border-line-inv" : "border-line")}>
            <h3>
              <button
                type="button"
                id={`${id}-btn`}
                aria-expanded={isOpen}
                aria-controls={`${id}-panel`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="text-lg font-medium leading-snug md:text-xl">{item.q}</span>
                <span
                  className={cn(
                    "flex size-9 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,border-color] duration-500 ease-[var(--ease-out-expo)]",
                    isOpen ? "rotate-45 border-edge bg-edge text-ink" : onInk ? "border-line-inv group-hover:border-paper" : "border-line group-hover:border-ink",
                  )}
                  aria-hidden
                >
                  <Plus className="size-4" />
                </span>
              </button>
            </h3>
            <div
              id={`${id}-panel`}
              role="region"
              aria-labelledby={`${id}-btn`}
              className={cn(
                "grid transition-[grid-template-rows] duration-500 ease-[var(--ease-out-expo)]",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
              inert={!isOpen}
            >
              <div className="overflow-hidden">
                <p className={cn("max-w-[62ch] pb-7 pr-12", onInk ? "text-paper/70" : "text-ink/70")}>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
