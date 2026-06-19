import Link from "next/link";
import Image from "next/image";
import { Scale, Leaf, BookOpen, Handshake, ArrowRight, Factory, Users, Calendar, TrendingUp } from "lucide-react";
import { CountUp } from "@/components/ui/count-up";

const pillars = [
  {
    Icon: Leaf,
    title: "Quality & Standards",
    description:
      "We help member factories raise the quality of their tea and farm responsibly, with real attention to food safety, GMP, hygiene, and the land they depend on.",
    href: "/about",
    accent: "text-tea-green",
    iconBg: "bg-tea-pale",
  },
  {
    Icon: Handshake,
    title: "Membership Benefits",
    description:
      "We represent our members, run training, push for fair leaf prices, and look after the growers and workers behind their factories.",
    href: "/members",
    accent: "text-gold-dark",
    iconBg: "bg-gold-light",
  },
  {
    Icon: Scale,
    title: "Policy Advocacy",
    description:
      "We work with government, the Bangladesh Tea Board, regulators, and development partners to tackle the sector's problems and give the bought leaf segment room to grow.",
    href: "/policy",
    accent: "text-tea-green",
    iconBg: "bg-tea-pale",
  },
  {
    Icon: BookOpen,
    title: "Research & Knowledge",
    description:
      "We publish bulletins, handbooks, and research so members and others can keep up with the trade and learn what works.",
    href: "/publications",
    accent: "text-gold-dark",
    iconBg: "bg-gold-light",
  },
];

const aboutStats = [
  { value: "15+",    label: "Years of Service",    Icon: Calendar  },
  { value: "30+",    label: "Member Factories",    Icon: Factory   },
  { value: "1,200+", label: "Smallholder Gardens", Icon: Leaf      },
  { value: "5%",     label: "National Output",     Icon: TrendingUp},
];

