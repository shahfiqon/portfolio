import KPICard from "./kpi/Kpicard";
import ExperienceCard from "./Experience/ExpCard";
import SkillsCard from "./skills/skillscard";
import SoftskillCard from "./softskills/softskillscard";
export default function DashboardAnalytics() {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "0.5rem",
      }}
    >
      <SkillsCard />
      <SoftskillCard />
      <KPICard />
      <ExperienceCard />
    </div>
  );
}
