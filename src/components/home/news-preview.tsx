import Link from "next/link";
import { ArrowRight, Calendar, ArrowUpRight } from "lucide-react";
import { latestNews } from "@/data/mock-data";

const catStyle: Record<string, string> = {
  "Industry News":    "bg-tea-pale text-tea-green",
  "Association News": "bg-gold-light text-gold-dark",
  "Trade":            "bg-blue-50 text-blue-700",
  "Policy":           "bg-purple-50 text-purple-700",
  "Events":           "bg-orange-50 text-orange-700",
  "Regulation":       "bg-red-50 text-red-700",
};

function fmt(d: string) {
  return new Date(d).toLocaleDateString("en-BD", { day: "numeric", month: "short", year: "numeric" });
}

export function NewsPreview() {
  const featured = latestNews[0];
  const rest = latestNews.slice(1, 5);

  return (
    <section className="section-py bg-muted">
      <div className="section-container">
        <div className="flex items-end justify-between mb-12">
          <div className="reveal-left">
            <span className="section-label mb-3">Latest Updates</span>
            <h2 className="mt-3 text-foreground">News & Media</h2>
          </div>
          <Link href="/news" className="reveal-right hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-tea-green hover:text-tea-dark group transition-colors px-4 py-2 rounded-full hover:bg-tea-50">
            All articles <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <Link href={"/news/" + featured.slug} className="reveal lg:col-span-3 group card-modern rounded-3xl overflow-hidden flex flex-col">
            <div className="relative h-56 gradient-hero flex items-end p-6 overflow-hidden">
              <div className="absolute inset-0 bg-dots-white opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" aria-hidden />
              <span className={"relative z-10 badge shadow-sm " + (catStyle[featured.category] ?? "bg-muted text-muted-foreground")}>
                {featured.category}
              </span>
            </div>
            <div className="p-7 flex flex-col flex-1">
              <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground mb-3">
                <Calendar size={12} className="text-gold" /> {fmt(featured.date)}
              </div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-tea-green transition-colors leading-snug mb-3 flex-1">
                {featured.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-6">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold text-tea-green">
                Read full article
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          <div className="lg:col-span-2 flex flex-col gap-3">
            {rest.map((article, i) => (
              <Link key={article.id} href={"/news/" + article.slug} className={"reveal group card-modern rounded-2xl p-5 flex gap-4 items-start"} data-delay={String(i * 70)}>
                <div className="shrink-0 w-10 h-10 rounded-xl gradient-tea flex items-center justify-center text-white text-sm font-bold select-none shadow-sm transition-transform duration-300 group-hover:scale-105 nums-tabular">
                  {i + 2}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={"badge text-[10px] py-0.5 bg-muted text-muted-foreground"}>
                      {article.category}
                    </span>
                    <span className="text-[10px] text-muted-foreground">{fmt(article.date)}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-foreground group-hover:text-tea-green transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h4>
                </div>
                <ArrowUpRight size={14} className="shrink-0 text-muted-foreground/40 group-hover:text-tea-green mt-1 transition-colors" />
              </Link>
            ))}
            <Link href="/news" className="reveal group/all mt-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl border-2 border-dashed border-border text-sm font-semibold text-muted-foreground hover:border-tea-green hover:text-tea-green hover:bg-tea-50/50 transition-all duration-200" data-delay="300">
              View all news & notices
              <ArrowRight size={14} className="transition-transform duration-200 group-hover/all:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
