import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

/** Loads a Google font subset for just the characters we render. Returns null if unavailable. */
async function loadFont(family: string, text: string, italic = false) {
  try {
    const spec = italic ? `${family.replace(/ /g, "+")}:ital@1` : family.replace(/ /g, "+");
    const css = await (await fetch(`https://fonts.googleapis.com/css2?family=${spec}&text=${encodeURIComponent(text)}`)).text();
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    return await (await fetch(url)).arrayBuffer();
  } catch {
    return null;
  }
}

/**
 * Dynamic, branded OG image: /api/og?title=…&label=…
 */
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = (searchParams.get("title") ?? "Websites that make schools look as good as they teach.").slice(0, 120);
  const label = (searchParams.get("label") ?? "Software agency · Abuja, Nigeria").slice(0, 60);
  const allText = `${title}${label}edgetechnicalWebsites, software and AI for education.RC 9259130 · edgetechnical.ng`;

  const [serif, sans] = await Promise.all([loadFont("Instrument Serif", allText), loadFont("Geist", allText)]);
  const fonts = [
    ...(serif ? [{ name: "Serif", data: serif, style: "normal" as const, weight: 400 as const }] : []),
    ...(sans ? [{ name: "Sans", data: sans, style: "normal" as const, weight: 400 as const }] : []),
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0E1116",
          color: "#F5F2EB",
          padding: "64px 72px",
          fontFamily: "Sans",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "baseline", fontSize: 40 }}>
            <span style={{ fontWeight: 600 }}>edge</span>
            <span style={{ fontFamily: "Serif", fontSize: 46 }}>technical</span>
            <div style={{ width: 16, height: 16, marginLeft: 6, background: "#FF5A1F", display: "flex" }} />
          </div>
          <div style={{ display: "flex", fontSize: 20, letterSpacing: 2, textTransform: "uppercase", color: "#8A93A0" }}>{label}</div>
        </div>
        <div style={{ display: "flex", fontFamily: "Serif", fontSize: title.length > 60 ? 76 : 96, lineHeight: 1, letterSpacing: -2, maxWidth: 1000 }}>
          {title}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 22, color: "#8A93A0" }}>
          <span>Websites, software and AI for education.</span>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: 120, height: 6, background: "#1F4D3A", display: "flex" }} />
            <div style={{ width: 40, height: 6, background: "#FF5A1F", display: "flex" }} />
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630, fonts: fonts.length ? fonts : undefined },
  );
}
