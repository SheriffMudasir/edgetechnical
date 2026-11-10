import { cn, pad2 } from "@/lib/utils";

/** Small mono label like "01 — SERVICES". */
export function SectionLabel({
  index,
  children,
  className,
  tone = "auto",
}: {
  index?: number;
  children: React.ReactNode;
  className?: string;
  tone?: "auto" | "edge";
}) {
  return (
    <p className={cn("label-mono flex items-center gap-3", className)}>
      {index !== undefined && (
        <>
          <span className={cn(tone === "edge" && "text-edge")}>{pad2(index)}</span>
          <span aria-hidden className="h-px w-8 bg-current opacity-40" />
        </>
      )}
      <span>{children}</span>
    </p>
  );
}
