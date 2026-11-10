import { EdgeMark } from "@/components/ui/EdgeMark";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <article className="bg-paper">
      <header className="container-x pt-[calc(var(--header-h)+40px)] md:pt-[calc(var(--header-h)+72px)]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-5">
          <p className="label-mono flex items-center gap-2.5 text-ink/80">
            <EdgeMark className="size-2.5" /> Legal
          </p>
          <p className="label-mono text-slate">Last updated {updated}</p>
        </div>
        <h1 className="mt-10 font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.025em] md:mt-14">{title}</h1>
      </header>
      <div className="container-x grid py-[clamp(56px,8vw,120px)] lg:grid-cols-12">
        <div className="prose-edge lg:col-span-7 lg:col-start-3">{children}</div>
      </div>
    </article>
  );
}
