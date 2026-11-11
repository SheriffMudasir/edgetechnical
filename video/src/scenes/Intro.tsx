import React from "react";
import { useCurrentFrame } from "remotion";
import { c } from "../brand";
import { Label, Rise, Scene, Wordmark, Words, prog } from "../ui";

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Scene bg={c.paper}>
      <Rise at={20} style={{ position: "absolute", left: 120, top: 150 }}>
        <Wordmark size={110} />
      </Rise>
      <div style={{ position: "absolute", left: 120, top: 330, height: 2, width: 1680 * prog(frame, 30, 40), backgroundColor: c.ink, opacity: 0.18 }} />
      <div style={{ position: "absolute", left: 120, top: 410, width: 1680, color: c.ink }}>
        <Words text="Software and AI that does the *heavy lifting.*" at={52} style={{ fontSize: 176 }} em={{ color: c.ivy }} />
      </div>
      <Rise at={110} style={{ position: "absolute", left: 120, bottom: 110 }}>
        <Label>Abuja, Nigeria &middot; RC 9259130</Label>
      </Rise>
    </Scene>
  );
};
