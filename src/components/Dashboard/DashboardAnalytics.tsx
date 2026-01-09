import KPICard from "./kpi/Kpicard";
import SoftskillCard from "./softskills/softskillscard";
import ExperienceDomainChart from "../Charts/ExperienceDomainChart";
import GitHubContributions from "../GitHub/GitHubContributions";
import EngineeringStrengthsChart from "../Charts/EngineeringStrengthsChart";

export default function DashboardAnalytics() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "0 20px",
      }}
    >
      {/* KPI Metrics Grid */}
      <section style={{ marginBottom: "40px" }}>
        <KPICard />
      </section>

      {/* Main Analytics Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
          gap: "24px",
          marginBottom: "40px",
        }}
      >
        <ExperienceDomainChart />
        <SoftskillCard />
      </div>

      {/* Engineering Strengths Chart - Full Width */}
      <section style={{ marginBottom: "40px" }}>
        <EngineeringStrengthsChart />
      </section>

      {/* GitHub Contributions - Full Width */}
      <section style={{ marginBottom: "40px" }}>
        <GitHubContributions username="shahfiqon" />
      </section>
    </div>
  );
}
