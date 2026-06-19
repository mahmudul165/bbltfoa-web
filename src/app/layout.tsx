import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/components/providers/query-provider";
import { ScrollReveal } from "@/components/providers/scroll-reveal";
import { PageLoader } from "@/components/ui/page-loader";
import { RouteProgress } from "@/components/ui/route-progress";
import { Toaster } from "sonner";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  weight: ["400", "500", "600", "700", "800"],
});

// Variable Fraunces — full weight range + optical sizing (opsz),
// softness (SOFT) and quirk (WONK) axes, plus true italics for editorial display type.
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

export const viewport: Viewport = {
  themeColor: "#0d3320",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "BBLTFOA — Bangladesh Bought Leaf Tea Factory Owners Association",
    template: "%s | BBLTFOA",
  },
  description:
    "Bangladesh Bought Leaf Tea Factory Owners Association (BBLTFOA) — the voice of Bangladesh's bought leaf tea industry since 1998. Representing 120+ member factories across Sylhet, Chittagong, and Panchagarh.",
  keywords: [
    "BBLTFOA",
    "Bangladesh bought leaf tea",
    "tea factory owners",
    "tea industry Bangladesh",
    "Sylhet tea",
    "bbltfoa.org.bd",
  ],
  authors: [{ name: "BBLTFOA Secretariat" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "BBLTFOA",
    locale: "en_BD",
    title: "BBLTFOA — Bangladesh Bought Leaf Tea Factory Owners Association",
    description:
      "The voice of Bangladesh's bought leaf tea industry since 1998. Representing 120+ member factories.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        {/* Preconnect for font performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="flex flex-col min-h-screen antialiased font-sans">
        <QueryProvider>
          {/* Splash screen loader — shows once per session */}
          <PageLoader />
          {/* Thin gold top bar on route changes */}
          <RouteProgress />
          {/* Scroll reveal observer */}
          <ScrollReveal />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster richColors position="top-right" />
        </QueryProvider>
      </body>
    </html>
  );
}
