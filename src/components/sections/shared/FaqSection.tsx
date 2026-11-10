import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";
import { TextLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/seo";
import { whatsappLink } from "@/content/site";

export function FaqSection({
  items,
  index,
  title = "Questions school owners ask us",
  withJsonLd = true,
}: {
  items: AccordionItem[];
  index?: number;
  title?: string;
  withJsonLd?: boolean;
}) {
  return (
    <section aria-labelledby="faq-title" className="section-y bg-paper">
      {withJsonLd && <JsonLd data={faqJsonLd(items)} />}
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionLabel index={index} className="text-slate">
            FAQ
          </SectionLabel>
          <Reveal as="h2" id="faq-title" className="mt-8 font-display text-[clamp(2.4rem,4vw,3.75rem)] leading-[1]">
            {title}
          </Reveal>
          <p className="mt-6 text-ink/70">Can&apos;t see your question?</p>
          <TextLink href={whatsappLink("Hello Edgetechnical, I have a question.")} target="_blank" rel="noopener noreferrer" className="mt-2">
            Ask us on WhatsApp
          </TextLink>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <Accordion items={items} />
        </div>
      </div>
    </section>
  );
}
