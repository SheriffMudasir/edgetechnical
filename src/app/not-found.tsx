import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section data-hero="dark" className="grain relative flex min-h-[100svh] items-center overflow-hidden bg-ink text-paper">
      <div className="container-x relative z-10 py-32">
        <p className="label-mono text-mist">Error 404 · Absent</p>
        <h1 className="mt-8 font-display text-[clamp(3.5rem,10vw,10rem)] leading-[0.9] tracking-[-0.03em]">
          This page skipped <span className="italic text-edge">class.</span>
        </h1>
        <p className="mt-8 max-w-[44ch] text-lg text-paper/70">
          We&apos;ve marked it absent. The page you&apos;re looking for may have moved, or the link might have a typo.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Button href="/">Back to the homepage</Button>
          <Link href="/schools" className="link-draw text-paper">
            See school solutions
          </Link>
        </div>
        {/* register */}
        <div aria-hidden className="mt-20 max-w-md rounded-[14px] border border-line-inv p-5 font-mono text-[13px]">
          <p className="label-mono mb-3 text-[10px] text-mist">Register · Today</p>
          {[
            ["Homepage", "PRESENT"],
            ["Schools", "PRESENT"],
            ["This page", "ABSENT"],
          ].map(([n, s]) => (
            <div key={n} className="flex items-center justify-between border-t border-line-inv py-2">
              <span>{n}</span>
              <span className={s === "ABSENT" ? "rounded-full bg-edge px-2 py-0.5 text-[10px] text-ink" : "rounded-full bg-ivy px-2 py-0.5 text-[10px]"}>
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
