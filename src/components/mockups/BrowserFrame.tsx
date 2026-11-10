import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";

/** Code-built browser window. Children render inside a container-query context (use cqw units). */
export function BrowserFrame({
  url = "greenfieldacademy.edu.ng",
  children,
  className,
  tone = "light",
}: {
  url?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[14px] border shadow-[0_40px_80px_-30px_rgba(14,17,22,0.35),0_0_0_1px_rgba(14,17,22,0.04)]",
        tone === "light" ? "border-line bg-chalk" : "border-line-inv bg-ink-2",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 border-b px-3 py-2.5 md:px-4",
          tone === "light" ? "border-line bg-paper-2/60" : "border-line-inv bg-ink-3",
        )}
      >
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-ink/15" />
          <span className="size-2.5 rounded-full bg-ink/15" />
          <span className="size-2.5 rounded-full bg-edge/80" />
        </div>
        <div
          className={cn(
            "mx-auto flex min-w-0 max-w-[60%] flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10px] md:text-[11px]",
            tone === "light" ? "bg-chalk text-slate" : "bg-ink text-mist",
          )}
        >
          <Lock className="size-2.5 shrink-0" aria-hidden />
          <span className="truncate">{url}</span>
        </div>
        <div className="w-[42px]" aria-hidden />
      </div>
      <div className="@container relative">{children}</div>
    </div>
  );
}
