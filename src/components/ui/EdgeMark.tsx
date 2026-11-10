import { cn } from "@/lib/utils";

/** The orange "edge" square — a square with one corner cut off. */
export function EdgeMark({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 10 10"
      className={cn("inline-block size-[0.42em] fill-edge", className)}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title && <title>{title}</title>}
      <path d="M0 0H10V6.2L6.2 10H0Z" />
    </svg>
  );
}
