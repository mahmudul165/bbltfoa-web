import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/page-header";
import { latestNews } from "@/data/mock-data";
import { formatDate } from "@/lib/utils";
import { Calendar, User, ArrowLeft, ArrowRight, Share2 } from "lucide-react";

const categoryColors: Record<string, string> = {
  "Association News": "bg-tea-pale text-tea-green",
  "Industry News": "bg-gold-light text-gold-dark",
  "Policy": "bg-blue-50 text-blue-700",
  "Events": "bg-purple-50 text-purple-700",
};

// Required for `output: export` — pre-render every article path
export function generateStaticParams() {
  return latestNews.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const article = latestNews.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const article = latestNews.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = latestNews.filter((a) => a.slug !== article.slug).slice(0, 3);
  const body = article.content ?? [article.excerpt];

  return (
    <>
      <PageHeader
        title={article.title}
        breadcrumbs={[
          { label: "News & Media", href: "/news" },
          { label: article.category },
        ]}
      />

      <article className="section-py bg-white">
        <div className="section-container max-w-3xl">

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 pb-6 mb-8 border-b border-border">
            <span className={`badge ${categoryColors[article.category] ?? "bg-muted text-muted-foreground"}`}>
              {article.category}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar size={14} /> {formatDate(article.date)}
            </span>
            {article.author && (
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <User size={14} /> {article.author}
              </span>
            )}
          </div>

          {/* Body */}
          <div className="space-y-5">
            {body.map((para, i) => (
              <p
                key={i}
                className={`leading-relaxed ${
                  i === 0
                    ? "text-lg text-foreground font-medium"
                    : "text-base text-muted-foreground"
                }`}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-semibold text-tea-green hover:text-tea-dark transition-colors"
            >
              <ArrowLeft size={15} /> Back to News
            </Link>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Share2 size={14} /> BBLTFOA Secretariat
            </span>
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-py bg-muted">
          <div className="section-container">
            <h2 className="text-foreground mb-8">More News</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((a) => (
                <Link
                  key={a.id}
                  href={`/news/${a.slug}`}
                  className="group bg-white rounded-2xl border border-border p-6 card-modern flex flex-col"
                >
                  <span className={`badge w-fit mb-3 ${categoryColors[a.category] ?? "bg-muted text-muted-foreground"}`}>
                    {a.category}
                  </span>
                  <h3 className="text-base font-bold text-foreground group-hover:text-tea-green transition-colors leading-snug mb-2">
                    {a.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 flex-1 mb-3">{a.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-tea-green">
                    Read <ArrowRight size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
