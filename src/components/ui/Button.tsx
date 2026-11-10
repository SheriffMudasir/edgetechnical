import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "dark" | "light" | "outline" | "outline-inv";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 rounded-full font-medium leading-none whitespace-nowrap transition-[background-color,color,border-color,transform] duration-300 ease-out select-none";

const sizes = {
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-7 text-base md:h-16 md:px-9 md:text-[17px]",
  sm: "h-10 px-4 text-sm",
};

const variants: Record<Variant, string> = {
  primary: "bg-edge text-ink hover:bg-ink hover:text-paper",
  dark: "bg-ink text-paper hover:bg-edge hover:text-ink",
  light: "bg-paper text-ink hover:bg-edge",
  outline: "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  "outline-inv": "border border-paper/25 text-paper hover:border-paper hover:bg-paper hover:text-ink",
};

export function buttonClasses(variant: Variant = "primary", size: keyof typeof sizes = "md", className?: string) {
  return cn(base, sizes[size], variants[variant], className);
}

export function ButtonArrow() {
  return (
    <span className="relative inline-flex size-4 overflow-hidden" aria-hidden>
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/btn:-translate-y-4 group-hover/btn:translate-x-4" />
      <ArrowUpRight className="absolute inset-0 size-4 -translate-x-4 translate-y-4 transition-transform duration-300 group-hover/btn:translate-x-0 group-hover/btn:translate-y-0" />
    </span>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  arrow = true,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
  arrow?: boolean;
} & Omit<React.ComponentPropsWithoutRef<"a">, "href">) {
  const external = /^https?:|^mailto:|^tel:/.test(href);
  const content = (
    <>
      <span>{children}</span>
      {arrow && <ButtonArrow />}
    </>
  );
  if (external) {
    return (
      <a href={href} className={buttonClasses(variant, size, className)} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={buttonClasses(variant, size, className)} {...rest}>
      {content}
    </Link>
  );
}

/** Text link with arrow and orange draw-underline. */
export function TextLink({
  href,
  children,
  className,
  ...rest
}: { href: string; children: React.ReactNode; className?: string } & Omit<React.ComponentPropsWithoutRef<"a">, "href">) {
  const external = /^https?:|^mailto:|^tel:/.test(href);
  const inner = (
    <>
      <span className="link-draw">{children}</span>
      <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover/tl:translate-x-1" />
    </>
  );
  const cls = cn("group/tl inline-flex items-center gap-2 font-medium", className);
  return external ? (
    <a href={href} className={cls} {...rest}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls} {...rest}>
      {inner}
    </Link>
  );
}
