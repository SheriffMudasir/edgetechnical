import { bigCta } from "@/content/home";
import { company, whatsappLink } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { Button } from "@/components/ui/Button";
import { Emph } from "@/components/motion/SplitText";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { EdgeMark } from "@/components/ui/EdgeMark";

export function BigCta({
  title = bigCta.title,
  button = bigCta.button,
  href = "/contact",
}: {
  title?: string;
  button?: string;
  href?: string;
}) {
  return (
    <section aria-labelledby="cta-title" data-bigcta="" className="grain relative flex min-h-[100svh] items-center overflow-hidden border-b border-line-inv bg-ink py-32 text-paper">
      <div className="container-x relative z-10">
        <p className="label-mono flex items-center gap-2.5 text-mist">
          <EdgeMark className="size-2.5" /> Free 30-minute consultation
        </p>
        <Reveal as="h2" id="cta-title" className="mt-8 font-display text-[clamp(3.5rem,11vw,11rem)] leading-[0.9] tracking-[-0.03em]">
          <Emph text={title} emClassName="italic text-edge" />
        </Reveal>
        <div className="mt-14 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Magnetic strength={0.4}>
            <Button href={href} size="lg" className="md:h-20 md:px-12 md:text-lg">
              {button}
            </Button>
          </Magnetic>
          <div className="flex flex-col gap-3 text-lg md:items-end">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5">
              <WhatsAppIcon className="size-5 text-[#25D366]" />
              <span className="link-draw">Message us on WhatsApp</span>
            </a>
            <a href={`mailto:${company.email}`} className="link-draw text-paper/75 hover:text-paper">
              {company.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
