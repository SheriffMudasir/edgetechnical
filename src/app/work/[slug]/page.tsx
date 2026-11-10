import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CaseCover } from "@/components/work/CaseCover";
import { SplitText } from "@/components/motion/SplitText";
import { Pill } from "@/components/ui/Pill";
import { EdgeMark } from "@/components/ui/EdgeMark";
import { BigCta } from "@/components/sections/shared/BigCta";
import { caseStudies, getCaseStudy } from "@/content/work";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) return {};
  const title = `${c.title}${c.concept ? " (Concept)" : ""} — ${c.kind}`;
  return pageMetadata({ title, description: c.summary, path: `/work/${c.slug}`, ogTitle: c.title, ogLabel: c.kind });
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) notFound();
  const { default: Body } = await import(`@/content/work/${slug}.mdx`);
  const idx = caseStudies.findIndex((x) => x.slug === slug);
  const prev = caseStudies[(idx - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <>
      <section className="bg-paper">
        <div className="container-x pt-[calc(var(--header-h)+40px)] md:pt-[calc(var(--header-h)+72px)]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5">
            <Link href="/work" className="label-mono flex items-center gap-2.5 text-ink/80">
              <EdgeMark className="size-2.5" /> Work
            </Link>
            <div className="flex flex-wrap gap-2">
              {c.concept && <Pill tone="edge">Concept project</Pill>}
              <Pill>{c.pillar}</Pill>
              <Pill>{c.year}</Pill>
            </div>
          </div>
          <SplitText text={c.title} className="h-hero mt-10 md:mt-14" />
          <p className="rise-in mt-6 max-w-[56ch] text-lg text-ink/75" style={{ ["--rise-delay" as string]: "350ms" }}>
            {c.summary}
          </p>
        </div>
        <div className="container-x mt-14">
          <div className="rise-in overflow-hidden rounded-[14px]" style={{ ["--rise-delay" as string]: "500ms" }}>
            <CaseCover cover={c.cover} className="aspect-[4/3] md:aspect-[16/8]" />
          </div>
        </div>
      </section>

      <section className="bg-paper py-[clamp(64px,9vw,140px)]">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="space-y-8 lg:sticky lg:top-28">
              <div>
                <p className="label-mono text-slate">Type</p>
                <p className="mt-2">{c.kind}</p>
              </div>
              <div>
                <p className="label-mono text-slate">Modules</p>
                <ul className="mt-2 space-y-1.5">
                  {c.modules.map((m) => (
                    <li key={m} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-ivy" aria-hidden />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              {c.concept && (
                <p className="rounded-[10px] border border-line bg-chalk p-4 text-[14px] text-ink/70">
                  This is a concept project that shows our approach. It isn&apos;t a real client.
                </p>
              )}
            </div>
          </aside>
          <article className="prose-edge lg:col-span-7 lg:col-start-5">
            <Body />
          </article>
        </div>
      </section>

      <nav aria-label="More projects" className="border-t border-line bg-paper">
        <div className="container-x grid md:grid-cols-2">
          <Link href={`/work/${prev.slug}`} className="group flex flex-col gap-2 border-b border-line py-10 md:border-b-0 md:border-r md:pr-8" data-cursor="View">
            <span className="label-mono flex items-center gap-2 text-slate">
              <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" aria-hidden /> Previous
            </span>
            <span className="font-display text-4xl">{prev.title}</span>
          </Link>
          <Link href={`/work/${next.slug}`} className="group flex flex-col items-end gap-2 py-10 text-right md:pl-8" data-cursor="View">
            <span className="label-mono flex items-center gap-2 text-slate">
              Next <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
            </span>
            <span className="font-display text-4xl">{next.title}</span>
          </Link>
        </div>
      </nav>

      <BigCta />
    </>
  );
}
