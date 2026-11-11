import React from "react";
import { useCurrentFrame } from "remotion";
import { c, mono, sans, serif } from "../brand";
import { Label, Rise, Scene, Words, lin, prog } from "../ui";

const Tile: React.FC<{ at: number; i: number; title: string; children: React.ReactNode }> = ({ at, i, title, children }) => {
  const frame = useCurrentFrame();
  const a = prog(frame, at, 30);
  return (
    <div
      style={{
        flex: 1,
        height: 430,
        borderRadius: 18,
        backgroundColor: c.paper,
        color: c.ink,
        padding: 28,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        opacity: a,
        translate: `0px ${(1 - a) * 120}px`,
        rotate: `${(1 - a) * (i % 2 ? 4 : -4)}deg`,
        boxShadow: "0 50px 90px -40px rgba(0,0,0,0.6)",
      }}
    >
      <div style={{ height: 250, borderRadius: 12, overflow: "hidden", backgroundColor: c.chalk, border: `1px solid ${c.line}` }}>{children}</div>
      <div>
        <div style={{ fontFamily: mono, fontSize: 18, color: c.slate }}>{`0${i + 1}`}</div>
        <div style={{ fontFamily: serif, fontSize: 46, lineHeight: 1.05 }}>{title}</div>
      </div>
    </div>
  );
};

export const Education: React.FC = () => {
  const frame = useCurrentFrame();
  const T = [112, 152, 192, 224];
  return (
    <Scene bg={c.ivy} grain>
      <Rise at={14} style={{ position: "absolute", left: 120, top: 110 }}>
        <Label color="rgba(245,242,235,0.7)">Our speciality</Label>
      </Rise>
      <div style={{ position: "absolute", left: 120, top: 180, width: 1680, color: c.paper }}>
        <Words text="Our deepest expertise is *education.*" at={18} style={{ fontSize: 150 }} em={{ color: c.mint }} />
      </div>

      <div style={{ position: "absolute", left: 120, right: 120, top: 540, display: "flex", gap: 24 }}>
        <Tile at={T[0]} i={0} title="School websites">
          <div style={{ padding: 18, height: "100%", backgroundColor: "#FBF9F4" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: serif, fontSize: 20 }}>Greenfield Academy</span>
              <span style={{ backgroundColor: c.ivy, color: c.paper, fontSize: 12, padding: "4px 12px", borderRadius: 99 }}>Apply</span>
            </div>
            <div style={{ fontFamily: serif, fontSize: 44, lineHeight: 0.98, marginTop: 22 }}>
              Where curious minds <span style={{ fontStyle: "italic", color: c.ivy }}>grow.</span>
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
              <div style={{ height: 34, width: 110, borderRadius: 99, backgroundColor: c.ivy }} />
              <div style={{ height: 34, width: 110, borderRadius: 99, border: `1px solid ${c.line}` }} />
            </div>
          </div>
        </Tile>

        <Tile at={T[1]} i={1} title="Online admissions">
          <div style={{ padding: 18, fontFamily: sans }}>
            {["Chidinma Okafor", "Primary 4", "0803 512 4417"].map((v, i) => (
              <div key={v} style={{ marginBottom: 7 }}>
                <div style={{ fontSize: 12, color: c.slate, marginBottom: 3 }}>{["Child's name", "Class", "Parent's phone"][i]}</div>
                <div style={{ height: 32, border: `1px solid ${c.line}`, borderRadius: 8, padding: "0 12px", display: "flex", alignItems: "center", fontFamily: mono, fontSize: 15 }}>
                  {v.slice(0, Math.round(v.length * lin(frame, T[1] + 20 + i * 14, 14)))}
                </div>
              </div>
            ))}
            <div style={{ height: 32, marginTop: 10, borderRadius: 99, backgroundColor: frame > T[1] + 66 ? c.ivy : "rgba(14,17,22,0.08)", color: c.paper, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>
              {frame > T[1] + 66 ? "✓ Application received" : ""}
            </div>
          </div>
        </Tile>

        <Tile at={T[2]} i={2} title="Results">
          <div style={{ padding: 18, fontFamily: sans }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontFamily: mono, fontSize: 11, color: c.slate, letterSpacing: "0.08em" }}>1ST TERM · JSS 2</div>
                <div style={{ fontSize: 17, fontWeight: 600 }}>Ibrahim Musa</div>
              </div>
              <div style={{ fontFamily: serif, fontSize: 44, color: c.ivy, lineHeight: 1 }}>{(78.4 * prog(frame, T[2] + 16, 40)).toFixed(1)}%</div>
            </div>
            {[
              ["Mathematics", 84],
              ["English", 76],
              ["Basic Science", 81],
              ["Civic Education", 72],
            ].map(([s, v], i) => (
              <div key={s as string} style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 14, fontSize: 14 }}>
                <span style={{ width: 118 }}>{s}</span>
                <span style={{ flex: 1, height: 8, borderRadius: 8, backgroundColor: "rgba(14,17,22,0.08)", overflow: "hidden" }}>
                  <span style={{ display: "block", height: "100%", width: `${(v as number) * prog(frame, T[2] + 18 + i * 5, 36)}%`, backgroundColor: c.ivy, borderRadius: 8 }} />
                </span>
              </div>
            ))}
          </div>
        </Tile>

        <Tile at={T[3]} i={3} title="Management systems">
          <div style={{ padding: 18, fontFamily: sans }}>
            <div style={{ fontFamily: mono, fontSize: 11, color: c.slate, letterSpacing: "0.08em", marginBottom: 10 }}>REGISTER · JSS 2 GOLD</div>
            {["Abdullahi Bello", "Blessing Eze", "Chukwuemeka Obi", "Fatima Yusuf", "Grace Adeyemi"].map((n, i) => {
              const on = frame > T[3] + 22 + i * 8;
              return (
                <div key={n} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", border: `1px solid ${c.line}`, borderRadius: 8, padding: "7px 12px", marginBottom: 6, fontSize: 14 }}>
                  {n}
                  <span style={{ fontFamily: mono, fontSize: 10, padding: "3px 8px", borderRadius: 99, backgroundColor: !on ? "rgba(14,17,22,0.06)" : i === 3 ? c.edge : c.ivy, color: !on ? c.mist : i === 3 ? c.ink : c.paper }}>
                    {!on ? "—" : i === 3 ? "ABSENT" : "PRESENT"}
                  </span>
                </div>
              );
            })}
          </div>
        </Tile>
      </div>
    </Scene>
  );
};
