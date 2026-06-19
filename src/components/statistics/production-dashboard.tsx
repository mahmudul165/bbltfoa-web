"use client";

import { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  LineChart,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";
import { ArrowUp, ArrowDown, ArrowUpDown, Search, TrendingUp, Factory, Trophy, Percent, Sparkles } from "lucide-react";
import {
  factoryProduction,
  officialTotals,
  PRODUCTION_YEARS,
} from "@/data/factory-production";
import { CountUp } from "@/components/ui/count-up";

/* ── Helpers ─────────────────────────────────────────────── */
const nf = new Intl.NumberFormat("en-US");
const fmt = (n: number | null) => (n === null ? "—" : nf.format(n));
const fmtCompact = (n: number) =>
  new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(n);

const years = [...PRODUCTION_YEARS];

/* Sum of factory rows per year (computed from data) */
const computedTotals = years.map((_, yi) =>
  factoryProduction.reduce((sum, f) => sum + (f.values[yi] ?? 0), 0)
);

/* Operating factories per year (non-null value) */
const operatingPerYear = years.map(
  (_, yi) => factoryProduction.filter((f) => f.values[yi] !== null).length
);

/* Highest-producing factory per year */
const topPerYear = years.map((_, yi) => {
  let best = factoryProduction[0];
  let bestVal = -1;
  for (const f of factoryProduction) {
    const v = f.values[yi];
    if (v !== null && v > bestVal) {
      bestVal = v;
      best = f;
    }
  }
  return { name: best.name, value: bestVal };
});

/* YoY % change in total production (uses official totals) */
const yoy = officialTotals.map((t, i) =>
  i === 0 ? null : ((t - officialTotals[i - 1]) / officialTotals[i - 1]) * 100
);

const TEA = "hsl(134 52% 28%)";
const TEA_MID = "hsl(124 46% 40%)";
const GOLD = "hsl(38 88% 50%)";

/* ── Plain-language "At a glance" summary ────────────────── */
function AtAGlance() {
  const totalGrowth =
    ((officialTotals[officialTotals.length - 1] - officialTotals[0]) / officialTotals[0]) * 100;
  const newFactories = operatingPerYear[operatingPerYear.length - 1] - operatingPerYear[0];
  const peakIdx = (officialTotals as readonly number[]).indexOf(Math.max(...officialTotals));
  const toTonnes = (kg: number) => Math.round(kg / 1000);

  const points = [
    {
      Icon: TrendingUp,
      text: (
        <>
          In <b>2025</b>, the 32 factories together produced about{" "}
          <b className="text-tea-green">{nf.format(toTonnes(officialTotals[3]))} tonnes</b>{" "}
          ({fmtCompact(officialTotals[3])} kg) of tea — the highest in the four years.
        </>
      ),
    },
    {
      Icon: Percent,
      text: (
        <>
          Total production has grown{" "}
          <b className="text-tea-green">{totalGrowth >= 0 ? "+" : ""}{totalGrowth.toFixed(0)}%</b>{" "}
          since 2022, though 2024 dipped before recovering in {years[peakIdx]}.
        </>
      ),
    },
    {
      Icon: Factory,
      text: (
        <>
          The number of working factories rose from <b>{operatingPerYear[0]}</b> to{" "}
          <b className="text-tea-green">{operatingPerYear[3]}</b> —{" "}
          <b>{newFactories} new factories</b> opened over the period.
        </>
      ),
    },
    {
      Icon: Trophy,
      text: (
        <>
          <b>{topPerYear[3].name}</b> and <b>Morgen Tea Industries</b> are the two largest
          producers, each making over <b>2 million kg</b> a year.
        </>
      ),
    },
  ];

  return (
    <div className="reveal relative overflow-hidden rounded-3xl gradient-tea text-white p-7 sm:p-10 shadow-[0_20px_50px_-20px_hsl(136_56%_12%/.6)]">
      {/* decorative texture + glow */}
      <div className="absolute inset-0 bg-dots-white opacity-[.12] pointer-events-none" aria-hidden />
      <div aria-hidden className="absolute -right-20 -top-20 w-72 h-72 rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(38 88% 60%) 0%, transparent 70%)" }} />
      <div aria-hidden className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(124 60% 60%) 0%, transparent 70%)" }} />

      <div className="relative">
        <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-gold mb-5">
          <Sparkles size={14} /> At a Glance
        </div>
        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-3.5">
              <span className="shrink-0 w-9 h-9 rounded-xl bg-white/15 text-white flex items-center justify-center mt-0.5 ring-1 ring-white/20">
                <p.Icon size={17} />
              </span>
              <p className="text-sm text-white/85 leading-relaxed [&_b]:text-white [&_b]:font-semibold">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ── KPI summary cards ───────────────────────────────────── */
