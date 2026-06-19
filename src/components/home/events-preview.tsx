import Link from "next/link";
import { ArrowRight, MapPin, Clock, ExternalLink } from "lucide-react";
import { upcomingEvents } from "@/data/mock-data";

const typeStyle: Record<string, { badge: string; dot: string }> = {
  conference: { badge: "bg-purple-50 text-purple-700",  dot: "bg-purple-400" },
  training:   { badge: "bg-tea-pale text-tea-green",    dot: "bg-tea-green" },
  meeting:    { badge: "bg-blue-50 text-blue-700",      dot: "bg-blue-400" },
  seminar:    { badge: "bg-gold-light text-gold-dark",  dot: "bg-gold" },
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
                  {event.registrationOpen && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-semibold text-tea-green hover:text-tea-dark transition-colors group/reg">
                        Register Now <ExternalLink size={11} className="transition-transform duration-200 group-hover/reg:translate-x-0.5 group-hover/reg:-translate-y-0.5" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
