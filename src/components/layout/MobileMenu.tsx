"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { Wordmark } from "@/components/ui/Wordmark";
import { company, megaMenu, whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const EASE = [0.16, 1, 0.3, 1] as const;

const bigLinks = [
  { label: "Schools", href: "/schools", note: "Flagship" },
  { label: "School software", href: "/school-software" },
  { label: "AI for learning", href: "/ai" },
  { label: "StudyWise AI", href: "/products/studywise" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const reduced = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && panelRef.current) {
        const f = panelRef.current.querySelectorAll<HTMLElement>("a, button");
        const firstEl = f[0];
        const lastEl = f[f.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          data-lenis-prevent
          initial={reduced ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
          animate={reduced ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }}
          exit={reduced ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="grain fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-ink text-paper lg:hidden"
        >
          <div className="container-x flex h-[var(--header-h)] shrink-0 items-center justify-between">
            <Link href="/" onClick={onClose}>
              <Wordmark />
            </Link>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex size-11 items-center justify-center rounded-full border border-line-inv"
            >
              <X className="size-5" aria-hidden />
            </button>
          </div>

          <nav aria-label="Mobile" className="container-x relative z-10 flex-1 pt-6">
            <ul>
              {bigLinks.map((l, i) => (
                <li key={l.href} className="overflow-hidden border-b border-line-inv">
                  <motion.div
                    initial={reduced ? false : { y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.7, ease: EASE, delay: 0.18 + i * 0.05 }}
                  >
                    <Link
                      href={l.href}
                      onClick={onClose}
                      className="flex items-baseline justify-between py-3 font-display text-[2.6rem] leading-[1.05] tracking-tight"
                    >
                      <span>{i === 0 ? <>Schools</> : l.label}</span>
                      {l.note ? (
                        <span className="label-mono rounded-full bg-edge px-2 py-1 text-[10px] text-ink">{l.note}</span>
                      ) : (
                        <span className="label-mono text-[11px] text-mist">0{i + 1}</span>
                      )}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>

            <div className="mt-10 grid grid-cols-2 gap-6 pb-6 text-sm">
              {megaMenu.slice(0, 2).map((col) => (
                <div key={col.key}>
                  <p className="label-mono text-[11px] text-mist">{col.title}</p>
                  <ul className="mt-3 space-y-2 text-paper/80">
                    {col.links.slice(1).map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} onClick={onClose}>
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>

          <div className="container-x relative z-10 flex flex-col gap-3 pb-8 pt-4">
            <Link
              href="/contact"
              onClick={onClose}
              className="flex h-14 items-center justify-center rounded-full bg-edge font-medium text-ink"
            >
              Get a quote
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center justify-center gap-2 rounded-full border border-line-inv"
            >
              <WhatsAppIcon className="size-5" /> Chat on WhatsApp
            </a>
            <a href={`mailto:${company.email}`} className="mt-2 text-center text-sm text-mist">
              {company.email}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
