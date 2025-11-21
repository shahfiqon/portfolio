import { useColorMode } from "@docusaurus/theme-common";
import BarChartComp from "../../Charts/BarChartComp";
import data from "../../../data/dashboard.json";
import React from "react";

// types
export interface ExperienceItem {
  date?: string;
  role?: string;
  company?: string;
  summary?: string;
  tags?: string[];
}

export interface ExperienceChartData {
  name: string;
  value: number;
}

// Filter valid experiences
const validExperiences = (data.experience as ExperienceItem[]).filter(
  (exp) => exp.date && exp.company && exp.role
);

// Function to find next larger date for a given date
const findNextLargerDate = (currentDate: string): number => {
  const currentYear = parseInt(currentDate);
  const allYears = validExperiences
    .map((exp) => parseInt(exp.date || "0"))
    .filter((year) => year > currentYear)
    .sort((a, b) => a - b);

  return allYears.length > 0 ? allYears[0] : new Date().getFullYear();
};

// Calculate tenure at each company (years between current date and next larger date)
const experienceChartData: ExperienceChartData[] = validExperiences.map(
  (exp) => {
    const currentYear = parseInt(exp.date || "0");
    const nextYear = findNextLargerDate(exp.date || "0");
    const tenure = Math.max(nextYear - currentYear, 0);

    return {
      name: exp.company || "Unknown",
      value: tenure || 1,
    };
  }
);

const ExperienceCard: React.FC = () => {
  const { colorMode } = useColorMode();

  const cardStyle: React.CSSProperties = {
    padding: "24px",
    borderRadius: "12px",
    border: `1px solid ${colorMode === "dark" ? "#333" : "#e5e7eb"}`,
    background: colorMode === "dark" ? "#262626" : "#fff",
    boxShadow:
      colorMode === "dark"
        ? "0px 1px 3px rgba(0,0,0,0.3)"
        : "0px 1px 3px rgba(0,0,0,0.1)",
    width: "90vw",
    transition: "all 0.3s ease",
  };

  const headerStyle: React.CSSProperties = {
    fontSize: "20px",
    fontWeight: 600,
    marginBottom: "20px",
    color: colorMode === "dark" ? "#ffffff" : "#111827",
  };

  const experienceItemStyle: React.CSSProperties = {
    marginTop: "16px",
    padding: "12px",
    borderLeft: `3px solid #6366f1`,
    background: colorMode === "dark" ? "#1f1f1f" : "#f9fafb",
    borderRadius: "4px",
    transition: "all 0.3s ease",
  };

  const roleStyle: React.CSSProperties = {
    fontWeight: "bold",
    fontSize: "16px",
    marginBottom: "4px",
    color: colorMode === "dark" ? "#ffffff" : "#111827",
  };

  const companyStyle: React.CSSProperties = {
    fontSize: "14px",
    marginBottom: "8px",
    color: colorMode === "dark" ? "#d1d5db" : "#6b7280",
  };

  const summaryStyle: React.CSSProperties = {
    fontSize: "14px",
    marginBottom: "8px",
    color: colorMode === "dark" ? "#e5e7eb" : "#374151",
  };

  const tagStyle: React.CSSProperties = {
    display: "inline-block",
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "12px",
    marginRight: "6px",
    marginTop: "6px",
    background: colorMode === "dark" ? "#374151" : "#e5e7eb",
    color: colorMode === "dark" ? "#e5e7eb" : "#1f2937",
  };

  return (
    <div style={cardStyle}>
      <h2 style={headerStyle}>Experience Overview</h2>
      <BarChartComp
        data={experienceChartData}
        xKey="name"
        yKey="value"
        ylabel="Years"
      />
    </div>
  );
};

export default ExperienceCard;
