import Link from "next/link";
import { ArrowRight, Leaf, Factory, TrendingUp, Globe } from "lucide-react";

const stages = [
  {
    Icon: Leaf,
    step: "01",
    title: "Hand Plucking",
    desc: "Skilled workers handpick only the finest two leaves and a bud from each tea shoot — the foundation of quality.",
    color: "from-emerald-600 to-tea-green",
    iconBg: "bg-emerald-50 text-emerald-700",
  },
  {
    Icon: Factory,
    step: "02",
    title: "Factory Processing",
    desc: "Green leaf is delivered to bought-leaf factories where it's withered, CTC-processed, fermented, and dried to perfection.",
    color: "from-tea-green to-tea-mid",
    iconBg: "bg-tea-pale text-tea-green",
  },
  {
    Icon: TrendingUp,
    step: "03",
    title: "Grading & Auction",
    desc: "Finished tea is graded, catalogued, and sold at the Chittagong Tea Auction — Bangladesh's primary price discovery mechanism.",
    color: "from-gold-dark to-gold",
    iconBg: "bg-gold-light text-gold-dark",
  },
  {
    Icon: Globe,
    step: "04",
    title: "Export & Domestic",
    desc: "Bangladesh tea reaches Russia, Pakistan, Poland, UAE, and 20+ markets — while 83% is enjoyed at home.",
    color: "from-tea-mid to-tea-light",
    iconBg: "bg-tea-pale text-tea-green",
  },
];

export function TeaHarvestSection() {
  return (
    <section className="section-py overflow-hidden bg-gradient-to-b from-tea-50/70 via-white to-white">
      <div className="section-container">

        {/* ── Header ── */}
        <div className="reveal text-center max-w-2xl mx-auto mb-14">
          <span className="section-label mb-3">Bangladesh Tea</span>
          <h2 className="mt-3 text-foreground mb-4">
            From Garden to Cup
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Bangladesh's bought leaf tea sector — from hand-plucking in the northern
            flatlands to factory processing, auction, and export to global markets.
          </p>
        </div>

        {/* ── Video + stages grid ── */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">

          {/* Featured video card — gold-framed, premium */}
          <div className="reveal-left">
            <div
              className="group relative rounded-3xl p-[2px] shadow-[0_24px_60px_-12px_hsl(145_52%_15%/.5)]"
              style={{ background: "linear-gradient(135deg, hsl(40 100% 56%) 0%, hsl(36 72% 36%) 50%, hsl(145 52% 22%) 100%)" }}
            >
              <div className="relative rounded-[1.4rem] overflow-hidden bg-tea-darkest">
                {/* Embedded autoplay tea-harvesting clip */}
                <video
                  className="w-full h-72 sm:h-80 lg:h-[26rem] object-cover bg-tea-darkest transition-transform duration-[6000ms] ease-in-out group-hover:scale-105"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/logo.png"
                  aria-label="Tea harvesting video clip"
                >
                  <source src="/tea-harvest.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Gradient overlay for legibility */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to top, hsl(148 60% 7%/.9) 0%, hsl(148 55% 10%/.25) 40%, transparent 65%)" }}
                  aria-hidden
                />

                {/* Top-right live badge */}
                <div className="absolute top-4 right-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white glass rounded-full px-3 py-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Live
                </div>

                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 pointer-events-none">
                  <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gold bg-tea-darkest/70 backdrop-blur-sm rounded-full px-3 py-1 mb-3">
                    Tea Harvest · Panchagarh
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                    Bangladesh Tea Harvesting
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm mt-1.5 max-w-md drop-shadow">
                    From hand-plucking the finest two leaves and a bud to the factory floor —
                    the journey of bought leaf tea.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick stats below video */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { value: "12,000+", label: "Smallholder Gardens", unit: "in northern BD" },
                { value: "30%", label: "National Output", unit: "from bought-leaf" },
                { value: "120+", label: "Member Factories", unit: "BBLTFOA registered" },
              ].map((s) => (
                <div key={s.label} className="reveal bg-tea-50 rounded-xl p-3 text-center border border-border">
                  <div className="text-lg font-bold text-tea-green leading-none">{s.value}</div>
                  <div className="text-[10px] text-foreground font-medium mt-1 leading-snug">{s.label}</div>
                  <div className="text-[9px] text-muted-foreground mt-0.5">{s.unit}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 4-stage journey */}
          <div className="reveal-right space-y-4">
            {stages.map(({ Icon, step, title, desc, iconBg }) => (
              <div
                key={step}
                className="group flex gap-4 p-5 rounded-2xl border border-border card-modern"
              >
                {/* Step number + icon */}
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                    <Icon size={20} />
                  </div>
                  <span className="text-[10px] font-bold text-muted-foreground tracking-widest">{step}</span>
                </div>
                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-foreground mb-1.5 group-hover:text-tea-green transition-colors">
                    {title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}

            {/* CTA */}
            <Link
              href="/tea-industry"
              className="flex items-center justify-center gap-2 py-3.5 rounded-2xl border-2 border-dashed border-tea-green/25 hover:border-tea-green/60 text-sm font-semibold text-tea-green hover:text-tea-dark transition-all duration-200"
            >
              Explore Bangladesh Tea Industry <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
