"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { PageHeader } from "@/components/layout/page-header";
import { members } from "@/data/mock-data";
import {
  Search, MapPin, Phone, User, Hash,
  LayoutGrid, List, Factory, X, Users, CalendarDays, ArrowRight, Leaf,
} from "lucide-react";
import type { Member } from "@/types/bbtfoa";

/* Tea-leaf green palette — young bud → mature leaf shades, cycled per card */
const avatarThemes = [
  "bg-gradient-to-br from-lime-400 to-green-600",      // young bud
  "bg-gradient-to-br from-green-400 to-emerald-700",   // fresh leaf
  "bg-gradient-to-br from-emerald-500 to-tea-dark",    // deep leaf
  "bg-gradient-to-br from-lime-500 to-tea-green",      // bright leaf
  "bg-gradient-to-br from-green-500 to-green-800",     // mature leaf
  "bg-gradient-to-br from-teal-400 to-emerald-700",    // dewy leaf
];

/* ── Directory-wide figures (computed once from static data) ── */
const totalFactories = members.filter((m) => m.factoryName).length;
const districtCounts = members.reduce<Record<string, number>>((acc, m) => {
  if (m.district) acc[m.district] = (acc[m.district] ?? 0) + 1;
  return acc;
}, {});
const activeDistricts = Object.keys(districtCounts).sort();

const overviewStats = [
  { icon: Users,        label: "Total Members",   value: String(members.length) },
  { icon: Factory,      label: "Tea Factories",   value: String(totalFactories) },
  { icon: MapPin,       label: "Districts",       value: String(activeDistricts.length) },
  { icon: CalendarDays, label: "Established",      value: "1998" },
];

