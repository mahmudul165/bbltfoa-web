/**
 * World-class tea-cup animation — realistic 3/4-view ceramic cup & saucer
 * with soft shading, an accent ring, brown tea, organic rising steam,
 * gentle float, and a liquid shimmer. Pure SVG + CSS.
 * Keyframes (steamRise / teaFloat / teaShimmer) live in globals.css.
 * Seamless eased loop, honors prefers-reduced-motion.
 */
export function TeaCupAnimation({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      {/* Organic rising steam — staggered wisps, varied timing */}
      <div className="warm-steam">
        <span style={{ animationDelay: "0s",   animationDuration: "4.2s" }} />
        <span style={{ animationDelay: "1.2s", animationDuration: "4.8s" }} />
        <span style={{ animationDelay: "2.3s", animationDuration: "5.2s" }} />
        <span style={{ animationDelay: "3.1s", animationDuration: "4.5s" }} />
      </div>

      {/* Cup + saucer (gently floats) */}
      <svg viewBox="0 0 400 460" fill="none" className="tea-cup relative w-full h-full">
        <defs>
          <linearGradient id="cupBody" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="hsl(210 16% 97%)" />
            <stop offset="45%"  stopColor="hsl(210 12% 93%)" />
            <stop offset="100%" stopColor="hsl(213 12% 84%)" />
          </linearGradient>
          <linearGradient id="cupRim" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="hsl(210 18% 98%)" />
            <stop offset="100%" stopColor="hsl(213 12% 88%)" />
          </linearGradient>
          <linearGradient id="saucer" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="hsl(210 16% 97%)" />
            <stop offset="100%" stopColor="hsl(213 12% 88%)" />
          </linearGradient>
          <radialGradient id="liquid" cx="42%" cy="34%" r="72%">
            <stop offset="0%"   stopColor="hsl(26 55% 34%)" />
            <stop offset="60%"  stopColor="hsl(24 60% 26%)" />
            <stop offset="100%" stopColor="hsl(22 62% 17%)" />
          </radialGradient>
        </defs>

        {/* Saucer */}
        <ellipse cx="200" cy="422" rx="162" ry="32" fill="hsl(215 15% 30%)" opacity=".10" />
        <ellipse cx="200" cy="406" rx="158" ry="40" fill="hsl(213 12% 80%)" />
        <ellipse cx="200" cy="398" rx="158" ry="40" fill="url(#saucer)" stroke="hsl(213 12% 82%)" strokeWidth="1.5" />
        {/* Accent rings */}
        <ellipse cx="200" cy="398" rx="126" ry="31" fill="none" stroke="var(--color-tea-mid)" strokeWidth="3"   opacity=".8" />
        <ellipse cx="200" cy="398" rx="116" ry="27" fill="none" stroke="var(--color-tea-mid)" strokeWidth="1.5" opacity=".45" />
        {/* Saucer well + cup contact shadow */}
        <ellipse cx="200" cy="396" rx="80" ry="18" fill="hsl(212 12% 90%)" />
        <ellipse cx="204" cy="384" rx="92" ry="20" fill="hsl(215 18% 28%)" opacity=".12" />

        {/* Handle */}
        <path d="M298 286c56-6 60 64 2 66" stroke="url(#cupRim)" strokeWidth="22" strokeLinecap="round" fill="none" />
        <path d="M300 293c44-4 47 50 2 52" stroke="hsl(213 12% 82%)" strokeWidth="9" strokeLinecap="round" fill="none" opacity=".6" />

        {/* Cup body */}
        <path
          d="M104 258c0 64 30 108 96 108s96-44 96-108Z"
          fill="url(#cupBody)"
          stroke="hsl(213 12% 80%)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Inner body shadow for volume */}
        <path d="M252 260c0 62-24 100-58 105 52-2 90-46 90-105Z" fill="hsl(213 14% 78%)" opacity=".5" />

        {/* Rim */}
        <ellipse cx="200" cy="258" rx="98" ry="30" fill="url(#cupRim)" stroke="hsl(213 12% 80%)" strokeWidth="1.5" />
        {/* Tea surface */}
        <ellipse cx="200" cy="258" rx="88" ry="25" fill="url(#liquid)" />
        <ellipse cx="200" cy="258" rx="88" ry="25" fill="none" stroke="hsl(22 55% 14%)" strokeWidth="2" opacity=".4" />
        {/* Ceramic rim sheen + liquid shimmer */}
        <ellipse cx="170" cy="250" rx="30" ry="5.5" fill="#fff" opacity=".5" />
        <ellipse className="tea-shimmer" cx="176" cy="252" rx="38" ry="6.5" fill="hsl(30 60% 52%)" opacity=".4" />
      </svg>
    </div>
  );
}
