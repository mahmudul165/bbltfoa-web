import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/page-header";
import { upcomingEvents } from "@/data/mock-data";
import {
  Calendar, Clock, MapPin, Phone, ArrowLeft,
  Landmark, Ticket, Award, Users2,
} from "lucide-react";

export function generateStaticParams() {
  return upcomingEvents.filter((e) => e.slug).map((e) => ({ slug: e.slug as string }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const event = upcomingEvents.find((e) => e.slug === slug);
  if (!event) return { title: "Event Not Found" };
  return {
    title: event.title,
    description: event.description,
  };
}

export default async function EventDetailPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const event = upcomingEvents.find((e) => e.slug === slug);
  if (!event) notFound();

  const d = new Date(event.date);
  const formattedDate = d.toLocaleDateString("en-GB", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });

  return (
    <>
      <PageHeader
        title={event.title}
        subtitle={event.description}
        breadcrumbs={[{ label: "Events & Training", href: "/events" }, { label: event.title }]}
      />

      <section className="section-py bg-muted">
        <div className="section-container max-w-5xl">

          {event.theme && (
            <div className="rounded-2xl gradient-hero text-white p-6 sm:p-8 text-center mb-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-dots-white opacity-15" aria-hidden />
              <div className="relative">
                <span className="text-[11px] font-bold uppercase tracking-widest text-gold">Theme</span>
                <p className="text-lg sm:text-xl font-bold mt-2 leading-snug">{event.theme}</p>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-[1fr_320px] gap-8">

            {/* Main column */}
            <div className="space-y-8">

              {/* Schedule */}
              {event.schedule && event.schedule.length > 0 && (
                <div className="bg-white rounded-2xl border border-border shadow-sm p-6 sm:p-7">
                  <h2 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
                    <Clock size={18} className="text-tea-green" /> Programme Schedule
                  </h2>
                  <div className="space-y-0">
                    {event.schedule.map((item, i) => (
                      <div
                        key={i}
                        className={`flex gap-4 py-3 ${i < event.schedule!.length - 1 ? "border-b border-border" : ""}`}
                      >
                        <div className="w-32 sm:w-36 shrink-0 text-sm font-semibold text-tea-green">
                          {item.time}
                        </div>
                        <div className="text-sm text-muted-foreground leading-relaxed">
                          {item.programme}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Participants */}
              {event.participants && event.participants.length > 0 && (
                <div className="bg-white rounded-2xl border border-border shadow-sm p-6 sm:p-7">
                  <h2 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
                    <Users2 size={18} className="text-tea-green" /> Distinguished Participants
                  </h2>
                  <div className="space-y-4">
                    {event.participants.map((p, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-8 h-8 rounded-lg bg-tea-pale flex items-center justify-center shrink-0 mt-0.5">
                          <Award size={14} className="text-tea-green" />
                        </span>
                        <div className="min-w-0">
                          <span className="text-[10px] uppercase tracking-wider text-muted-foreground block leading-none mb-1">
                            {p.role}
                          </span>
                          <span className="text-sm font-semibold text-foreground leading-snug">{p.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24 self-start">
              <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
                <h3 className="text-xs font-bold uppercase tracking-wide text-tea-green mb-4">Event Details</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Calendar size={15} className="text-tea-green shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium leading-snug">
                      {formattedDate}
                      {event.bsDate && (
                        <span className="block text-xs text-muted-foreground font-normal mt-0.5">{event.bsDate}</span>
                      )}
                    </span>
                  </li>
                  {event.time && (
                    <li className="flex items-start gap-3">
                      <Clock size={15} className="text-tea-green shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium leading-snug">{event.time}</span>
                    </li>
                  )}
                  <li className="flex items-start gap-3">
                    <MapPin size={15} className="text-tea-green shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium leading-snug">{event.venue}</span>
                  </li>
                  {event.organiser && (
                    <li className="flex items-start gap-3">
                      <Landmark size={15} className="text-tea-green shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium leading-snug">{event.organiser}</span>
                    </li>
                  )}
                  {event.attendanceNote && (
                    <li className="flex items-start gap-3">
                      <Ticket size={15} className="text-tea-green shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium leading-snug">{event.attendanceNote}</span>
                    </li>
                  )}
                </ul>
              </div>

              {event.kindlyNote && event.kindlyNote.length > 0 && (
                <div className="bg-tea-pale/60 rounded-2xl border border-tea-green/15 p-6">
                  <h3 className="text-xs font-bold uppercase tracking-wide text-tea-green mb-3">
                    Kindly Note
                  </h3>
                  <ul className="space-y-2.5">
                    {event.kindlyNote.map((note, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/80 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-tea-green mt-1.5 shrink-0" />
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {event.contactNumbers && event.contactNumbers.length > 0 && (
                <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
                  <h3 className="text-xs font-bold uppercase tracking-wide text-tea-green mb-4">
                    Attendance Queries
                  </h3>
                  <ul className="space-y-2.5">
                    {event.contactNumbers.map((num) => (
                      <li key={num}>
                        <a
                          href={`tel:${num.replace(/[^\d+]/g, "")}`}
                          className="flex items-center gap-2 text-sm font-semibold text-tea-green hover:text-tea-dark transition-colors"
                        >
                          <Phone size={14} /> {num}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-sm font-semibold text-tea-green hover:text-tea-dark transition-colors"
              >
                <ArrowLeft size={15} /> Back to Events
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
