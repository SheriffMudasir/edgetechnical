import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { c, mono, sans, serif } from "../brand";
import { Browser, Label, Rise, Scene, Shot, Words, prog } from "../ui";

const exams = [
  { at: 232, name: "WAEC" },
  { at: 252, name: "NECO" },
  { at: 270, name: "JAMB" },
];

export const StudyWise: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Scene bg={c.ink} grain>
      <AbsoluteFill style={{ background: "radial-gradient(900px 700px at 76% 52%, rgba(44,106,80,0.6), rgba(14,17,22,0) 70%)" }} />

      <Rise at={14} style={{ position: "absolute", left: 120, top: 120 }}>
        <Label color={c.mist}>Our own product</Label>
      </Rise>
      <div style={{ position: "absolute", left: 120, top: 210, width: 800, color: c.paper }}>
        <Words text="StudyWise *AI*" at={20} style={{ fontSize: 158 }} em={{ color: c.mint }} />
      </div>
      <Rise at={96} style={{ position: "absolute", left: 120, top: 420, width: 740 }}>
        <div style={{ fontFamily: sans, fontSize: 48, lineHeight: 1.25, color: "rgba(245,242,235,0.78)" }}>An exam-prep platform that helps students get ready.</div>
      </Rise>

      <div style={{ position: "absolute", left: 120, top: 720, display: "flex", gap: 20 }}>
        {exams.map((e) => {
          const a = prog(frame, e.at, 18);
          return (
            <div
              key={e.name}
              style={{
                fontFamily: serif,
                fontSize: 84,
                lineHeight: 1,
                color: c.ink,
                backgroundColor: c.paper,
                borderRadius: 18,
                padding: "20px 34px 26px",
                opacity: a,
                scale: String(interpolate(a, [0, 1], [0.7, 1])),
                translate: `0px ${(1 - a) * 40}px`,
              }}
            >
              {e.name}
            </div>
          );
        })}
      </div>

      <Rise at={150} style={{ position: "absolute", left: 120, bottom: 100 }}>
        <div style={{ fontFamily: mono, fontSize: 28, color: c.mint, letterSpacing: "0.04em" }}>studywiseai.org</div>
      </Rise>

      <div style={{ position: "absolute", left: 1010, top: 200, perspective: 2400 }}>
        <Rise at={40} y={100} dur={36}>
          <div style={{ transform: `rotateY(${interpolate(frame, [30, 320], [-15, -7])}deg) rotateX(4deg)`, transformOrigin: "left center" }}>
            <Browser url="studywiseai.org" width={860} dark>
              <Shot name="studywise-home" width={860} height={520} />
            </Browser>
          </div>
        </Rise>
      </div>
    </Scene>
  );
};
