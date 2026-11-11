import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { c, contact, mono, sans } from "../brand";
import { Rise, Scene, Wordmark, Words, prog } from "../ui";

export const Cta: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Scene bg={c.ink} grain>
      <AbsoluteFill style={{ background: "radial-gradient(1000px 600px at 20% 110%, rgba(255,90,31,0.16), rgba(14,17,22,0) 70%)", opacity: prog(frame, 150, 60) }} />

      <Rise at={16} style={{ position: "absolute", left: 120, top: 120 }}>
        <Wordmark size={84} color={c.paper} />
      </Rise>

      <Rise at={58} out={158} style={{ position: "absolute", left: 120, top: 380, width: 1500 }}>
        <Words text="Software and AI that move your work *forward.*" at={60} style={{ fontSize: 150, color: c.paper }} em={{ color: c.mint }} />
      </Rise>

      <div style={{ position: "absolute", left: 120, top: 330, width: 1680, color: c.paper }}>
        <Words text="Let’s build *yours.*" at={166} stagger={5} style={{ fontSize: 300, letterSpacing: "-0.03em" }} em={{ color: c.edge }} />
      </div>

      <div style={{ position: "absolute", left: 120, right: 120, bottom: 100, height: 2, backgroundColor: c.lineInv, transformOrigin: "left", scale: `${prog(frame, 190, 40)} 1`, translate: "0px -110px" }} />
      <Rise at={200} style={{ position: "absolute", left: 120, right: 120, bottom: 100, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <div style={{ fontFamily: mono, fontSize: 22, letterSpacing: "0.1em", textTransform: "uppercase", color: c.mist }}>Talk to us</div>
          <div style={{ fontFamily: sans, fontWeight: 500, fontSize: 64, color: c.paper, lineHeight: 1.1 }}>{contact.phone}</div>
        </div>
        <div style={{ fontFamily: mono, fontSize: 22, letterSpacing: "0.06em", color: c.mist, opacity: interpolate(frame, [215, 235], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>{contact.legal}</div>
      </Rise>
    </Scene>
  );
};
