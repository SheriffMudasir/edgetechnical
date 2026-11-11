import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { c, sans } from "../brand";
import { Browser, Check, EdgeMark, Label, Rise, Scene, Shot, Words, prog } from "../ui";

const items = [
  { at: 104, text: "Bilingual website" },
  { at: 162, text: "Online admissions" },
  { at: 204, text: "Staff & parent portals" },
];

export const AlMuminun: React.FC = () => {
  const frame = useCurrentFrame();
  const a2 = prog(frame, 160, 34);
  const a3 = prog(frame, 204, 34);
  return (
    <Scene bg="#E9ECF5">
      <Rise at={14} style={{ position: "absolute", left: 120, top: 120 }}>
        <Label>Built by us &middot; Suleja, Niger State</Label>
      </Rise>
      <div style={{ position: "absolute", left: 120, top: 200, width: 700, color: c.ink }}>
        <Words text="Al-Mu’minun International *Academy*" at={20} style={{ fontSize: 104 }} em={{ color: "#13235A" }} />
      </div>

      <div style={{ position: "absolute", left: 120, top: 590, width: 680 }}>
        {items.map((it) => (
          <Rise key={it.text} at={it.at} y={30} style={{ display: "flex", alignItems: "center", gap: 20, padding: "16px 0", borderTop: `1px solid ${c.line}`, fontFamily: sans, fontSize: 46, color: c.ink }}>
            <Check size={40} bg="#13235A" />
            {it.text}
          </Rise>
        ))}
      </div>

      <Rise at={296} style={{ position: "absolute", left: 120, bottom: 96 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 16, backgroundColor: c.ink, color: c.paper, borderRadius: 999, padding: "18px 34px", fontFamily: sans, fontSize: 36, fontWeight: 500 }}>
          <EdgeMark size={18} /> One connected system
        </div>
      </Rise>

      {/* Real screenshots of the live site */}
      <div style={{ position: "absolute", left: 880, top: 150, perspective: 2400 }}>
        <Rise at={36} y={90} dur={36}>
          <div style={{ transform: `rotateY(${interpolate(frame, [30, 385], [-13, -6])}deg) rotateX(3deg)`, transformOrigin: "left center" }}>
            <Browser url="Al-Mu’minun International Academy" width={980}>
              <Shot name="almuminun-home" width={980} height={560} scroll={interpolate(frame, [60, 385], [0, 40], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} />
            </Browser>
          </div>
        </Rise>
      </div>

      <div style={{ position: "absolute", left: 1130, top: 520, opacity: a2, translate: `${(1 - a2) * 140}px ${(1 - a2) * 60}px`, rotate: `${2 - a2 * 2}deg` }}>
        <Browser url="Admissions · 2026/2027" width={640}>
          <Shot name="almuminun-admissions" width={640} height={372} />
        </Browser>
      </div>

      <div style={{ position: "absolute", left: 840, top: 690, opacity: a3, translate: `${-(1 - a3) * 120}px ${(1 - a3) * 60}px`, rotate: `${-3 + a3 * 1.5}deg` }}>
        <Browser url="Parent & Guardian Portal" width={470}>
          <Shot name="almuminun-parent" width={470} height={250} scroll={30} />
        </Browser>
      </div>
    </Scene>
  );
};
