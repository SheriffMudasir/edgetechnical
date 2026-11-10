import { cn } from "@/lib/utils";

/** Code-built phone. Status bar shows an optional "Offline ✓" badge. */
export function PhoneFrame({
  children,
  className,
  offline = false,
  tone = "light",
  time = "9:41",
}: {
  children: React.ReactNode;
  className?: string;
  offline?: boolean;
  tone?: "light" | "dark";
  time?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-[9/19] w-full max-w-[320px] rounded-[44px] bg-ink p-[10px] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.6),inset_0_0_0_1.5px_rgba(255,255,255,0.08)]",
        className,
      )}
    >
      <div
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-[35px]",
          tone === "light" ? "bg-paper text-ink" : "bg-ink-2 text-paper",
        )}
      >
        <div className="relative flex h-11 shrink-0 items-center justify-between px-6 pt-1 text-[12px] font-semibold">
          <span>{time}</span>
          <span aria-hidden className="absolute left-1/2 top-2 h-[22px] w-[84px] -translate-x-1/2 rounded-full bg-ink" />
          <span className="flex items-center gap-1.5">
            {offline && (
              <span className="rounded-full bg-ivy px-1.5 py-[1px] font-mono text-[9px] font-medium tracking-wide text-paper">
                Offline ✓
              </span>
            )}
            <svg viewBox="0 0 18 12" className="h-2.5 w-4" aria-hidden>
              <rect x="0" y="8" width="3" height="4" rx="0.6" fill="currentColor" opacity={offline ? 0.3 : 1} />
              <rect x="5" y="5" width="3" height="7" rx="0.6" fill="currentColor" opacity={offline ? 0.3 : 1} />
              <rect x="10" y="2.5" width="3" height="9.5" rx="0.6" fill="currentColor" opacity={0.3} />
              <rect x="15" y="0" width="3" height="12" rx="0.6" fill="currentColor" opacity={0.3} />
            </svg>
            <svg viewBox="0 0 26 12" className="h-2.5 w-5" aria-hidden>
              <rect x="0.5" y="0.5" width="22" height="11" rx="3" fill="none" stroke="currentColor" opacity="0.4" />
              <rect x="2" y="2" width="15" height="8" rx="1.6" fill="currentColor" />
              <rect x="23.5" y="4" width="2" height="4" rx="1" fill="currentColor" opacity="0.4" />
            </svg>
          </span>
        </div>
        <div className="relative min-h-0 flex-1">{children}</div>
        <div aria-hidden className="mx-auto mb-2 mt-1 h-1 w-28 shrink-0 rounded-full bg-current opacity-25" />
      </div>
    </div>
  );
}
