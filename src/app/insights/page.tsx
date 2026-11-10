import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { formatDate, posts } from "@/content/insights";
import { pageMetadata } from "@/lib/seo";
import { pad2 } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Insights",
  description: "Practical guides for Nigerian school owners and principals on school websites, online admissions, results, fees and AI for learning.",
  path: "/insights",
  ogTitle: "Insights for school owners.",
  ogLabel: "Insights",
});

export default function InsightsPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHero
        label="Insights"
        title="Notes for school owners and *principals.*"
        sub="Practical, plain-English guides on websites, admissions, results, fees and AI, written for Nigerian schools."
      />
      <section aria-label="Articles" className="bg-paper pb-[clamp(80px,11vw,176px)]">
        <ol className="container-x border-t border-line">
          {sorted.map((p, i) => (
            <Reveal as="li" key={p.slug} className="border-b border-line">
              <Link href={`/insights/${p.slug}`} className="group grid gap-4 py-10 md:grid-cols-12 md:items-baseline md:gap-8" data-cursor="Read">
                <span className="label-mono text-slate md:col-span-1">{pad2(i + 1)}</span>
                <div className="md:col-span-7">
                  <h2 className="font-display text-[clamp(2rem,3.4vw,3rem)] leading-[1.02]">
                    <span className="link-draw">{p.title}</span>
                  </h2>
                  <p className="mt-3 max-w-[60ch] text-ink/70">{p.description}</p>
                </div>
                <div className="flex items-center justify-between gap-4 md:col-span-4 md:flex-col md:items-end">
                  <span className="label-mono text-[11px] text-slate">
                    {p.tag} · {formatDate(p.date)} · {p.readingTime}
                  </span>
                  <ArrowUpRight className="size-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden />
                </div>
              </Link>
            </Reveal>
          ))}
        </ol>
      </section>
    </>
  );
}
