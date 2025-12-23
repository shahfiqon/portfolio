import KPICard from "./kpi/Kpicard";
import ExperienceCard from "./Experience/ExpCard";
import SoftskillCard from "./softskills/softskillscard";
import ExperienceDomainChart from "../Charts/ExperienceDomainChart";
import SkillsHeatmap from "../Charts/SkillsHeatmap";
import CareerTimeline from "../Charts/CareerTimeline";
import SkillsShowcase from "../Skills/SkillsShowcase";
import GitHubContributions from "../GitHub/GitHubContributions";
import skillsData from "../../data/skillsEnhanced.json";

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

      {/* Skills Showcase - Full Width */}
      <section style={{ marginBottom: "40px" }}>
        <SkillsShowcase data={skillsData} />
      </section>

      {/* Skills Heatmap - Full Width */}
      <section style={{ marginBottom: "40px" }}>
        <SkillsHeatmap />
      </section>

      {/* Career Timeline - Full Width */}
      <section style={{ marginBottom: "40px" }}>
        <CareerTimeline />
      </section>

      {/* Experience Cards */}
      <section style={{ marginBottom: "40px" }}>
        <ExperienceCard />
      </section>

      {/* GitHub Contributions - Full Width */}
      <section style={{ marginBottom: "40px" }}>
        <GitHubContributions username="shahfiqon" />
      </section>
    </div>
  );
}
