"use client";

import { TrendingUp, TrendingDown } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import type { StatReport } from "@/types/bbtfoa";

export function StatCard({ report }: { report: StatReport }) {
  const positive = (report.change ?? 0) >= 0;
  return (
    <div className="bg-white rounded-xl border border-border p-6 card-hover">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-muted-foreground">{report.period}</p>
          <h3 className="text-lg font-bold text-foreground mt-0.5">{report.title}</h3>
        </div>
        {report.change !== undefined && (
          <div className={`flex items-center gap-1 text-sm font-semibold px-2.5 py-1 rounded-full ${positive ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600"}`}>
            {positive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
            {positive ? "+" : ""}{report.change}%
          </div>
        )}
      </div>
      <div className="text-3xl font-bold text-tea-green mb-1">
        {report.value.toLocaleString()}
      </div>
      <div className="text-sm text-muted-foreground mb-6">{report.unit}</div>
      {report.chartData && (
        <div className="h-36">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={report.chartData} barSize={18}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey="label" tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
              <YAxis hide />
              <Tooltip
                formatter={(v) => [Number(v).toLocaleString(), report.unit]}
                contentStyle={{ fontSize: 12, borderRadius: 8 }}
              />
              <Bar dataKey="value" fill="hsl(128 58% 36%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
