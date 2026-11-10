import Script from "next/script";

/**
 * Analytics slot. Set NEXT_PUBLIC_ANALYTICS_ID to your Plausible domain (e.g. "edgetechnical.ng").
 * Plausible is cookieless, so no cookie banner is required. Nothing loads when the variable is empty.
 * Optional: NEXT_PUBLIC_ANALYTICS_SRC to self-host or proxy the script.
 */
export function Analytics() {
  const id = process.env.NEXT_PUBLIC_ANALYTICS_ID;
  if (!id) return null;
  const src = process.env.NEXT_PUBLIC_ANALYTICS_SRC ?? "https://plausible.io/js/script.js";
  return <Script defer data-domain={id} src={src} strategy="afterInteractive" />;
}
