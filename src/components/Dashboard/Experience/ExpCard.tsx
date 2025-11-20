import BarChartComp from "../../Charts/BarChartComp";
import data from "../../../data/dashboard.json";
import React from "react";

// types
export interface ExperienceItem {
  date: string;
  role: string;
  company: string;
  summary: string;
  tags: string[];
}

export interface ExperienceChartData {
  name: string;
  value: number;
}

const experienceChartData: ExperienceChartData[] = data.experience.map(
  (exp) => ({
    name: exp.company,
    value: exp.tags.length,
  })
);
const cardStyle: React.CSSProperties = {
  padding: "16px",
  borderRadius: "12px",
  border: "1px solid",
  background: "",
  width: "100%",
  maxWidth: "600px",
  margin: "20px auto",
};

const headerStyle: React.CSSProperties = {
  fontSize: "18px",
  fontWeight: 600,
  marginBottom: "10px",
};

const experienceItemStyle: React.CSSProperties = {
  marginTop: "16px",
  padding: "12px",
  borderLeft: "3px solid",
  background: "",
  borderRadius: "4px",
};

const roleStyle: React.CSSProperties = {
  fontWeight: "bold",
  fontSize: "16px",
  marginBottom: "4px",
};

const companyStyle: React.CSSProperties = {
  fontSize: "14px",
  marginBottom: "8px",
};

const tagStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "4px 8px",
  borderRadius: "4px",
  fontSize: "12px",
  marginRight: "6px",
  marginTop: "6px",
};
const ExperienceCard: React.FC = () => {
  return (
    <div style={cardStyle}>
      <h2 style={headerStyle}>Experience Overview</h2>

      <BarChartComp data={experienceChartData} xKey="name" yKey="value" />

      <div style={{ marginTop: "16px" }}>
        {data.experience.map((exp, index) => (
          <div key={index} style={experienceItemStyle}>
            <div style={roleStyle}>{exp.role}</div>
            <div style={companyStyle}>
              {exp.company} • {exp.date}
            </div>
            <div style={{ fontSize: "14px", marginBottom: "8px" }}>
              {exp.summary}
            </div>
            <div>
              {exp.tags.map((tag) => (
                <span key={tag} style={tagStyle}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
