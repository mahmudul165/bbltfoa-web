import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { PageHeader } from "@/components/layout/page-header";
import { Calendar, Clock, MapPin, Users, Quote, Leaf, Mic2, UserCheck, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Bangladesh Bot Leaf Tea Factories Association Annual General Meeting (AGM) 2026 held in Panchagarh",
};

const IMAGE_SRC = "/activities/agm-2026.webp";
const hasImage = fs.existsSync(
  path.join(process.cwd(), "public", IMAGE_SRC)
);

/* Quick-facts strip that floats over the hero image */
const facts = [
  { icon: Calendar, label: "When", value: "17 June 2026", detail: "Wednesday" },
  { icon: MapPin, label: "Where", value: "Mahananda Eco Cottage", detail: "Tetulia, Panchagarh" },
  { icon: Users, label: "Convened by", value: "BBLTFA Leadership", detail: "Members & industry guests" },
];

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

/* Key logistics for the National Tea Day 2026 announcement */
const inviteFacts = [
  { icon: Calendar, label: "Date", value: "20 June 2026", detail: "6th National Tea Day" },
  { icon: Clock, label: "Time", value: "11:00 AM", detail: "Programme inauguration" },
  { icon: MapPin, label: "Venue", value: "Sreemangal Auditorium-cum-Multipurpose Hall", detail: "Sreemangal, Moulvibazar" },
  { icon: UserCheck, label: "Inaugurated by", value: "Khandakar Abdul Muktadir", detail: "Commerce Minister" },
];

/* Initials helper — drops the "Md." honorific for cleaner monograms */
const initials = (name: string) =>
  name
    .split(" ")
    .filter((w) => w !== "Md.")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

/* National Tea Day photo gallery — web-optimised WebP (1280w, no upscaling) */
const gallery = [
  {
    src: "/activities/national-tea-day-speaking-1.webp",
    alt: "BBLTFA leadership addressing attendees during the National Tea Day programme",
    caption: "Addressing members and guests on National Tea Day",
    span: "md:col-span-2 md:row-span-2",
    mobileAspect: "aspect-[4/3]",
    sizes: "(max-width: 768px) 100vw, (max-width: 1280px) 66vw, 640px",
  },
  {
    src: "/activities/national-tea-day-1.webp",
    alt: "Members and guests gathered for the National Tea Day observance",
    caption: "A full house for the observance",
    span: "md:col-span-1 md:row-span-1",
    mobileAspect: "aspect-[4/3]",
    sizes: "(max-width: 768px) 100vw, 320px",
  },
  {
    src: "/activities/national-tea-day-2.webp",
    alt: "Tea industry stakeholders in discussion at the National Tea Day event",
    caption: "Industry stakeholders in discussion",
    span: "md:col-span-1 md:row-span-1",
    mobileAspect: "aspect-[4/3]",
    sizes: "(max-width: 768px) 100vw, 320px",
  },
  {
    src: "/activities/national-tea-day-speaking-2.webp",
    alt: "Guest speaker highlighting the bought-leaf tea sector on National Tea Day",
    caption: "Spotlighting the bought-leaf tea sector",
    span: "md:col-span-3 md:row-span-1",
    mobileAspect: "aspect-[16/10]",
    sizes: "(max-width: 768px) 100vw, 960px",
  },
];

/* Reusable eyebrow — gold hairline + label, centred */
function Eyebrow({ icon: Icon, children }: { icon: typeof Leaf; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-2.5">
      <span className="w-6 sm:w-8 h-px bg-gradient-to-r from-transparent to-gold" />
      <span className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-gold-dark whitespace-nowrap">
        <Icon size={12} /> {children}
      </span>
      <span className="w-6 sm:w-8 h-px bg-gradient-to-l from-transparent to-gold" />
    </div>
  );
}

