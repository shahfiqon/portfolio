import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import domainsData from "../../data/domains.json";

interface DomainData {
  name: string;
  years: number;
  percentage: number;
  skills: string[];
  tools: string[];
  color: string;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: DomainData;
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
          {data.name}
        </p>
        <p
          style={{
            margin: "0 0 4px 0",
            fontSize: "13px",
            color: "var(--ifm-color-emphasis-700)",
          }}
        >
          <strong>{data.years} years</strong> ({data.percentage}%)
        </p>
        <div style={{ marginTop: "8px" }}>
          <p
            style={{
              margin: "4px 0 2px 0",
              fontSize: "12px",
              color: "var(--ifm-color-emphasis-600)",
              fontWeight: "600",
            }}
          >
            Skills:
          </p>
          <p
            style={{
              margin: "0",
              fontSize: "11px",
              color: "var(--ifm-color-emphasis-700)",
            }}
          >
            {data.skills.join(", ")}
          </p>
        </div>
        <div style={{ marginTop: "6px" }}>
          <p
            style={{
              margin: "4px 0 2px 0",
              fontSize: "12px",
              color: "var(--ifm-color-emphasis-600)",
              fontWeight: "600",
            }}
          >
            Tools:
          </p>
          <p
            style={{
              margin: "0",
              fontSize: "11px",
              color: "var(--ifm-color-emphasis-700)",
            }}
          >
            {data.tools.join(", ")}
          </p>
        </div>
      </div>
    );
  }
  return null;
};

const ExperienceDomainChart: React.FC = () => {
  const domains = domainsData.domains as DomainData[];

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
        Experience by Domain
      </h3>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={domains}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percentage }) => `${name}: ${percentage}%`}
            outerRadius={120}
            innerRadius={60}
            fill="#8884d8"
            dataKey="years"
            animationBegin={0}
            animationDuration={800}
          >
            {domains.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
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
          Total: <strong>8+ years</strong> of professional experience across
          multiple domains
        </p>
      </div>
    </div>
  );
};

export default ExperienceDomainChart;


