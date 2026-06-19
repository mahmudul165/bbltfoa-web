import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Bangladesh Tea Industry",
  description: "An overview of the Bangladesh tea industry — history, geography, production, trade, and the role of tea in the national economy.",
};

const regions = [
  {
    name: "Sylhet Division",
    area: "~36,000 ha",
    gardens: "90+",
    character: "High-grown, bold orthodox black teas; classic Sylheti flavour profile",
    districts: ["Sylhet", "Moulvibazar", "Habiganj", "Sunamganj"],
  },
  {
    name: "Chittagong Division",
    area: "~18,000 ha",
    gardens: "45+",
    character: "Lowland CTC teas with strong liquor; major processing hub at Chittagong auction",
    districts: ["Chittagong", "Rangamati", "Bandarban"],
  },
  {
    name: "Northern Flatlands",
    area: "~6,000 ha",
    gardens: "30+",
    character: "Flat-land cultivation; specialty and organic teas gaining traction",
    districts: ["Panchagarh", "Thakurgaon", "Dinajpur", "Rangpur"],
  },
];

const supplyChain = [
  { step: "01", title: "Cultivation", text: "Tea bushes planted and maintained across hillside and flatland estates; plucking every 7–14 days." },
  { step: "02", title: "Green Leaf Procurement", text: "Smallholder green leaf collected; quality graded at garden or bought-leaf factory gates." },
  { step: "03", title: "Factory Processing", text: "CTC or Orthodox process: withering, rolling/CTC, fermentation, drying, sorting, grading." },
  { step: "04", title: "Auction & Trade", text: "Finished tea sold at Chittagong Tea Auction or through direct/private sale to domestic and export buyers." },
  { step: "05", title: "Blending & Packaging", text: "Blenders create retail products; major brands blend and pack for domestic market or export." },
  { step: "06", title: "Export & Domestic", text: "Tea shipped to Russia, Pakistan, Poland, UAE, UK; remainder consumed domestically (~83%)." },
];

export default function TeaIndustryPage() {
  return (
    <>
      <PageHeader
        title="Bangladesh Tea Industry"
        subtitle="An overview of Bangladesh's bought leaf tea sector — its growers, member factories, regional footprint, and contribution to the national tea economy."
        breadcrumbs={[{ label: "Bangladesh Tea Industry" }]}
      />

      <section className="section-py bg-white">
        <div className="section-container">
          {/* Intro */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-gold mb-3">Heritage &amp; Scale</div>
              <h2 className="text-3xl font-bold text-foreground mb-5">A 170-Year Legacy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Commercial tea cultivation in Bangladesh dates to 1854, when the first experimental
                garden was established in Sylhet during the British colonial era. Today, the industry
                spans 167 registered gardens, over 59,000 hectares of cultivation, and produces more
                than 95 million kilograms of tea annually.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tea is Bangladesh's second-largest agricultural export and a major source of rural
                employment, directly supporting over 150,000 workers and their families — many of
                whom are third and fourth generation tea workers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Chittagong Tea Auction, established in 1949, remains the central price-discovery
                mechanism for Bangladeshi tea, with weekly auctions offering made tea to domestic
                blenders and international buyers.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "1854", label: "Year commercial cultivation began" },
                { value: "59,860", label: "Hectares under cultivation (2024)" },
                { value: "95.4M kg", label: "Annual production (2024)" },
                { value: "83%", label: "Domestic consumption share" },
                { value: "$28M", label: "Annual export earnings" },
                { value: "150K+", label: "Direct employment" },
              ].map((s) => (
                <div key={s.label} className="bg-tea-pale rounded-xl p-4 border border-border text-center">
                  <div className="text-xl font-bold text-tea-green">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Regions */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <div className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Geography</div>
              <h2 className="text-3xl font-bold text-foreground">Tea-Growing Regions</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {regions.map((region) => (
                <div key={region.name} className="rounded-xl border border-border bg-white card-hover p-6">
                  <div className="text-3xl mb-4">🗺️</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{region.name}</h3>
                  <div className="flex gap-4 text-sm mb-3">
                    <span className="text-muted-foreground">Area: <strong className="text-foreground">{region.area}</strong></span>
                    <span className="text-muted-foreground">Gardens: <strong className="text-foreground">{region.gardens}</strong></span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{region.character}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {region.districts.map((d) => (
                      <span key={d} className="text-xs bg-tea-pale text-tea-green px-2 py-0.5 rounded-full">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Supply chain */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <div className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Value Chain</div>
              <h2 className="text-3xl font-bold text-foreground">From Garden to Cup</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {supplyChain.map((step) => (
                <div key={step.step} className="flex gap-4 p-5 rounded-xl bg-muted border border-border">
                  <div className="text-2xl font-bold text-tea-green/30 font-mono shrink-0">{step.step}</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link href="/statistics" className="btn-primary inline-flex items-center gap-2">
              View Industry Statistics <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
