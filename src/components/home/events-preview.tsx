import Link from "next/link";
import {
  ArrowRight, MapPin, Clock, ExternalLink, Leaf, Ticket, Sparkles, Landmark,
  Trophy, Users2, Phone, CalendarDays,
} from "lucide-react";
import { upcomingEvents } from "@/data/mock-data";

const typeStyle: Record<string, { badge: string; dot: string }> = {
  conference: { badge: "bg-purple-50 text-purple-700",  dot: "bg-purple-400" },
  training:   { badge: "bg-tea-pale text-tea-green",    dot: "bg-tea-green" },
  meeting:    { badge: "bg-blue-50 text-blue-700",      dot: "bg-blue-400" },
  seminar:    { badge: "bg-gold-light text-gold-dark",  dot: "bg-gold" },
  national:   { badge: "bg-gold-light text-gold-dark",  dot: "bg-gold" },
  other:      { badge: "bg-muted text-muted-foreground",dot: "bg-gray-400" },
};

function fmt(d: string) {
  return new Date(d).toLocaleDateString("en-BD", { day: "numeric", month: "short", year: "numeric" });
}

export function EventsPreview() {
  return (
    <section className="section-py bg-white">
      <div className="section-container">
        <div className="flex items-end justify-between mb-12">
          <div className="reveal-left">
            <span className="section-label mb-3">Stay Updated</span>
            <h2 className="mt-3 text-foreground">Events & Training</h2>
          </div>
          <Link href="/events" className="reveal-right hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-tea-green hover:text-tea-dark group transition-colors px-4 py-2 rounded-full hover:bg-tea-50">
            All events <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {upcomingEvents.length === 1 ? (
          (() => {
            const event = upcomingEvents[0];
            const d = new Date(event.date);
            const style = typeStyle[event.type] ?? typeStyle.other;
            return (
              <div className="reveal rounded-3xl gradient-hero text-white relative overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-12px_rgb(0_0_0/.35)]">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold via-gold-vivid to-gold" />
                <div className="absolute inset-0 bg-dots-white opacity-15 pointer-events-none" aria-hidden />
                <div
                  aria-hidden
                  className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full opacity-[.09] pointer-events-none"
                  style={{ background: "radial-gradient(circle, hsl(38 88% 60%) 0%, transparent 70%)" }}
                />
                <div
                  aria-hidden
                  className="absolute -left-24 -top-24 w-72 h-72 rounded-full opacity-[.06] pointer-events-none"
                  style={{ background: "radial-gradient(circle, hsl(128 58% 55%) 0%, transparent 70%)" }}
                />

                {/* Featured tag */}
                <div className="relative pt-7 px-7 sm:px-10 sm:pt-8 flex items-center justify-center sm:justify-start gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
                  <Sparkles size={12} /> Featured Event
                </div>

                <div className="relative px-7 sm:px-10 pb-8 sm:pb-10 pt-5 flex flex-col sm:flex-row items-center sm:items-stretch gap-8 sm:gap-10">
                  {/* Date block */}
                  <div className="flex sm:flex-col items-center justify-center gap-4 sm:gap-3 sm:border-r sm:border-white/15 sm:pr-10 shrink-0">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white/10 ring-1 ring-white/20 flex flex-col items-center justify-center backdrop-blur-sm">
                      <div className="text-4xl sm:text-5xl font-extrabold leading-none tracking-tight nums-tabular">
                        {d.getDate().toString().padStart(2, "0")}
                      </div>
                      <div className="text-[11px] font-semibold text-gold mt-1 uppercase tracking-[0.15em]">
                        {d.toLocaleString("en", { month: "short" })}
                      </div>
                    </div>
                    <div className="text-xs font-medium text-white/60 uppercase tracking-[0.2em]">
                      {d.toLocaleString("en", { weekday: "long" })}, {d.getFullYear()}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center sm:text-left min-w-0">
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-3.5 flex-wrap">
                      <span className={"badge text-[10px] capitalize " + style.badge}>
                        {event.type === "national" ? "National Observance" : event.type}
                      </span>
                      {event.attendanceNote && (
                        <span className="badge text-[10px] bg-white/10 text-white/90 border border-white/15">
                          <Ticket size={10} className="inline mr-1 -mt-0.5" /> {event.attendanceNote}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-[1.6rem] font-bold leading-snug mb-2.5">{event.title}</h3>
                    {event.theme && (
                      <p className="text-sm sm:text-[15px] text-gold/95 font-semibold flex items-center justify-center sm:justify-start gap-1.5 mb-5">
                        <Leaf size={14} className="shrink-0" /> <span className="leading-snug">{event.theme}</span>
                      </p>
                    )}
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-2 text-sm text-white/75 mb-7">
                      {event.time && (
                        <span className="flex items-center gap-1.5"><Clock size={14} className="text-gold shrink-0" />{event.time}</span>
                      )}
                      <span className="flex items-center gap-1.5"><MapPin size={14} className="text-gold shrink-0" />{event.venue}</span>
                      {event.organiser && (
                        <span className="flex items-center gap-1.5"><Landmark size={14} className="text-gold shrink-0" />{event.organiser}</span>
                      )}
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-5">
                      {event.slug && (
                        <Link
                          href={`/events/${event.slug}`}
                          className="btn-gold inline-flex items-center gap-2"
                        >
                          View Details <ArrowRight size={15} />
                        </Link>
                      )}
                      {event.registrationOpen && (
                        <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/85 hover:text-white transition-colors">
                          Register Now <ExternalLink size={13} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* Info strip */}
                <div className="relative border-t border-white/10 px-7 sm:px-10 py-5 grid grid-cols-2 sm:grid-cols-5 gap-y-4">
                  {event.bsDate && (
                    <div className="flex items-center gap-2.5 sm:border-r sm:border-white/10 sm:pr-3">
                      <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <CalendarDays size={14} className="text-gold" />
                      </span>
                      <div className="min-w-0">
                        <span className="text-[10px] uppercase tracking-wider text-white/50 block leading-none mb-0.5">Bengali Date</span>
                        <span className="text-xs font-semibold text-white/90 truncate block">{event.bsDate}</span>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-2.5 sm:border-r sm:border-white/10 sm:pr-3">
                    <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <Trophy size={14} className="text-gold" />
                    </span>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase tracking-wider text-white/50 block leading-none mb-0.5">Highlight</span>
                      <span className="text-xs font-semibold text-white/90 truncate block">National Tea Award 2026</span>
                    </div>
                  </div>
                  {event.participants?.find((p) => p.role === "Chief Guest") && (
                    <div className="flex items-center gap-2.5 sm:border-r sm:border-white/10 sm:pr-3">
                      <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <Users2 size={14} className="text-gold" />
                      </span>
                      <div className="min-w-0">
                        <span className="text-[10px] uppercase tracking-wider text-white/50 block leading-none mb-0.5">Chief Guest</span>
                        <span className="text-xs font-semibold text-white/90 truncate block">
                          {event.participants.find((p) => p.role === "Chief Guest")!.name.split(",")[0]}
                        </span>
                      </div>
                    </div>
                  )}
                  {event.participants?.find((p) => p.role === "Special Guest") && (
                    <div className="flex items-center gap-2.5 sm:border-r sm:border-white/10 sm:pr-3">
                      <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <Users2 size={14} className="text-gold" />
                      </span>
                      <div className="min-w-0">
                        <span className="text-[10px] uppercase tracking-wider text-white/50 block leading-none mb-0.5">Special Guest</span>
                        <span className="text-xs font-semibold text-white/90 truncate block">
                          {event.participants.find((p) => p.role === "Special Guest")!.name.split(",")[0]}
                        </span>
                      </div>
                    </div>
                  )}
                  {event.contactNumbers && event.contactNumbers[0] && (
                    <a href={`tel:${event.contactNumbers[0].replace(/[^\d+]/g, "")}`} className="flex items-center gap-2.5 group/contact">
                      <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover/contact:bg-gold/20 transition-colors">
                        <Phone size={14} className="text-gold" />
                      </span>
                      <div className="min-w-0">
                        <span className="text-[10px] uppercase tracking-wider text-white/50 block leading-none mb-0.5">Enquiries</span>
                        <span className="text-xs font-semibold text-white/90 group-hover/contact:text-gold transition-colors truncate block">{event.contactNumbers[0]}</span>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            );
          })()
        ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {upcomingEvents.map((event, i) => {
            const d = new Date(event.date);
            const style = typeStyle[event.type] ?? typeStyle.other;
            return (
              <div key={event.id} className="reveal group card-modern rounded-2xl overflow-hidden flex flex-col" data-delay={String(i * 90)}>
                {/* Date header */}
                <div className="relative gradient-hero text-white p-5 flex items-start justify-between overflow-hidden">
                  <div className="absolute inset-0 bg-dots-white opacity-20 pointer-events-none" aria-hidden />
                  <div className="relative">
                    <div className="text-[2.75rem] font-extrabold leading-none nums-tabular tracking-tight">
                      {d.getDate().toString().padStart(2, "0")}
                    </div>
                    <div className="text-xs font-semibold text-white/75 mt-1.5 uppercase tracking-[0.2em]">
                      {d.toLocaleString("en", { month: "short" })} {d.getFullYear()}
                    </div>
                  </div>
                  <span className={"relative badge text-[10px] capitalize " + style.badge}>
                    {event.type}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <h4 className="text-sm font-bold text-foreground group-hover:text-tea-green transition-colors leading-snug mb-3.5 flex-1">
                    {event.title}
                  </h4>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    {event.time && (
                      <div className="flex items-center gap-2">
                        <Clock size={12} className="text-gold shrink-0" /> {event.time}
                      </div>
                    )}
                    <div className="flex items-start gap-2">
                      <MapPin size={12} className="text-gold shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{event.venue}</span>
                    </div>
                  </div>
                  {event.registrationOpen ? (
                    <div className="mt-4 pt-4 border-t border-border">
                      <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-semibold text-tea-green hover:text-tea-dark transition-colors group/reg">
                        Register Now <ExternalLink size={11} className="transition-transform duration-200 group-hover/reg:translate-x-0.5 group-hover/reg:-translate-y-0.5" />
                      </Link>
                    </div>
                  ) : event.slug && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <Link href={`/events/${event.slug}`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-tea-green hover:text-tea-dark transition-colors group/reg">
                        View Details <ArrowRight size={11} className="transition-transform duration-200 group-hover/reg:translate-x-0.5" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        )}
      </div>
    </section>
  );
}
