import RadarChartComp from "../../Charts/RadarChartComp";
import data from "../../../data/dashboard.json";
import React, { useEffect, useState } from "react";
import { useColorMode } from "@docusaurus/theme-common";

export interface SkillItem {
  name: string;
  value: number;
}

const SkillsCard: React.FC = () => {
  const { colorMode } = useColorMode();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const skills: SkillItem[] = data.charts.skills;

  const cardStyle: React.CSSProperties = {
    padding: "12px",
    borderRadius: "12px",
    border: `1px solid ${colorMode === "dark" ? "#333" : "#e5e7eb"}`,
    background: colorMode === "dark" ? "#262626" : "#fff",
    boxShadow:
      colorMode === "dark"
        ? "0px 1px 3px rgba(0,0,0,0.3)"
        : "0px 1px 3px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: isMobile ? "90vw" : "30vw",
    boxSizing: "border-box",
    transition: "all 0.3s ease",
  };

  const headerStyle: React.CSSProperties = {
    fontSize: "14px",
    textAlign: "center",
    fontWeight: 600,
    marginBottom: "10px",
    color: colorMode === "dark" ? "#ffffff" : "#111827",
  };

  const mainChart: React.CSSProperties = {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      {/* Mobile responsive styles */}
      <style>
        {`
          @media (max-width: 480px) {
            .skills-card {
              padding: 12px !important;
              margin: 10px auto !important;
            }

            .skills-card h2 {
              font-size: 16px !important;
            }

            .skills-chart-wrapper {
              width: 100% !important;
              height: auto !important;
            }
          }
        `}
      </style>

      <div className="skills-card" style={cardStyle}>
        <h2 style={headerStyle}>Skills Overview</h2>

        <div className="skills-chart-wrapper" style={mainChart}>
          <RadarChartComp data={skills} angleKey="name" valueKey="value" />
        </div>
      </div>
    </>
  );
};

export default SkillsCard;
