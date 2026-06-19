import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Target, Eye, Heart, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About BBLTFOA",
  description:
    "Learn about the Bangladesh Bought Leaf Tea Factory Owners Association — our history since 1998, mission, vision, and role in the Bangladesh tea industry.",
};

const objectives = [
  "Represent and protect bought leaf tea factory owners across Bangladesh.",
  "Work with the Bangladesh Tea Board, the Ministry of Commerce, and other government agencies.",
  "Press for fair green leaf prices and reliable market access for members.",
  "Encourage sustainable, environmentally responsible tea processing.",
  "Provide welfare support and help resolve disputes between member factories.",
  "Build ties and share knowledge with partners abroad.",
  "Support member factories in adopting Good Manufacturing Practices (GMP).",
  "Uphold labour laws and protect the people who work in the industry.",
];

const milestones = [
  { year: "1998", event: "BBLTFOA founded by pioneering factory owners in Sreemangal, Moulvibazar" },
  { year: "2004", event: "Registered as a non-profit organisation; formally recognised by Bangladesh Tea Board" },
  { year: "2008", event: "Launched structured smallholder garden partnership programme" },
  { year: "2012", event: "Membership expanded — 80+ factories across Sylhet and Chittagong regions" },
  { year: "2015", event: "Panchagarh and Thakurgaon region factories admitted; geographic coverage broadened" },
  { year: "2018", event: "Recognised as the national voice of the bought leaf tea segment" },
  { year: "2022", event: "Launched digital circulars and notice board for members" },
  { year: "2026", event: "1,200+ smallholder gardens partnered with member factories across the north" },
];

const coverage = [
  "Panchagarh", "Thakurgaon", "Rangpur", "Chattogram",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About BBLTFOA"
        subtitle="BANGLADESH BOUGHT LEAF TEA FACTORY OWNERS ASSOCIATION (BBLTFOA)"
        breadcrumbs={[{ label: "About BBLTFOA" }]}
      />

      <section className="section-py bg-white">
        <div className="section-container">

          {/* Who we are */}
          <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
            <div className="reveal-left">
              <div className="text-xs font-bold uppercase tracking-widest text-gold mb-3">Who We Are</div>
              <h2 className="text-3xl font-bold text-foreground mb-5">
                Uniting Bought Leaf Tea Factory Owners Across Bangladesh
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Bangladesh Bought Leaf Tea Factory Owners Association (BBLTFOA) represents the
                factory owners who process tea grown by independent smallholders across the country.
                With <strong className="text-foreground">30+ registered member factories</strong>,
                BBLTFOA is the primary institutional voice of the country's bought leaf tea
                processing segment.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Across the tea gardens of Panchagarh and Thakurgaon, our member factories
                collectively process a significant share of Bangladesh's tea output — supporting
                over <strong className="text-foreground">1 lakh direct livelihoods</strong> and
                <strong className="text-foreground"> 1,200+ smallholder garden operators</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                BBLTFOA engages with the Bangladesh Tea Board, Ministry of Commerce, labour
                authorities, and international trade bodies to advocate for fair leaf pricing,
                industry-friendly policies, and sustainable development.
              </p>
            </div>

            <div className="reveal-right grid grid-cols-2 gap-4">
              {[
                { icon: Target, title: "Our Mission", text: "Unite and advocate for factory owners while promoting excellence, fairness, and sustainability across the entire tea value chain.", color: "text-tea-green bg-tea-pale" },
                { icon: Eye, title: "Our Vision", text: "A thriving, sustainable Bangladesh tea industry — recognised globally for quality, integrity, and the prosperity it brings to growers, workers, and factories alike.", color: "text-gold bg-gold-light" },
                { icon: Heart, title: "Our Values", text: "Integrity, collaboration, fairness, transparency, sustainability, and commitment to our members and communities.", color: "text-tea-green bg-tea-pale" },
                { icon: Globe, title: "Our Reach", text: "30+ member factories across Panchagarh, Thakurgaon, and Chittagong — serving 1,200+ smallholder gardens.", color: "text-gold bg-gold-light" },
              ].map(({ icon: Icon, title, text, color }) => (
                <div key={title} className="rounded-xl border border-border p-5 card-hover bg-white">
                  <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center mb-4`}>
                    <Icon size={20} />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Geographic coverage */}
          <div className="reveal mb-20 p-8 rounded-2xl bg-tea-pale border border-border">
            <div className="text-center mb-8">
              <div className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Geographic Coverage</div>
              <h3 className="text-2xl font-bold text-foreground">Districts We Serve</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {coverage.map((d) => (
                <span key={d} className="inline-flex items-center gap-1.5 bg-white border border-border rounded-full px-4 py-2 text-sm font-medium text-foreground shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-tea-green" />{d}
                </span>
              ))}
            </div>
          </div>

          {/* Objectives */}
          <div className="mb-20">
            <div className="reveal text-center mb-10">
              <div className="text-xs font-bold uppercase tracking-widest text-gold mb-2">What We Do</div>
              <h2 className="text-3xl font-bold text-foreground">Key Objectives</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger">
              {objectives.map((obj, i) => (
                <div key={i} className="reveal flex gap-3 p-4 bg-tea-pale rounded-xl border border-border hover:bg-white hover:shadow-sm transition-all duration-200">
                  <CheckCircle2 size={18} className="text-tea-green shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground leading-snug">{obj}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <div className="reveal text-center mb-10">
              <div className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Our Journey</div>
              <h2 className="text-3xl font-bold text-foreground">Key Milestones</h2>
            </div>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-[4.5rem] top-0 bottom-0 w-0.5 bg-border hidden sm:block" />
              <div className="space-y-6">
                {milestones.map((m, i) => (
                  <div key={m.year} className="reveal flex gap-6 items-start" data-delay={`${i * 80}`}>
                    <div className="w-14 shrink-0 text-right pt-0.5">
                      <span className="text-sm font-bold text-tea-green">{m.year}</span>
                    </div>
                    <div className="relative hidden sm:flex items-center justify-center shrink-0 mt-1">
                      <div className="w-4 h-4 rounded-full bg-tea-green border-2 border-white shadow-sm ring-2 ring-tea-pale" />
                    </div>
                    <div className="flex-1 pb-2 bg-white rounded-lg border border-border p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                      <p className="text-sm text-foreground leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 text-center reveal">
            <Link href="/executive-committee" className="btn-primary inline-flex items-center gap-2">
              Meet the Executive Committee <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
