import { homeHero } from "@/content/home";
import { company } from "@/content/site";
import { SplitText } from "@/components/motion/SplitText";
import { Magnetic } from "@/components/motion/Magnetic";
import { Button, TextLink } from "@/components/ui/Button";
import { EdgeMark } from "@/components/ui/EdgeMark";
import { HeroMockup } from "./HeroMockup";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-x-clip bg-paper">
      <div className="container-x pt-[calc(var(--header-h)+40px)] md:pt-[calc(var(--header-h)+72px)]">
        <div className="flex items-center justify-between gap-4 border-b border-line pb-5">
          <p className="label-mono flex items-center gap-2.5 text-ink/80">
            <EdgeMark className="size-2.5" />
            {homeHero.label}
          </p>
          <p className="label-mono hidden text-slate sm:block">
            {company.rcNumber} · Est. 2026
          </p>
        </div>

        <div className="grid gap-10 pt-10 md:pt-14 lg:grid-cols-12">
          <SplitText
            id="hero-title"
            text={homeHero.title}
            className="h-hero lg:col-span-11 xl:col-span-10"
            emClassName="italic text-ivy"
          />
          <div className="rise-in flex flex-col gap-8 lg:col-span-5 lg:col-start-8" style={{ ["--rise-delay" as string]: "550ms" }}>
            <p className="max-w-[46ch] text-[17px] leading-relaxed text-ink/75 md:text-lg">{homeHero.sub}</p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <Magnetic>
                <Button href="/contact" size="lg">
                  Get a quote
                </Button>
              </Magnetic>
              <TextLink href="/schools">See school solutions</TextLink>
            </div>
          </div>
        </div>
      </div>

      <HeroMockup stages={homeHero.stages} />
    </section>
  );
}
