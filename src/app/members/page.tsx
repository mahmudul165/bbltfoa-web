"use client";

import { useState, useMemo } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { members, districts } from "@/data/mock-data";
import {
  Search, Building2, MapPin, Phone, User, Hash,
  LayoutGrid, List, Factory, X,
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

/* ── Member Card (grid view) ───────────────────────────────── */
function MemberCard({ member, index = 0 }: { member: Member; index?: number }) {
  const theme = avatarThemes[index % avatarThemes.length];
  return (
    <div
      className="animate-fade-up group card-modern rounded-2xl p-5 flex flex-col"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Top: avatar + name + chips */}
      <div className="flex items-start gap-4">
        <div className={`w-14 h-14 rounded-2xl ${theme} flex items-center justify-center shadow-md shrink-0 group-hover:scale-105 group-hover:-rotate-3 transition-all duration-300`}>
          <Factory size={24} className="text-white" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-tea-green transition-colors line-clamp-2">
            {member.factoryName}
          </h3>
          <div className="flex flex-wrap items-center gap-1.5 mt-2">
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-tea-green bg-tea-pale rounded-full px-2 py-0.5">
              <Hash size={9} /> {member.membershipId}
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-gold-dark bg-gold-light rounded-full px-2 py-0.5">
              <MapPin size={9} /> {member.district}
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-border my-4" />

      {/* Details */}
      <div className="space-y-3 text-sm flex-1">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-tea-pale flex items-center justify-center shrink-0">
            <User size={14} className="text-tea-green" />
          </span>
          <div className="min-w-0">
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground block leading-none mb-0.5">Contact Person</span>
            <span className="text-foreground font-semibold truncate block">{member.contactPerson}</span>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="w-8 h-8 rounded-lg bg-tea-pale flex items-center justify-center shrink-0">
            <MapPin size={14} className="text-tea-green" />
          </span>
          <div className="min-w-0">
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground block leading-none mb-0.5">Address</span>
            <span className="text-muted-foreground leading-snug">{member.address}</span>
          </div>
        </div>
      </div>

      {/* Call button */}
      <a
        href={`tel:${member.phone.replace(/\s/g, "")}`}
        className="mt-5 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-tea-pale text-tea-green font-semibold text-sm hover:bg-tea-green hover:text-white transition-colors duration-200"
      >
        <Phone size={15} /> {member.phone}
      </a>
    </div>
  );
}

/* ── Member Row (table view) ───────────────────────────────── */
function MemberRow({ member, index }: { member: Member; index: number }) {
  return (
    <tr className={`border-b border-border last:border-0 hover:bg-tea-pale/60 transition-colors ${index % 2 ? "bg-tea-50/40" : ""}`}>
      <td className="px-4 py-4 text-sm font-semibold text-tea-green tabular-nums">{String(index + 1).padStart(2, "0")}</td>
      <td className="px-4 py-4">
        <div className="font-semibold text-foreground text-sm leading-snug">{member.factoryName}</div>
        <div className="text-[11px] text-muted-foreground mt-0.5">{member.membershipId}</div>
      </td>
      <td className="px-4 py-4 text-sm text-foreground">{member.contactPerson}</td>
      <td className="px-4 py-4 text-sm text-muted-foreground">
        <span className="inline-flex items-start gap-1.5">
          <MapPin size={13} className="text-tea-green/70 shrink-0 mt-0.5" /> {member.address}
        </span>
      </td>
      <td className="px-4 py-4">
        <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 text-sm text-tea-green hover:text-white hover:bg-tea-green font-medium whitespace-nowrap transition-colors border border-tea-green/30 rounded-full px-3 py-1">
          <Phone size={12} /> {member.phone}
        </a>
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
        m.factoryName.toLowerCase().includes(q) ||
        m.contactPerson.toLowerCase().includes(q) ||
        m.address.toLowerCase().includes(q) ||
        m.membershipId.toLowerCase().includes(q);
      const matchDistrict = district === "All Districts" || m.district === district;
      return matchSearch && matchDistrict;
    });
  }, [search, district]);

  return (
    <>
      <PageHeader
        title="Member Directory"
        subtitle={`${members.length} registered bought leaf tea factories under BBLTFOA.`}
        breadcrumbs={[{ label: "Member Directory" }]}
      />

      <section className="section-py bg-muted">
        <div className="section-container">

          {/* ── Toolbar ── */}
          <div className="bg-white rounded-2xl border border-border p-4 sm:p-5 mb-8 flex flex-col lg:flex-row gap-4 lg:items-center">
            {/* Search */}
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

            {/* District filter */}
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="input-field sm:w-52 cursor-pointer"
            >
              {districts.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>

            {/* View toggle */}
            <div className="flex items-center gap-1 bg-muted rounded-xl p-1 self-start lg:self-auto">
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

          {/* Result count */}
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 text-sm bg-white border border-border rounded-full px-3.5 py-1.5 shadow-sm">
              <Factory size={13} className="text-tea-green" />
              <strong className="text-foreground">{filtered.length}</strong>
              <span className="text-muted-foreground">of {members.length} factories</span>
            </span>
          </div>

          {/* ── Results ── */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <Search size={36} className="mx-auto mb-4 opacity-40" />
              <p className="font-semibold text-foreground mb-1">No members found</p>
              <p className="text-sm">Try adjusting your search or district filter.</p>
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
                Apply for Membership
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
