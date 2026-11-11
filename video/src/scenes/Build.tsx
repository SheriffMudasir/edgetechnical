import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { c, mono, sans, serif } from "../brand";
import { Browser, Check, Label, Rise, Scene, Words, lin, prog } from "../ui";

// Beat boundaries (local frames), matched to the voiceover sentences.
const B1 = 0;
const B2 = 172;
const B3 = 296;
const END = 475;

const beats = [
  { n: "01", title: "Web & mobile *apps*", sub: "Built around how your business actually works.", from: B1, to: B2 },
  { n: "02", title: "AI *assistants*", sub: "Answering your customers at any hour.", from: B2, to: B3 },
  { n: "03", title: "*Automations* & workflows", sub: "Work moves itself from one step to the next.", from: B3, to: END },
];

/** Shows children only during [from, to), with a soft slide in and out. */
const Beat: React.FC<{ from: number; to: number; last?: boolean; style?: React.CSSProperties; children: React.ReactNode }> = ({ from, to, last, style, children }) => {
  const frame = useCurrentFrame();
  if (frame < from - 2 || frame > to + 18) return null;
  const a = prog(frame, from + 6, 26);
  const b = last ? 0 : prog(frame, to - 8, 16);
  return <div style={{ position: "absolute", opacity: a * (1 - b), translate: `${(1 - a) * 80 - b * 60}px 0px`, ...style }}>{children}</div>;
};

const Dashboard: React.FC<{ t: number }> = ({ t }) => {
  const bars = [0.42, 0.6, 0.5, 0.78, 0.66, 0.9, 0.72];
  return (
    <div style={{ display: "flex", height: 520, fontFamily: sans, color: c.ink }}>
      <div style={{ width: 170, backgroundColor: c.ink, padding: 22, display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ width: 34, height: 34, borderRadius: 8, backgroundColor: c.edge }} />
        {[1, 0.5, 0.5, 0.5, 0.5].map((o, i) => (
          <div key={i} style={{ height: 12, width: `${[80, 64, 72, 50, 68][i]}%`, borderRadius: 6, backgroundColor: c.paper, opacity: o * 0.6 }} />
        ))}
      </div>
      <div style={{ flex: 1, padding: 28, backgroundColor: "#FBF9F4" }}>
        <div style={{ fontFamily: serif, fontSize: 38 }}>Good morning, Ngozi</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginTop: 18 }}>
          {[
            ["Orders today", Math.round(128 * prog(t, 14, 40)).toString()],
            ["Awaiting dispatch", Math.round(14 * prog(t, 20, 40)).toString()],
            ["Invoices paid", `${Math.round(92 * prog(t, 26, 40))}%`],
          ].map(([k, v]) => (
            <div key={k} style={{ border: `1px solid ${c.line}`, borderRadius: 12, padding: "14px 16px", backgroundColor: c.chalk }}>
              <div style={{ fontFamily: mono, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: c.slate }}>{k}</div>
              <div style={{ fontFamily: serif, fontSize: 50, lineHeight: 1.1 }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 16, border: `1px solid ${c.line}`, borderRadius: 12, backgroundColor: c.chalk, padding: 18, height: 228, display: "flex", alignItems: "flex-end", gap: 16 }}>
          {bars.map((h, i) => (
            <div key={i} style={{ flex: 1, height: `${h * 100 * prog(t, 24 + i * 4, 36)}%`, borderRadius: "8px 8px 0 0", backgroundColor: i === 5 ? c.edge : c.ivy }} />
          ))}
        </div>
      </div>
    </div>
  );
};

