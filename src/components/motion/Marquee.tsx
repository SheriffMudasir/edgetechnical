import { cn } from "@/lib/utils";
import { EdgeMark } from "@/components/ui/EdgeMark";

/** Slow infinite strip. CSS-only; pauses on hover and under reduced motion. */
export function Marquee({
  items,
  className,
  duration = 70,
  itemClassName,
}: {
  items: readonly string[];
  className?: string;
  duration?: number;
  itemClassName?: string;
}) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className={cn("flex items-center gap-[0.6em] px-[0.6em] whitespace-nowrap", itemClassName)}>
          <span>{item}</span>
          <EdgeMark className="size-[0.28em]" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className={cn("group/mq flex overflow-hidden", className)}>
      <div
        className="flex w-max animate-marquee group-hover/mq:[animation-play-state:paused]"
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