export function MissionSection() {
  return (
    <section className="section-py bg-white">
      <div className="section-container">

        {/* About strip */}
        <div className="group/card relative rounded-[1.75rem] border border-border overflow-hidden bg-white shadow-[0_10px_50px_-20px_hsl(132_50%_20%/.25)]">
          {/* Top gradient accent line */}
          <div aria-hidden className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-tea-green via-gold to-tea-green opacity-80" />

          {/* Top — text + tea GIF visual */}
          <div className="grid lg:grid-cols-12 items-stretch">

            {/* Text */}
            <div className="reveal-left lg:col-span-7 p-8 sm:p-10 lg:p-14 xl:p-16 flex flex-col justify-center">
              <span className="section-label mb-5">About BBLTFOA</span>
              <h3 className="text-foreground mb-6 leading-tight max-w-xl text-balance">
                The collective voice of Bangladesh&rsquo;s bought leaf tea sector
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4 max-w-prose">
                The Bangladesh Bought Leaf Tea Factory Owners Association (BBLTFOA) represents the
                factory owners who process tea grown by independent smallholders across the country.
                Our members buy green leaf from thousands of small farmers and turn it into made
                tea — together forming a supply chain that has expanded quickly over the last two decades.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-prose">
                We work to improve tea quality, encourage sustainable farming, support better
                processing technology, and look after everyone connected to the sector — engaging
                government, regulators, and development partners to open up room for growth.
              </p>
              <Link href="/about" className="btn-primary self-start group/btn">
                Learn More
                <ArrowRight size={15} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
              </Link>
            </div>

            {/* Tea animation visual — warm cozy panel */}
            <div
              className="reveal-right lg:col-span-5 relative flex items-center justify-center p-10 sm:p-12 overflow-hidden min-h-[300px] sm:min-h-[360px] lg:min-h-0 border-t lg:border-t-0 lg:border-l border-border"
              style={{ background: "linear-gradient(155deg, hsl(40 64% 98%) 0%, hsl(33 54% 92%) 52%, hsl(27 48% 87%) 100%)" }}
            >
              {/* soft warm glow (pulses gently) */}
              <div className="absolute w-[19rem] h-[19rem] rounded-full pointer-events-none animate-pulse-glow" aria-hidden
                style={{ background: "radial-gradient(circle, hsl(38 80% 70%/.4) 0%, transparent 70%)" }} />
              <div aria-hidden className="absolute -left-16 -top-16 w-64 h-64 rounded-full opacity-40 pointer-events-none"
                style={{ background: "radial-gradient(circle, hsl(40 70% 85%) 0%, transparent 70%)" }} />
              <div aria-hidden className="absolute inset-0 bg-dots opacity-[.04] pointer-events-none" />

              {/* Drifting tea leaves */}
              <Leaf aria-hidden className="absolute top-8 left-8 text-tea-green/25 animate-float" size={26} style={{ animationDelay: ".2s" }} />
              <Leaf aria-hidden className="absolute bottom-12 right-10 text-tea-green/20 animate-float-slow -rotate-45" size={20} style={{ animationDelay: "1.1s" }} />
              <Leaf aria-hidden className="absolute top-1/2 right-7 text-gold/30 animate-float rotate-12" size={16} style={{ animationDelay: ".7s" }} />

              {/* Animated tea GIF medallion */}
              <div className="relative">
                {/* Outer rotating dashed ring with orbiting dot */}
                <div aria-hidden className="absolute -inset-5 rounded-full border-2 border-dashed border-tea-green/20 animate-spin-slow">
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold shadow-[0_0_10px_hsl(38_88%_50%/.7)]" />
                </div>
                {/* Inner counter-rotating ring with orbiting dot */}
                <div aria-hidden className="absolute -inset-1.5 rounded-full border border-gold/25 animate-spin-slow-rev">
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-tea-green" />
                </div>

                {/* Medallion */}
                <div
                  className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-[17rem] lg:h-[17rem] rounded-full overflow-hidden ring-1 ring-white shadow-[0_30px_80px_-24px_hsl(28_45%_26%/.55)] transition-transform duration-500 group-hover/card:scale-[1.04]"
                  style={{ background: "radial-gradient(circle at 50% 38%, #ffffff 0%, hsl(40 50% 97%) 60%, hsl(34 44% 93%) 100%)" }}
                >
                  <Image
                    src="/common/loader-3.gif"
                    alt="A freshly brewed cup of tea with rising steam"
                    width={320}
                    height={320}
                    unoptimized
                    priority
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Floating caption pill */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 badge bg-white text-gold-dark shadow-lg whitespace-nowrap text-[11px] font-semibold ring-1 ring-gold/15">
                  <span className="w-1.5 h-1.5 rounded-full bg-tea-green" />
                  Freshly brewed since 1998
                </div>
              </div>
            </div>
          </div>

          {/* Bottom — stats bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-border divide-x divide-y lg:divide-y-0 divide-border bg-tea-50/40">
            {aboutStats.map(({ value, label, Icon }, i) => (
              <div
                key={label}
                data-delay={String(i * 90)}
                className="reveal relative p-6 sm:p-7 lg:p-8 flex flex-col items-center justify-center text-center hover:bg-white transition-colors duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-tea-pale flex items-center justify-center text-tea-green mb-3 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-tea-green group-hover:text-white group-hover:shadow-lg group-hover:shadow-tea-green/25">
                  <Icon size={18} />
                </div>
                <CountUp
                  value={value}
                  className="block text-2xl sm:text-3xl font-bold text-tea-green mb-1.5 transition-transform duration-300 group-hover:scale-110 nums-tabular"
                />
                {/* Animated gold underline */}
                <span className="block h-0.5 w-0 group-hover:w-8 bg-gold rounded-full mb-2 transition-all duration-300" aria-hidden />
                <div className="text-[11px] sm:text-xs text-muted-foreground font-semibold uppercase tracking-wider leading-snug">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Header */}
        <div className="reveal text-center max-w-2xl mx-auto mt-24 mb-16">
          <span className="section-label mb-4">Our Mission</span>
          <h2 className="mt-4 text-foreground mb-4">What We Stand For</h2>
          <p className="text-muted-foreground leading-relaxed">
            Since 1998, BBLTFOA has championed the interests of Bangladesh's bought leaf
            tea factory owners through four strategic pillars.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map(({ Icon, title, description, href, accent, iconBg }, i) => (
            <Link
              key={title}
              href={href}
              className="reveal group card-modern rounded-2xl p-6 flex flex-col"
              data-delay={String(i * 70)}
            >
              <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-5 ${accent} transition-transform duration-300 group-hover:scale-110`}>
                <Icon size={22} />
              </div>
              <h3 className="text-base font-bold text-foreground mb-3 group-hover:text-tea-green transition-colors">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{description}</p>
              <div className={`mt-5 text-sm font-semibold ${accent} flex items-center gap-1.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200`}>
                Learn more <ArrowRight size={13} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
