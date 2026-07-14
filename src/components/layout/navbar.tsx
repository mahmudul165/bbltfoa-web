"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, Mail, ChevronDown, ExternalLink } from "lucide-react";
import { navItems } from "@/data/mock-data";
import type { NavItem } from "@/types/bbtfoa";

/* Concise labels for the desktop bar (dropdowns keep full names) */
const barLabels: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/president-message": "President's Message",
  "/executive-committee": "Executive Committee",
  "/members": "Member Directory",
  "/tea-industry": "Bangladesh Tea Industry",
  "/statistics": "Statistics & Reports",
  "/activities": "Activities",
  "/news": "News & Media",
  "/policy": "Policy Advocacy",
  "/events": "Events & Training",
  "/publications": "Publications",
  "/gallery": "Gallery",
  "/contact": "Contact",
};

function Dropdown({ items, open }: { items: NavItem[]; open: boolean }) {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 rounded-2xl overflow-hidden shadow-xl border border-border bg-white z-50 transition-all duration-200 origin-top ${
        open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
      }`}
      style={{ boxShadow: "0 20px 48px -6px rgb(0 0 0/.18), 0 4px 16px -4px rgb(0 0 0/.12)" }}
    >
      {items.map((item, i) => (
        <Link
          key={item.href}
          href={item.href}
          className={`flex items-center gap-3 px-5 py-3.5 text-sm font-medium text-foreground hover:bg-tea-pale hover:text-tea-green transition-colors group ${
            i < items.length - 1 ? "border-b border-border/60" : ""
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold opacity-60 group-hover:opacity-100 transition-opacity" />
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "shadow-[0_4px_24px_-4px_rgb(0_0_0/.15)]" : ""
      }`}
    >
      {/* ── Top utility bar ─────────────────────────────────────────── */}
      <div className="bg-tea-darkest text-white hidden md:block border-b border-white/5">
        <div className="section-container flex items-center justify-between h-9">
          <span className="flex items-center gap-2 text-[11px] tracking-wide text-white/55">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold" />
            Official website of BBLTFOA &mdash; Established 1998
          </span>
          <div className="flex items-center text-[11px] text-white/65 divide-x divide-white/10">
            <a href="tel:+88024881063" className="flex items-center gap-1.5 px-4 first:pl-0 hover:text-gold transition-colors duration-150">
              <Phone size={11} className="text-gold/80" /> +880 2 4881 0638
            </a>
            <a href="mailto:bbltfoanb@gmail.com" className="flex items-center gap-1.5 px-4 hover:text-gold transition-colors duration-150">
              <Mail size={11} className="text-gold/80" /> bbltfoanb@gmail.com
            </a>
            <a href="https://bbltfoa.org.bd" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-4 last:pr-0 hover:text-gold transition-colors duration-150">
              <ExternalLink size={10} className="text-gold/80" /> bbltfoa.org.bd
            </a>
          </div>
        </div>
      </div>

      {/* ── Logo bar ─────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-border/70">
        <div className="section-container flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-3.5 group shrink-0">
            {/* Logo image */}
            <div className="w-12 h-12 shrink-0 group-hover:scale-105 transition-transform duration-200 drop-shadow-md">
              <Image
                src="/logo.png"
                alt="BBLTFOA Logo"
                width={48}
                height={48}
                priority
                className="w-full h-full object-contain"
              />
            </div>
            {/* Divider */}
            <span className="hidden sm:block w-px h-9 bg-border" aria-hidden />
            <div className="leading-none">
              <div className="text-xl font-extrabold text-tea-green tracking-tight">
                BBLTFOA
              </div>
              <div className="text-[11px] text-muted-foreground mt-1 hidden sm:block whitespace-nowrap">
                Bangladesh Bought Leaf Tea Factory Owners Association
              </div>
            </div>
          </Link>

          {/* Mobile toggle */}
          <button
            className="xl:hidden p-2 rounded-xl text-tea-green hover:bg-tea-pale transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span className={`block transition-transform duration-200 ${mobileOpen ? "rotate-90" : ""}`}>
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </span>
          </button>
        </div>
      </div>

      {/* ── Desktop nav ──────────────────────────────────────────────── */}
      <nav className="hidden xl:block bg-tea-green">
        <div className="section-container">
          <ul className="flex items-stretch justify-between gap-x-0.5">
            {navItems.map((item) => (
              <li key={item.href} className="relative">
                {item.children ? (
                  <>
                    <button
                      onMouseEnter={() => setOpenDropdown(item.href)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      onClick={() => setOpenDropdown(openDropdown === item.href ? null : item.href)}
                      className={`flex items-center justify-center gap-0.5 px-1.5 py-3.5 text-[11px] font-medium tracking-tight transition-colors duration-150 whitespace-nowrap border-b-2 rounded-t-md ${
                        isActive(item.href)
                          ? "bg-white/10 text-white border-gold"
                          : "text-white/80 hover:text-white hover:bg-white/5 border-transparent"
                      }`}
                    >
                      {barLabels[item.href] ?? item.label}
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-200 ${openDropdown === item.href ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      onMouseEnter={() => setOpenDropdown(item.href)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <Dropdown items={item.children} open={openDropdown === item.href} />
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center justify-center px-1.5 py-3.5 text-[11px] font-medium tracking-tight transition-colors duration-150 whitespace-nowrap border-b-2 rounded-t-md ${
                      isActive(item.href)
                        ? "bg-white/10 text-white border-gold"
                        : "text-white/80 hover:text-white hover:bg-white/5 border-transparent"
                    }`}
                  >
                    {barLabels[item.href] ?? item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── Mobile nav ───────────────────────────────────────────────── */}
      <div
        className={`xl:hidden bg-white border-t border-border overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[960px]" : "max-h-0"
        }`}
      >
        <nav className="section-container py-4 space-y-1">
          {navItems.map((item) => (
            <div key={item.href}>
              {item.children ? (
                <>
                  <button
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      isActive(item.href) ? "bg-tea-pale text-tea-green" : "text-foreground hover:bg-muted"
                    }`}
                    onClick={() => setMobileExpanded(mobileExpanded === item.href ? null : item.href)}
                  >
                    {item.label}
                    <ChevronDown size={16} className={`transition-transform duration-200 ${mobileExpanded === item.href ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`ml-4 mt-1 space-y-0.5 overflow-hidden transition-all duration-200 ${mobileExpanded === item.href ? "max-h-60" : "max-h-0"}`}>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-tea-green hover:bg-tea-pale transition-colors"
                      >
                        <span className="w-1 h-1 rounded-full bg-gold/60" />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive(item.href)
                      ? "bg-tea-pale text-tea-green border-l-4 border-tea-green pl-3"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          <div className="pt-4 border-t border-border space-y-2 text-sm text-muted-foreground">
            <a href="tel:+88024881063" className="flex items-center gap-2 hover:text-tea-green px-1 transition-colors">
              <Phone size={14} /> +880 2 4881 0638
            </a>
            <a href="mailto:bbltfoanb@gmail.com" className="flex items-center gap-2 hover:text-tea-green px-1 transition-colors">
              <Mail size={14} /> bbltfoanb@gmail.com
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
