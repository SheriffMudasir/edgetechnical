import "server-only";
import { Resend } from "resend";
import type { QuoteInput } from "./validation";
import { needs } from "@/content/contact";

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] ?? c);
}

function rows(d: QuoteInput): [string, string][] {
  const needLabels = d.needs.map((n) => needs.find((x) => x.value === n)?.label ?? n).join(", ");
  return [
    ["Name", d.name],
    ["School / organisation", d.organisation],
    ["Role", d.role],
    ["Email", d.email],
    ["Phone", d.phone],
    ["Needs", needLabels],
    ["School type", d.schoolType ?? ""],
    ["Students", d.students ?? ""],
    ["Modules", (d.modules ?? []).join(", ")],
    ["Budget", d.budget ?? ""],
    ["Timeline", d.timeline ?? ""],
    ["Package", d.package ?? ""],
    ["Estimator", d.estimate ?? ""],
    ["Message", d.message ?? ""],
  ].filter(([, v]) => v) as [string, string][];
}

/**
 * Sends the enquiry with Resend. Without RESEND_API_KEY (e.g. local dev) it logs to the server console instead.
 * Returns true when delivered or logged.
 */
export async function sendQuoteEmail(d: QuoteInput) {
  const data = rows(d);
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) {
    console.info("[contact] RESEND_API_KEY / CONTACT_TO_EMAIL not set — logging enquiry instead:\n" + data.map(([k, v]) => `  ${k}: ${v}`).join("\n"));
    return true;
  }
  const resend = new Resend(key);
  const from = process.env.CONTACT_FROM_EMAIL ?? "Edgetechnical Website <onboarding@resend.dev>";
  const html = `<div style="font-family:system-ui,sans-serif;font-size:15px;color:#0E1116">
    <h2 style="font-weight:600">New enquiry from ${esc(d.organisation)}</h2>
    <table cellpadding="6" style="border-collapse:collapse">${data
      .map(([k, v]) => `<tr><td style="color:#5B6472;vertical-align:top">${esc(k)}</td><td style="white-space:pre-wrap">${esc(v)}</td></tr>`)
      .join("")}</table></div>`;
  const text = data.map(([k, v]) => `${k}: ${v}`).join("\n");
  const { error } = await resend.emails.send({
    from,
    to: to.split(",").map((s) => s.trim()),
    replyTo: d.email,
    subject: `New enquiry: ${d.organisation} (${d.name})`,
    html,
    text,
  });
  if (error) {
    console.error("[contact] Resend error", error);
    return false;
  }
  return true;
}
