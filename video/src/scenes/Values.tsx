import React from "react";
import { useCurrentFrame } from "remotion";
import { c, mono } from "../brand";
import { Scene, Words, prog } from "../ui";

const rows = [
  { at: 16, text: "Designed with *care.*" },
  { at: 84, text: "Built for *Nigerian realities.*" },
  { at: 168, text: "Supported *long after launch.*" },
];

export const Values: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Scene bg={c.paper}>
      <div style={{ position: "absolute", left: 120, right: 120, top: 130 }}>
        {rows.map((r, i) => (
          <div key={r.text} style={{ position: "relative", height: 270, display: "flex", alignItems: "center", gap: 60 }}>
            <div style={{ position: "absolute", left: 0, top: 0, height: 2, width: `${prog(frame, r.at - 6, 40) * 100}%`, backgroundColor: c.ink, opacity: 0.16 }} />
            <div style={{ fontFamily: mono, fontSize: 34, color: c.edge, width: 90, opacity: prog(frame, r.at, 20) }}>{`0${i + 1}`}</div>
            <Words text={r.text} at={r.at} style={{ fontSize: 142, color: c.ink }} em={{ color: c.ivy }} />
          </div>
        ))}
        <div style={{ height: 2, width: `${prog(frame, 180, 40) * 100}%`, backgroundColor: c.ink, opacity: 0.16 }} />
      </div>
    </Scene>
  );
};
