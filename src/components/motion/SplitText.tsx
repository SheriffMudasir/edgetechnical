import { Fragment } from "react";
import { cn } from "@/lib/utils";

/**
 * Word-by-word mask reveal (60ms stagger) done in CSS so it paints before hydration (good LCP).
 * Wrap emphasis words in *asterisks* to render them in the serif italic, e.g. "look as *good* as".
 */
export function SplitText({
  text,
  as: Tag = "h1",
  className,
  delay = 0,
  emClassName = "italic",
  id,
}: {
  id?: string;
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  emClassName?: string;
}) {
  const words = text.split(" ");
  return (
    <Tag id={id} className={cn(className)} style={{ ["--split-delay" as string]: `${delay}ms` }}>
        {words.map((raw, i) => {
          const em = /^\*.*\*[.,!?]?$/.test(raw);
          const word = raw.replace(/\*/g, "");
          return (
            <Fragment key={i}>
              <span className="split-word">
                <span style={{ ["--i" as string]: i }} className={cn(em && emClassName)}>
                  {word}
                </span>
              </span>
              {i < words.length - 1 && " "}
            </Fragment>
          );
        })}
    </Tag>
  );
}

/** Renders *emphasis* markers as italic spans without animation. */
export function Emph({ text, emClassName = "italic" }: { text: string; emClassName?: string }) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("*") && p.endsWith("*") ? (
          <em key={i} className={cn("not-italic", emClassName)}>
            {p.slice(1, -1)}
          </em>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </>
  );
}
