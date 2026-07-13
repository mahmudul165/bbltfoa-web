import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { policyDocuments } from "@/data/mock-data";
import { formatDate } from "@/lib/utils";
import { Download, ExternalLink, Scale, CheckCircle, Clock, Archive, Percent, Sprout, Cog, Globe, FileText, Calendar, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Policy Advocacy",
  description: "BBLTFOA's policy advocacy work — proposals, adopted policies, and ongoing submissions to the Bangladesh government and regulatory bodies.",
};

const statusConfig: Record<string, { label: string; color: string; icon: ReactNode }> = {
  adopted: { label: "Adopted", color: "bg-green-50 text-green-700", icon: <CheckCircle size={13} /> },
  proposed: { label: "Proposed", color: "bg-gold-light text-gold-dark", icon: <Scale size={13} /> },
  "under-review": { label: "Under Review", color: "bg-blue-50 text-blue-700", icon: <Clock size={13} /> },
  archived: { label: "Archived", color: "bg-muted text-muted-foreground", icon: <Archive size={13} /> },
};

const focusAreas = [
  { icon: "💰", title: "Export Incentives", text: "Advocating for enhanced cash incentives, duty drawbacks, and VAT exemptions for tea exporters." },
  { icon: "👷", title: "Labour Welfare", text: "Collaborating with government to improve tea worker wages, housing, healthcare, and social protection." },
  { icon: "🌱", title: "Environmental Standards", text: "Setting industry benchmarks for sustainable land use, water management, and chemical reduction." },
  { icon: "💰", title: "Subsidy & Credit Access", text: "Securing subsidised fertiliser, soft credit lines, and replanting grants for member gardens." },
  { icon: "📊", title: "Market Regulation", text: "Engaging with Chittagong Tea Auction to ensure transparent price discovery and fair practices." },
  { icon: "🌍", title: "International Trade", text: "Representing Bangladesh tea at international forums to expand market access and brand image." },
];

/* Strategy-paper recommendations submitted to the Tea Industry Task Force
   (Ref: TASK/BBTFOA/07-01, 3 July 2026). Content rewritten for web readability. */
const recommendations = [
  {
    n: "01",
    icon: Percent,
    tag: "Taxation",
    title: "Reduce VAT on Tea from 15% to 5%",
    issue:
      "The current 15% VAT has unintentionally fuelled border smuggling and unreported factory-gate sales. A large share of production goes unrecorded — distorting production data, eroding government revenue, and creating unfair competition.",
    actions: [
      "Cut VAT on tea from 15% to 5% to improve transparency, lift tax compliance, and strengthen the formal tea market.",
    ],
    stat: { from: "15%", connector: "→", to: "5%", label: "Proposed VAT rate" },
  },
  {
    n: "02",
    icon: Sprout,
    tag: "Extension & Monitoring",
    title: "Strengthen Technical Support for Northern Growers",
    issue:
      "Limited field-level monitoring has led many northern growers to over-apply fertilisers, pesticides, and growth regulators — raising costs while harming leaf quality and long-term soil health.",
    actions: [
      "Significantly expand Bangladesh Tea Board manpower in Panchagarh.",
      "Establish a permanent, fully functional regional Tea Board office in Panchagarh for continuous technical support, monitoring, and extension services.",
    ],
    stat: null,
  },
  {
    n: "03",
    icon: Cog,
    tag: "Modernisation",
    title: "Mechanisation & Renewable Energy Support",
    issue:
      "Labour shortages — most acute across the Sylhet and Sreemangal estates — have become one of the industry's biggest operational constraints.",
    actions: [
      "Introduce modern tea-plucking machines to reduce reliance on manual labour and improve efficiency.",
      "Allocate fertiliser support to northern growers to lower production costs.",
      "Provide easy-term, low-interest financing for factories to install solar power — cutting operating costs and enabling sustainable production.",
    ],
    stat: null,
  },
  {
    n: "04",
    icon: Globe,
    tag: "Trade & Exports",
    title: "Promote Tea Exports to Pakistan",
    issue:
      "Bangladesh–Pakistan trade is heavily imbalanced — roughly USD 72M in exports against USD 750M in imports. Tea offers a strong opportunity to help close that gap.",
    actions: [
      "Open bilateral discussions with Pakistan to reduce or exempt import duties on Bangladeshi tea under a preferential trade arrangement — making it more competitive and lifting national export earnings.",
    ],
    stat: { from: "$72M", connector: "vs", to: "$750M", label: "Exports vs. imports" },
  },
];

