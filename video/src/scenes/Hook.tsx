import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { c, mono, sans } from "../brand";
import { EASE, Label, Rise, Scene, Words, prog } from "../ui";

const cardBase: React.CSSProperties = {
  position: "absolute",
  top: 400,
  width: 500,
  height: 470,
  borderRadius: 16,
  boxShadow: "0 50px 90px -30px rgba(0,0,0,0.7)",
  overflow: "hidden",
};

/** A card that drops in with a slight overshoot tilt, then drifts gently. */
const Drop: React.FC<{ at: number; x: number; tilt: number; label: string; children: React.ReactNode }> = ({ at, x, tilt, label, children }) => {
  const frame = useCurrentFrame();
  const a = prog(frame, at, 30);
  const drift = Math.sin((frame + x) / 38) * 5;
  return (
    <>
      <div
        style={{
          ...cardBase,
          left: x,
          opacity: a,
          translate: `0px ${(1 - a) * 160 + drift}px`,
          rotate: `${tilt + (1 - a) * tilt * 3}deg`,
        }}
      >
        {children}
      </div>
      <div
        style={{
          position: "absolute",
          left: x,
          top: 910,
          width: 500,
          opacity: prog(frame, at + 10, 20),
          fontFamily: mono,
          fontSize: 26,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: c.mist,
          textAlign: "center",
        }}
      >
        {label}
      </div>
    </>
  );
};

const scribble = ["M0 10 C30 0 50 20 90 8 S150 14 200 6 260 16 320 8", "M0 8 C40 16 70 0 120 10 S200 2 250 12", "M0 9 C20 2 60 16 100 8 S180 12 290 5 S320 12 340 10", "M0 10 C50 4 90 14 150 6"];

