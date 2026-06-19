import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/page-header";
import { upcomingEvents } from "@/data/mock-data";
import {
  Calendar, Clock, MapPin, Phone, ArrowLeft,
  Landmark, Ticket, Award, Users2, Leaf, Trophy, Quote, PenTool,
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

      <section className="section-py bg-gradient-to-b from-tea-pale/40 via-muted to-muted">
        <div className="section-container max-w-5xl">

          {/* Date + theme hero */}
          <div className="rounded-3xl gradient-hero text-white p-7 sm:p-10 mb-10 relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-dots-white opacity-15" aria-hidden />
            <div className="relative flex flex-col sm:flex-row items-center sm:items-stretch gap-6 sm:gap-8">
              <div className="flex sm:flex-col items-center justify-center gap-3 sm:gap-1 sm:border-r sm:border-white/15 sm:pr-8 shrink-0">
                <div className="text-5xl sm:text-6xl font-extrabold leading-none tracking-tight">
                  {d.getDate().toString().padStart(2, "0")}
                </div>
                <div className="text-sm font-semibold text-white/70 uppercase tracking-[0.2em]">
                  {d.toLocaleString("en", { month: "long" })} {d.getFullYear()}
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                {event.theme && (
                  <>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-gold">
                      <Leaf size={12} /> Theme
                    </span>
                    <p className="text-lg sm:text-xl font-bold mt-2 leading-snug">{event.theme}</p>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_320px] gap-8">

            {/* Main column */}
            <div className="space-y-8">

              {/* Formal invitation */}
              {event.invitationNote && (
                <div className="relative bg-white rounded-2xl border border-border shadow-sm p-6 sm:p-7 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-tea-green via-gold to-tea-green" />
                  <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <Quote size={18} className="text-tea-green" /> Invitation
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    {event.invitationNote}
                  </p>

                  {event.issuedBy && event.issuedBy.length > 0 && (
                    <div className="mt-6 pt-5 border-t border-border grid sm:grid-cols-2 gap-5">
                      {event.issuedBy.map((p, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="w-8 h-8 rounded-lg bg-tea-pale flex items-center justify-center shrink-0">
                            <PenTool size={14} className="text-tea-green" />
                          </span>
                          <div className="min-w-0">
                            <span className="text-sm font-bold text-foreground leading-snug block">{p.name}</span>
                            <span className="text-xs text-muted-foreground">{p.designation}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* National Tea Award highlight */}
              <div className="rounded-2xl bg-gradient-to-br from-gold-light to-gold-light/40 border border-gold/30 p-6 sm:p-7 flex items-center gap-5">
                <span className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold to-gold-dark text-white flex items-center justify-center shrink-0 shadow-md">
                  <Trophy size={26} />
                </span>
                <div>
                  <h3 className="text-base font-bold text-foreground leading-snug">National Tea Award 2026</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                    Presented across multiple categories during the programme, followed by a photo session and a visit to the accompanying Tea Fair.
                  </p>
                </div>
              </div>

              {/* Schedule */}
              {event.schedule && event.schedule.length > 0 && (
                <div className="bg-white rounded-2xl border border-border shadow-sm p-6 sm:p-7">
                  <h2 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
                    <Clock size={18} className="text-tea-green" /> Programme Schedule
                  </h2>
                  <div className="relative space-y-0">
                    <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" aria-hidden />
                    {event.schedule.map((item, i) => (
                      <div key={i} className="relative flex gap-4 py-3 pl-6">
                        <span className="absolute left-0 top-[18px] w-3.5 h-3.5 rounded-full bg-tea-green ring-4 ring-tea-pale" />
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
                  <div className="grid sm:grid-cols-2 gap-4">
                    {event.participants.map((p, i) => (
                      <div key={i} className="flex items-start gap-3 rounded-xl p-3 bg-muted/60">
                        <span className="w-9 h-9 rounded-lg bg-tea-pale flex items-center justify-center shrink-0 mt-0.5">
                          <Award size={15} className="text-tea-green" />
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
              <div className="relative bg-white rounded-2xl border border-border shadow-sm p-6 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-tea-green to-tea-light" />
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
                <div className="relative bg-white rounded-2xl border border-border shadow-sm p-6 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-dark to-gold" />
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
