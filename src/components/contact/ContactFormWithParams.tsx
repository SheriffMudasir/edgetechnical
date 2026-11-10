"use client";

import { useSearchParams } from "next/navigation";
import { ContactForm, type ContactPrefill } from "./ContactForm";
import { formModules, needPrefill, studentRanges } from "@/content/contact";
import { tiers } from "@/content/pricing";

/** Reads ?need=, ?package=, ?modules=, ?students=, ?estimate= and pre-fills the quote form. */
export function ContactFormWithParams() {
  const sp = useSearchParams();
  const prefill: ContactPrefill = {};

  const need = sp.get("need");
  if (need && needPrefill[need]) {
    prefill.needs = needPrefill[need].needs;
    if (needPrefill[need].message) prefill.message = needPrefill[need].message;
  }

  const pkg = sp.get("package");
  const tier = tiers.find((t) => t.key === pkg);
  if (tier) {
    prefill.package = tier.name;
    prefill.needs = Array.from(new Set([...(prefill.needs ?? []), "website"]));
    prefill.message = prefill.message ?? `We're interested in the ${tier.name} package.`;
  }

  const modules = sp.get("modules");
  if (modules) {
    const allowed = new Set<string>(formModules);
    prefill.modules = modules.split(",").filter((m) => allowed.has(m));
    prefill.needs = Array.from(new Set([...(prefill.needs ?? []), "website"]));
  }

  const students = sp.get("students");
  if (students && (studentRanges as readonly string[]).includes(students)) prefill.students = students as ContactPrefill["students"];

  const estimate = sp.get("estimate");
  if (estimate) prefill.estimate = estimate.slice(0, 80);

  return <ContactForm key={sp.toString()} prefill={prefill} />;
}
