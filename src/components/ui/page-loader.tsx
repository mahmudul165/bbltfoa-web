"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/* ─── Loading circle that spins around the logo ───────────── */
function OrbitalRing({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        animation: "loaderRingRotate 1.6s linear infinite",
        pointerEvents: "none",
      }}
      aria-hidden
    >
      {/* Full faint track */}
      <circle cx="100" cy="100" r="92" stroke="rgba(255,255,255,.12)" strokeWidth="3" />
      {/* Active gold arc that orbits the logo */}
      <circle
        cx="100" cy="100" r="92"
        stroke="hsl(40 95% 55%)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="150 430"
        style={{ filter: "drop-shadow(0 0 7px hsl(38 90% 55%))" }}
      />
      {/* Leading dot at the head of the arc */}
      <circle
        cx="192" cy="100" r="4.5"
        fill="hsl(45 100% 62%)"
        style={{ filter: "drop-shadow(0 0 6px hsl(40 95% 58%))" }}
      />
    </svg>
  );
}

/* ─── Bouncing dots ────────────────────────────────────────── */
function LoadingDots() {
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          style={{
            width: i === 1 || i === 2 ? 8 : 6,
            height: i === 1 || i === 2 ? 8 : 6,
            borderRadius: "50%",
            background: i % 2 === 0
              ? "rgba(255,255,255,.35)"
              : "hsl(38 88% 55%)",
            animation: `dotBounce .9s ease-in-out ${i * .15}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Outer glow ring (static, pulsing) ───────────────────── */
function GlowRing() {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        top: "50%", left: "50%",
        width: 200, height: 200,
        transform: "translate(-50%,-50%)",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, hsl(145 52% 30%/.5) 0%, hsl(145 52% 22%/.1) 58%, transparent 78%)",
        animation: "leafPulse 2.8s ease-in-out infinite",
      }}
    />
  );
}

/* ─── Main Page Loader ─────────────────────────────────────── */
export function PageLoader() {
  const [visible, setVisible] = useState(false);
  const [stage, setStage] = useState<"enter" | "hold" | "exit">("enter");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("bbltfoa_loaded")) return;

    setVisible(true);

    // Enter → hold
    const t1 = setTimeout(() => setStage("hold"), 150);
    // Hold → exit
    const t2 = setTimeout(() => setStage("exit"), 1000);
    // Remove from DOM
    const t3 = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("bbltfoa_loaded", "1");
    }, 1550);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (!visible) return null;

  const isExiting = stage === "exit";

  return (
    <div
      role="status"
      aria-label="Loading BBLTFOA"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 0,
        /* Dark tea gradient matching the hero */
        background:
          "radial-gradient(ellipse 80% 60% at 40% 30%, hsl(141 48% 20%/.45) 0%, transparent 65%)," +
          "radial-gradient(ellipse 60% 80% at 80% 70%, hsl(38 88% 50%/.08) 0%, transparent 65%)," +
          "linear-gradient(150deg, hsl(148 68% 7%) 0%, hsl(145 60% 13%) 50%, hsl(143 55% 19%) 100%)",
        transition: `opacity .75s cubic-bezier(.4,0,.2,1), transform .75s cubic-bezier(.4,0,.2,1)`,
        opacity: isExiting ? 0 : 1,
        transform: isExiting ? "scale(1.025)" : "scale(1)",
        pointerEvents: isExiting ? "none" : "all",
        overflow: "hidden",
      }}
    >
      {/* Dot-pattern texture overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,.06) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Top gold progress bar */}
      <div
        aria-hidden
        style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: 3,
          background: "linear-gradient(90deg, hsl(36 72% 36%), hsl(40 100% 60%), hsl(38 88% 52%), hsl(40 100% 60%))",
          backgroundSize: "200% 100%",
          transformOrigin: "left",
          animation: "loaderBar 2.8s cubic-bezier(.4,0,.2,1) forwards, shimmer 1.5s linear infinite",
        }}
      />

      {/* Decorative blobs */}
      <div aria-hidden style={{
        position: "absolute", top: -60, right: -60,
        width: 280, height: 280, borderRadius: "50%",
        background: "radial-gradient(circle, hsl(38 88% 55%/.07) 0%, transparent 70%)",
      }} />
      <div aria-hidden style={{
        position: "absolute", bottom: -80, left: -60,
        width: 320, height: 320, borderRadius: "50%",
        background: "radial-gradient(circle, hsl(145 52% 28%/.12) 0%, transparent 70%)",
        animation: "leafPulse 4s ease-in-out infinite",
      }} />

      {/* ── Logo block ──────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          width: 176,
          height: 176,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 36,
          animation: "loaderFadeIn .55s cubic-bezier(.34,1.56,.64,1) .1s both",
        }}
      >
        {/* Pulsing glow behind logo */}
        <GlowRing />

        {/* Spinning orbital loading ring — frames the logo */}
        <OrbitalRing size={172} />

        {/* Logo image */}
        <div
          style={{
            position: "relative",
            width: 132,
            height: 132,
            animation: "leafPulse 3s ease-in-out 1.2s infinite",
            filter: "drop-shadow(0 8px 22px hsl(145 60% 10%/.6))",
          }}
        >
          <Image
            src="/logo.png"
            alt="BBLTFOA Logo"
            width={132}
            height={132}
            priority
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>

      {/* ── Text block ──────────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0,
          animation: "loaderFadeIn .5s ease .5s both",
        }}
      >
        {/* Name */}
        <div
          style={{
            color: "white",
            fontSize: "2.1rem",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          BBLTFOA
        </div>

        {/* Gold rule */}
        <div style={{
          width: 48, height: 2,
          background: "linear-gradient(90deg, transparent, hsl(40 100% 56%), transparent)",
          margin: "12px 0",
          animation: "loaderFadeIn .4s ease .75s both",
        }} />

        {/* Full name */}
        <div
          style={{
            color: "rgba(255,255,255,.52)",
            fontSize: "0.62rem",
            letterSpacing: "0.11em",
            textTransform: "uppercase",
            textAlign: "center",
            lineHeight: 1.7,
            maxWidth: 260,
            animation: "loaderFadeIn .4s ease .85s both",
          }}
        >
          Bangladesh Bought Leaf Tea<br />Factory Owners Association
        </div>

        {/* Loading dots */}
        <div style={{
          marginTop: 28,
          animation: "loaderFadeIn .4s ease 1s both",
        }}>
          <LoadingDots />
        </div>
      </div>
    </div>
  );
}
