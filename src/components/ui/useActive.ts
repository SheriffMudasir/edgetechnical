"use client";

import { useInView } from "motion/react";
import { useRef, useState, useSyncExternalStore } from "react";

const QUERY = "(hover: none)";
function subscribe(cb: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
const getTouch = () => window.matchMedia(QUERY).matches;
const getServerTouch = () => false;

/**
 * "Active" state for micro-interactions: hover/focus on fine pointers,
 * in-view on touch devices (which have no hover).
 */
export function useActive<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [hovered, setHovered] = useState(false);
  const touch = useSyncExternalStore(subscribe, getTouch, getServerTouch);
  const inView = useInView(ref, { amount: 0.55 });

  const handlers = {
    onPointerEnter: () => setHovered(true),
    onPointerLeave: () => setHovered(false),
    onFocus: () => setHovered(true),
    onBlur: () => setHovered(false),
  };
  return { ref, active: touch ? inView : hovered, handlers };
}
