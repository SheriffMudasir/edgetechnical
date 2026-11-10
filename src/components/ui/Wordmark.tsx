import { cn } from "@/lib/utils";
import { EdgeMark } from "./EdgeMark";

// TODO(owner): replace with final logo
export function Wordmark({ className, descriptor = false }: { className?: string; descriptor?: boolean }) {
  return (
    <span className={cn("inline-flex flex-col leading-none", className)}>
      <span className="inline-flex items-baseline text-[1.375rem] tracking-[-0.02em]">
        <span className="font-sans font-semibold">edge</span>
        <span className="font-display italic text-[1.12em] tracking-[-0.01em]">technical</span>
        <EdgeMark className="ml-[0.12em] size-[0.36em] translate-y-[-0.05em]" />
      </span>
      {descriptor && (
        <span className="label-mono mt-1.5 text-[10px] tracking-[0.1em] opacity-70">
          Websites, software and AI for education.
        </span>
      )}
      <span className="sr-only">Edgetechnical Solutions Limited</span>
    </span>
  );
}