/* ── Member Card (grid view) ───────────────────────────────── */
function MemberCard({ member, index = 0 }: { member: Member; index?: number }) {
  const theme = avatarThemes[index % avatarThemes.length];
  const hasFactory = Boolean(member.factoryName);
  const title = member.factoryName ?? member.contactPerson;

  return (
    <div
      className="animate-fade-up group card-modern rounded-2xl overflow-hidden flex flex-col relative"
      style={{ animationDelay: `${index * 55}ms` }}
    >
      {/* Decorative leaf watermark */}
      <Leaf aria-hidden className="absolute -right-2 -top-2 w-16 h-16 text-tea-green/[0.06] rotate-12 pointer-events-none" />

      {/* Header: avatar + name + chips */}
      <div className="relative p-5 pb-4 flex items-start gap-4 bg-gradient-to-br from-tea-50/70 to-transparent">
        {member.imageUrl ? (
          <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-md shrink-0 ring-2 ring-white group-hover:scale-105 transition-transform duration-300">
            <Image src={member.imageUrl} alt={member.contactPerson} fill sizes="56px" className="object-cover object-top" />
          </div>
        ) : (
          <div className={`w-14 h-14 rounded-2xl ${theme} flex items-center justify-center shadow-md shrink-0 group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-300`}>
            <Factory size={24} className="text-white" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-tea-green transition-colors line-clamp-2">
            {title}
          </h3>
          <div className="flex flex-wrap items-center gap-1.5 mt-2">
            {member.membershipId && (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-tea-green bg-tea-pale rounded-full px-2 py-0.5">
                <Hash size={9} /> {member.membershipId}
              </span>
            )}
            {member.district && (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-gold-dark bg-gold-light rounded-full px-2 py-0.5">
                <MapPin size={9} /> {member.district}
              </span>
            )}
            {member.designation && (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-tea-green bg-tea-pale rounded-full px-2 py-0.5">
                {member.designation}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-border mx-5" />

      {/* Details */}
      <div className="relative p-5 pt-4 space-y-3 text-sm flex-1">
        {hasFactory && (
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-tea-pale flex items-center justify-center shrink-0">
              <User size={14} className="text-tea-green" />
            </span>
            <div className="min-w-0">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground block leading-none mb-0.5">Contact Person</span>
              <span className="text-foreground font-semibold truncate block">{member.contactPerson}</span>
            </div>
          </div>
        )}
        {member.address ? (
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-lg bg-tea-pale flex items-center justify-center shrink-0">
              <MapPin size={14} className="text-tea-green" />
            </span>
            <div className="min-w-0">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground block leading-none mb-0.5">Address</span>
              <span className="text-muted-foreground leading-snug">{member.address}</span>
            </div>
          </div>
        ) : !hasFactory ? (
          <p className="text-xs text-muted-foreground/70 italic pl-0.5">Factory & contact details to be updated.</p>
        ) : null}
      </div>

      {/* Call button */}
      <div className="relative px-5 pb-5">
        {member.phone ? (
          <a
            href={`tel:${member.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-tea-pale text-tea-green font-semibold text-sm hover:bg-tea-green hover:text-white transition-colors duration-200"
          >
            <Phone size={15} /> {member.phone}
          </a>
        ) : (
          <span className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-muted text-muted-foreground/70 font-medium text-sm cursor-default">
            <Phone size={15} /> Not available
          </span>
        )}
      </div>
    </div>
  );
}

/* ── Member Row (table view) ───────────────────────────────── */
function MemberRow({ member, index }: { member: Member; index: number }) {
  return (
    <tr className={`border-b border-border last:border-0 hover:bg-tea-pale/60 transition-colors ${index % 2 ? "bg-tea-50/40" : ""}`}>
      <td className="px-4 py-4 text-sm font-semibold text-tea-green tabular-nums">{String(index + 1).padStart(2, "0")}</td>
      <td className="px-4 py-4">
        <div className="font-semibold text-foreground text-sm leading-snug">{member.factoryName ?? member.designation ?? "—"}</div>
        <div className="text-[11px] text-muted-foreground mt-0.5">{member.membershipId ?? member.designation ?? ""}</div>
      </td>
      <td className="px-4 py-4 text-sm text-foreground">
        <div className="flex items-center gap-2.5">
          {member.imageUrl ? (
            <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 ring-1 ring-border">
              <Image src={member.imageUrl} alt={member.contactPerson} fill sizes="32px" className="object-cover object-top" />
            </div>
          ) : (
            <span className="w-8 h-8 rounded-full bg-tea-pale text-tea-green flex items-center justify-center shrink-0">
              <User size={13} />
            </span>
          )}
          {member.contactPerson}
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-muted-foreground">
        {member.address ? (
          <span className="inline-flex items-start gap-1.5">
            <MapPin size={13} className="text-tea-green/70 shrink-0 mt-0.5" /> {member.address}
          </span>
        ) : (
          <span className="text-muted-foreground/60">Not yet available</span>
        )}
      </td>
      <td className="px-4 py-4">
        {member.phone ? (
          <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 text-sm text-tea-green hover:text-white hover:bg-tea-green font-medium whitespace-nowrap transition-colors border border-tea-green/30 rounded-full px-3 py-1">
            <Phone size={12} /> {member.phone}
          </a>
        ) : (
          <span className="text-muted-foreground/60 text-sm">—</span>
        )}
      </td>
    </tr>
  );
}

export default function MembersPage() {
  const [search, setSearch] = useState("");
  const [district, setDistrict] = useState("All Districts");
  const [view, setView] = useState<"grid" | "table">("grid");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return members.filter((m) => {
      const matchSearch =
        !q ||
        (m.factoryName ?? "").toLowerCase().includes(q) ||
        m.contactPerson.toLowerCase().includes(q) ||
        (m.address ?? "").toLowerCase().includes(q) ||
        (m.membershipId ?? "").toLowerCase().includes(q);
      const matchDistrict = district === "All Districts" || m.district === district;
      return matchSearch && matchDistrict;
    });
  }, [search, district]);

  const hasFilters = search !== "" || district !== "All Districts";

  return (
    <>
      <PageHeader
        title="Member Directory"
        subtitle={`${members.length} registered bought leaf tea factories under BBLTFOA.`}
        breadcrumbs={[{ label: "Member Directory" }]}
      />

      <section className="section-py relative overflow-hidden bg-gradient-to-b from-tea-50 via-muted to-white">
        <div aria-hidden className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
        <div aria-hidden className="absolute -top-24 -left-32 w-[26rem] h-[26rem] rounded-full bg-tea-green/[0.08] blur-3xl pointer-events-none" />
        <div aria-hidden className="absolute top-1/3 -right-32 w-[22rem] h-[22rem] rounded-full bg-gold/[0.10] blur-3xl pointer-events-none" />
        <div className="section-container relative">

          {/* ── Overview stats ── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {overviewStats.map((s, i) => (
              <div
                key={s.label}
                className="animate-fade-up card-modern rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 bg-gradient-to-br from-white to-tea-50/60"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="w-11 h-11 rounded-xl gradient-tea flex items-center justify-center shrink-0 shadow-sm">
                  <s.icon size={18} className="text-white" />
                </span>
                <div>
                  <div className="text-2xl font-extrabold text-foreground leading-none nums-tabular">{s.value}</div>
                  <div className="text-[11px] text-muted-foreground mt-1 font-medium">{s.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Toolbar ── */}
          <div className="bg-white rounded-2xl border border-border p-4 sm:p-5 mb-6 space-y-4 shadow-sm">
            {/* Search + view toggle */}
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search factory, contact person, address, or ID…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="input-field pl-10 pr-9"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    aria-label="Clear search"
                  >
                    <X size={15} />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-1 bg-muted rounded-xl p-1 self-start sm:self-auto shrink-0">
                <button
                  onClick={() => setView("grid")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    view === "grid" ? "bg-white text-tea-green shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-label="Grid view"
                >
                  <LayoutGrid size={14} /> Cards
                </button>
                <button
                  onClick={() => setView("table")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    view === "table" ? "bg-white text-tea-green shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-label="Table view"
                >
                  <List size={14} /> Table
                </button>
              </div>
            </div>

            {/* District filter chips */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mr-1">District</span>
              <button
                onClick={() => setDistrict("All Districts")}
                className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                  district === "All Districts"
                    ? "bg-tea-green text-white border-tea-green shadow-sm"
                    : "bg-white text-foreground border-border hover:border-tea-green/50 hover:text-tea-green"
                }`}
              >
                All
                <span className={`text-[10px] px-1.5 rounded-full ${district === "All Districts" ? "bg-white/25" : "bg-muted"}`}>{members.length}</span>
              </button>
              {activeDistricts.map((d) => {
                const active = district === d;
                return (
                  <button
                    key={d}
                    onClick={() => setDistrict(d)}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                      active
                        ? "bg-tea-green text-white border-tea-green shadow-sm"
                        : "bg-white text-foreground border-border hover:border-tea-green/50 hover:text-tea-green"
                    }`}
                  >
                    <MapPin size={11} className={active ? "text-white" : "text-tea-green"} />
                    {d}
                    <span className={`text-[10px] px-1.5 rounded-full ${active ? "bg-white/25" : "bg-muted"}`}>{districtCounts[d]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Result count */}
          <div className="flex items-center justify-between gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 text-sm bg-white border border-border rounded-full px-3.5 py-1.5 shadow-sm">
              <Factory size={13} className="text-tea-green" />
              <strong className="text-foreground">{filtered.length}</strong>
              <span className="text-muted-foreground">of {members.length} factories</span>
            </span>
            {hasFilters && (
              <button
                onClick={() => { setSearch(""); setDistrict("All Districts"); }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-tea-green transition-colors"
              >
                <X size={13} /> Clear filters
              </button>
            )}
          </div>

          {/* ── Results ── */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground bg-white rounded-2xl border border-border">
              <Search size={36} className="mx-auto mb-4 opacity-40" />
              <p className="font-semibold text-foreground mb-1">No members found</p>
              <p className="text-sm mb-5">Try adjusting your search or district filter.</p>
              {hasFilters && (
                <button
                  onClick={() => { setSearch(""); setDistrict("All Districts"); }}
                  className="btn-primary inline-flex text-xs"
                >
                  Reset filters
                </button>
              )}
            </div>
          ) : view === "grid" ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((m, i) => <MemberCard key={m.id} member={m} index={i} />)}
            </div>
          ) : (
            <div className="animate-fade-up bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] border-collapse">
                  <thead>
                    <tr className="gradient-hero text-left">
                      <th className="px-4 py-4 text-[11px] font-bold uppercase tracking-widest text-white/90 w-14">#</th>
                      <th className="px-4 py-4 text-[11px] font-bold uppercase tracking-widest text-white/90">Factory Name</th>
                      <th className="px-4 py-4 text-[11px] font-bold uppercase tracking-widest text-white/90">Contact Person</th>
                      <th className="px-4 py-4 text-[11px] font-bold uppercase tracking-widest text-white/90">Address</th>
                      <th className="px-4 py-4 text-[11px] font-bold uppercase tracking-widest text-white/90">Contact No.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((m, i) => <MemberRow key={m.id} member={m} index={i} />)}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ── Join CTA ── */}
          <div className="mt-14 rounded-3xl gradient-hero text-white p-8 sm:p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-dots-white opacity-20" aria-hidden />
            <div className="relative">
              <h3 className="text-2xl font-bold mb-3">Become a BBLTFOA Member</h3>
              <p className="text-white/75 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
                Bought leaf tea factory owners are invited to join BBLTFOA and access industry
                representation, training, fair-pricing advocacy, and welfare support.
              </p>
              <a href="/contact" className="btn-gold inline-flex">
                Apply for Membership <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
