import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { ProductionDashboard } from "@/components/statistics/production-dashboard";

export const metadata: Metadata = {
  title: "Statistics & Reports",
  description: "Annual tea production statistics for 32 bottle-leaf (bought-leaf) tea factories in North Bengal, Bangladesh (2022–2025).",
};

export default function StatisticsPage() {
  return (
    <>
      <PageHeader
        title="North Bengal Bottle-Leaf Tea Factories — Production (2022–2025)"
        subtitle="Annual production for 32 operating bought-leaf tea factories across North Bengal, Bangladesh. Figures in kilograms; 2025 may be a partial, in-progress year."
        breadcrumbs={[{ label: "Statistics & Reports" }]}
      />

      <section className="section-py bg-muted">
        <div className="section-container">
          <ProductionDashboard />
        </div>
      </section>
    </>
  );
}
