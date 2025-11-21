import React, { useEffect, useState } from "react";
import { useColorMode } from "@docusaurus/theme-common";
import DonutChartComp from "../../Charts/DonutChartComp";
import data from "../../../data/dashboard.json";

export interface SoftSkill {
  skill: string;
  value: number;
}

const SoftskillCard: React.FC = () => {
  const { colorMode } = useColorMode();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const softSkills = data.softskills as SoftSkill[];

  /** Card wrapper */
  const cardStyle: React.CSSProperties = {
    padding: "12px",
    borderRadius: "12px",
    border: `1px solid ${colorMode === "dark" ? "#333" : "#e5e7eb"}`,
    background: colorMode === "dark" ? "#262626" : "#ffffff",
    boxShadow:
      colorMode === "dark"
        ? "0px 1px 3px rgba(0,0,0,0.3)"
        : "0px 1px 3px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: isMobile ? "90vw" : "30vw",
    transition: "all 0.3s ease",
  };

  /** Title */
  const headerStyle: React.CSSProperties = {
    fontSize: "14px",
    textAlign: "center",
    fontWeight: 600,
    marginBottom: "20px",
    color: colorMode === "dark" ? "#ffffff" : "#111827",
  };

  /** Chart wrapper (block layout, no flex) */
  const chartContainerStyle: React.CSSProperties = {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={cardStyle}>
      <h2 style={headerStyle}>Soft Skills</h2>

      {/* Donut Chart */}
      <div style={chartContainerStyle}>
        <DonutChartComp data={softSkills} nameKey="skill" valueKey="value" />
      </div>
    </div>
  );
};

export default SoftskillCard;
