import Link from "next/link";
import { ArrowRight, Users, ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden flex flex-col gradient-hero min-h-[88svh] sm:min-h-[90vh] lg:min-h-[94vh]">

      {/* Clear, bright aerial tea-garden video — starts on the green scene */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        style={{
          objectPosition: "center 45%",
          /* Calm, gentle zoom so the clear green footage stays the focus */
          animation: "heroZoom 34s ease-in-out infinite alternate",
          willChange: "transform",
          /* Bright, crisp, lush-green grade — fresh & realistic */
          filter: "saturate(1.4) brightness(1.18) contrast(1.06)",
        }}
      >
        <source src="/hero-tea.mp4#t=2" type="video/mp4" />
        <source src="/tea-harvest.mp4#t=2" type="video/mp4" />
      </video>

      {/* Airy brightening lift — opens up shadows for a clean, fresh feel */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-15" aria-hidden
        style={{ background: "linear-gradient(180deg, hsl(80 60% 70%) 0%, transparent 70%)" }} />

      {/* Fresh-green enrichment — gently greens the leaves naturally */}
      <div className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-40" aria-hidden
        style={{ background: "linear-gradient(160deg, hsl(105 72% 52%) 0%, hsl(138 58% 42%) 100%)" }} />

      {/* Dewy sunlight glow — fresh airy highlight from upper area */}
      <div className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-50" aria-hidden
        style={{ background: "radial-gradient(ellipse 78% 62% at 52% 20%, hsl(82 88% 68%/.55) 0%, transparent 64%)" }} />

      {/* Light bottom vignette — depth + legibility without darkening the scene */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden
        style={{ background: "linear-gradient(to top, hsl(136 50% 14%/.45) 0%, hsl(134 45% 22%/.12) 30%, transparent 55%)" }} />


      {/* "Live harvest" floating badge */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex items-center gap-2 glass rounded-full px-3 py-1.5 text-[10px] sm:text-[11px] font-semibold text-white/90 animate-fade-in" style={{ animationDelay: ".6s" }}>
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
<span className="hidden sm:inline">Live · </span>Tea Harvest, Panchagarh
      </div>

      {/* Main content — anchored to the bottom so the video fills the frame */}
      <div className="section-container relative flex-1 flex flex-col justify-end pb-20 sm:pb-24 lg:pb-28">
        <div className="max-w-4xl">

          {/* Eyebrow — the institution name */}
          <div className="animate-fade-up inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-white/75 mb-5" style={{ animationDelay: ".05s" }}>
            <span className="w-6 h-px bg-gold" />
            Bangladesh Bought Leaf Tea Factory Owners Association
          </div>

          {/* CTAs — single primary + ghost secondary */}
          <div className="animate-fade-up flex flex-col sm:flex-row gap-3 w-full sm:w-auto" style={{ animationDelay: ".28s" }}>
            <Link href="/about" className="btn-gold w-full sm:w-auto justify-center shadow-[0_8px_24px_hsl(38_88%_50%/.4)]">
              Discover BBLTFOA <ArrowRight size={16} />
            </Link>
            <Link href="/members" className="btn-outline w-full sm:w-auto justify-center">
              <Users size={15} /> Member Directory
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1 text-white/45 animate-fade-in" style={{ animationDelay: "1s" }}>
        <span className="text-[9px] uppercase tracking-[0.25em]">Scroll</span>
        <ChevronDown size={15} className="animate-bounce" />
      </div>

      {/* Smooth fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-16 sm:h-20 pointer-events-none z-10" aria-hidden
        style={{ background: "linear-gradient(to bottom, transparent, hsl(0 0% 100%) 98%)" }} />
    </section>
  );
}
