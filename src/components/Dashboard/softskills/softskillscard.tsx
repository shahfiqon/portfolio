import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import data from "../../../data/dashboard.json";

export interface SoftSkill {
  skill: string;
  value: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: SoftSkill;
  }>;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div
        style={{
          backgroundColor: "var(--ifm-background-color)",
          border: "1px solid var(--ifm-color-emphasis-300)",
          borderRadius: "8px",
          padding: "12px 16px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <p
          style={{
            margin: "0 0 8px 0",
            fontWeight: "bold",
            fontSize: "14px",
            color: "var(--ifm-font-color-base)",
          }}
        >
          {data.skill}
        </p>
        <p
          style={{
            margin: "0",
            fontSize: "13px",
            color: "var(--ifm-color-emphasis-700)",
          }}
        >
          <strong>{data.value}%</strong>
        </p>
      </div>
    );
  }
  return null;
};

const COLORS = [
  "#6366f1", // indigo
  "#14b8a6", // teal
  "#f59e0b", // amber
  "#ef4444", // red
  "#3b82f6", // blue
  "#a855f7", // purple
];

const SoftskillCard: React.FC = () => {
  const softSkills = data.softskills as SoftSkill[];

  // Calculate total percentage for footer
  const totalPercentage = softSkills.reduce((sum, skill) => sum + skill.value, 0);

  return (
    <div
      style={{
        backgroundColor: "var(--ifm-card-background-color)",
        borderRadius: "12px",
        padding: "24px",
        boxShadow: "var(--ifm-global-shadow-lw)",
        border: "1px solid var(--ifm-color-emphasis-200)",
      }}
    >
      <h3
        style={{
          margin: "0 0 20px 0",
          fontSize: "20px",
          fontWeight: "600",
          color: "var(--ifm-font-color-base)",
        }}
      >
        Soft Skills
      </h3>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={softSkills}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ skill, value }) => `${skill}: ${value}%`}
            outerRadius={120}
            innerRadius={60}
            fill="#8884d8"
            dataKey="value"
            animationBegin={0}
            animationDuration={800}
          >
            {softSkills.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
            formatter={(value, entry: any) => (
              <span style={{ color: "var(--ifm-font-color-base)" }}>
                {value}
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
      <div
        style={{
          marginTop: "16px",
          padding: "12px",
          backgroundColor: "var(--ifm-color-emphasis-100)",
          borderRadius: "8px",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "13px",
            color: "var(--ifm-color-emphasis-700)",
            textAlign: "center",
          }}
        >
          Total: <strong>{totalPercentage}%</strong> across key interpersonal
          and professional competencies
        </p>
      </div>
    </div>
  );
};

export default SoftskillCard;
