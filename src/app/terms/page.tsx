import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/sections/shared/LegalPage";
import { company } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of use",
  description: "Terms of use for the Edgetechnical Solutions Limited website.",
  path: "/terms",
  ogLabel: "Legal",
});

// TODO(owner): have these terms reviewed by a qualified Nigerian lawyer before launch.
export default function TermsPage() {
  return (
    <LegalPage title="Terms of use" updated="9 November 2026">
      <p>
        These terms apply to your use of this website, operated by {company.legalName} ({company.rcNumber}), a company registered in
        Nigeria. By using the site you agree to them. Work we do for clients is governed by a separate written agreement.
      </p>

      <h2>Information on this site</h2>
      <p>
        We work hard to keep this site accurate, but its content is for general information only. Prices shown are indicative
        starting points and do not form an offer; every project is confirmed with a written quote. Projects marked
        &ldquo;Concept&rdquo; are illustrative and do not represent real clients.
      </p>

      <h2>Quote estimates</h2>
      <p>
        The pricing estimator gives an indicative range based on the options you select. It is not a binding quotation. Final pricing
        depends on scope, content, integrations and timelines.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The design, text, code and graphics on this site belong to Edgetechnical unless stated otherwise. You may share links to our
        pages, but please don&apos;t copy or reuse our content or designs without permission. School names such as &ldquo;Greenfield
        Academy&rdquo; and &ldquo;Crestview College&rdquo; on this site are fictional.
      </p>

      <h2>Acceptable use</h2>
      <p>
        Please don&apos;t misuse the site, for example by attempting to break its security, sending spam through our forms, or using
        automated tools to scrape it.
      </p>

      <h2>Third-party links</h2>
      <p>
        We may link to other websites and services (for example WhatsApp). We aren&apos;t responsible for their content or privacy
        practices.
      </p>

      <h2>Liability</h2>
      <p>
        To the extent permitted by law, we are not liable for losses arising from your use of this website or reliance on its general
        information. Nothing in these terms limits liability that cannot be limited under Nigerian law.
      </p>

      <h2>Privacy</h2>
      <p>
        How we handle personal data, in line with the Nigeria Data Protection Act 2023, is explained in our{" "}
        <Link href="/privacy">privacy policy</Link>.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the Federal Republic of Nigeria.</p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Email <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>
    </LegalPage>
  );
}
