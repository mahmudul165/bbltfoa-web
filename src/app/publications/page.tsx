import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { publications } from "@/data/mock-data";
import { Download, FileText, Newspaper, Book, FileSpreadsheet } from "lucide-react";
import type { Publication } from "@/types/bbtfoa";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Download BBLTFOA's reports, bulletins, and handbooks on Bangladesh's bought leaf tea sector.",
};

const typeConfig: Record<string, { label: string; icon: ReactNode; color: string }> = {
  report:     { label: "Report",   icon: <FileText size={15} />,        color: "text-tea-green bg-tea-pale" },
  bulletin:   { label: "Bulletin", icon: <Newspaper size={15} />,       color: "text-gold-dark bg-gold-light" },
  handbook:   { label: "Handbook", icon: <Book size={15} />,            color: "text-blue-700 bg-blue-50" },
  newsletter: { label: "Guide",    icon: <FileSpreadsheet size={15} />, color: "text-purple-700 bg-purple-50" },
  journal:    { label: "Journal",  icon: <Book size={15} />,            color: "text-orange-700 bg-orange-50" },
};

function PublicationCard({ pub }: { pub: Publication }) {
  const config = typeConfig[pub.type] ?? typeConfig.report;
  return (
    <div className="group card-modern rounded-2xl p-6 flex gap-5">
      {/* PDF icon */}
      <div className={`w-14 h-16 shrink-0 rounded-lg flex flex-col items-center justify-center gap-1 ${config.color}`}>
        {config.icon}
        <span className="text-[8px] font-bold tracking-widest opacity-70">PDF</span>
      </div>

      {/* Details */}
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1.5">
          <span className={`badge ${config.color}`}>{config.label}</span>
          <span className="text-xs text-muted-foreground">
            {pub.month ? `${pub.month} ${pub.year}` : pub.year}
          </span>
        </div>
        <h3 className="font-bold text-foreground leading-snug mb-2 group-hover:text-tea-green transition-colors">
          {pub.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{pub.description}</p>
        <div className="mt-4 flex items-center justify-between">
          {pub.fileSize && <span className="text-xs text-muted-foreground">PDF · {pub.fileSize}</span>}
          <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-tea-green hover:text-tea-dark transition-colors ml-auto">
            <Download size={15} /> Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PublicationsPage() {
  return (
    <>
      <PageHeader
        title="Publications"
        subtitle="Reports, bulletins, and handbooks from BBLTFOA on Bangladesh's bought leaf tea sector."
        breadcrumbs={[{ label: "Publications" }]}
      />

      <section className="section-py bg-muted">
        <div className="section-container">

          <div className="grid md:grid-cols-2 gap-5">
            {publications.map((pub) => <PublicationCard key={pub.id} pub={pub} />)}
          </div>

          {/* Request note */}
          <div className="mt-10 text-center bg-white rounded-2xl border border-border p-8">
            <h3 className="text-lg font-bold text-foreground mb-2">Need an earlier edition?</h3>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-5 leading-relaxed">
              Archived publications are available from the BBLTFOA Secretariat on request.
              Member factories can also access the full library through the Association office.
            </p>
            <a href="/contact" className="btn-primary inline-flex">Request a Document</a>
          </div>
        </div>
      </section>
    </>
  );
}
