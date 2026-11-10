import { Suspense } from "react";

/**
 * Wraps a below-the-fold section:
 * - Suspense boundary lets React hydrate it as its own chunk of work (shorter main-thread tasks)
 * - content-visibility: auto skips its rendering work until it nears the viewport
 */
export function Defer({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={null}>
      <div className="cv-auto">{children}</div>
    </Suspense>
  );
}
