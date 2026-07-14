import fs from "node:fs";
import path from "node:path";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/page-header";
import { executiveCommittee } from "@/data/mock-data";
import type { ExecutiveMember } from "@/types/bbtfoa";
import { Building2, MapPin, Award, Crown, Leaf } from "lucide-react";

/* Auto-resolve member photos from /public/members at build time.
   Drop a file named after the member (e.g. "Md. Sheikh Farid.jpeg") into
   the member-images pipeline and it appears here — no data edits needed. */
const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const availablePhotos: Set<string> = (() => {
  try {
    return new Set(
      fs
        .readdirSync(path.join(process.cwd(), "public", "members"))
        .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
        .map((f) => f.replace(/\.[^.]+$/, "")),
    );
  } catch {
    return new Set<string>();
  }
})();

const photoFor = (name: string): string | undefined => {
  const slug = slugify(name);
  return availablePhotos.has(slug) ? `/members/${slug}.jpg` : undefined;
};

export const metadata: Metadata = {
  title: "Executive Committee",
  description:
    "The elected Executive Committee of BBLTFOA for the 2026–2028 term, representing Bangladesh's bought leaf tea factory owners.",
};

const designationBadge: Record<string, { bg: string; text: string }> = {
  "President":              { bg: "bg-gold text-white",                    text: "President"              },
  "Vice-President":         { bg: "bg-tea-green text-white",               text: "Vice-President"         },
  "General Secretary":      { bg: "bg-tea-dark text-white",                text: "General Secretary"      },
  "Joint General Secretary":{ bg: "bg-tea-mid text-white",                 text: "Joint Gen. Secretary"  },
  "Treasurer":              { bg: "bg-amber-600 text-white",               text: "Treasurer"              },
  "Executive Member":       { bg: "bg-secondary text-secondary-foreground",text: "Executive Member"       },
};

const electionBoard = [
  { name: "Md. Jahangir Alam",      role: "Chairman, Election Board" },
  { name: "Md. Arifuzzaman Sumon",  role: "Member, Election Board" },
  { name: "Furat Jahan Sathi",      role: "Member, Election Board" },
];

const locations: Record<string, string> = {
  "1": "Boyalimari, Jagdal, Panchagarh",
  "2": "Sarkarpara, Debiganj, Panchagarh",
  "3": "Sardarpara, Tetulia, Panchagarh",
  "4": "Lahirihat, Baliadangi, Thakurgaon",
  "5": "Moulvipara, Jagdal, Panchagarh",
  "6": "Dudumari, Panchagarh Sadar",
  "7": "Chokravita, Jagdal, Panchagarh",
  "8": "Thutapakhuri, Jagdal, Panchagarh",
  "9": "Krishnanagar, Mirzapur, Atwari",
  "10": "Majhipara, Tetulia, Panchagarh",
  "11": "Shingpara, Futkibari, Panchagarh",
  "12": "Thilamani, Moyandighi, Boda, Panchagarh",
};

/* Decorative botanical corner flourish */
function LeafCorner({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden>
      <path
        d="M100 190C60 150 20 120 20 70 20 40 45 15 80 15c30 0 55 22 55 55 0 45-35 75-35 120Z"
        fill="currentColor"
      />
      <path d="M100 185C100 120 80 60 45 30" stroke="currentColor" strokeOpacity=".5" strokeWidth="3" />
    </svg>
  );
}

