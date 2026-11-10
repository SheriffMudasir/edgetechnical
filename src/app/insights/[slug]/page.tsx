import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SplitText } from "@/components/motion/SplitText";
import { EdgeMark } from "@/components/ui/EdgeMark";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { formatDate, getPost, posts } from "@/content/insights";
import { company } from "@/content/site";
import { articleJsonLd, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  const base = pageMetadata({ title: p.title, description: p.description, path: `/insights/${p.slug}`, ogLabel: p.tag });
  return { ...base, openGraph: { ...base.openGraph, type: "article", publishedTime: p.date } };
}

export default async function PostPage({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const { default: Body } = await import(`@/content/insights/${slug}.mdx`);
  const more = posts.filter((x) => x.slug !== slug).slice(0, 2);

  return (
    <>
      <JsonLd data={articleJsonLd({ title: p.title, description: p.description, slug: p.slug, date: p.date })} />
      <article className="bg-paper">
        <header className="container-x pt-[calc(var(--header-h)+40px)] md:pt-[calc(var(--header-h)+72px)]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-5">
            <Link href="/insights" className="label-mono flex items-center gap-2.5 text-ink/80">
              <EdgeMark className="size-2.5" /> Insights
            </Link>
            <p className="label-mono text-slate">
              {p.tag} · <time dateTime={p.date}>{formatDate(p.date)}</time> · {p.readingTime}
            </p>
          </div>
          <SplitText text={p.title} className="mt-10 max-w-[20ch] font-display text-[clamp(2.75rem,6vw,5.75rem)] leading-[0.98] tracking-[-0.02em] md:mt-14" />
          <p className="rise-in mt-8 max-w-[58ch] text-xl leading-relaxed text-ink/70" style={{ ["--rise-delay" as string]: "350ms" }}>
            {p.description}
          </p>
        </header>
        <div className="container-x grid gap-12 py-[clamp(56px,8vw,120px)] lg:grid-cols-12">
          <div className="prose-edge lg:col-span-7 lg:col-start-3">
            <Body />
            <hr className="my-12 border-line" />
            <p className="text-[15px] text-slate">
              Written by the team at {company.legalName}, a software agency for education in {company.city}.
            </p>
          </div>
        </div>
      </article>

      <section aria-labelledby="more-title" className="border-t border-line bg-paper py-20">
        <div className="container-x">
          <h2 id="more-title" className="label-mono text-slate">
            Keep reading
          </h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {more.map((m) => (
              <li key={m.slug}>
                <Link href={`/insights/${m.slug}`} className="group block rounded-[14px] border border-line bg-chalk p-7 transition-colors hover:border-ink/30">
                  <span className="label-mono text-[11px] text-slate">{m.tag}</span>
                  <p className="mt-3 font-display text-3xl leading-tight">
                    <span className="link-draw">{m.title}</span>
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-14 flex flex-col items-start gap-6 rounded-[14px] bg-ink p-8 text-paper md:flex-row md:items-center md:justify-between md:p-12">
            <p className="max-w-[24ch] font-display text-[clamp(2rem,3.4vw,3rem)] leading-[1.02]">
              Want this for your <span className="italic text-edge">school?</span>
            </p>
            <Button href="/contact">Book a free consultation</Button>
          </div>
        </div>
      </section>
    </>
  );
}
