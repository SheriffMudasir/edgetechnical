"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { pillars } from "@/content/services";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Pill } from "@/components/ui/Pill";
import { cn, pad2 } from "@/lib/utils";
import { MiniChat, MiniReport, MiniSite } from "./PillarVisuals";

const visuals = { "front-gate": MiniSite, "engine-room": MiniReport, "study-room": MiniChat } as const;

/** "The Digital Campus" — three expanding panels connected by one line. */
export function Pillars() {
  const [active, setActive] = useState(0);
  const cols = pillars.map((_, i) => (i === active ? "2.3fr" : "1fr")).join(" ");

  return (
    <section aria-labelledby="campus-title" className="section-y relative overflow-hidden bg-paper">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionLabel index={3} className="text-slate">
              The digital campus
            </SectionLabel>
            <Reveal as="h2" id="campus-title" className="h-section mt-8 max-w-[15ch]">
              One partner for the whole <span className="italic">campus.</span>
            </Reveal>
          </div>
          <Reveal as="p" className="self-end text-ink/70 lg:col-span-4 lg:col-start-9">
            The website is the front gate, where we lead. Behind it sits the engine room that runs the school, and beside it, a
            study room with an AI tutor in every student&apos;s pocket.
          </Reveal>
        </div>

        {/* Desktop: expanding panels */}
        <div
          className="mt-16 hidden gap-3 transition-[grid-template-columns] duration-700 ease-[var(--ease-out-expo)] lg:grid"
          style={{ gridTemplateColumns: cols }}
          onMouseLeave={() => setActive(0)}
        >
          {pillars.map((p, i) => {
            const Visual = visuals[p.key];
            const open = i === active;
            return (
              <article
                key={p.key}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={cn(
                  "relative flex h-[560px] min-w-0 overflow-hidden rounded-[14px] border transition-colors duration-500",
                  p.flagship ? "border-ivy bg-ivy text-paper" : open ? "border-ink/25 bg-chalk" : "border-line bg-chalk/60",
                )}
              >
                <div className="flex w-full max-w-[300px] shrink-0 flex-col justify-between p-6 xl:p-7">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className={cn("label-mono", p.flagship ? "text-paper/70" : "text-slate")}>{pad2(p.index)}</span>
                      {p.flagship && <Pill tone="edge">Our flagship</Pill>}
                    </div>
                    <h3 className="mt-6 font-display text-[2.6rem] leading-[0.95]">{p.name}</h3>
                    <p className={cn("label-mono mt-3", p.flagship ? "text-paper/70" : "text-slate")}>{p.service}</p>
                  </div>
                  <div>
                    <p className={cn("text-[15px] leading-snug", p.flagship ? "text-paper/80" : "text-ink/70")}>{p.summary}</p>
                    <Link
                      href={p.href}
                      className={cn(
                        "group/pl mt-6 inline-flex items-center gap-2 text-[15px] font-medium",
                        p.flagship ? "text-paper" : "text-ink",
                      )}
                    >
                      <span className="link-draw">Explore</span>
                      <ArrowUpRight className="size-4 transition-transform group-hover/pl:-translate-y-0.5 group-hover/pl:translate-x-0.5" aria-hidden />
                    </Link>
                  </div>
                </div>
                <div
                  className={cn(
                    "flex min-w-[340px] flex-1 flex-col justify-between border-l p-7 transition-[opacity,transform] duration-500",
                    p.flagship ? "border-paper/15" : "border-line",
                    open ? "translate-x-0 opacity-100 delay-200" : "pointer-events-none translate-x-6 opacity-0",
                  )}
                  aria-hidden={!open}
                >
                  <ul className="space-y-2.5">
                    {p.offerings.map((o) => (
                      <li key={o} className="flex items-center gap-3 text-[15px]">
                        <span className={cn("size-1.5 rounded-full", p.flagship ? "bg-edge" : "bg-ivy")} />
                        {o}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Visual />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Mobile / tablet: stacked */}
        <div className="mt-12 space-y-3 lg:hidden">
          {pillars.map((p) => {
            const Visual = visuals[p.key];
            return (
              <Reveal
                as="article"
                key={p.key}
                className={cn("overflow-hidden rounded-[14px] border p-6", p.flagship ? "border-ivy bg-ivy text-paper" : "border-line bg-chalk")}
              >
                <div className="flex items-center justify-between">
                  <span className={cn("label-mono", p.flagship ? "text-paper/70" : "text-slate")}>{pad2(p.index)} · {p.service}</span>
                  {p.flagship && <Pill tone="edge">Flagship</Pill>}
                </div>
                <h3 className="mt-5 font-display text-[2.4rem] leading-none">{p.name}</h3>
                <p className={cn("mt-3", p.flagship ? "text-paper/80" : "text-ink/70")}>{p.summary}</p>
                <div className="my-6 max-w-sm">
                  <Visual />
                </div>
                <Link href={p.href} className="inline-flex items-center gap-2 font-medium">
                  <span className="link-draw">Explore {p.name.replace("The ", "the ")}</span>
                  <ArrowUpRight className="size-4" aria-hidden />
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* connecting line: one database, one partner */}
        <div className="relative mt-10 hidden lg:block" aria-hidden>
          <div className="h-px w-full bg-ink/20" />
          <div className="absolute inset-x-0 -top-[5px] flex justify-around">
            {pillars.map((p, i) => (
              <span key={p.key} className={cn("size-[11px] rounded-full border-2 border-paper", i === active ? "bg-edge" : "bg-ink")} />
            ))}
          </div>
        </div>
        <p className="label-mono mt-6 text-center text-slate">One database · one partner · one login for your staff</p>
      </div>
    </section>
  );
}
