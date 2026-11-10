import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";
import { TextLink } from "@/components/ui/Button";
import { Bento } from "./Bento";

export function SchoolModules() {
  return (
    <section aria-labelledby="modules-title" className="grain section-y relative bg-ink text-paper">
      <div className="container-x relative z-10">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionLabel index={2} className="text-mist" tone="edge">
              What we build for schools
            </SectionLabel>
            <Reveal>
              <h2 id="modules-title" className="h-section mt-8 max-w-[14ch]">
                Every gate, office and notice board, <span className="italic">online.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120} className="flex flex-col justify-end gap-6 lg:col-span-4 lg:col-start-9">
            <p className="text-paper/70">
              Pick the modules your school needs today and add more as you grow. Hover (or scroll on your phone) to see each one
              work.
            </p>
            <TextLink href="/schools" className="text-paper">
              Explore every module
            </TextLink>
          </Reveal>
        </div>
        <div className="mt-14 md:mt-20">
          <Bento />
        </div>
      </div>
    </section>
  );
}
