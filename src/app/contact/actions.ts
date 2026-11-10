"use server";

import { headers } from "next/headers";
import { quoteSchema } from "@/lib/validation";
import { sendQuoteEmail } from "@/lib/email";

export type QuoteResult =
  | { ok: true }
  | { ok: false; message: string; fieldErrors?: Record<string, string[] | undefined> };

/* Simple in-memory rate limit: 5 submissions per IP per 10 minutes (per server instance). */
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > LIMIT;
}

export async function submitQuote(input: unknown): Promise<QuoteResult> {
  const parsed = quoteSchema.safeParse(input);
  if (!parsed.success) {
    // A filled honeypot means a bot: pretend success, send nothing.
    if (parsed.error.issues.some((i) => i.path[0] === "website")) return { ok: true };
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of parsed.error.issues) {
      const k = String(issue.path[0] ?? "form");
      (fieldErrors[k] ??= []).push(issue.message);
    }
    return { ok: false, message: "Please check the highlighted fields.", fieldErrors };
  }

  const h = await headers();
  const ip = (h.get("x-forwarded-for") ?? "").split(",")[0].trim() || h.get("x-real-ip") || "unknown";
  if (rateLimited(ip)) {
    return { ok: false, message: "You've sent a few messages already. Please try again in a few minutes, or WhatsApp us." };
  }

  try {
    const sent = await sendQuoteEmail(parsed.data);
    if (!sent) return { ok: false, message: "We couldn't send your message just now. Please try again or reach us on WhatsApp." };
    return { ok: true };
  } catch (err) {
    console.error("[contact] send failed", err);
    return { ok: false, message: "We couldn't send your message just now. Please try again or reach us on WhatsApp." };
  }
}
