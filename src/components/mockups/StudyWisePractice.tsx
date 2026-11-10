import { PhoneFrame } from "./PhoneFrame";

/** Static StudyWise practice screen: exam-style question + AI Points balance. */
export function StudyWisePractice({ className }: { className?: string }) {
  return (
    <div className={className}>
      <PhoneFrame offline tone="light">
        <div className="flex h-full flex-col px-4 pb-3" aria-hidden>
          <div className="flex items-center justify-between">
            <p className="label-mono text-[9px] text-slate">Mathematics · Practice</p>
            <span className="rounded-full bg-edge/15 px-2 py-0.5 font-mono text-[10px] text-edge-deep">120 AI pts</span>
          </div>
          <div className="mt-3 h-1 overflow-hidden rounded-full bg-ink/8">
            <div className="h-full w-[45%] rounded-full bg-ivy" />
          </div>
          <p className="mt-1 text-right font-mono text-[10px] text-slate">Q 18 / 40</p>
          <p className="mt-3 text-[13px] font-medium leading-snug">
            Simplify: <span className="font-mono">(2x + 3)(x − 4)</span>
          </p>
          <div className="mt-3 space-y-1.5 text-[12px]">
            {["2x² − 5x − 12", "2x² + 5x − 12", "2x² − 11x + 12", "x² − 5x − 12"].map((o, i) => (
              <div
                key={o}
                className={
                  i === 0
                    ? "flex items-center justify-between rounded-lg border border-ivy bg-ivy px-3 py-2 font-mono text-paper"
                    : "rounded-lg border border-line bg-chalk px-3 py-2 font-mono"
                }
              >
                <span>
                  {String.fromCharCode(65 + i)}. {o}
                </span>
                {i === 0 && <span className="font-sans text-[10px]">Correct ✓</span>}
              </div>
            ))}
          </div>
          <div className="mt-auto rounded-xl border border-line bg-chalk p-3 text-[12px] leading-snug">
            <p className="label-mono text-[9px] text-slate">Tutor</p>
            Nice work. Can you see why the middle term is −5x? Try expanding just the &ldquo;outer&rdquo; and &ldquo;inner&rdquo; pairs.
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}
