import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/** Format a naira amount, e.g. 450000 -> "₦450,000" */
export function naira(amount: number) {
  return `₦${Math.round(amount).toLocaleString("en-NG")}`;
}

/** Compact naira, e.g. 1250000 -> "₦1.25m" */
export function nairaCompact(amount: number) {
  if (amount >= 1_000_000) return `₦${(amount / 1_000_000).toFixed(amount % 1_000_000 === 0 ? 0 : 2).replace(/0$/, "")}m`;
  if (amount >= 1_000) return `₦${Math.round(amount / 1_000)}k`;
  return naira(amount);
}

export function pad2(n: number) {
  return n.toString().padStart(2, "0");
}
