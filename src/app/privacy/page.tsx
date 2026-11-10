import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/sections/shared/LegalPage";
import { company } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy policy",
  description: "How Edgetechnical Solutions Limited collects, uses and protects personal data in line with the Nigeria Data Protection Act (NDPA) 2023.",
  path: "/privacy",
  ogLabel: "Legal",
});

// TODO(owner): have this policy reviewed by a qualified Nigerian data-protection professional before launch.
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy" updated="9 November 2026">
      <p>
        This policy explains how {company.legalName} ({company.rcNumber}) (&ldquo;Edgetechnical&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo;) handles personal data when you use this website, contact us, or use products we build. We process personal
        data in line with the <strong>Nigeria Data Protection Act 2023 (NDPA)</strong> and guidance from the Nigeria Data Protection
        Commission (NDPC).
      </p>

      <h2>Who we are</h2>
      <p>
        We are a private company limited by shares, registered with the Corporate Affairs Commission and based in {company.city},
        Nigeria. For questions about this policy or your data, email <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Enquiries.</strong> When you use our contact form we collect your name, school or organisation, role, email, phone
          number, and the details you choose to share about your project.
        </li>
        <li>
          <strong>Messages.</strong> If you contact us by email or WhatsApp, we keep that correspondence so we can respond and follow up.
        </li>
        <li>
          <strong>Website analytics.</strong> If enabled, we use privacy-friendly, cookieless analytics that record aggregate page views
          without identifying you or setting tracking cookies.
        </li>
        <li>
          <strong>Technical data.</strong> Our hosting provider may process IP addresses and basic request information for security and
          to prevent abuse, such as spam on our forms.
        </li>
      </ul>

      <h2>Why we use it (lawful basis)</h2>
      <ul>
        <li>To respond to your enquiry and prepare a quote (your consent, and steps taken at your request before a contract).</li>
        <li>To deliver services under a contract with your school or organisation.</li>
        <li>To keep our website secure and prevent abuse (our legitimate interests).</li>
        <li>To meet legal, tax and accounting obligations.</li>
      </ul>
      <p>We do not sell personal data, and we do not use it for third-party advertising.</p>

      <h2>Student and school data</h2>
      <p>
        When we build or host websites, portals or school software for a school, the school is usually the <em>data controller</em> for
        its students&apos;, parents&apos; and staff&apos;s data, and we act as a <em>data processor</em> on the school&apos;s
        instructions under a written agreement. We apply extra care to children&apos;s data: we collect the minimum needed, restrict
        access, encrypt data in transit, and never use it to train AI models without explicit permission.
      </p>

      <h2>Who we share it with</h2>
      <p>
        We use carefully chosen service providers to run our business, such as website hosting, email delivery (for example Resend),
        and payment processors (such as Paystack or Flutterwave) when payments are involved. They may only process data on our
        instructions. Where data is transferred outside Nigeria, we rely on safeguards permitted under the NDPA.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep enquiry data for up to 24 months after our last contact unless you become a client, in which case we keep records for
        as long as our agreement requires and the law obliges (for example, financial records). We then delete or anonymise it.
      </p>

      <h2>Your rights</h2>
      <p>Under the NDPA you have the right to:</p>
      <ul>
        <li>be informed about how your data is used, and access a copy of it;</li>
        <li>have inaccurate data corrected, and request deletion;</li>
        <li>restrict or object to processing, and receive your data in a portable format;</li>
        <li>withdraw consent at any time (without affecting processing already carried out);</li>
        <li>lodge a complaint with the Nigeria Data Protection Commission.</li>
      </ul>
      <p>
        To exercise any of these rights, email <a href={`mailto:${company.email}`}>{company.email}</a>. We&apos;ll respond within the
        time required by law.
      </p>

      <h2>Security</h2>
      <p>
        We use encryption in transit (HTTPS), access controls, and reputable infrastructure providers. No system is perfectly secure; if
        a breach affecting your data occurs, we will notify you and the NDPC as the law requires.
      </p>

      <h2>Cookies</h2>
      <p>
        This website does not use advertising or tracking cookies. If we ever introduce cookies that require consent, we&apos;ll ask
        first.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy from time to time. The date at the top shows the latest version. See also our{" "}
        <Link href="/terms">terms of use</Link>.
      </p>
    </LegalPage>
  );
}
