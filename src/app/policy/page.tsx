import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { policyDocuments } from "@/data/mock-data";
import { formatDate } from "@/lib/utils";
import { Download, ExternalLink, Scale, CheckCircle, Clock, Archive } from "lucide-react";

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
