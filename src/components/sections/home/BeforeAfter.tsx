"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { BrowserFrame } from "@/components/mockups/BrowserFrame";
import { Crest } from "@/components/mockups/SchoolSiteMockup";
import { cn } from "@/lib/utils";

function OldSite() {
  return (
    <div className="aspect-[16/11] bg-[#d8e4f8] font-serif text-[#111]" style={{ fontFamily: "'Times New Roman', serif" }}>
      <div className="bg-[linear-gradient(#2a4fd6,#0a1f7a)] px-[3cqw] py-[2cqw] text-center">
        <p className="text-[3.6cqw] font-bold text-[#ffe600] [text-shadow:2px_2px_0_#c00]">WELCOME TO GREENFIELD ACADEMY!!!</p>
        <p className="text-[1.6cqw] text-white">~ Excellence in Education ~ Since Forever ~</p>
      </div>
      <div className="flex gap-[0.6cqw] bg-[#c00] px-[1cqw] py-[0.6cqw] text-[1.5cqw] text-white underline">
        {["HOME", "ABOUT US", "ADMISSION", "CONTACT", "GALLERY"].map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
      <div className="grid grid-cols-[1fr_2fr] gap-[2cqw] p-[2cqw]">
        <div className="space-y-[1cqw]">
          <div className="flex aspect-square items-center justify-center border-[0.4cqw] border-dashed border-[#c00] bg-white text-center text-[1.5cqw] text-[#c00]">
            image_final_2.jpg
            <br />
            (not found)
          </div>
          <p className="bg-[#ffe600] px-[0.6cqw] text-[1.5cqw] font-bold">VISITORS: 000214</p>
        </div>
        <div className="space-y-[1cqw] text-[1.7cqw] leading-tight">
          <p className="text-[2.4cqw] font-bold text-[#0a1f7a] underline">LATEST NEWS</p>
          <p>
            <span className="font-bold text-[#c00]">NEW!!</span> Admission forms for 2019/2020 are now on sale at the school gate. Bring
            ₦2,000 cash.
          </p>
          <p className="text-[#0000ee] underline">Click here to download form (form.docx)</p>
          <p className="text-[1.4cqw] italic text-[#555]">Site under construction. Best viewed in Internet Explorer 6.</p>
          <p className="text-[1.4cqw] text-[#555]">Last updated: 14/03/2019</p>
        </div>
      </div>
    </div>
  );
}

function NewSite() {
  return (
    <div className="flex aspect-[16/11] flex-col bg-[#FBF9F4] text-ink">
      <div className="flex items-center justify-between border-b border-ink/8 px-[4cqw] py-[2cqw]">
        <span className="flex items-center gap-[1cqw]">
          <Crest className="h-[3.6cqw] w-[3.2cqw]" />
          <span className="font-display text-[2.3cqw]">Greenfield Academy</span>
        </span>
        <span className="rounded-full bg-ivy px-[2cqw] py-[0.9cqw] text-[1.4cqw] text-paper">Apply now</span>
      </div>
      <div className="flex flex-1 flex-col justify-center px-[4cqw]">
        <span className="font-mono text-[1.2cqw] uppercase tracking-[0.12em] text-edge-deep">Admissions 2026/27 open</span>
        <p className="mt-[1.4cqw] max-w-[60cqw] font-display text-[7cqw] leading-[0.95] tracking-[-0.02em]">
          Where curious minds <span className="italic text-ivy">grow.</span>
        </p>
        <div className="mt-[3cqw] flex gap-[1.2cqw] text-[1.5cqw]">
          <span className="rounded-full bg-ivy px-[2.4cqw] py-[1.2cqw] text-paper">Apply online</span>
          <span className="rounded-full border border-ink/20 px-[2.4cqw] py-[1.2cqw]">Check results</span>
          <span className="rounded-full border border-ink/20 px-[2.4cqw] py-[1.2cqw]">Pay fees</span>
        </div>
      </div>
      <div className="grid grid-cols-3 border-t border-ink/8 text-[1.5cqw]">
        {["Loads in 1.2s", "Works on any phone", "Parents apply online"].map((t, i) => (
          <span key={t} className={cn("px-[4cqw] py-[2cqw]", i > 0 && "border-l border-ink/8")}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Before → after toggle: an old-school site turning into a clean modern one. */
export function BeforeAfter() {
  const [after, setAfter] = useState(true);
  const reduced = useReducedMotion();
  return (
    <div>
      <div role="radiogroup" aria-label="Compare website" className="mb-5 inline-flex rounded-full border border-line bg-chalk p-1">
        {[
          ["Before", false],
          ["After", true],
        ].map(([label, val]) => (
          <button
            key={String(label)}
            type="button"
            role="radio"
            aria-checked={after === val}
            onClick={() => setAfter(val as boolean)}
            className={cn(
              "relative rounded-full px-5 py-2 text-sm font-medium transition-colors",
              after === val ? "text-paper" : "text-ink/60 hover:text-ink",
            )}
          >
            {after === val && (
              <motion.span
                layoutId="ba-pill"
                className="absolute inset-0 rounded-full bg-ink"
                transition={{ type: "spring", stiffness: 400, damping: 34 }}
              />
            )}
            <span className="relative">{label as string}</span>
          </button>
        ))}
      </div>
      <BrowserFrame url={after ? "greenfieldacademy.edu.ng" : "greenfieldacademy.freehostsite.com/index.htm"}>
        <div className="relative" aria-live="polite">
          <span className="sr-only">{after ? "Showing the modern redesigned site" : "Showing the old website"}</span>
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={after ? "after" : "before"}
              initial={reduced ? { opacity: 0 } : { opacity: 0, clipPath: "inset(0 0 0 100%)" }}
              animate={reduced ? { opacity: 1 } : { opacity: 1, clipPath: "inset(0 0 0 0%)" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              aria-hidden
            >
              {after ? <NewSite /> : <OldSite />}
            </motion.div>
          </AnimatePresence>
        </div>
      </BrowserFrame>
    </div>
  );
}
