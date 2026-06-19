import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/page-header";
import { executiveCommittee } from "@/data/mock-data";
import { Building2, MapPin, Award } from "lucide-react";

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

export default function ExecutiveCommitteePage() {
  const officeBearers = executiveCommittee.filter((m) => m.order <= 7);
  const execMembers   = executiveCommittee.filter((m) => m.order >  7);

  return (
    <>
      <PageHeader
        title="Executive Committee"
        subtitle="Elected leadership of BBLTFOA — Bi-ennial Term 2026–2028."
        breadcrumbs={[
          { label: "About BBLTFOA", href: "/about" },
          { label: "Executive Committee" },
        ]}
      />

      <section className="section-py bg-muted">
        <div className="section-container">

          {/* ── Office Bearers ── */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="section-label mb-3">Leadership</span>
              <h2 className="mt-3 text-foreground">Office Bearers</h2>
            </div>

            {/* President — featured */}
            <div className="reveal mb-8">
              {officeBearers.filter(m => m.designation === "President").map(member => (
                <div key={member.id} className="relative rounded-3xl overflow-hidden border border-border bg-white shadow-lg lg:flex">
                  {/* Photo with gradient frame */}
                  <div className="relative h-72 lg:h-auto lg:w-72 shrink-0 gradient-hero p-1.5">
                    <div className="relative w-full h-full lg:min-h-[20rem] rounded-2xl overflow-hidden bg-tea-pale">
                      <Image
                        src="/president.jpg"
                        alt={`${member.name}, President of BBLTFOA`}
                        fill priority
                        sizes="(max-width: 1024px) 100vw, 288px"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                  {/* Details */}
                  <div className="p-8 lg:p-10 flex-1 flex flex-col justify-center relative">
                    <Award size={120} className="absolute -right-4 -top-4 text-tea-pale/60 pointer-events-none" aria-hidden />
                    <span className="inline-flex w-fit items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full gradient-gold text-white mb-4 relative">
                      <Award size={13} /> {member.designation}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 relative">{member.name}</h3>
                    <div className="space-y-1.5 relative">
                      {member.company && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Building2 size={15} className="text-tea-green shrink-0" />
                          <span className="text-sm font-medium">{member.company}</span>
                        </div>
                      )}
                      {locations[member.id] && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin size={15} className="text-tea-green shrink-0" />
                          <span className="text-sm">{locations[member.id]}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-5 border-t border-border pt-5 leading-relaxed relative">
                      Leads the association&rsquo;s executive body for the 2026&ndash;2028 term,
                      representing the Bangladesh Bought Leaf Tea Factory Owners Association (BBLTFOA).
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Other office bearers grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {officeBearers.filter(m => m.designation !== "President").map((member, i) => {
                const badge = designationBadge[member.designation] ?? designationBadge["Executive Member"];
                const photo = photoFor(member.name);
                return (
                  <div
                    key={member.id}
                    className="reveal group card-modern rounded-2xl overflow-hidden text-center"
                    data-delay={String(i * 60)}
                  >
                    {/* Gradient header with overlapping avatar */}
                    <div className="h-20 gradient-hero relative">
                      <div className="absolute inset-0 bg-dots-white opacity-20" aria-hidden />
                      <span className={`absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full ${badge.bg}`}>
                        {badge.text}
                      </span>
                    </div>
                    <div className="px-5 pb-6 -mt-12 relative">
                      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-white bg-tea-pale shadow-md flex items-center justify-center">
                        {photo ? (
                          <Image src={photo} alt={member.name} width={96} height={96} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" />
                        ) : (
                          <span className="text-2xl font-black text-tea-green">{member.name.charAt(0)}</span>
                        )}
                      </div>
                      <h3 className="font-bold text-foreground mt-4 leading-snug group-hover:text-tea-green transition-colors">{member.name}</h3>
                      {member.company && (
                        <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground mt-2">
                          <Building2 size={12} className="text-tea-green shrink-0" />
                          <span className="leading-snug">{member.company}</span>
                        </p>
                      )}
                      {locations[member.id] && (
                        <p className="flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground/70 mt-1">
                          <MapPin size={11} className="shrink-0" /> {locations[member.id]}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Executive Members ── */}
          <div>
            <div className="text-center mb-12">
              <span className="section-label mb-3">Committee</span>
              <h2 className="mt-3 text-foreground">Executive Members</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {execMembers.map((member, i) => {
                const photo = photoFor(member.name);
                return (
                <div
                  key={member.id}
                  className="reveal group card-modern rounded-2xl p-5 flex flex-col items-center text-center"
                  data-delay={String(i * 50)}
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-tea-pale bg-tea-pale flex items-center justify-center shadow-sm">
                    {photo ? (
                      <Image src={photo} alt={member.name} width={80} height={80} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" />
                    ) : (
                      <span className="text-xl font-black text-tea-green">{member.name.charAt(0)}</span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-foreground mt-3 leading-snug group-hover:text-tea-green transition-colors">{member.name}</h4>
                  <span className="text-[10px] font-semibold text-gold-dark bg-gold-light px-2 py-0.5 rounded-full mt-1.5">Executive Member</span>
                  {member.company && (
                    <p className="text-xs text-muted-foreground mt-2 leading-snug">{member.company}</p>
                  )}
                  {locations[member.id] && (
                    <p className="flex items-center justify-center gap-1 text-[10px] text-muted-foreground/70 mt-1">
                      <MapPin size={10} className="shrink-0" /> {locations[member.id]}
                    </p>
                  )}
                </div>
                );
              })}
            </div>
          </div>

          {/* ── Election Board ── */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <span className="section-label mb-3">Oversight</span>
              <h2 className="mt-3 text-foreground">Election Board</h2>
              <p className="text-muted-foreground text-sm mt-2 max-w-xl mx-auto">
                The independent board that oversaw the bi-ennial election of the
                2026–2028 Executive Committee.
              </p>
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
