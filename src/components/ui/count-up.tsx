"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animates a numeric value up from 0 when it scrolls into view.
 * Preserves any prefix/suffix (e.g. "1,200+", "5%", "15+").
 * Honors prefers-reduced-motion.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const match = value.match(/([\d,]+(?:\.\d+)?)/);
  const numStr = match ? match[1].replace(/,/g, "") : null;
  const target = numStr ? parseFloat(numStr) : 0;
  const prefix = match ? value.slice(0, match.index) : "";
  const suffix = match ? value.slice((match.index ?? 0) + match[1].length) : "";

  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!numStr) return;
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(target);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const dur = 1500;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / dur, 1);
              const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
              setDisplay(target * eased);
              if (p < 1) requestAnimationFrame(tick);
              else setDisplay(target);
            };
            requestAnimationFrame(tick);
          }
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, numStr]);

  if (!numStr) return <span className={className}>{value}</span>;

  const formatted = Math.round(display).toLocaleString();
  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
