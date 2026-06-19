"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTOR = ".reveal, .reveal-left, .reveal-right, .reveal-scale";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Re-query on every route change (this component lives in the root layout
    // and stays mounted across client-side navigations).
    let cancelled = false;
    let fallbackTimer: ReturnType<typeof setTimeout>;

    // Wait a frame so freshly-rendered DOM is queryable after navigation.
    const raf = requestAnimationFrame(() => {
      if (cancelled) return;

      const els = Array.from(
        document.querySelectorAll<HTMLElement>(SELECTOR)
      ).filter((el) => !el.classList.contains("visible"));

      if (els.length === 0) return;

      // Graceful fallback: if IntersectionObserver is unavailable, reveal all.
      if (typeof IntersectionObserver === "undefined") {
        els.forEach((el) => el.classList.add("visible"));
        return;
      }

      const reveal = (el: HTMLElement) => {
        const delay = parseInt(el.dataset.delay ?? "0", 10);
        if (delay > 0) setTimeout(() => el.classList.add("visible"), delay);
        else el.classList.add("visible");
      };

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal(entry.target as HTMLElement);
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
      );

      // Immediately reveal anything already in (or above) the viewport so
      // nothing ever stays blank on load or after a fast scroll/jump.
      const vh = window.innerHeight || document.documentElement.clientHeight;
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < vh * 0.95) {
          reveal(el);
        } else {
          io.observe(el);
        }
      });

      // Safety net: after 2.5s force-reveal anything still hidden, so a missed
      // observer callback can never leave a permanent white gap.
      fallbackTimer = setTimeout(() => {
        document
          .querySelectorAll<HTMLElement>(SELECTOR)
          .forEach((el) => el.classList.add("visible"));
      }, 2500);

      // Store for cleanup
      (window as unknown as { __sr?: IntersectionObserver }).__sr = io;
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      clearTimeout(fallbackTimer);
      const io = (window as unknown as { __sr?: IntersectionObserver }).__sr;
      io?.disconnect();
    };
  }, [pathname]);

  return null;
}
