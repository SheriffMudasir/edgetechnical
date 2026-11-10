import { cn } from "@/lib/utils";

const ROWS: [string, number, number, number][] = [
  // subject, CA1 (20), CA2 (20), Exam (60)
  ["Mathematics", 17, 18, 49],
  ["English Language", 15, 16, 45],
  ["Basic Science", 18, 17, 46],
  ["Basic Technology", 14, 16, 41],
  ["Social Studies", 16, 15, 44],
  ["Civic Education", 13, 15, 42],
  ["Computer Studies", 19, 18, 52],
  ["French", 12, 14, 38],
];

function grade(total: number) {
  if (total >= 75) return ["A1", "Excellent"];
  if (total >= 70) return ["B2", "Very good"];
  if (total >= 65) return ["B3", "Good"];
  if (total >= 60) return ["C4", "Credit"];
  if (total >= 50) return ["C6", "Credit"];
  return ["D7", "Pass"];
}

/** Beautifully formatted report-card PDF preview (A4 proportion) with a crest placeholder. */
export function ReportCardPreview({ className, compact = false }: { className?: string; compact?: boolean }) {
  const totals = ROWS.map(([, a, b, c]) => a + b + c);
  const avg = totals.reduce((s, t) => s + t, 0) / totals.length;
  return (
    <figure
      className={cn(
        "@container relative aspect-[1/1.3] w-full overflow-hidden rounded-[6px] bg-chalk text-ink shadow-[0_40px_80px_-30px_rgba(14,17,22,0.45)]",
        className,
      )}
      aria-label="Sample report card (concept)"
    >
      <div className="flex h-full flex-col p-[6cqw]">
        {/* header */}
        <div className="flex items-center gap-[3cqw] border-b-2 border-ivy pb-[3cqw]">
          <div className="flex size-[12cqw] shrink-0 items-center justify-center rounded-full border border-dashed border-ivy/50 bg-ivy/5">
            <span className="text-center font-mono text-[1.8cqw] uppercase leading-tight text-ivy/70">
              School
              <br />
              crest
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-display text-[5.4cqw] leading-none">Greenfield Academy</p>
            <p className="mt-[0.8cqw] text-[2.1cqw] text-slate">Plot 14, Education Close, Abuja · Concept report card</p>
          </div>
          <div className="text-right">
            <p className="font-mono text-[1.9cqw] uppercase tracking-wider text-slate">Term report</p>
            <p className="text-[2.6cqw] font-semibold">1st Term 2026/27</p>
          </div>
        </div>
        {/* student */}
        <div className="grid grid-cols-4 gap-[2cqw] border-b border-line py-[2.6cqw] text-[2.2cqw]">
          {[
            ["Student", "Ibrahim Musa"],
            ["Class", "JSS 2 Gold"],
            ["Adm. No.", "GFA/2025/0142"],
            ["Position", "3rd of 42"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="font-mono text-[1.7cqw] uppercase tracking-wider text-slate">{k}</p>
              <p className="font-semibold">{v}</p>
            </div>
          ))}
        </div>
        {/* table */}
        <table className="mt-[2.4cqw] w-full border-collapse text-[2.15cqw]">
          <thead>
            <tr className="bg-ivy text-left text-paper">
              <th className="px-[1.6cqw] py-[1.2cqw] font-medium">Subject</th>
              <th className="px-[1cqw] text-center font-medium">CA 1</th>
              <th className="px-[1cqw] text-center font-medium">CA 2</th>
              <th className="px-[1cqw] text-center font-medium">Exam</th>
              <th className="px-[1cqw] text-center font-medium">Total</th>
              <th className="px-[1cqw] text-center font-medium">Grade</th>
              {!compact && <th className="px-[1.6cqw] text-left font-medium">Remark</th>}
            </tr>
          </thead>
          <tbody>
            {ROWS.map(([s, a, b, c], i) => {
              const t = a + b + c;
              const [g, r] = grade(t);
              return (
                <tr key={s} className={cn("border-b border-line", i % 2 === 1 && "bg-paper/60")}>
                  <td className="px-[1.6cqw] py-[1.05cqw]">{s}</td>
                  <td className="text-center font-mono">{a}</td>
                  <td className="text-center font-mono">{b}</td>
                  <td className="text-center font-mono">{c}</td>
                  <td className="text-center font-mono font-semibold">{t}</td>
                  <td className="text-center font-mono font-semibold text-ivy">{g}</td>
                  {!compact && <td className="px-[1.6cqw] text-slate">{r}</td>}
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* summary */}
        <div className="mt-[3cqw] grid grid-cols-3 gap-[2cqw]">
          {[
            ["Average", `${avg.toFixed(1)}%`],
            ["Attendance", "58 / 60"],
            ["Next term begins", "12 Jan 2027"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-[1.2cqw] border border-line px-[2cqw] py-[1.6cqw]">
              <p className="font-mono text-[1.7cqw] uppercase tracking-wider text-slate">{k}</p>
              <p className="font-display text-[4cqw] leading-none">{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-auto grid grid-cols-2 gap-[4cqw] pt-[3cqw] text-[2cqw]">
          <div>
            <p className="font-mono text-[1.7cqw] uppercase tracking-wider text-slate">Form teacher&apos;s remark</p>
            <p className="mt-[0.6cqw] font-display text-[2.8cqw] italic leading-snug">
              A focused, curious learner. Keep reading every day.
            </p>
          </div>
          <div>
            <p className="font-mono text-[1.7cqw] uppercase tracking-wider text-slate">Principal</p>
            <svg viewBox="0 0 120 30" className="mt-[0.6cqw] h-[5cqw] text-ink/70" aria-hidden>
              <path
                d="M2 22c8-14 14-16 16-8s-4 12 2 6 10-16 14-10-2 12 4 8 8-10 14-8 4 6 10 4 12-8 20-6 14 4 20 2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            <div className="mt-[0.4cqw] h-px bg-line" />
          </div>
        </div>
      </div>
    </figure>
  );
}
