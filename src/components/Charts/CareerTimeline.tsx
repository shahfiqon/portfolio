import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import timelineData from "../../data/timeline.json";

interface Milestone {
  year: number;
  month: string;
  event: string;
  type: string;
  company?: string;
  role?: string;
  description?: string;
  totalYears: number;
  skills: string[];
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    dataKey: string;
    value: number;
    color: string;
  }>;
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
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
          Year {label}
        </p>
        {payload.map((entry, index) => (
          <p
            key={index}
            style={{
              margin: "4px 0",
              fontSize: "12px",
              color: entry.color,
            }}
          >
            <strong>{entry.dataKey}:</strong> {entry.value.toFixed(1)} years
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const CareerTimeline: React.FC = () => {
  const milestones = timelineData.milestones as Milestone[];
  const experienceGrowth = timelineData.experienceGrowth;

  const getMilestoneIcon = (type: string) => {
    switch (type) {
      case "career":
        return "🚀";
      case "promotion":
        return "⭐";
      case "achievement":
        return "🏆";
      case "current":
        return "📍";
      default:
        return "•";
    }
  };

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
        Career Growth Timeline
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={experienceGrowth}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorFrontend" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="colorBackend" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="colorDevops" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--ifm-color-emphasis-300)" />
          <XAxis
            dataKey="year"
            stroke="var(--ifm-font-color-base)"
            style={{ fontSize: "12px" }}
          />
          <YAxis
            stroke="var(--ifm-font-color-base)"
            style={{ fontSize: "12px" }}
            label={{
              value: "Years of Experience",
              angle: -90,
              position: "insideLeft",
              style: { fill: "var(--ifm-font-color-base)" },
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ fontSize: "12px" }}
            iconType="circle"
            formatter={(value) => (
              <span style={{ color: "var(--ifm-font-color-base)" }}>
                {value}
              </span>
            )}
          />
          <Area
            type="monotone"
            dataKey="frontend"
            stackId="1"
            stroke="#3b82f6"
            fillOpacity={1}
            fill="url(#colorFrontend)"
            animationDuration={1000}
          />
          <Area
            type="monotone"
            dataKey="backend"
            stackId="1"
            stroke="#10b981"
            fillOpacity={1}
            fill="url(#colorBackend)"
            animationDuration={1000}
          />
          <Area
            type="monotone"
            dataKey="devops"
            stackId="1"
            stroke="#f59e0b"
            fillOpacity={1}
            fill="url(#colorDevops)"
            animationDuration={1000}
          />
        </AreaChart>
      </ResponsiveContainer>

      <div style={{ marginTop: "24px" }}>
        <h4
          style={{
            margin: "0 0 16px 0",
            fontSize: "16px",
            fontWeight: "600",
            color: "var(--ifm-color-emphasis-800)",
          }}
        >
          Key Milestones
        </h4>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {milestones.slice(0, 6).map((milestone, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "12px",
                padding: "12px",
                backgroundColor: "var(--ifm-color-emphasis-100)",
                borderRadius: "8px",
                borderLeft: `4px solid ${
                  milestone.type === "promotion"
                    ? "#f59e0b"
                    : milestone.type === "achievement"
                    ? "#10b981"
                    : "#3b82f6"
                }`,
                transition: "transform 0.2s ease",
              }}
              className="milestone-item"
            >
              <div
                style={{
                  fontSize: "20px",
                  lineHeight: "1",
                }}
              >
                {getMilestoneIcon(milestone.type)}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    marginBottom: "4px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "var(--ifm-font-color-base)",
                    }}
                  >
                    {milestone.event}
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "var(--ifm-color-emphasis-600)",
                      whiteSpace: "nowrap",
                      marginLeft: "8px",
                    }}
                  >
                    {milestone.month} {milestone.year}
                  </span>
                </div>
                {milestone.company && (
                  <div
                    style={{
                      fontSize: "13px",
                      color: "var(--ifm-color-emphasis-700)",
                      marginBottom: "2px",
                    }}
                  >
                    {milestone.role} @ {milestone.company}
                  </div>
                )}
                {milestone.description && (
                  <div
                    style={{
                      fontSize: "12px",
                      color: "var(--ifm-color-emphasis-600)",
                    }}
                  >
                    {milestone.description}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .milestone-item:hover {
            transform: translateX(4px);
          }
        `}
      </style>
    </div>
  );
};

export default CareerTimeline;