export default function ActivitiesPage() {
  return (
    <>
      <PageHeader
        title="Activities"
        subtitle="Updates on BBLTFOA meetings, programmes, and industry engagements."
        breadcrumbs={[{ label: "Activities" }]}
      />

      {/* ── Feature: AGM 2026 ─────────────────────────────────────── */}
      <article className="relative overflow-hidden bg-gradient-to-b from-tea-50 via-white to-white">
        {/* Atmospheric decoration */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots opacity-60" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full opacity-70"
          style={{ background: "radial-gradient(circle, hsl(128 58% 36%/.10) 0%, transparent 70%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-40 -right-24 w-80 h-80 rounded-full opacity-70"
          style={{ background: "radial-gradient(circle, hsl(38 88% 50%/.10) 0%, transparent 70%)" }}
        />

        <div className="section-container relative max-w-5xl section-py">

          {/* Kicker + headline */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-up" style={{ animationDelay: "60ms" }}>
              <Eyebrow icon={Leaf}>Association News</Eyebrow>
            </div>

            <h2
              className="mt-5 sm:mt-6 text-[1.7rem] sm:text-4xl lg:text-[2.9rem] font-semibold leading-[1.08] tracking-tight animate-fade-up"
              style={{ animationDelay: "140ms" }}
            >
              Bangladesh Bot Leaf Tea Factories Association{" "}
              <span className="text-gradient-gold">Annual General Meeting 2026</span> Held
            </h2>

            <p
              className="mt-4 sm:mt-5 text-sm sm:text-lg text-muted-foreground leading-relaxed animate-fade-up"
              style={{ animationDelay: "220ms" }}
            >
              Leaders, members and guests of the bought-leaf tea sector gathered in
              Tetulia, Panchagarh, to chart the industry&rsquo;s path forward.
            </p>

            {/* Meta strip */}
            <div
              className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <span className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-semibold text-tea-text bg-tea-pale rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm ring-1 ring-tea-green/10">
                <Calendar size={13} className="text-tea-green shrink-0" /> Wednesday, 17 June 2026
              </span>
              <span className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-semibold text-tea-text bg-tea-pale rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm ring-1 ring-tea-green/10">
                <MapPin size={13} className="text-tea-green shrink-0" /> Tetulia, Panchagarh
              </span>
            </div>
          </div>

          {/* Hero image */}
          <figure
            className="group relative mt-9 sm:mt-12 w-full aspect-[4/3] sm:aspect-[16/9] rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-xl sm:shadow-2xl ring-1 ring-border animate-fade-up"
            style={{ animationDelay: "380ms" }}
          >
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
                <p className="text-sm font-medium tracking-wide">Event photo coming soon</p>
              </div>
            )}
            <span className="absolute top-4 left-4 sm:top-5 sm:left-5 w-8 sm:w-10 h-0.5 bg-gold rounded-full" />
            <span className="absolute top-4 right-4 sm:top-5 sm:right-5 inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-white/95 bg-black/35 backdrop-blur-sm rounded-full px-3 py-1.5 ring-1 ring-white/20">
              <Leaf size={11} className="text-gold" /> AGM 2026
            </span>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent p-4 pt-16 sm:p-7 sm:pt-24">
              <figcaption className="text-white text-xs sm:text-[13px] font-medium leading-snug max-w-2xl">
                BBLTFA President Md. Niaz Ali Chishti addresses members at the 2026
                Annual General Meeting, Tetulia, Panchagarh.
              </figcaption>
            </div>
          </figure>

          {/* Quick facts — float over the hero's lower edge */}
          <div className="relative z-10 mx-auto -mt-8 sm:-mt-14 max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {facts.map((f, i) => (
              <div
                key={f.label}
                className="group flex items-center gap-3.5 rounded-2xl bg-white border border-border shadow-lg shadow-tea-green/5 px-4 py-4 sm:px-5 sm:py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-tea-green/25 reveal"
                data-delay={i * 90}
              >
                <span className="w-11 h-11 shrink-0 rounded-xl bg-tea-pale text-tea-green flex items-center justify-center transition-colors duration-300 group-hover:bg-tea-green group-hover:text-white">
                  <f.icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gold-dark">{f.label}</p>
                  <p className="text-sm font-semibold text-foreground leading-tight truncate">{f.value}</p>
                  <p className="text-xs text-muted-foreground truncate">{f.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* The report */}
          <div className="mx-auto mt-12 sm:mt-16 max-w-2xl reveal">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-tea-text">The Report</span>
              <span className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
            </div>

            <div className="space-y-5 text-base text-muted-foreground leading-relaxed">
              <p className="text-base sm:text-lg text-foreground font-medium leading-relaxed sm:first-letter:text-5xl sm:first-letter:font-bold sm:first-letter:text-tea-green sm:first-letter:mr-2.5 sm:first-letter:float-left sm:first-letter:leading-[0.82] sm:first-letter:font-serif">
                The Annual General Meeting (AGM) 2026 of Bangladesh Bot Leaf Tea
                Factories Association (BBLTFA) was held successfully. The event was
                organized on 17 June at the ESDO Mahananda Eco Cottage in Tetulia
                Upazila of Panchagarh. The meeting was attended by members of the
                organization, representatives from various levels of the tea
                industry, and concerned guests.
              </p>

              {/* Pull quote */}
              <blockquote className="relative my-7 sm:my-9 rounded-2xl bg-gradient-to-br from-tea-pale to-tea-pale/40 border border-tea-green/15 px-5 sm:px-8 py-6 sm:py-7 overflow-hidden">
                <Quote size={48} className="absolute -top-1 -left-1 text-tea-green/10 sm:w-16 sm:h-16" />
                <p className="relative text-foreground font-medium italic leading-relaxed text-[15px] sm:text-[17px]">
                  &ldquo;We are working tirelessly to further strengthen the
                  country&rsquo;s tea industry through sustainable development of the
                  bought leaf tea sector of Bangladesh, ensuring fair prices for small
                  tea farmers and modern processing. The development of this sector is
                  playing an important role in the economy and employment of the
                  northern part of the country.&rdquo;
                </p>
                <footer className="relative mt-4 flex items-center gap-2 text-sm font-semibold text-tea-text">
                  <span className="w-6 h-px bg-tea-green/40" /> Md. Niaz Ali Chishti, President, BBLTFA
                </footer>
              </blockquote>

              <p>
                The organization&rsquo;s General Secretary Md. Faizul Islam, Adviser
                Md. Jahangir Alam, Vice President Alamgir Hossain, Treasurer Anwar
                Hossain, and Md. Asaduzzaman were present at the meeting and discussed
                the organization&rsquo;s activities, future plans, and various
                challenges of the sector.
              </p>

              <p>
                The Bangladesh Tea Board, Panchagarh region, was present as special
                guests at the event. Senior official Mr. Amir Hossain, President of the
                Small Tea Garden Owners Association Mr. Shahjahan, Adviser of the Small
                Tea Growers Association Mr. Anisuzzaman Pramanik, and leaders and
                entrepreneurs from various levels of the tea industry were present.
              </p>

              <p>
                The meeting discussed in detail the current status of the bought leaf
                tea industry in Bangladesh, protecting the interests of small tea
                farmers, improving production and quality standards, expanding the
                market, and increasing coordination with the government. The speakers
                emphasized the joint efforts of all stakeholders to make the
                country&rsquo;s tea industry more competitive and of international
                standards.
              </p>

              <p>
                At the end of the meeting, the participants expressed their
                determination to work together for the overall development of the
                bought leaf tea sector and the welfare of small tea farmers.
              </p>
            </div>

            <div className="mt-9 pt-6 border-t border-border flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-tea-pale text-tea-green flex items-center justify-center">
                <Users size={13} />
              </span>
              <span className="text-sm font-semibold text-tea-text">BBLTFOA Secretariat</span>
            </div>
          </div>
        </div>
      </article>

      {/* ── People at the meeting ─────────────────────────────────── */}
      <section
        aria-labelledby="people-heading"
        className="section-py bg-gradient-to-b from-white via-muted/40 to-white border-t border-border"
      >
        <div className="section-container max-w-5xl">
          <div className="mx-auto max-w-2xl text-center reveal">
            <Eyebrow icon={UserCheck}>Who Was There</Eyebrow>
            <h2
              id="people-heading"
              className="mt-5 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight tracking-tight"
            >
              Voices Behind the <span className="text-gradient-gold">Meeting</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              The leadership of the association and the guests who joined them in
              shaping the conversation.
            </p>
          </div>

          <div className="mt-9 sm:mt-12 grid lg:grid-cols-2 gap-5 sm:gap-6">
            {/* Speakers */}
            <div
              className="relative rounded-3xl border border-border bg-white shadow-sm p-6 sm:p-7 overflow-hidden reveal"
              data-delay={80}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-tea-green to-tea-light" />
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-9 h-9 rounded-xl bg-tea-pale text-tea-green flex items-center justify-center shrink-0">
                  <Mic2 size={16} />
                </span>
                <div>
                  <h3 className="text-base font-bold text-foreground leading-none">Speakers</h3>
                  <p className="text-xs text-muted-foreground mt-1">Association leadership</p>
                </div>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {speakers.map((s) => (
                  <li
                    key={s.name}
                    className="flex items-center gap-3 rounded-2xl border border-transparent p-2.5 transition-colors hover:bg-tea-pale/60 hover:border-tea-green/15"
                  >
                    <span className="w-9 h-9 rounded-full bg-gradient-to-br from-tea-green to-tea-dark text-white text-[11px] font-bold flex items-center justify-center shrink-0 shadow-sm ring-2 ring-white">
                      {initials(s.name)}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground leading-tight truncate">{s.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{s.role}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Special Guests */}
            <div
              className="relative rounded-3xl border border-border bg-white shadow-sm p-6 sm:p-7 overflow-hidden reveal"
              data-delay={160}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-dark to-gold" />
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-9 h-9 rounded-xl bg-gold-light text-gold-dark flex items-center justify-center shrink-0">
                  <UserCheck size={16} />
                </span>
                <div>
                  <h3 className="text-base font-bold text-foreground leading-none">Special Guests</h3>
                  <p className="text-xs text-muted-foreground mt-1">Industry &amp; board representatives</p>
                </div>
              </div>
              <ul className="space-y-2.5">
                {guests.map((g) => (
                  <li
                    key={g.name}
                    className="flex items-start gap-3 rounded-2xl border border-transparent p-2.5 transition-colors hover:bg-gold-light/50 hover:border-gold/20"
                  >
                    <span className="w-9 h-9 rounded-full bg-gradient-to-br from-gold to-gold-dark text-white text-[11px] font-bold flex items-center justify-center shrink-0 shadow-sm ring-2 ring-white">
                      {initials(g.name)}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground leading-tight">{g.name}</p>
                      <p className="text-xs text-muted-foreground leading-snug">{g.role}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── National Tea Day gallery ─────────────────────────────── */}
      <section
        aria-labelledby="gallery-heading"
        className="section-py bg-gradient-to-b from-white via-tea-pale/30 to-white border-t border-border"
      >
        <div className="section-container max-w-5xl">
          <div className="mx-auto max-w-2xl text-center reveal">
            <Eyebrow icon={Camera}>Photo Gallery</Eyebrow>
            <h2
              id="gallery-heading"
              className="mt-5 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight tracking-tight"
            >
              Moments from <span className="text-gradient-gold">National Tea Day</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Highlights from the association&rsquo;s National Tea Day programme —
              celebrating the people behind Bangladesh&rsquo;s bought-leaf tea sector.
            </p>
          </div>

          {/* Bento mosaic */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:auto-rows-[13rem] lg:auto-rows-[15rem]">
            {gallery.map((photo, i) => (
              <figure
                key={photo.src}
                className={`group relative m-0 ${photo.span} ${photo.mobileAspect} md:aspect-auto md:h-full overflow-hidden rounded-2xl sm:rounded-3xl ring-1 ring-border shadow-md hover:shadow-xl transition-shadow duration-500 reveal-scale`}
                data-delay={i * 110}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  loading="lazy"
                  sizes={photo.sizes}
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                />
                {/* Scrim for caption contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                {/* Gold corner accent */}
                <span className="absolute top-4 left-4 w-8 sm:w-10 h-0.5 bg-gold rounded-full opacity-90 transition-all duration-500 group-hover:w-12" />
                {/* Caption */}
                <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <p className="text-white text-xs sm:text-sm font-medium leading-snug translate-y-0.5 transition-transform duration-500 group-hover:-translate-y-0.5">
                    {photo.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* ── 6th National Tea Day invitation ── */}
          <div className="mt-12 sm:mt-16 reveal">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-lg">
              <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-gold-vivid to-gold" />
              <div className="grid md:grid-cols-[1.5fr_1fr]">
                {/* Announcement */}
                <div className="p-7 sm:p-9 lg:p-10">
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-gold-dark">
                    <Leaf size={12} /> Announcement
                  </span>
                  <h3 className="mt-3 text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
                    National Tea Day 2026
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-[15px] font-medium italic text-tea-green leading-snug">
                    Theme &mdash; &ldquo;Development of the Tea Industry, Greening the Economy&rdquo;
                  </p>
                  <div className="mt-5 space-y-3.5 text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
                    <p>
                      Bangladesh Tea Board will celebrate National Tea Day 2026 in Sreemangal
                      of Moulvibazar district on <strong className="text-foreground font-semibold">June 20</strong> with the theme
                      &ldquo;Development of the Tea Industry, Greening the Economy.&rdquo;
                    </p>
                    <p>
                      Commerce Minister <strong className="text-foreground font-semibold">Khandakar Abdul Muktadir</strong> is scheduled
                      to inaugurate programmes at the Sreemangal Auditorium-cum-Multipurpose Hall,
                      marking the day, according to a PID handout.
                    </p>
                    <p>
                      According to Bangladesh Tea Board, though National Tea Day is observed
                      annually on May 21, the formal celebration of this year&rsquo;s event has been
                      scheduled for June 20.
                    </p>
                    <p>
                      Bangladesh Tea Board Chairman <strong className="text-foreground font-semibold">Major General Md Mesbah Uddin Ahmed</strong> will
                      deliver the welcome address, while Moulvibazar-4 MP Md Mujibur Rahman
                      Chowdhury will attend the programme as a special guest, with Commerce
                      Secretary Md Ataur Rahman Khan in the chair.
                    </p>
                    <p>
                      Representatives of tea industry stakeholders and tea workers are also
                      expected to participate in the discussion session.
                    </p>
                    <p>
                      The programme will begin at 11:00am with the inauguration by the commerce
                      minister, followed by the screening of a documentary on the tea industry and
                      a discussion meeting.
                    </p>
                    <p>
                      Following the discussion, the <strong className="text-foreground font-semibold">National Tea Awards 2026</strong> will be
                      presented in eight categories in recognition of outstanding contributions to
                      the country&rsquo;s tea sector.
                    </p>
                    <p>
                      Besides, a special award will be introduced this year for the first time in
                      the &ldquo;Best Bought Leaf Tea Factory&rdquo; category.
                    </p>
                    <p>
                      A tea exhibition featuring the Bangladesh Tea Board and leading tea companies
                      of the country will also be organised on the occasion.
                    </p>
                    <p>
                      According to Tea Board data, Bangladesh currently has 172 tea gardens. Tea
                      cultivation has also expanded significantly in the northern plains of the
                      country in recent years.
                    </p>
                    <p>
                      The National Tea Day celebration, being held in Sreemangal &ndash; widely known
                      as the tea capital of Bangladesh &ndash; will mark the sixth edition of the event,
                      bringing together stakeholders from across the tea industry.
                    </p>
                  </div>
                </div>

                {/* Key logistics */}
                <div className="border-t md:border-t-0 md:border-l border-border bg-tea-pale/30 p-7 sm:p-8 flex flex-col justify-start gap-5">
                  {inviteFacts.map((f) => (
                    <div key={f.label} className="flex items-start gap-3.5">
                      <span className="w-10 h-10 rounded-xl bg-white ring-1 ring-border shadow-sm flex items-center justify-center shrink-0 text-tea-green">
                        <f.icon size={17} />
                      </span>
                      <div className="min-w-0">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{f.label}</div>
                        <div className="text-sm font-semibold text-foreground leading-snug">{f.value}</div>
                        {f.detail && <div className="text-xs text-muted-foreground mt-0.5">{f.detail}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
