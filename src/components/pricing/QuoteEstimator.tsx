"use client";

import Link from "next/link";
import { animate, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { estimator } from "@/content/pricing";
import { buttonClasses, ButtonArrow } from "@/components/ui/Button";
import { cn, naira } from "@/lib/utils";

/** Maps estimator module ids to the contact form's module labels. */
const toFormModule: Record<string, string> = {
  admissions: "Online admissions",
  "result-checker": "Result checker",
  "fee-payments": "Fee payments",
  "parent-portal": "Parent & student portal",
  "news-events": "News & events",
  "gallery-tour": "Gallery & virtual tour",
  elearning: "E-learning / CBT",
  "ai-assistant": "AI admissions assistant",
};
const toStudents: Record<string, string> = { small: "Under 300", medium: "300 – 800", large: "800 – 2,000", xl: "2,000+" };

function round(n: number) {
  return Math.round(n / 10_000) * 10_000;
}

function AnimatedNaira({ value, className }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const prev = useRef(value);
  const reduced = useReducedMotion();
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) {
      el.textContent = naira(value);
      prev.current = value;
      return;
    }
    const c = animate(prev.current, value, {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => (el.textContent = naira(round(v))),
    });
    prev.current = value;
    return () => c.stop();
  }, [value, reduced]);
  return (
    <span ref={ref} className={className}>
      {naira(value)}
    </span>
  );
}

export function QuoteEstimator() {
  const [selected, setSelected] = useState<string[]>(["admissions", "result-checker"]);
  const [size, setSize] = useState(estimator.sizes[0].id);

  const mult = estimator.sizes.find((s) => s.id === size)?.multiplier ?? 1;
  const total = (estimator.base + estimator.modules.filter((m) => selected.includes(m.id)).reduce((s, m) => s + m.price, 0)) * mult;
  const low = round(total * (1 - estimator.spread));
  const high = round(total * (1 + estimator.spread));

  const toggle = (id: string) => setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const params = new URLSearchParams();
  const formMods = selected.map((id) => toFormModule[id]).filter(Boolean);
  if (formMods.length) params.set("modules", formMods.join(","));
  params.set("students", toStudents[size]);
  params.set("estimate", `${naira(low)} – ${naira(high)}`);
  params.set("need", selected.includes("sms") ? "sms" : "website");

  return (
    <div className="grid gap-px overflow-hidden rounded-[14px] border border-line bg-line lg:grid-cols-12">
      <div className="bg-chalk p-6 md:p-10 lg:col-span-7">
        <fieldset>
          <legend className="label-mono text-slate">1 — Pick your modules</legend>
          <p className="mt-2 text-[15px] text-ink/70">Every quote includes a beautiful, mobile-first school website.</p>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {estimator.modules.map((m) => {
              const on = selected.includes(m.id);
              return (
                <label
                  key={m.id}
                  className={cn(
                    "flex cursor-pointer items-center justify-between gap-3 rounded-[10px] border px-4 py-3 text-[15px] transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-edge",
                    on ? "border-ink bg-ink text-paper" : "border-line hover:border-ink/40",
                  )}
                >
                  <span className="flex items-center gap-3">
                    <input type="checkbox" className="sr-only" checked={on} onChange={() => toggle(m.id)} />
                    <span
                      aria-hidden
                      className={cn("flex size-4 items-center justify-center rounded-[4px] border", on ? "border-edge bg-edge" : "border-ink/30")}
                    >
                      {on && <span className="size-1.5 rounded-[1px] bg-ink" />}
                    </span>
                    {m.label}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>
        <fieldset className="mt-10">
          <legend className="label-mono text-slate">2 — School size</legend>
          <div className="mt-5 flex flex-wrap gap-2">
            {estimator.sizes.map((s) => (
              <label key={s.id} className="cursor-pointer">
                <input type="radio" name="size" className="peer sr-only" checked={size === s.id} onChange={() => setSize(s.id)} />
                <span className="inline-block rounded-full border border-line px-4 py-2 text-[14px] transition-colors peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-edge">
                  {s.label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>
      <div className="grain relative flex flex-col justify-between gap-10 bg-ink p-6 text-paper md:p-10 lg:col-span-5">
        <div className="relative z-10">
          <p className="label-mono text-mist">Indicative range</p>
          <p className="mt-4 font-display text-[clamp(2.4rem,4.4vw,3.8rem)] leading-[1] tracking-tight" aria-live="polite" aria-atomic="true">
            <AnimatedNaira value={low} />
            <span className="text-mist"> – </span>
            <br className="hidden sm:block lg:hidden xl:block" />
            <AnimatedNaira value={high} />
          </p>
          <p className="mt-4 text-[14px] leading-relaxed text-paper/65">
            One-off build estimate based on {selected.length} module{selected.length === 1 ? "" : "s"}. Your final quote depends on content,
            integrations and timelines, and is always confirmed in writing.
          </p>
        </div>
        <div className="relative z-10">
          <Link href={`/contact?${params.toString()}`} className={cn(buttonClasses("primary", "lg"), "w-full")}>
            Get my exact quote
            <ButtonArrow />
          </Link>
          <p className="mt-3 text-center text-[12px] text-mist">Your selections are carried into the form.</p>
        </div>
      </div>
    </div>
  );
}
