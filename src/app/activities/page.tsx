import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { PageHeader } from "@/components/layout/page-header";
import { Calendar, MapPin, Users, Quote, Leaf, Mic2, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Bangladesh Bot Leaf Tea Factories Association Annual General Meeting (AGM) 2026 held in Panchagarh",
};

const IMAGE_SRC = "/activities/agm-2026.webp";
const hasImage = fs.existsSync(
  path.join(process.cwd(), "public", IMAGE_SRC)
);

const speakers = [
  { name: "Md. Niaz Ali Chishti", role: "President, BBLTFA" },
  { name: "Md. Faizul Islam", role: "General Secretary" },
  { name: "Md. Jahangir Alam", role: "Adviser" },
  { name: "Alamgir Hossain", role: "Vice President" },
  { name: "Anwar Hossain", role: "Treasurer" },
  { name: "Md. Asaduzzaman", role: "Executive Member" },
];

const guests = [
  { name: "Amir Hossain", role: "Senior Official, Bangladesh Tea Board (Panchagarh region)" },
  { name: "Shahjahan", role: "President, Small Tea Garden Owners Association" },
  { name: "Anisuzzaman Pramanik", role: "Adviser, Small Tea Growers Association" },
];

export default function ActivitiesPage() {
  return (
    <>
      <PageHeader
        title="Activities"
        subtitle="Updates on BBLTFOA meetings, programmes, and industry engagements."
        breadcrumbs={[{ label: "Activities" }]}
      />

      <article className="section-py bg-gradient-to-b from-tea-pale/40 via-white to-white">
        <div className="section-container max-w-5xl">

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2 sm:gap-2.5 mb-5 sm:mb-6">
            <span className="w-6 sm:w-8 h-px bg-gradient-to-r from-transparent to-gold" />
            <span className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-gold-dark whitespace-nowrap">
              <Leaf size={12} /> Activities
            </span>
            <span className="w-6 sm:w-8 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>

          {/* Headline */}
          <div className="max-w-3xl mx-auto mb-6 sm:mb-8 text-center px-1">
            <h1 className="text-xl sm:text-3xl lg:text-[2.65rem] font-bold text-foreground leading-tight tracking-tight">
              Bangladesh Bot Leaf Tea Factories Association
              <br />
              <span className="text-gradient-gold">Annual General Meeting (AGM) 2026 Held</span>
            </h1>
          </div>

          {/* Meta strip */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 px-1">
            <span className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-semibold text-tea-dark bg-tea-pale rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm">
              <Calendar size={13} className="text-tea-green shrink-0" /> Wednesday, 17 June 2026
            </span>
            <span className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-semibold text-tea-dark bg-tea-pale rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm text-center">
              <MapPin size={13} className="text-tea-green shrink-0" /> ESDO Mahananda Eco Cottage, Tetulia, Panchagarh
            </span>
          </div>

          {/* Hero image with overlay caption */}
          <div className="group relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-2xl sm:rounded-[2rem] overflow-hidden mb-10 sm:mb-14 shadow-xl sm:shadow-2xl ring-1 ring-border">
            {hasImage ? (
              <Image
                src={IMAGE_SRC}
                alt="BBLTFA President Md. Niaz Ali Chishti addressing the 2026 Annual General Meeting in Panchagarh"
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            ) : (
              <div className="absolute inset-0 gradient-hero bg-dots-white flex flex-col items-center justify-center text-white/80 gap-3">
                <Leaf size={40} className="text-gold" />
                <p className="text-sm font-medium tracking-wide">
                  Event photo coming soon
                </p>
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 sm:p-7">
              <p className="text-white text-xs sm:text-[13px] font-medium leading-snug">
                BBLTFA President Md. Niaz Ali Chishti addresses members at the
                2026 Annual General Meeting, Tetulia, Panchagarh.
              </p>
            </div>
            <div className="absolute top-4 left-4 sm:top-5 sm:left-5 w-8 sm:w-10 h-0.5 bg-gold rounded-full" />
          </div>

          <div className="grid lg:grid-cols-[1fr_300px] gap-8 lg:gap-12">

            {/* Body */}
            <div className="relative bg-white rounded-2xl sm:rounded-3xl border border-border shadow-sm p-5 sm:p-7 lg:p-9 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-tea-green via-gold to-tea-green" />
              <div className="space-y-5 text-base text-muted-foreground leading-relaxed">
                <p className="text-base sm:text-lg text-foreground font-medium leading-relaxed sm:first-letter:text-5xl sm:first-letter:font-bold sm:first-letter:text-tea-green sm:first-letter:mr-2 sm:first-letter:float-left sm:first-letter:leading-[0.85]">
                  The Annual General Meeting (AGM) 2026 of Bangladesh Bot Leaf
                  Tea Factories Association (BBLTFA) was held successfully.
                  The event was organized on 17 June at the ESDO Mahananda Eco
                  Cottage in Tetulia Upazila of Panchagarh. The meeting was
                  attended by members of the organization, representatives
                  from various levels of the tea industry, and concerned
                  guests.
                </p>

                {/* Pull quote */}
                <blockquote className="relative my-6 sm:my-8 rounded-2xl bg-gradient-to-br from-tea-pale to-tea-pale/40 border border-tea-green/15 px-5 sm:px-7 py-5 sm:py-6 overflow-hidden">
                  <Quote size={44} className="absolute -top-1 -left-1 text-tea-green/10 sm:w-14 sm:h-14" />
                  <p className="relative text-foreground font-medium italic leading-relaxed text-sm sm:text-base">
                    &ldquo;We are working tirelessly to further strengthen the
                    country&rsquo;s tea industry through sustainable
                    development of the bought leaf tea sector of Bangladesh,
                    ensuring fair prices for small tea farmers and modern
                    processing. The development of this sector is playing an
                    important role in the economy and employment of the
                    northern part of the country.&rdquo;
                  </p>
                  <footer className="relative mt-4 flex items-center gap-2 text-sm font-semibold text-tea-green">
                    <span className="w-6 h-px bg-tea-green/40" /> Md. Niaz Ali Chishti, President, BBLTFA
                  </footer>
                </blockquote>

                <p>
                  The organization&rsquo;s General Secretary Md. Faizul
                  Islam, Adviser Md. Jahangir Alam, Vice President Alamgir
                  Hossain, Treasurer Anwar Hossain, and Md. Asaduzzaman were
                  present at the meeting and discussed the organization&rsquo;s
                  activities, future plans, and various challenges of the
                  sector.
                </p>

                <p>
                  The Bangladesh Tea Board, Panchagarh region, was present as
                  special guests at the event. Senior official Mr. Amir
                  Hossain, President of the Small Tea Garden Owners
                  Association Mr. Shahjahan, Adviser of the Small Tea Growers
                  Association Mr. Anisuzzaman Pramanik, and leaders and
                  entrepreneurs from various levels of the tea industry were
                  present.
                </p>

                <p>
                  The meeting discussed in detail the current status of the
                  bought leaf tea industry in Bangladesh, protecting the
                  interests of small tea farmers, improving production and
                  quality standards, expanding the market, and increasing
                  coordination with the government. The speakers emphasized
                  the joint efforts of all stakeholders to make the
                  country&rsquo;s tea industry more competitive and of
                  international standards.
                </p>

                <p>
                  At the end of the meeting, the participants expressed their
                  determination to work together for the overall development
                  of the bought leaf tea sector and the welfare of small tea
                  farmers.
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-border flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-tea-pale text-tea-green flex items-center justify-center">
                  <Users size={13} />
                </span>
                <span className="text-sm font-semibold text-tea-green">BBLTFOA Secretariat</span>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24 self-start">
              <div className="relative rounded-3xl border border-border bg-white shadow-sm p-6 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-tea-green to-tea-light" />
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="w-9 h-9 rounded-xl bg-tea-pale text-tea-green flex items-center justify-center shrink-0">
                    <Mic2 size={16} />
                  </span>
                  <h3 className="text-sm font-bold text-foreground">
                    Speakers
                  </h3>
                </div>
                <ul className="space-y-3">
                  {speakers.map((s) => (
                    <li
                      key={s.name}
                      className="flex items-start gap-3 rounded-xl p-2 -mx-2 hover:bg-tea-pale/50 transition-colors"
                    >
                      <span className="w-8 h-8 rounded-full bg-gradient-to-br from-tea-green to-tea-dark text-white text-[11px] font-bold flex items-center justify-center shrink-0 shadow-sm">
                        {s.name.split(" ").filter((w) => w !== "Md.").slice(0, 2).map((w) => w[0]).join("")}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground leading-tight">
                          {s.name}
                        </p>
                        <p className="text-xs text-muted-foreground">{s.role}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative rounded-3xl border border-border bg-white shadow-sm p-6 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-dark to-gold" />
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="w-9 h-9 rounded-xl bg-gold-light text-gold-dark flex items-center justify-center shrink-0">
                    <UserCheck size={16} />
                  </span>
                  <h3 className="text-sm font-bold text-foreground">
                    Special Guests
                  </h3>
                </div>
                <ul className="space-y-3">
                  {guests.map((g) => (
                    <li
                      key={g.name}
                      className="flex items-start gap-3 rounded-xl p-2 -mx-2 hover:bg-gold-light/50 transition-colors"
                    >
                      <span className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-gold-dark text-white text-[11px] font-bold flex items-center justify-center shrink-0 shadow-sm">
                        {g.name.split(" ").filter((w) => w !== "Md.").slice(0, 2).map((w) => w[0]).join("")}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground leading-tight">
                          {g.name}
                        </p>
                        <p className="text-xs text-muted-foreground">{g.role}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
