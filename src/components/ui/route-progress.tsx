"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

export function RouteProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  const start = useCallback(() => {
    setProgress(0);
    setVisible(true);
    // Fast initial jump
    setProgress(30);
    const t1 = setTimeout(() => setProgress(60), 200);
    const t2 = setTimeout(() => setProgress(80), 600);
    const t3 = setTimeout(() => setProgress(90), 1200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const finish = useCallback(() => {
    setProgress(100);
    const t = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 400);
    return () => clearTimeout(t);
  }, []);

  // Finish on route change
  useEffect(() => {
    finish();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Expose start for Link clicks (we listen to navigation events)
  useEffect(() => {
    const handler = () => start();
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [start]);

  if (!visible && progress === 0) return null;

  return (
    <div
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page loading"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10000,
        height: "3px",
        width: `${progress}%`,
        background: "linear-gradient(90deg, hsl(36 72% 36%), hsl(40 100% 56%), hsl(38 88% 50%))",
        transition: progress === 100
          ? "width .25s ease, opacity .35s ease .05s"
          : "width .4s cubic-bezier(.4,0,.2,1)",
        opacity: progress === 100 ? 0 : 1,
        borderRadius: "0 9999px 9999px 0",
        boxShadow: "0 0 8px hsl(38 88% 50%/.6)",
        pointerEvents: "none",
      }}
    />
  );
}
