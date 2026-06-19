/**
 * Decorative animated tea cup with dynamically rising steam (pure CSS/SVG).
 * Keyframes (steamRise) live in globals.css. Honors prefers-reduced-motion.
 */
export function TeaCup({ className = "" }: { className?: string }) {
  return (
    <div className={`tea-cup relative ${className}`} aria-hidden="true">
      {/* Soft warm glow */}
      <div className="tea-glow" />

      {/* Rising steam wisps */}
      <div className="tea-steam">
        <span style={{ animationDelay: "0s" }} />
        <span style={{ animationDelay: ".7s" }} />
        <span style={{ animationDelay: "1.4s" }} />
        <span style={{ animationDelay: "2.2s" }} />
      </div>

      {/* Cup */}
      <svg viewBox="0 0 120 120" fill="none" className="relative w-full h-full">
        {/* Saucer */}
        <ellipse cx="60" cy="100" rx="42" ry="8" fill="var(--color-tea-pale)" />
        <ellipse cx="60" cy="98" rx="42" ry="8" fill="#fff" stroke="var(--color-tea-green)" strokeWidth="2" />

        {/* Handle */}
        <path
          d="M88 60c16 0 16 26 0 26"
          stroke="var(--color-tea-green)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Cup body */}
        <path
          d="M28 52h64l-7 33a10 10 0 0 1-9.9 8.4H44.9A10 10 0 0 1 35 85L28 52Z"
          fill="#fff"
          stroke="var(--color-tea-green)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Tea surface */}
        <ellipse cx="60" cy="53" rx="32" ry="6.5" fill="var(--color-tea-dark)" />
        <ellipse cx="60" cy="53" rx="32" ry="6.5" fill="none" stroke="var(--color-tea-green)" strokeWidth="2.5" />
        <ellipse className="tea-shimmer" cx="60" cy="52" rx="20" ry="3.5" fill="var(--color-tea-light)" />
      </svg>
    </div>
  );
}