const PhoneApp: React.FC = () => (
  <div style={{ width: 230, height: 460, borderRadius: 40, backgroundColor: c.ink, padding: 9, boxShadow: "0 50px 90px -30px rgba(14,17,22,0.7)" }}>
    <div style={{ width: "100%", height: "100%", borderRadius: 32, backgroundColor: c.paper, padding: "38px 16px 16px", fontFamily: sans, color: c.ink }}>
      <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.1em", color: c.slate }}>DELIVERIES</div>
      <div style={{ fontFamily: serif, fontSize: 30, marginBottom: 12 }}>Today</div>
      {["Wuse II · 3", "Garki · 1", "Kubwa · 5", "Maitama · 2"].map((r, i) => (
        <div key={r} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: c.chalk, border: `1px solid ${c.line}`, borderRadius: 10, padding: "11px 12px", marginBottom: 8, fontSize: 14 }}>
          {r}
          <span style={{ fontFamily: mono, fontSize: 10, whiteSpace: "nowrap", padding: "3px 8px", borderRadius: 99, backgroundColor: i < 2 ? c.ivy : "rgba(255,90,31,0.16)", color: i < 2 ? c.paper : "#C23E0C" }}>{i < 2 ? "DONE" : "EN ROUTE"}</span>
        </div>
      ))}
    </div>
  </div>
);

const Assistant: React.FC<{ t: number }> = ({ t }) => {
  const bubble = (mine: boolean): React.CSSProperties => ({
    alignSelf: mine ? "flex-end" : "flex-start",
    maxWidth: "80%",
    padding: "18px 24px",
    borderRadius: 24,
    borderBottomRightRadius: mine ? 6 : 24,
    borderBottomLeftRadius: mine ? 24 : 6,
    backgroundColor: mine ? c.ink : c.chalk,
    color: mine ? c.paper : c.ink,
    border: mine ? "none" : `1px solid ${c.line}`,
    fontSize: 28,
    lineHeight: 1.3,
  });
  const typing = t > 34 && t < 58;
  return (
    <div style={{ width: 760, borderRadius: 22, overflow: "hidden", backgroundColor: c.paper2, border: `1px solid ${c.line}`, boxShadow: "0 60px 120px -40px rgba(14,17,22,0.5)", fontFamily: sans }}>
      <div style={{ backgroundColor: c.ivy, color: c.paper, padding: "20px 28px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 26, fontWeight: 600 }}>Your business assistant</div>
          <div style={{ fontSize: 18, opacity: 0.8, display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 9, height: 9, borderRadius: 9, backgroundColor: "#7BE0A8" }} /> Online &middot; replies instantly
          </div>
        </div>
        <div style={{ fontFamily: mono, fontSize: 20, backgroundColor: "rgba(245,242,235,0.14)", padding: "6px 14px", borderRadius: 99 }}>11:42 PM</div>
      </div>
      <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 16, minHeight: 330 }}>
        <div style={{ ...bubble(true), opacity: prog(t, 10, 14), translate: `0px ${(1 - prog(t, 10, 14)) * 20}px` }}>Do you deliver to Kano? How much?</div>
        {typing && (
          <div style={{ ...bubble(false), display: "flex", gap: 8, padding: "22px 24px" }}>
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ width: 11, height: 11, borderRadius: 11, backgroundColor: c.slate, opacity: 0.3 + 0.7 * Math.abs(Math.sin((t + i * 5) / 5)) }} />
            ))}
          </div>
        )}
        {t >= 58 && (
          <div style={{ ...bubble(false), opacity: prog(t, 58, 14), translate: `0px ${(1 - prog(t, 58, 14)) * 20}px` }}>
            Yes! Delivery to Kano is ₦3,500 and takes two days. Shall I place the order for you?
          </div>
        )}
      </div>
    </div>
  );
};

const steps = ["Order received", "Invoice sent", "Payment confirmed", "Team notified"];

