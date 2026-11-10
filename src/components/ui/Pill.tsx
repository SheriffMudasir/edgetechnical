import { cn } from "@/lib/utils";

export function Pill({
  children,
  className,
  tone = "line",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "line" | "line-inv" | "ivy" | "edge" | "ink";
}) {
  return (
    <span
      className={cn(
        "label-mono inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px]",
        tone === "line" && "border border-line text-ink/75",
        tone === "line-inv" && "border border-line-inv text-paper/75",
        tone === "ivy" && "bg-ivy text-paper",
        tone === "edge" && "bg-edge text-ink",
        tone === "ink" && "bg-ink text-paper",
        className,
      )}
    >
      {children}
    </span>
  );
}
