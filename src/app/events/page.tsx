import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { upcomingEvents } from "@/data/mock-data";
import { formatDate } from "@/lib/utils";
import { MapPin, Clock, CalendarCheck, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Events & Training",
  description: "Upcoming events, conferences, training workshops, and meetings organised by BBLTFOA for Bangladesh's tea industry.",
};

const typeConfig: Record<string, { label: string; color: string; emoji: string }> = {
  conference: { label: "Conference", color: "bg-purple-100 text-purple-700", emoji: "🏛️" },
  training: { label: "Training", color: "bg-tea-pale text-tea-green", emoji: "📚" },
  meeting: { label: "Meeting", color: "bg-blue-50 text-blue-700", emoji: "🤝" },
  seminar: { label: "Seminar", color: "bg-gold-light text-gold-dark", emoji: "🎤" },
  other: { label: "Other", color: "bg-muted text-muted-foreground", emoji: "📅" },
};

const trainingPrograms = [
  { title: "Good Agricultural Practices (GAP)", duration: "2 days", audience: "Field supervisors, agronomists", freq: "Quarterly" },
  { title: "Factory Processing & Quality Management", duration: "3 days", audience: "Factory managers, QC officers", freq: "Bi-annual" },
  { title: "Labour Law & HR Compliance", duration: "1 day", audience: "HR managers, owners", freq: "Annual" },
  { title: "Organic Certification Preparation", duration: "2 days", audience: "Garden owners, managers", freq: "On demand" },
  { title: "Tea Tasting & Grading", duration: "1 day", audience: "Buyers, blenders, supervisors", freq: "Quarterly" },
  { title: "Financial Management for Tea Gardens", duration: "1 day", audience: "Accountants, owners", freq: "Annual" },
];

export default function EventsPage() {
  return (
    <>
      <PageHeader
        title="Events & Training"
        subtitle="Conferences, seminars, and skills development programmes for Bangladesh's tea industry."
        breadcrumbs={[{ label: "Events & Training" }]}
      />

      <section className="section-py bg-muted">
        <div className="section-container">
          {/* Upcoming events */}
          <div className="mb-20">
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Calendar</div>
                <h2 className="text-3xl font-bold text-foreground">Upcoming Events</h2>
              </div>
            </div>

            <div className="space-y-5">
              {upcomingEvents.map((event) => {
                const d = new Date(event.date);
                const config = typeConfig[event.type];
                return (
                  <div key={event.id} className="bg-white rounded-xl border border-border p-6 card-hover flex flex-col sm:flex-row gap-6">
                    {/* Date block */}
                    <div className="gradient-tea text-white rounded-xl p-4 text-center shrink-0 w-full sm:w-24 flex sm:flex-col items-center sm:justify-center gap-4 sm:gap-0">
                      <div className="text-4xl font-bold leading-none">{d.getDate().toString().padStart(2, "0")}</div>
                      <div className="text-sm text-white/80 sm:mt-1">
                        {d.toLocaleString("default", { month: "short" })}
                      </div>
                      <div className="text-xs text-white/60">{d.getFullYear()}</div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${config.color}`}>
                          {config.emoji} {config.label}
                        </span>
                        {event.registrationOpen && (
                          <span className="text-xs font-semibold text-green-700 bg-green-50 px-2.5 py-1 rounded-full">
                            Registration Open
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3">{event.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        {event.time && (
                          <span className="flex items-center gap-1.5"><Clock size={14} className="text-tea-green" />{event.time}</span>
                        )}
                        <span className="flex items-center gap-1.5"><MapPin size={14} className="text-tea-green" />{event.venue}</span>
                      </div>
                    </div>

                    {event.registrationOpen && (
                      <div className="shrink-0 flex items-center">
                        <a href="/contact" className="btn-primary flex items-center gap-2 whitespace-nowrap">
                          <CalendarCheck size={16} /> Register
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Training programmes */}
          <div>
            <div className="text-center mb-10">
              <div className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Capacity Building</div>
              <h2 className="text-3xl font-bold text-foreground">Training Programmes</h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                BBLTFOA offers a structured calendar of industry training in partnership with
                the Bangladesh Tea Research Institute and approved consultants.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {trainingPrograms.map((prog) => (
                <div key={prog.title} className="bg-white rounded-xl border border-border p-5 card-hover">
                  <div className="text-2xl mb-3">📚</div>
                  <h4 className="font-bold text-foreground mb-3 leading-snug">{prog.title}</h4>
                  <div className="space-y-1.5 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2"><Clock size={12} className="text-tea-green" /> Duration: {prog.duration}</div>
                    <div className="flex items-center gap-2"><Users size={12} className="text-tea-green" /> For: {prog.audience}</div>
                    <div className="flex items-center gap-2"><CalendarCheck size={12} className="text-tea-green" /> Frequency: {prog.freq}</div>
                  </div>
                  <a href="/contact" className="mt-4 text-xs font-semibold text-tea-green hover:text-tea-dark transition-colors flex items-center gap-1">
                    Enquire about this programme →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
