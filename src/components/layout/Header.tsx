"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { Wordmark } from "@/components/ui/Wordmark";
import { buttonClasses, ButtonArrow } from "@/components/ui/Button";
import { EdgeMark } from "@/components/ui/EdgeMark";
import { megaMenu } from "@/content/site";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Header() {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const megaId = useId();
  const closeTimer = useRef<number | undefined>(undefined);
  const headerRef = useRef<HTMLElement>(null);
  const [darkHero, setDarkHero] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setDarkHero(Boolean(document.querySelector('[data-hero="dark"]')));
      setScrolled(window.scrollY > 12);
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 12);
    if (megaOpen && Math.abs(y - prev) > 1) setMegaOpen(false);
    if (megaOpen || mobileOpen) return;
    setHidden(y > 240 && y > prev + 2);
    if (y < prev - 2) setHidden(false);
  });

  // Close menus on route change
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMegaOpen(false);
    setMobileOpen(false);
  }

  useEffect(() => {
    if (!megaOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMegaOpen(false);
    const onDown = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setMegaOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [megaOpen]);

  const openMega = () => {
    window.clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMegaOpen(false), 140);
  };

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const solutionsActive = ["/school-software", "/ai", "/services"].some(isActive);

  return (
    <>
      <motion.header
        ref={headerRef}
        data-tone={darkHero && !scrolled && !megaOpen ? "dark" : "light"}
        initial={false}
        animate={{ y: hidden && !reduced ? "-100%" : "0%" }}
        transition={{ duration: 0.45, ease: EASE }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
          scrolled || megaOpen
            ? "border-b border-line bg-paper/85 backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-paper/0",
        )}
        onMouseLeave={scheduleClose}
      >
        <div className="container-x flex h-[var(--header-h)] items-center justify-between gap-6">
          <Link href="/" className="hdr-wordmark relative z-10 shrink-0 rounded-sm">
            <Wordmark />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1 text-[15px]">
              <li>
                <Link
                  href="/schools"
                  className={cn(
                    "hdr-schools group/nav relative flex items-center gap-2 rounded-full px-4 py-2 font-medium transition-colors",
                    isActive("/schools") ? "bg-ivy text-paper" : "bg-ivy/8 text-ivy hover:bg-ivy hover:text-paper",
                  )}
                  onMouseEnter={scheduleClose}
                >
                  <span className="size-1.5 rounded-full bg-current" aria-hidden />
                  Schools
                </Link>
              </li>
              <li onMouseEnter={openMega}>
                <button
                  type="button"
                  aria-expanded={megaOpen}
                  aria-controls={megaId}
                  onClick={() => setMegaOpen((v) => !v)}
                  className={cn(
                    "hdr-link flex items-center gap-1 rounded-full px-4 py-2 transition-colors hover:text-ink",
                    megaOpen || solutionsActive ? "text-ink" : "text-ink/70",
                  )}
                >
                  Solutions
                  <ChevronDown
                    aria-hidden
                    className={cn("size-3.5 transition-transform duration-300", megaOpen && "rotate-180")}
                  />
                </button>
              </li>
              {[
                { label: "StudyWise AI", href: "/products/studywise" },
                { label: "Work", href: "/work" },
                { label: "Pricing", href: "/pricing" },
                { label: "About", href: "/about" },
              ].map((l) => (
                <li key={l.href} onMouseEnter={scheduleClose}>
                  <Link
                    href={l.href}
                    aria-current={isActive(l.href) ? "page" : undefined}
                    className={cn(
                      "hdr-link whitespace-nowrap rounded-full px-3 py-2 transition-colors hover:text-ink xl:px-4",
                      isActive(l.href) ? "text-ink" : "text-ink/70",
                    )}
                  >
                    <span className={cn("link-draw", isActive(l.href) && "bg-[length:100%_1px]")}>{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/contact" className={buttonClasses("dark", "sm", "hdr-cta hidden px-5 sm:inline-flex")}>
              Get a quote
              <ButtonArrow />
            </Link>
            <button
              type="button"
              className="hdr-menu relative z-[60] flex size-11 items-center justify-center rounded-full border border-line bg-paper/60 lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="relative block h-3 w-5" aria-hidden>
                <span
                  className={cn(
                    "absolute left-0 top-0 h-[1.5px] w-full bg-ink transition-transform duration-300",
                    mobileOpen && "translate-y-[5.25px] rotate-45 bg-paper",
                  )}
                />
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-[1.5px] w-full bg-ink transition-transform duration-300",
                    mobileOpen && "-translate-y-[5.25px] -rotate-45 bg-paper",
                  )}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Solutions mega-menu */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              id={megaId}
              key="mega"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: EASE }}
              onMouseEnter={openMega}
              className="absolute inset-x-0 top-full hidden border-b border-line bg-paper lg:block"
            >
              <div className="container-x grid grid-cols-12 gap-6 py-10">
                {megaMenu.map((col, ci) => (
                  <div key={col.key} className="col-span-3 border-l border-line pl-6">
                    <p className="label-mono text-slate">0{ci + 1} — {col.caption}</p>
                    <Link href={col.href} className="group/mm mt-3 block">
                      <span className="font-display text-3xl leading-none">
                        {col.title}
                      </span>
                    </Link>
                    <ul className="mt-6 space-y-2.5 text-[15px]">
                      {col.links.map((l) => (
                        <li key={l.href + l.label}>
                          <Link href={l.href} className="link-draw text-ink/75 hover:text-ink">
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Link
                  href="/products/studywise"
                  className="group/sw col-span-3 flex flex-col justify-between overflow-hidden rounded-[14px] bg-ivy p-6 text-paper"
                >
                  <div className="flex items-center justify-between">
                    <span className="label-mono text-paper/70">Our product</span>
                    <EdgeMark className="size-3" />
                  </div>
                  <div className="mt-10">
                    <p className="font-display text-3xl leading-none">
                      StudyWise <span className="italic">AI</span>
                    </p>
                    <p className="mt-3 text-sm leading-snug text-paper/75">
                      Offline-first AI exam prep for Nigerian students. Built by us.
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
                      <span className="link-draw">Explore StudyWise</span>
                      <span aria-hidden className="transition-transform group-hover/sw:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