/* ── Apex node: President & General Secretary (gradient-framed) ── */
function ChiefCard({ member }: { member: ExecutiveMember }) {
  const isPresident = member.designation === "President";
  const photo = isPresident ? "/president.jpg" : photoFor(member.name);
  const loc = locations[member.id];
  const badge = designationBadge[member.designation] ?? designationBadge["Executive Member"];
  const frame = isPresident
    ? "from-gold-vivid via-gold to-gold-dark"
    : "from-tea-mid via-tea-green to-tea-darkest";
  const glow = isPresident ? "bg-gold/40" : "bg-tea-green/30";

  return (
    <div className="reveal w-full sm:w-[19rem]">
      <div
        className={`relative rounded-[1.6rem] p-[2.5px] bg-gradient-to-br ${frame} shadow-[0_22px_48px_-18px_rgba(28,88,48,.45)] transition-transform duration-300 hover:-translate-y-1.5`}
      >
        <div className="group rounded-[1.45rem] bg-white overflow-hidden text-center">
          {/* Crown strip */}
          <div className="relative h-20 gradient-hero">
            <div className="absolute inset-0 bg-dots-white opacity-25" aria-hidden />
            <div className="absolute top-3.5 left-1/2 -translate-x-1/2">
              {isPresident ? <Crown size={18} className="text-gold-light" /> : <Leaf size={16} className="text-tea-light" />}
            </div>
          </div>

          <div className="px-6 pb-7 -mt-16 relative">
            {/* Avatar with glow */}
            <div className="relative mx-auto w-32 h-32">
              <span className={`absolute inset-1 rounded-full blur-md ${glow}`} aria-hidden />
              <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-white shadow-lg bg-tea-pale flex items-center justify-center">
                {photo ? (
                  <Image
                    src={photo}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <span className="text-4xl font-black text-tea-green">{member.name.charAt(0)}</span>
                )}
              </div>
            </div>

            <span className={`inline-flex items-center gap-1.5 mt-4 text-[11px] font-bold px-3 py-1 rounded-full ${badge.bg}`}>
              {isPresident && <Award size={12} />}
              {badge.text}
            </span>

            <h3 className="font-serif text-xl text-tea-darkest mt-2.5 leading-tight">{member.name}</h3>
            <span className="block mx-auto mt-2.5 h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" aria-hidden />

            {member.company && (
              <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground mt-3">
                <Building2 size={13} className="text-tea-green shrink-0" />
                <span className="leading-snug">{member.company}</span>
              </p>
            )}
            {loc && (
              <p className="flex items-center justify-center gap-1 text-[11px] text-muted-foreground/70 mt-1">
                <MapPin size={11} className="shrink-0" /> {loc}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Standard board node (Deputies · Treasurer · Members) ── */
function NodeCard({ member, size = "md" }: { member: ExecutiveMember; size?: "md" | "sm" }) {
  const badge = designationBadge[member.designation] ?? designationBadge["Executive Member"];
  const photo = photoFor(member.name);
  const loc = locations[member.id];
  const avatar = size === "md" ? "w-20 h-20" : "w-16 h-16";
  const pull = size === "md" ? "-mt-11" : "-mt-10";

  return (
    <div className="node-drop reveal h-full">
      <div className="group card-modern rounded-2xl overflow-hidden text-center h-full">
        <div className="h-14 gradient-hero relative">
          <div className="absolute inset-0 bg-dots-white opacity-20" aria-hidden />
        </div>
        <div className={`px-4 pb-5 relative ${pull}`}>
          <div className={`${avatar} mx-auto rounded-full overflow-hidden ring-4 ring-white bg-tea-pale shadow-md flex items-center justify-center`}>
            {photo ? (
              <Image
                src={photo}
                alt={member.name}
                width={96}
                height={96}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <span className="text-xl font-black text-tea-green">{member.name.charAt(0)}</span>
            )}
          </div>
          <span className={`inline-flex items-center gap-1 mt-3 text-[10px] font-bold px-2.5 py-1 rounded-full ${badge.bg}`}>
            {badge.text}
          </span>
          <h4 className={`font-bold text-foreground mt-2 leading-snug group-hover:text-tea-green transition-colors ${size === "md" ? "text-sm" : "text-[13px]"}`}>
            {member.name}
          </h4>
          {member.company && (
            <p className="text-xs text-muted-foreground mt-1.5 leading-snug">{member.company}</p>
          )}
          {loc && (
            <p className="flex items-center justify-center gap-1 text-[10px] text-muted-foreground/70 mt-1">
              <MapPin size={10} className="shrink-0" /> {loc}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/* Small left-aligned rank label for a board tier */
function TierLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-7">
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/60" aria-hidden />
      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-tea-green">{children}</span>
      <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/60" aria-hidden />
    </div>
  );
}

export default function ExecutiveCommitteePage() {
  // Board tiers (order preserved from data → matches election ranking)
  const tier1 = executiveCommittee.filter((m) =>
    ["President", "General Secretary"].includes(m.designation));
  const tier2 = executiveCommittee.filter((m) =>
    ["Vice-President", "Joint General Secretary"].includes(m.designation));
  const tier3 = executiveCommittee.filter((m) =>
    ["Treasurer", "Executive Member"].includes(m.designation));

  return (
    <>
      <PageHeader
        title="Executive Committee"
        breadcrumbs={[
          { label: "About BBLTFOA", href: "/about" },
          { label: "Executive Committee" },
        ]}
      />

      <section className="section-py bg-muted">
        <div className="section-container">

          {/* ── Executive Committee Board ── */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="section-label mb-3">Governing Body</span>
              <h2 className="mt-3 text-foreground">Executive Committee Board</h2>
            </div>

            {/* Board panel */}
            <div className="relative board-panel rounded-[1.9rem] border border-border shadow-[0_28px_64px_-28px_rgba(20,80,40,.28)] p-6 sm:p-10 lg:p-14 overflow-hidden">
              <LeafCorner className="absolute -top-8 -left-8 w-44 h-44 text-tea-green/[0.05] rotate-12 pointer-events-none" />
              <LeafCorner className="absolute -bottom-10 -right-10 w-56 h-56 text-gold/[0.06] -rotate-12 pointer-events-none" />
              <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" aria-hidden />

              <div className="relative">
                {/* Tier 1 — Chief office bearers */}
                <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
                  {tier1.map((m) => (
                    <ChiefCard key={m.id} member={m} />
                  ))}
                </div>

                {/* Tier 2 — Vice-Presidents & Joint Secretaries */}
                <div className="mt-14">
                  <div className="board-bus grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
                    {tier2.map((m) => (
                      <NodeCard key={m.id} member={m} size="md" />
                    ))}
                  </div>
                </div>

                {/* Tier 3 — Treasurer & Executive Members */}
                <div className="mt-14">
                  <div className="board-bus grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5">
                    {tier3.map((m) => (
                      <NodeCard key={m.id} member={m} size="sm" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Election Board ── */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <span className="section-label mb-3">Oversight</span>
              <h2 className="mt-3 text-foreground">Election Board</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
              {electionBoard.map((m, i) => {
                const photo = photoFor(m.name);
                const isChair = m.role.startsWith("Chairman");
                return (
                  <div
                    key={m.name}
                    className="reveal group card-modern rounded-2xl p-6 flex flex-col items-center text-center"
                    data-delay={String(i * 60)}
                  >
                    <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-tea-pale bg-tea-pale flex items-center justify-center shadow-sm">
                      {photo ? (
                        <Image src={photo} alt={m.name} width={80} height={80} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" />
                      ) : (
                        <span className="text-xl font-black text-tea-green">{m.name.charAt(0)}</span>
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-foreground mt-3 leading-snug group-hover:text-tea-green transition-colors">{m.name}</h4>
                    <span className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-0.5 rounded-full mt-2 ${isChair ? "bg-gold text-white" : "bg-tea-pale text-tea-green"}`}>
                      {isChair && <Award size={10} />} {m.role}
                    </span>
                    <span className="text-[10px] text-muted-foreground/70 mt-1">BBLTFOA</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-14 p-6 rounded-2xl bg-white border border-border text-sm text-muted-foreground text-center shadow-sm">
            The Executive Committee is elected bi-annually at the BBLTFOA General Meeting.
            Current term: <strong className="text-foreground">April 2026 – 2028</strong>.
            <br className="hidden sm:block" />
            Registered Office: House #28, Road #28, 1st Floor, Block-K, Banani, Dhaka-1213.
          </div>
        </div>
      </section>
    </>
  );
}
