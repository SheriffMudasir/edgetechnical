import { SplitText } from "@/components/motion/SplitText";
import { EdgeMark } from "@/components/ui/EdgeMark";
import { cn } from "@/lib/utils";

/** Editorial page hero used by inner pages. Title supports *emphasis*. */
export function PageHero({
  label,
  title,
  sub,
  children,
  aside,
  tone = "paper",
  emClassName,
  titleClassName,
}: {
  label: string;
  title: string;
  sub?: React.ReactNode;
  children?: React.ReactNode;
  aside?: React.ReactNode;
  tone?: "paper" | "ink" | "ivy";
  emClassName?: string;
  titleClassName?: string;
}) {
  const dark = tone !== "paper";
  return (
    <section
      data-hero={dark ? "dark" : undefined}
      className={cn(
        "relative overflow-x-clip",
        tone === "paper" && "bg-paper",
        tone === "ink" && "grain bg-ink text-paper",
        tone === "ivy" && "grain bg-ivy text-paper",
      )}
    >
      <div className="container-x relative z-10 pb-20 pt-[calc(var(--header-h)+40px)] md:pb-28 md:pt-[calc(var(--header-h)+72px)]">
        <div className={cn("border-b pb-5", dark ? "border-line-inv" : "border-line")}>
          <p className={cn("label-mono flex items-center gap-2.5", dark ? "text-paper/80" : "text-ink/80")}>
            <EdgeMark className="size-2.5" />
            {label}
          </p>
        </div>
        <div className="grid gap-10 pt-10 md:pt-14 lg:grid-cols-12">
          <SplitText
            text={title}
            className={cn("h-hero lg:col-span-11", titleClassName)}
            emClassName={emClassName ?? (dark ? "italic text-[#8FD3B0]" : "italic text-ivy")}
          />
          {(sub || children) && (
            <div className="rise-in flex flex-col gap-8 lg:col-span-5 lg:col-start-8" style={{ ["--rise-delay" as string]: "450ms" }}>
              {sub && <p className={cn("max-w-[48ch] text-[17px] leading-relaxed md:text-lg", dark ? "text-paper/75" : "text-ink/75")}>{sub}</p>}
              {children}
            </div>
          )}
          {aside && (
            <div className="rise-in lg:col-span-6 lg:col-start-1 lg:row-start-2" style={{ ["--rise-delay" as string]: "550ms" }}>
              {aside}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
