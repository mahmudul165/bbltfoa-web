import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { latestNews } from "@/data/mock-data";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "News & Media",
  description:
    "Latest news, announcements, and updates from BBLTFOA and Bangladesh's bought leaf tea sector.",
};

const categoryColors: Record<string, string> = {
  "Association News": "bg-tea-pale text-tea-green",
  "Industry News": "bg-gold-light text-gold-dark",
  "Policy": "bg-blue-50 text-blue-700",
  "Events": "bg-purple-50 text-purple-700",
};

export default function NewsPage() {
  const [featured, ...articles] = latestNews;

  return (
    <>
      <PageHeader
        title="News & Media"
        subtitle="Announcements and updates from BBLTFOA and Bangladesh's bought leaf tea sector."
        breadcrumbs={[{ label: "News & Media" }]}
      />

      <section className="section-py bg-muted">
        <div className="section-container">

          {/* Featured article */}
          <Link
            href={`/news/${featured.slug}`}
            className="group block bg-white rounded-2xl border border-border overflow-hidden card-modern mb-10 lg:flex"
          >
            <div className="lg:w-2/5 relative shrink-0 gradient-hero min-h-[200px] flex items-center p-8">
              <div className="absolute inset-0 bg-dots-white opacity-20" aria-hidden />
              <div className="relative">
                <span className="text-xs font-bold text-gold bg-white/10 border border-white/20 px-3 py-1 rounded-full">
                  Featured
                </span>
                <p className="text-white/70 text-sm mt-4 flex items-center gap-2">
                  <Calendar size={13} /> {formatDate(featured.date)}
                </p>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className={`badge w-fit mb-3 ${categoryColors[featured.category] ?? "bg-muted text-muted-foreground"}`}>
                {featured.category}
              </span>
              <h2 className="text-2xl font-bold text-foreground group-hover:text-tea-green transition-colors mb-3 leading-snug">
                {featured.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-tea-green group-hover:gap-3 transition-all">
                Read full article <ArrowRight size={15} />
              </span>
            </div>
          </Link>

          {/* Article grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/news/${article.slug}`}
                className="group bg-white rounded-2xl border border-border overflow-hidden card-modern flex flex-col"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`badge ${categoryColors[article.category] ?? "bg-muted text-muted-foreground"}`}>
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar size={11} /> {formatDate(article.date)}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-foreground group-hover:text-tea-green transition-colors leading-snug mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border">
                    {article.author && (
                      <span className="flex items-center gap-1.5"><User size={11} /> {article.author}</span>
                    )}
                    <span className="text-tea-green font-semibold flex items-center gap-0.5">
                      Read <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
