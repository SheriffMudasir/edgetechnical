import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SplitText } from "@/components/motion/SplitText";
import { EdgeMark } from "@/components/ui/EdgeMark";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactFormWithParams } from "@/components/contact/ContactFormWithParams";
import { company, whatsappLink } from "@/content/site";
import { contactCopy } from "@/content/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact & get a quote",
  description:
    "Get a quote for a school website, school management system or AI for your school. Edgetechnical, Abuja — we reply within one working day. WhatsApp, phone or email.",
  path: "/contact",
  ogTitle: "Tell us about your school.",
  ogLabel: "Contact",
});

export default function ContactPage() {
  const details = [
    { icon: WhatsAppIcon, label: "WhatsApp", value: "Chat with us", href: whatsappLink(), external: true },
    { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
    { icon: Phone, label: "Phone", value: company.phone, href: `tel:${company.phoneHref}` }, // TODO(owner): real phone number
    { icon: MapPin, label: "Office", value: company.address }, // TODO(owner): real office address
    { icon: Clock, label: "Hours", value: company.hours },
  ];

  return (
    <section className="bg-paper">
      <div className="container-x grid gap-16 pb-28 pt-[calc(var(--header-h)+40px)] md:pt-[calc(var(--header-h)+72px)] lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="label-mono flex items-center gap-2.5 text-ink/80">
              <EdgeMark className="size-2.5" /> Contact · Get a quote
            </p>
            <SplitText text={contactCopy.title} className="mt-10 font-display text-[clamp(3rem,6vw,6rem)] leading-[0.95] tracking-[-0.025em]" emClassName="italic text-ivy" />
            <p className="rise-in mt-8 max-w-[44ch] text-lg text-ink/75" style={{ ["--rise-delay" as string]: "400ms" }}>
              {contactCopy.sub}
            </p>
            <ul className="mt-12 border-t border-line">
              {details.map((d) => (
                <li key={d.label} className="flex items-start gap-4 border-b border-line py-4">
                  <d.icon className="mt-0.5 size-5 shrink-0 text-ivy" />
                  <div className="min-w-0">
                    <p className="label-mono text-[11px] text-slate">{d.label}</p>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="link-draw break-words text-[17px]"
                        {...(d.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="text-[17px]">{d.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate">
              {company.legalName} · {company.rcNumber}
            </p>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="rounded-[14px] border border-line bg-paper-2/40 p-6 md:p-10">
            <Suspense fallback={<ContactForm />}>
              <ContactFormWithParams />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
