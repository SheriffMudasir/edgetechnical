import { cn } from "@/lib/utils";

/** "One system, not five" hub diagram. Pure CSS/SVG, no JS. */
export function OneSystem({ nodes, tone = "paper" }: { nodes: string[]; tone?: "paper" | "ink" }) {
  const dark = tone === "ink";
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]" role="img" aria-label={`One shared database connecting: ${nodes.join(", ")}`}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
        <circle cx="50" cy="50" r="36" fill="none" stroke={dark ? "rgba(245,242,235,.15)" : "rgba(14,17,22,.12)"} strokeDasharray="0.8 1.6" strokeWidth="0.4" />
        {nodes.map((_, i) => {
          const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
          return (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={50 + Math.cos(a) * 36}
              y2={50 + Math.sin(a) * 36}
              stroke={i === 0 ? "#FF5A1F" : dark ? "rgba(245,242,235,.3)" : "rgba(14,17,22,.25)"}
              strokeWidth="0.35"
            />
          );
        })}
      </svg>
      <div className={cn("absolute left-1/2 top-1/2 flex size-[30%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full text-center", dark ? "bg-paper text-ink" : "bg-ink text-paper")}>
        <span className="label-mono text-[10px] opacity-70">One</span>
        <span className="font-display text-[clamp(1.2rem,2.4vw,1.8rem)] leading-none">database</span>
      </div>
      {nodes.map((n, i) => {
        const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
        const x = 50 + Math.cos(a) * 36;
        const y = 50 + Math.sin(a) * 36;
        return (
          <span
            key={n}
            className={cn(
              "absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border px-3 py-1.5 text-[12px] font-medium sm:text-[13px]",
              i === 0 ? "border-edge bg-edge text-ink" : dark ? "border-line-inv bg-ink-2 text-paper" : "border-line bg-chalk text-ink",
            )}
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            {n}
          </span>
        );
      })}
    </div>
  );
}