export default function PolicyPage() {
  return (
    <>
      <PageHeader
        title="Policy Advocacy"
        subtitle="BBLTFOA's work at the policy table — advocating for the tea industry before government, regulators, and international bodies."
        breadcrumbs={[{ label: "Policy Advocacy" }]}
      />

      <section className="section-py bg-white">
        <div className="section-container">
          {/* Focus areas */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <div className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Priority Areas</div>
              <h2 className="text-3xl font-bold text-foreground">Our Policy Focus</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {focusAreas.map((area) => (
                <div key={area.title} className="flex gap-4 p-5 rounded-xl bg-tea-pale border border-border card-hover">
                  <div className="text-2xl shrink-0">{area.icon}</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">{area.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{area.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strategy-paper recommendations */}
          <div className="mb-20">
            <div className="text-center mb-4">
              <div className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Latest Submission</div>
              <h2 className="text-3xl font-bold text-foreground">Tea Industry Strategy Recommendations</h2>
            </div>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-7 leading-relaxed">
              Submitted by BBLTFOA to the Tea Industry Task Force on Strategy Formulation,
              these four measures aim to strengthen the sustainable development and
              competitiveness of Bangladesh&rsquo;s tea industry — with particular focus on
              the northern tea-growing region.
            </p>

            {/* Submission meta */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-tea-text bg-tea-pale border border-tea-green/10 rounded-full px-3 py-1.5">
                <FileText size={13} className="text-tea-green" /> Ref: TASK/BBTFOA/07-01
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-tea-text bg-tea-pale border border-tea-green/10 rounded-full px-3 py-1.5">
                <Calendar size={13} className="text-tea-green" /> {formatDate("2026-07-03")}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-tea-text bg-tea-pale border border-tea-green/10 rounded-full px-3 py-1.5">
                <Send size={13} className="text-tea-green" /> Tea Industry Task Force
              </span>
            </div>

            {/* Recommendation cards */}
            <div className="grid lg:grid-cols-2 gap-5">
              {recommendations.map((rec, i) => (
                <article
                  key={rec.n}
                  className="relative bg-white rounded-2xl border border-border p-6 sm:p-7 overflow-hidden card-modern reveal"
                  data-delay={i * 90}
                >
                  {/* Watermark numeral */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-3 right-3 font-serif font-semibold text-[5.5rem] leading-none text-tea-green/[0.06] select-none"
                  >
                    {rec.n}
                  </span>

                  <div className="relative flex items-start gap-4">
                    <span className="w-12 h-12 shrink-0 rounded-xl bg-tea-pale text-tea-green flex items-center justify-center">
                      <rec.icon size={22} aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-gold-dark bg-gold-light rounded-full px-2.5 py-1 mb-2">
                        {rec.tag}
                      </span>
                      <h3 className="text-lg font-bold text-foreground leading-snug">{rec.title}</h3>
                    </div>
                  </div>

                  <p className="relative mt-4 text-sm text-muted-foreground leading-relaxed">{rec.issue}</p>

                  <div className="relative mt-4 pt-4 border-t border-border/70">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-tea-text mb-3">
                      Our Recommendation
                    </p>
                    <ul className="space-y-2.5">
                      {rec.actions.map((action) => (
                        <li key={action} className="flex items-start gap-2.5">
                          <CheckCircle size={16} className="text-tea-green shrink-0 mt-0.5" aria-hidden />
                          <span className="text-sm text-foreground leading-relaxed">{action}</span>
                        </li>
                      ))}
                    </ul>

                    {rec.stat && (
                      <div className="mt-4 inline-flex items-center gap-3 rounded-xl bg-tea-pale/70 border border-tea-green/10 px-4 py-2.5">
                        <span className="flex items-baseline gap-2 font-bold text-tea-text nums-tabular">
                          <span className="text-lg">{rec.stat.from}</span>
                          <span className="text-xs font-semibold text-muted-foreground">{rec.stat.connector}</span>
                          <span className="text-lg">{rec.stat.to}</span>
                        </span>
                        <span className="text-[11px] font-medium text-muted-foreground leading-tight">
                          {rec.stat.label}
                        </span>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {/* Attribution */}
            <div className="mt-8 flex items-center justify-center gap-3 text-sm">
              <span className="w-8 h-px bg-border" />
              <span className="text-muted-foreground">
                Submitted by{" "}
                <span className="font-semibold text-tea-text">Md. Niaz Ali Chishty</span>, President, BBLTFOA
              </span>
              <span className="w-8 h-px bg-border" />
            </div>
          </div>

          {/* Policy documents */}
          <div>
            <div className="text-center mb-10">
              <div className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Documents</div>
              <h2 className="text-3xl font-bold text-foreground">Policy Documents & Submissions</h2>
            </div>

            <div className="space-y-4">
              {policyDocuments.map((doc) => {
                const status = statusConfig[doc.status];
                return (
                  <div
                    key={doc.id}
                    className="bg-white rounded-xl border border-border p-6 card-hover"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${status.color}`}>
                            {status.icon} {status.label}
                          </span>
                          <span className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-full">
                            {doc.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{doc.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-2">{doc.description}</p>
                        <p className="text-xs text-muted-foreground">{formatDate(doc.date)}</p>
                      </div>
                      {doc.fileUrl ? (
                        <a
                          href={doc.fileUrl}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-tea-green hover:text-tea-dark transition-colors shrink-0 border border-tea-green/30 hover:border-tea-green px-4 py-2 rounded-lg"
                        >
                          <Download size={15} /> Download
                        </a>
                      ) : (
                        <button
                          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground border border-border px-4 py-2 rounded-lg cursor-not-allowed"
                          disabled
                        >
                          <ExternalLink size={15} /> Restricted
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Engagement CTA */}
          <div className="mt-14 rounded-2xl gradient-tea text-white p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Have a Policy Concern?</h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              BBLTFOA members can submit policy issues to the Advocacy Committee for
              collective representation before relevant authorities.
            </p>
            <a href="/contact" className="btn-gold inline-block">
              Submit a Policy Issue
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
