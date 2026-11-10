import Link from "next/link";
import { company, footerNav, footerSignOff, socials, whatsappLink } from "@/content/site";
import { Wordmark } from "@/components/ui/Wordmark";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Emph } from "@/components/motion/SplitText";

async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await currentYear();
  return (
    <footer className="grain relative overflow-hidden bg-ink text-paper">
      <div className="container-x relative z-10 pt-24 md:pt-32">
        <div data-signoff="" className="grid gap-12 pb-24 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="label-mono text-mist">Start a project</p>
            <p className="mt-6 font-display text-[clamp(3rem,7.4vw,7.5rem)] leading-[0.95] tracking-[-0.025em]">
              <Emph text={footerSignOff.replace("digital campus", "*digital campus*")} emClassName="italic text-edge" />
            </p>
          </div>
          <div className="flex flex-col justify-end gap-3 lg:col-span-4 lg:items-end">
            <Button href="/contact" variant="primary" size="lg">
              Get a quote
            </Button>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-14 items-center gap-2 rounded-full border border-line-inv px-7 text-paper transition-colors hover:border-paper md:h-16"
            >
              <WhatsAppIcon className="size-5" />
              <span>WhatsApp us</span>
            </a>
            <a href={`mailto:${company.email}`} className="link-draw mt-2 text-lg text-paper/80 hover:text-paper">
              {company.email}
            </a>
          </div>
        </div>

        <div className="grid gap-10 border-t border-line-inv pt-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/">
              <Wordmark descriptor />
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-mist">
              A software agency for education technology, based in {company.city}, working with schools across Nigeria and
              Africa.
            </p>
          </div>
          {footerNav.map((col) => (
            <nav key={col.title} aria-label={col.title} className="lg:col-span-2">
              <p className="label-mono text-mist">{col.title}</p>
              <ul className="mt-4 space-y-2.5 text-[15px]">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="link-draw text-paper/80 hover:text-paper">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div className="lg:col-span-2">
            <p className="label-mono text-mist">Follow</p>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              {/* TODO(owner): add real social profile links in content/site.ts */}
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="link-draw text-paper/80 hover:text-paper">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          aria-hidden
          className="pointer-events-none mt-20 select-none font-display text-[clamp(4rem,19vw,19rem)] leading-[0.8] tracking-[-0.04em] text-paper/[0.06]"
        >
          edge<span className="italic">technical</span>
        </div>

        <div className="flex flex-col gap-3 border-t border-line-inv py-8 text-[13px] text-mist md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {company.legalName} · {company.rcNumber} · Registered in Nigeria
          </p>
          <p className="label-mono text-[11px]">{company.descriptor}</p>
        </div>
      </div>
    </footer>
  );
}
