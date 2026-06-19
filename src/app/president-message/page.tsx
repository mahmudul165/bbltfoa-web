import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Quote } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "President's Message",
  description:
    "A message from the President of BBLTFOA, Md. Niaz Ali Chisty, on the state of Bangladesh's bought leaf tea industry.",
};

export default function PresidentMessagePage() {
  return (
    <>
      <PageHeader
        title="President's Message"
        subtitle="Message from Md. Niaz Ali Chisty, President, BBLTFOA (2026–2028)"
        breadcrumbs={[
          { label: "About BBLTFOA", href: "/about" },
          { label: "President's Message" },
        ]}
      />

      <section className="section-py bg-white">
        <div className="section-container max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* ── Portrait card ── */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-4">
                <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl">
                  {/* Decorative gradient frame behind portrait */}
                  <div className="gradient-hero p-1.5">
                    {/* President portrait */}
                    <div className="relative aspect-[4/5] bg-tea-pale overflow-hidden rounded-t-[1.35rem] group">
                      <Image
                        src="/president.jpg"
                        alt="Md. Niaz Ali Chisty, President of BBLTFOA"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Bottom gradient scrim */}
                      <div
                        className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
                        style={{ background: "linear-gradient(to top, hsl(148 60% 8%/.78), transparent)" }}
                        aria-hidden
                      />
                      {/* Floating name badge over photo */}
                      <div className="absolute bottom-3 left-3 right-3 text-center">
                        <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-white bg-gold/90 rounded-full px-3 py-1 shadow-lg">
                          President · 2026–2028
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white text-center">
                    <h2 className="text-lg font-bold text-foreground">Md. Niaz Ali Chisty</h2>
                    <p className="text-sm text-tea-green font-semibold mt-1">President, BBLTFOA</p>
                    <p className="text-xs text-muted-foreground mt-1">Term: 2026–2028</p>

                    <div className="mt-4 pt-4 border-t border-border space-y-1 text-left">
                      <p className="text-xs text-muted-foreground">Organization</p>
                      <p className="text-sm font-semibold text-foreground">
                        Morgen Tea Industries Limited
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Boyalimari, Jagdal, Panchagarh
                      </p>
                    </div>

                    <div className="mt-3 pt-3 border-t border-border flex justify-between text-xs text-muted-foreground">
                      <span>Voter No. 02</span>
                      <span>Elected uncontested</span>
                    </div>
                  </div>
                </div>

                {/* Signature note */}
                <div className="rounded-xl bg-tea-pale border border-border p-4 text-center">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Election:</strong> BBLTFOA Bi-ennial<br />
                    Election 2026–2028<br />
                    Elected: 04 April 2026
                  </p>
                </div>
              </div>
            </div>

            {/* ── Message ── */}
            <div className="lg:col-span-2">

              {/* Opening quote */}
              <div className="relative mb-8 pl-6">
                <Quote
                  size={44}
                  className="absolute -top-2 -left-1 text-tea-pale"
                  aria-hidden
                />
                <p className="text-lg font-semibold text-foreground leading-relaxed italic">
                  "Welcome to the official website of the Bangladesh Bought Leaf Tea Factory
                  Owners Association (BBLTFOA)."
                </p>
              </div>

              {/* Body */}
              <div className="space-y-5 text-muted-foreground leading-relaxed text-[15px]">
                <p>
                  It is my great pleasure to welcome you to our online platform, which has been
                  established to serve as a bridge among tea growers, factory owners, industry
                  stakeholders, policymakers, researchers, and tea enthusiasts both at home and
                  abroad.
                </p>

                <p>
                  The bought leaf tea sector has emerged as a vital contributor to the growth and
                  sustainability of Bangladesh's tea industry. Through the dedicated efforts of our
                  member factories and the thousands of small tea growers associated with them, this
                  sector plays a significant role in increasing national tea production, generating
                  employment, and improving rural livelihoods, particularly in the northern
                  tea-growing regions of the country.
                </p>

                <p>
                  As an association, we remain committed to promoting quality tea production,
                  sustainable agricultural practices, technological advancement, environmental
                  responsibility, and the welfare of all stakeholders connected with the bought leaf
                  tea industry. We actively engage with government agencies, regulatory authorities,
                  development partners, and industry organizations to address challenges and create
                  opportunities for sustainable growth.
                </p>

                <p>
                  This website has been developed to provide information about our activities,
                  member factories, industry developments, policies, publications, and initiatives.
                  We hope it will serve as a valuable resource for all those interested in the
                  advancement of Bangladesh's tea sector.
                </p>

                <p>
                  I sincerely thank our members, partners, and well-wishers for their continued
                  support and cooperation. Together, we can further strengthen the bought leaf tea
                  industry and contribute to the prosperity of Bangladesh's tea sector.
                </p>

                <p className="font-medium text-foreground">
                  Thank you for visiting our website.
                </p>
              </div>

              {/* Signature block */}
              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4 italic">With best regards,</p>
                <div className="flex items-end justify-between flex-wrap gap-6">
                  <div>
                    {/* Signature line */}
                    <div className="w-40 h-0.5 bg-border mb-3" />
                    <p className="text-xl font-bold text-foreground tracking-tight">
                      Md. Niaz Ali Chisty
                    </p>
                    <p className="text-sm font-semibold text-tea-green mt-1">President</p>
                    <p className="text-sm text-muted-foreground">
                      Bangladesh Bought Leaf Tea Factory Owners Association (BBLTFOA)
                    </p>
                  </div>

                  {/* Logo */}
                  <div className="opacity-60">
                    <Image
                      src="/logo.png"
                      alt="BBLTFOA"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
