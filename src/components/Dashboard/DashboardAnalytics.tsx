import KPICard from "./kpi/Kpicard";
import ExperienceCard from "./Experience/ExpCard";
export default function DashboardAnalytics() {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}
    >
      <KPICard />
      <ExperienceCard />
    </div>
  );
}