export const Hook: React.FC = () => {
  const frame = useCurrentFrame();
  // The opening line shrinks into the corner when the "problem" arrives.
  const shrink = interpolate(frame, [96, 130], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });

  return (
    <Scene bg={c.ink} grain wipe={false}>
      <div style={{ position: "absolute", inset: 0, opacity: interpolate(frame, [0, 12], [0, 1], { extrapolateRight: "clamp" }) }}>
        <div
          style={{
            position: "absolute",
            left: 120,
            top: interpolate(shrink, [0, 1], [330, 110]),
            width: 1680,
            color: c.paper,
            scale: String(interpolate(shrink, [0, 1], [1, 0.5])),
            transformOrigin: "left top",
          }}
        >
          <Words text="Every organisation runs on *work.*" at={8} style={{ fontSize: 190 }} em={{ color: c.edge }} />
        </div>

        <Rise at={122} style={{ position: "absolute", left: 120, top: 318 }}>
          <div style={{ fontFamily: sans, fontSize: 46, color: c.mist, maxWidth: 1300 }}>Too much of it still runs on&hellip;</div>
        </Rise>

        {/* Paper */}
        <Drop at={170} x={120} tilt={-3} label="Paper">
          <div style={{ width: "100%", height: "100%", backgroundColor: "#EFE9DA", padding: 36, color: "#2a2a2a" }}>
            <div style={{ fontFamily: mono, fontSize: 20, letterSpacing: "0.12em" }}>FORM 14-B &middot; REQUEST</div>
            <div style={{ height: 2, backgroundColor: "#2a2a2a", margin: "14px 0 26px", opacity: 0.5 }} />
            {scribble.map((d, i) => (
              <div key={i} style={{ marginBottom: 30 }}>
                <div style={{ fontFamily: mono, fontSize: 14, opacity: 0.55, marginBottom: 6 }}>{["NAME", "DEPARTMENT", "DETAILS", "SIGNED"][i]}</div>
                <svg viewBox="0 0 360 20" width="100%" height="24" preserveAspectRatio="none">
                  <path d={d} fill="none" stroke="#1d3a8a" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
                <div style={{ height: 1, backgroundColor: "#2a2a2a", opacity: 0.3 }} />
              </div>
            ))}
            <div
              style={{
                position: "absolute",
                right: 30,
                bottom: 40,
                rotate: "-14deg",
                border: "4px solid #b3261e",
                color: "#b3261e",
                fontFamily: mono,
                fontWeight: 500,
                fontSize: 30,
                padding: "6px 16px",
                opacity: prog(frame, 200, 8) * 0.85,
                scale: String(interpolate(prog(frame, 200, 8), [0, 1], [1.6, 1])),
              }}
            >
              PENDING
            </div>
          </div>
        </Drop>

        {/* Spreadsheet */}
        <Drop at={198} x={710} tilt={2} label="Spreadsheets">
          <div style={{ width: "100%", height: "100%", backgroundColor: "#fff", color: "#222" }}>
            <div style={{ backgroundColor: "#1d6f42", color: "#fff", padding: "12px 20px", fontFamily: sans, fontSize: 19 }}>Final_v7_REAL (2).xlsx</div>
            <div style={{ display: "grid", gridTemplateColumns: "44px repeat(4, 1fr)", fontFamily: mono, fontSize: 16 }}>
              {Array.from({ length: 9 * 5 }).map((_, i) => {
                const r = Math.floor(i / 5);
                const col = i % 5;
                const bad = (r === 3 && col === 3) || (r === 5 && col === 2) || (r === 6 && col === 4);
                const head = r === 0 || col === 0;
                const txt = head ? (r === 0 ? ["", "A", "B", "C", "D"][col] : String(r)) : bad ? "#REF!" : ["Paid", "14,500", "Owing", "—", "32,000", "?", "Pending"][(r * 3 + col) % 7];
                return (
                  <div
                    key={i}
                    style={{
                      height: 46,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: head ? "center" : "flex-start",
                      padding: "0 10px",
                      borderRight: "1px solid #d9d9d9",
                      borderBottom: "1px solid #d9d9d9",
                      backgroundColor: head ? "#f1f1f1" : bad ? "#fde2e0" : "#fff",
                      color: bad ? "#b3261e" : head ? "#777" : "#222",
                    }}
                  >
                    {txt}
                  </div>
                );
              })}
            </div>
          </div>
        </Drop>

        {/* Chat */}
        <Drop at={236} x={1300} tilt={-2} label="Endless chats">
          <div style={{ width: "100%", height: "100%", backgroundColor: "#0b141a", color: "#e9edef", fontFamily: sans }}>
            <div style={{ backgroundColor: "#1f2c33", padding: "16px 22px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 22, fontWeight: 500 }}>Office Group</span>
              <span style={{ backgroundColor: "#25D366", color: "#0b141a", borderRadius: 999, padding: "2px 12px", fontSize: 17, fontWeight: 600 }}>99+</span>
            </div>
            <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 12, fontSize: 21 }}>
              {[
                ["Has the client paid?", false],
                ["Which invoice again?", true],
                ["I sent it last week…", false],
                ["Please resend the list", true],
                ["Which list??", false],
              ].map(([t, mine], i) => {
                const a = prog(frame, 246 + i * 9, 14);
                return (
                  <div
                    key={i}
                    style={{
                      alignSelf: mine ? "flex-end" : "flex-start",
                      backgroundColor: mine ? "#005c4b" : "#1f2c33",
                      padding: "10px 16px",
                      borderRadius: 12,
                      maxWidth: "78%",
                      opacity: a,
                      translate: `0px ${(1 - a) * 16}px`,
                    }}
                  >
                    {t as string}
                  </div>
                );
              })}
            </div>
          </div>
        </Drop>

        <Rise at={18} out={96} style={{ position: "absolute", left: 120, top: 120 }}>
          <Label color={c.mist}>Edgetechnical</Label>
        </Rise>
      </div>
    </Scene>
  );
};