function KpiCards() {
  const lastYearTotal = officialTotals[officialTotals.length - 1];
  const lastYoy = yoy[yoy.length - 1] ?? 0;
  const lastTop = topPerYear[topPerYear.length - 1];
  const lastOps = operatingPerYear[operatingPerYear.length - 1];

  const cards = [
    {
      Icon: TrendingUp,
      label: "Total Production · 2025",
      value: `${fmt(lastYearTotal)} kg`,
      sub: `2022: ${fmtCompact(officialTotals[0])} kg`,
      accent: "text-tea-green",
      bg: "bg-tea-pale",
    },
    {
      Icon: Factory,
      label: "Operating Factories · 2025",
      value: String(lastOps),
      sub: `Up from ${operatingPerYear[0]} in 2022`,
      accent: "text-tea-green",
      bg: "bg-tea-pale",
    },
    {
      Icon: Percent,
      label: "YoY Change · 2024→2025",
      value: `${lastYoy >= 0 ? "+" : ""}${lastYoy.toFixed(1)}%`,
      sub: "Total industry production",
      accent: lastYoy >= 0 ? "text-tea-green" : "text-bd-red",
      bg: lastYoy >= 0 ? "bg-tea-pale" : "bg-bd-red-pale",
    },
    {
      Icon: Trophy,
      label: "Top Factory · 2025",
      value: lastTop.name,
      sub: `${fmt(lastTop.value)} kg`,
      accent: "text-gold-dark",
      bg: "bg-gold-light",
      small: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {cards.map(({ Icon, label, value, sub, accent, bg, small }, i) => (
        <div
          key={label}
          data-delay={String(i * 80)}
          className="reveal card-modern rounded-2xl p-6 flex flex-col group"
        >
          <div className={`w-12 h-12 rounded-2xl ${bg} ${accent} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}>
            <Icon size={22} />
          </div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            {label}
          </div>
          {small ? (
            <div className={`font-bold ${accent} text-lg leading-snug`}>{value}</div>
          ) : (
            <CountUp value={value} className={`block font-bold ${accent} text-[1.7rem] leading-none nums-tabular`} />
          )}
          <div className="text-xs text-muted-foreground mt-2">{sub}</div>
        </div>
      ))}
    </div>
  );
}

/* Per-year KPI strip (total + top per each of the 4 years) */
function YearBreakdown() {
  return (
    <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border shadow-[0_4px_20px_-10px_hsl(132_50%_20%/.2)]">
      {years.map((y, i) => (
        <div key={y} className="bg-white p-5 hover:bg-tea-50 transition-colors duration-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-tea-green">{y}</span>
            {yoy[i] !== null && (
              <span className={`text-[11px] font-semibold inline-flex items-center gap-0.5 ${yoy[i]! >= 0 ? "text-tea-green" : "text-bd-red"}`}>
                {yoy[i]! >= 0 ? <ArrowUp size={11} /> : <ArrowDown size={11} />}
                {Math.abs(yoy[i]!).toFixed(1)}%
              </span>
            )}
          </div>
          <div className="text-lg font-bold text-foreground nums-tabular">{fmtCompact(officialTotals[i])}</div>
          <div className="text-[11px] text-muted-foreground mb-2">kg total · {operatingPerYear[i]} factories</div>
          <div className="text-[11px] text-muted-foreground border-t border-border pt-2">
            <span className="text-gold-dark font-semibold">Top:</span> {topPerYear[i].name}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Chart card wrapper ──────────────────────────────────── */
function ChartCard({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="reveal card-modern rounded-2xl p-6">
      <div className="flex items-start gap-3 mb-1">
        <span aria-hidden className="mt-1 w-1.5 h-5 rounded-full bg-gradient-to-b from-tea-green to-tea-mid shrink-0" />
        <div>
          <h3 className="text-base font-bold text-foreground leading-tight">{title}</h3>
          {subtitle && <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>}
        </div>
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}

const tooltipStyle = {
  borderRadius: 12,
  border: "1px solid hsl(130 16% 87%)",
  fontSize: 12,
  boxShadow: "0 8px 24px -8px rgb(0 0 0/.18)",
};

/* ── Chart 1: total industry production ──────────────────── */
function TotalProductionChart() {
  const data = years.map((y, i) => ({ year: y, total: officialTotals[i] }));
  return (
    <ChartCard title="Total Industry Production" subtitle="Combined output of all factories, 2022–2025 (kg)">
      <ResponsiveContainer width="100%" height={280}>
        <ComposedChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(130 16% 90%)" vertical={false} />
          <XAxis dataKey="year" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tickFormatter={fmtCompact} tick={{ fontSize: 11 }} axisLine={false} tickLine={false} width={48} />
          <Tooltip formatter={(v) => [`${nf.format(Number(v))} kg`, "Total"]} contentStyle={tooltipStyle} />
          <Bar dataKey="total" fill="hsl(126 40% 92%)" radius={[6, 6, 0, 0]} barSize={48} />
          <Line type="monotone" dataKey="total" stroke={TEA} strokeWidth={3} dot={{ r: 5, fill: TEA }} activeDot={{ r: 6 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

/* ── Chart 2: active factories per year ──────────────────── */
function ActiveFactoriesChart() {
  const data = years.map((y, i) => ({ year: y, active: operatingPerYear[i] }));
  return (
    <ChartCard title="Active Factories per Year" subtitle="Number of factories in operation each year">
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(130 16% 90%)" vertical={false} />
          <XAxis dataKey="year" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} width={28} domain={[0, 36]} />
          <Tooltip formatter={(v) => [`${Number(v)} factories`, "Active"]} contentStyle={tooltipStyle} />
          <Bar dataKey="active" radius={[6, 6, 0, 0]} barSize={48}>
            {data.map((_, i) => (
              <Cell key={i} fill={i === data.length - 1 ? TEA : TEA_MID} />
            ))}
            {/* labels */}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

/* ── Chart 3: Top 10 by 2025 production ──────────────────── */
function Top10Chart() {
  const data = useMemo(() => {
    const yi = years.length - 1;
    return [...factoryProduction]
      .filter((f) => f.values[yi] !== null)
      .sort((a, b) => (b.values[yi] ?? 0) - (a.values[yi] ?? 0))
      .slice(0, 10)
      .map((f) => ({ name: f.name, value: f.values[yi] as number }));
  }, []);

  return (
    <ChartCard title="Top 10 Factories by 2025 Production" subtitle="Ranked by latest-year output (kg)">
      <ResponsiveContainer width="100%" height={380}>
        <BarChart data={data} layout="vertical" margin={{ top: 0, right: 16, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(130 16% 90%)" horizontal={false} />
          <XAxis type="number" tickFormatter={fmtCompact} tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis
            type="category"
            dataKey="name"
            width={160}
            tick={{ fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip formatter={(v) => [`${nf.format(Number(v))} kg`, "2025"]} contentStyle={tooltipStyle} />
          <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={20}>
            {data.map((_, i) => (
              <Cell key={i} fill={i === 0 ? GOLD : i < 3 ? TEA : TEA_MID} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

/* ── Chart 4: interactive single-factory trend ──────────── */
function FactoryTrendChart() {
  const [selectedId, setSelectedId] = useState(factoryProduction[0].id);
  const factory = factoryProduction.find((f) => f.id === selectedId)!;

  // skip nulls in the trend line
  const data = years.map((y, i) => ({
    year: y,
    value: factory.values[i], // null gaps are skipped by connectNulls=false
  }));

  return (
    <ChartCard title="Factory Production Trend" subtitle="Select a factory to view its 2022–2025 trend">
      <div className="mb-5">
        <label htmlFor="factory-select" className="sr-only">Choose a factory</label>
        <div className="relative">
          <select
            id="factory-select"
            value={selectedId}
            onChange={(e) => setSelectedId(Number(e.target.value))}
            className="input-field appearance-none pr-10 cursor-pointer font-medium"
          >
            {factoryProduction.map((f) => (
              <option key={f.id} value={f.id}>
                {f.id}. {f.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data} margin={{ top: 10, right: 12, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(130 16% 90%)" vertical={false} />
          <XAxis dataKey="year" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tickFormatter={fmtCompact} tick={{ fontSize: 11 }} axisLine={false} tickLine={false} width={48} />
          <Tooltip formatter={(v) => [`${nf.format(Number(v))} kg`, factory.name]} contentStyle={tooltipStyle} />
          <Line
            type="monotone"
            dataKey="value"
            stroke={TEA}
            strokeWidth={3}
            dot={{ r: 5, fill: TEA }}
            activeDot={{ r: 6 }}
            connectNulls={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

/* ── Full data table ─────────────────────────────────────── */
type SortKey = "id" | "name" | 0 | 1 | 2 | 3;

function DataTable() {
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("id");
  const [asc, setAsc] = useState(true);

  const rows = useMemo(() => {
    let r = factoryProduction.filter((f) =>
      f.name.toLowerCase().includes(query.trim().toLowerCase())
    );
    r = [...r].sort((a, b) => {
      let av: number | string;
      let bv: number | string;
      if (sortKey === "id") { av = a.id; bv = b.id; }
      else if (sortKey === "name") { av = a.name.toLowerCase(); bv = b.name.toLowerCase(); }
      else { av = a.values[sortKey] ?? -1; bv = b.values[sortKey] ?? -1; }
      if (av < bv) return asc ? -1 : 1;
      if (av > bv) return asc ? 1 : -1;
      return 0;
    });
    return r;
  }, [query, sortKey, asc]);

  const setSort = (k: SortKey) => {
    if (sortKey === k) setAsc((v) => !v);
    else { setSortKey(k); setAsc(k === "name"); }
  };

  const SortIcon = ({ k }: { k: SortKey }) =>
    sortKey !== k ? <ArrowUpDown size={12} className="opacity-40" />
      : asc ? <ArrowUp size={12} /> : <ArrowDown size={12} />;

  // column totals over the filtered rows
  const colTotals = years.map((_, yi) =>
    rows.reduce((s, f) => s + (f.values[yi] ?? 0), 0)
  );

  return (
    <div className="reveal card-modern rounded-2xl overflow-hidden">
      <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border">
        <div>
          <h3 className="text-base font-bold text-foreground">Full Production Data</h3>
          <p className="text-xs text-muted-foreground mt-1">All 32 factories · click a column to sort</p>
        </div>
        <div className="relative w-full sm:w-64">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search factory…"
            className="input-field pl-9"
          />
        </div>
      </div>

      <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
        <table className="w-full text-sm border-collapse">
          <thead className="sticky top-0 z-10 bg-tea-darkest text-white">
            <tr>
              <th className="text-left font-semibold px-4 py-3 w-12">
                <button onClick={() => setSort("id")} className="inline-flex items-center gap-1 hover:text-gold transition-colors">#<SortIcon k="id" /></button>
              </th>
              <th className="text-left font-semibold px-4 py-3 min-w-[200px]">
                <button onClick={() => setSort("name")} className="inline-flex items-center gap-1 hover:text-gold transition-colors">Factory Name<SortIcon k="name" /></button>
              </th>
              {years.map((y, yi) => (
                <th key={y} className="text-right font-semibold px-4 py-3 whitespace-nowrap">
                  <button onClick={() => setSort(yi as SortKey)} className="inline-flex items-center gap-1 hover:text-gold transition-colors">{y}<SortIcon k={yi as SortKey} /></button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((f, idx) => (
              <tr key={f.id} className={`${idx % 2 ? "bg-tea-50/50" : "bg-white"} hover:bg-tea-pale/60 transition-colors`}>
                <td className="px-4 py-2.5 text-muted-foreground nums-tabular">{f.id}</td>
                <td className="px-4 py-2.5 font-medium text-foreground">{f.name}</td>
                {f.values.map((v, vi) => (
                  <td key={vi} className={`px-4 py-2.5 text-right nums-tabular ${v === null ? "text-muted-foreground/50" : "text-foreground"}`}>
                    {fmt(v)}
                  </td>
                ))}
              </tr>
            ))}
            {rows.length === 0 && (
              <tr><td colSpan={6} className="px-4 py-10 text-center text-muted-foreground">No factories match “{query}”.</td></tr>
            )}
          </tbody>
          <tfoot className="sticky bottom-0">
            <tr className="bg-tea-green text-white font-bold">
              <td className="px-4 py-3" colSpan={2}>TOTAL {query && `(${rows.length} shown)`}</td>
              {colTotals.map((t, i) => (
                <td key={i} className="px-4 py-3 text-right nums-tabular">{nf.format(t)}</td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

/* ── Page composition ────────────────────────────────────── */
export function ProductionDashboard() {
  return (
    <div className="space-y-8">
      {/* Plain-language summary first, so anyone can understand at a glance */}
      <AtAGlance />

      {/* The headline numbers */}
      <div>
        <h2 className="text-xl font-bold text-foreground mb-1">The key numbers</h2>
        <p className="text-sm text-muted-foreground mb-5">A quick snapshot of the latest year (2025).</p>
        <KpiCards />
      </div>

      {/* Year-by-year */}
      <div>
        <h2 className="text-xl font-bold text-foreground mb-1">Year by year</h2>
        <p className="text-sm text-muted-foreground mb-5">Total output, factory count and the top producer for each year.</p>
        <YearBreakdown />
      </div>

      {/* Trends */}
      <div>
        <h2 className="text-xl font-bold text-foreground mb-1">How the industry is trending</h2>
        <p className="text-sm text-muted-foreground mb-5">Production and the number of active factories over time.</p>
        <div className="grid lg:grid-cols-2 gap-6">
          <TotalProductionChart />
          <ActiveFactoriesChart />
        </div>
      </div>

      {/* Compare factories */}
      <div>
        <h2 className="text-xl font-bold text-foreground mb-1">Compare the factories</h2>
        <p className="text-sm text-muted-foreground mb-5">See who produces most, and track any single factory over time.</p>
        <div className="grid lg:grid-cols-2 gap-6">
          <Top10Chart />
          <FactoryTrendChart />
        </div>
      </div>

      {/* Full data */}
      <div>
        <h2 className="text-xl font-bold text-foreground mb-1">Explore all the data</h2>
        <p className="text-sm text-muted-foreground mb-5">Search any factory, or click a year to sort from highest to lowest.</p>
        <DataTable />
      </div>

      <div className="rounded-xl bg-white border border-border p-4 text-xs text-muted-foreground leading-relaxed">
        <b className="text-foreground">How to read this page:</b> all figures are in kilograms (kg);
        1,000 kg = 1 tonne. A dash (“—”) means the factory was not yet operating that year, so it is
        skipped in trend lines (not shown as zero). 2025 figures may be in-progress (partial year) and
        could still rise.
      </div>
    </div>
  );
}