const Workflow: React.FC<{ t: number }> = ({ t }) => {
  const stepAt = (i: number) => 22 + i * 30;
  const lineP = lin(t, 22, 30 * (steps.length - 1) + 10);
  return (
    <div style={{ width: 860, position: "relative", fontFamily: sans }}>
      <div style={{ position: "absolute", left: 44, top: 44, width: 4, height: 3 * 132, backgroundColor: c.line, borderRadius: 4 }} />
      <div style={{ position: "absolute", left: 44, top: 44, width: 4, height: 3 * 132 * lineP, backgroundColor: c.edge, borderRadius: 4 }} />
      {steps.map((s, i) => {
        const on = prog(t, stepAt(i), 16);
        const enter = prog(t, 6 + i * 5, 22);
        return (
          <div key={s} style={{ display: "flex", alignItems: "center", gap: 30, height: 92, marginBottom: 40, opacity: enter, translate: `${(1 - enter) * 50}px 0px` }}>
            <div
              style={{
                width: 92,
                height: 92,
                borderRadius: 92,
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: on > 0.5 ? c.ivy : c.chalk,
                border: `2px solid ${on > 0.5 ? c.ivy : c.line}`,
                scale: String(1 + 0.12 * Math.sin(Math.PI * on)),
                zIndex: 1,
              }}
            >
              {on > 0.5 ? <Check size={46} bg="transparent" /> : <span style={{ fontFamily: mono, fontSize: 26, color: c.slate }}>{`0${i + 1}`}</span>}
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: c.chalk,
                border: `1px solid ${c.line}`,
                borderRadius: 16,
                padding: "22px 30px",
                boxShadow: "0 24px 50px -30px rgba(14,17,22,0.35)",
              }}
            >
              <span style={{ fontFamily: serif, fontSize: 48, color: c.ink }}>{s}</span>
              <span style={{ fontFamily: mono, fontSize: 18, letterSpacing: "0.08em", color: on > 0.5 ? c.ivy : c.mist, textTransform: "uppercase" }}>{on > 0.5 ? "Automatic" : "Waiting"}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const Build: React.FC = () => {
  const frame = useCurrentFrame();
  const active = frame < B2 ? 0 : frame < B3 ? 1 : 2;
  return (
    <Scene bg={c.paper}>
      <Rise at={14} style={{ position: "absolute", left: 120, top: 120 }}>
        <Label>What we build</Label>
      </Rise>

      {/* Left: title per beat */}
      {beats.map((b, i) => (
        <Beat key={b.n} from={b.from} to={b.to} last={i === 2} style={{ left: 120, top: 300, width: 720 }}>
          <div style={{ fontFamily: mono, fontSize: 30, color: c.edge, marginBottom: 22 }}>{b.n} / 03</div>
          <Words text={b.title} at={b.from + 10} style={{ fontSize: 124, color: c.ink }} em={{ color: c.ivy }} />
          <div style={{ fontSize: 44, lineHeight: 1.3, color: c.slate, marginTop: 34, maxWidth: 660 }}>{b.sub}</div>
        </Beat>
      ))}

      {/* Progress */}
      <div style={{ position: "absolute", left: 120, bottom: 110, display: "flex", gap: 14 }}>
        {beats.map((b, i) => (
          <div key={b.n} style={{ width: 150, height: 5, borderRadius: 5, backgroundColor: c.line, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${(i < active ? 1 : i === active ? lin(frame, b.from, b.to - b.from) : 0) * 100}%`, backgroundColor: c.ink }} />
          </div>
        ))}
      </div>

      {/* Right: visual per beat */}
      <Beat from={B1} to={B2} style={{ left: 900, top: 230 }}>
        <div style={{ perspective: 2200 }}>
          <div style={{ transform: `rotateY(${interpolate(frame, [B1, B2], [-14, -7])}deg) rotateX(4deg)`, transformOrigin: "left center" }}>
            <Browser url="app.yourbusiness.ng" width={900}>
              <Dashboard t={frame - B1} />
            </Browser>
          </div>
        </div>
        <Rise at={B1 + 40} y={90} style={{ position: "absolute", right: -70, top: 250 }}>
          <PhoneApp />
        </Rise>
      </Beat>

      <Beat from={B2} to={B3} style={{ left: 980, top: 250 }}>
        <Assistant t={frame - B2} />
        <Rise at={B2 + 84} style={{ marginTop: 26, display: "inline-flex" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 14, backgroundColor: c.ink, color: c.paper, borderRadius: 999, padding: "14px 26px", fontSize: 26 }}>
            <Check size={30} bg={c.edge} color={c.ink} /> Answered in seconds, at any hour
          </div>
        </Rise>
      </Beat>

      <Beat from={B3} to={END} last style={{ left: 940, top: 250 }}>
        <Workflow t={frame - B3} />
      </Beat>
    </Scene>
  );
};
