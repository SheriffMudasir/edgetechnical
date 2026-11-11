import React from "react";
import { AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { c, mono, sans, serif } from "./brand";
import { OVERLAP } from "./timing";

export const EASE = Easing.bezier(0.16, 1, 0.3, 1);
const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

/** 0 → 1 progress starting at `start`, lasting `dur` frames, with the brand ease. */
export const prog = (frame: number, start: number, dur = 26) => interpolate(frame, [start, start + dur], [0, 1], { ...clamp, easing: EASE });

/** Linear 0 → 1. */
export const lin = (frame: number, start: number, dur: number) => interpolate(frame, [start, start + dur], [0, 1], clamp);

/** Fades and lifts its children into place. Optionally leaves again at `out`. */
export const Rise: React.FC<{
  at: number;
  out?: number;
  y?: number;
  dur?: number;
  style?: React.CSSProperties;
  children: React.ReactNode;
}> = ({ at, out, y = 44, dur = 26, style, children }) => {
  const frame = useCurrentFrame();
  const a = prog(frame, at, dur);
  const b = out === undefined ? 0 : prog(frame, out, 16);
  return (
    <div style={{ opacity: a * (1 - b), translate: `0px ${(1 - a) * y - b * 24}px`, ...style }}>{children}</div>
  );
};

/**
 * Word-by-word masked reveal. Wrap emphasis in *asterisks* (can span several words).
 */
export const Words: React.FC<{
  text: string;
  at: number;
  stagger?: number;
  style?: React.CSSProperties;
  em?: React.CSSProperties;
}> = ({ text, at, stagger = 3, style, em }) => {
  const frame = useCurrentFrame();
  let inEm = false;
  const words = text.split(" ").map((raw) => {
    const starts = raw.startsWith("*");
    const ends = /\*[.,!?]?$/.test(raw);
    const isEm = inEm || starts;
    if (starts) inEm = true;
    if (ends) inEm = false;
    return { word: raw.replace(/\*/g, ""), isEm };
  });
  return (
    <div style={{ fontFamily: serif, lineHeight: 1.0, letterSpacing: "-0.02em", ...style }}>
      {words.map((w, i) => {
        const a = prog(frame, at + i * stagger, 28);
        return (
          <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", paddingBottom: "0.12em", marginBottom: "-0.12em" }}>
            <span
              style={{
                display: "inline-block",
                translate: `0px ${(1 - a) * 108}%`,
                ...(w.isEm ? { fontStyle: "italic", ...em } : {}),
              }}
            >
              {w.word}
              {i < words.length - 1 ? " " : ""}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export const EdgeMark: React.FC<{ size?: number; style?: React.CSSProperties }> = ({ size = 16, style }) => (
  <svg viewBox="0 0 10 10" width={size} height={size} style={{ flexShrink: 0, ...style }}>
    <path d="M0 0H10V6.2L6.2 10H0Z" fill={c.edge} />
  </svg>
);

export const Label: React.FC<{ children: React.ReactNode; color?: string; style?: React.CSSProperties }> = ({ children, color = c.slate, style }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 16,
      fontFamily: mono,
      fontSize: 24,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color,
      ...style,
    }}
  >
    <EdgeMark size={14} />
    {children}
  </div>
);

export const Wordmark: React.FC<{ size?: number; color?: string }> = ({ size = 64, color = c.ink }) => (
  <div style={{ display: "inline-flex", alignItems: "baseline", fontSize: size, color, letterSpacing: "-0.02em", lineHeight: 1 }}>
    <span style={{ fontFamily: sans, fontWeight: 600 }}>edge</span>
    <span style={{ fontFamily: serif, fontStyle: "italic", fontSize: "1.12em" }}>technical</span>
    <EdgeMark size={size * 0.34} style={{ marginLeft: size * 0.1, translate: `0px ${-size * 0.04}px` }} />
  </div>
);

const NOISE =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

/**
 * Full-frame scene. Wipes up over the previous scene during the first OVERLAP frames,
 * and can carry a subtle grain on dark backgrounds.
 */
export const Scene: React.FC<{ bg: string; grain?: boolean; wipe?: boolean; children: React.ReactNode }> = ({ bg, grain, wipe = true, children }) => {
  const frame = useCurrentFrame();
  const a = wipe ? interpolate(frame, [0, OVERLAP], [0, 1], { ...clamp, easing: Easing.bezier(0.76, 0, 0.24, 1) }) : 1;
  return (
    <AbsoluteFill style={{ backgroundColor: bg, clipPath: `inset(${(1 - a) * 100}% 0 0 0)`, fontFamily: sans, overflow: "hidden" }}>
      {children}
      {grain && <AbsoluteFill style={{ backgroundImage: NOISE, opacity: 0.07, mixBlendMode: "overlay", pointerEvents: "none" }} />}
    </AbsoluteFill>
  );
};

export const Browser: React.FC<{
  url: string;
  width: number;
  dark?: boolean;
  style?: React.CSSProperties;
  children: React.ReactNode;
}> = ({ url, width, dark, style, children }) => (
  <div
    style={{
      width,
      borderRadius: 18,
      overflow: "hidden",
      backgroundColor: dark ? c.ink2 : c.chalk,
      border: `1px solid ${dark ? c.lineInv : c.line}`,
      boxShadow: "0 60px 120px -40px rgba(14,17,22,0.55), 0 0 0 1px rgba(14,17,22,0.04)",
      ...style,
    }}
  >
    <div
      style={{
        height: 46,
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "0 18px",
        backgroundColor: dark ? c.ink3 : c.paper2,
        borderBottom: `1px solid ${dark ? c.lineInv : c.line}`,
      }}
    >
      <div style={{ display: "flex", gap: 8 }}>
        {[0, 1, 2].map((i) => (
          <span key={i} style={{ width: 12, height: 12, borderRadius: 12, backgroundColor: i === 2 ? c.edge : dark ? "rgba(255,255,255,0.18)" : "rgba(14,17,22,0.15)" }} />
        ))}
      </div>
      <div
        style={{
          margin: "0 auto",
          padding: "5px 22px",
          borderRadius: 999,
          backgroundColor: dark ? c.ink : c.chalk,
          color: dark ? c.mist : c.slate,
          fontFamily: mono,
          fontSize: 15,
        }}
      >
        {url}
      </div>
      <div style={{ width: 52 }} />
    </div>
    {children}
  </div>
);

/** A screenshot from public/shots shown at the top of the page, cropped to `height`. */
export const Shot: React.FC<{ name: string; width: number; height: number; scroll?: number }> = ({ name, width, height, scroll = 0 }) => (
  <div style={{ width, height, overflow: "hidden" }}>
    <Img src={staticFile(`shots/${name}.png`)} style={{ width, display: "block", translate: `0px ${-scroll}px` }} />
  </div>
);

export const Check: React.FC<{ size?: number; color?: string; bg?: string }> = ({ size = 34, color = c.paper, bg = c.ivy }) => (
  <span style={{ width: size, height: size, borderRadius: size, backgroundColor: bg, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
    <svg viewBox="0 0 24 24" width={size * 0.58} height={size * 0.58}>
      <path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);
