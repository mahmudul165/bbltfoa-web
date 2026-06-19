import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface Breadcrumb { label: string; href?: string; }

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  children?: ReactNode;
  size?: "default" | "lg";
}

export function PageHeader({ title, subtitle, breadcrumbs, children, size = "default" }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden gradient-hero text-white">
      {/* Dot texture */}
      <div className="absolute inset-0 bg-dots-white opacity-25 pointer-events-none" aria-hidden />

      {/* Decorative blob */}
      <div aria-hidden className="absolute -right-24 -top-24 w-96 h-96 rounded-full opacity-[.06] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(38 88% 60%) 0%, transparent 70%)" }} />

      <div className={`section-container relative ${size === "lg" ? "py-20 lg:py-28" : "py-14 lg:py-20"}`}>

        {/* Breadcrumb */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs text-white/55 mb-5 flex-wrap">
            <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home size={12} /> Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1">
                <ChevronRight size={12} className="opacity-50" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Gold accent */}
        <div className="w-10 h-0.5 bg-gold rounded-full mb-5" />

        <h1 className="font-bold text-white leading-tight mb-4"
          style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
          {title}
        </h1>

        {subtitle && (
          <p className="text-white/70 max-w-2xl leading-relaxed"
            style={{ fontSize: "clamp(.9rem, 2vw, 1.05rem)" }}>
            {subtitle}
          </p>
        )}

        {children && <div className="mt-6">{children}</div>}
      </div>
    </div>
  );
}
