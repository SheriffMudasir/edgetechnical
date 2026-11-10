import { showTestimonials, testimonials } from "@/content/people";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";

/** Renders nothing until real testimonials are added and `showTestimonials` is true in content/people.ts. */
export function Testimonials({ index }: { index?: number }) {
  if (!showTestimonials || testimonials.length === 0) return null;
  return (
    <section aria-labelledby="testimonials-title" className="section-y bg-paper">
      <div className="container-x">
        <SectionLabel index={index} className="text-slate">
          What schools say
        </SectionLabel>
        <h2 id="testimonials-title" className="sr-only">
          Testimonials
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <Reveal as="figure" key={t.name} className="rounded-[14px] border border-line bg-chalk p-8">
              <blockquote className="font-display text-3xl leading-tight">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-6 text-sm text-ink/70">
                <span className="font-semibold text-ink">{t.name}</span> · {t.role}, {t.school}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
