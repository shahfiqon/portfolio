import React from "react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useColorMode } from "@docusaurus/theme-common";

const COLORS = [
  "#c8ff00ff",
  "#14b8a6",
  "#f59e0b",
  "#ef4444",
  "#3b82f6",
  "#8b5cf6",
  "#10b981",
  "#ec4899",
];

export default function RadialBarChartComp({ data, dataKey, nameKey }) {
  const { colorMode } = useColorMode();

  // Normalize data to 0–100 scale
  const maxValue = Math.max(...data.map((item) => item[dataKey]));
  const normalizedData = data.map((item, index) => ({
    ...item,
    normalizedValue: (item[dataKey] / maxValue) * 100,
    fill: COLORS[index % COLORS.length],
  }));

  const tooltipBg = colorMode === "dark" ? "#1f1f1f" : "#ffffff";
  const tooltipBorder = colorMode === "dark" ? "#444" : "#ccc";
  const tooltipText = colorMode === "dark" ? "#ffffff" : "#000000";
  const tooltipShadow =
    colorMode === "dark"
      ? "0 2px 4px rgba(0,0,0,0.5)"
      : "0 2px 4px rgba(0,0,0,0.1)";

  const legendTextColor = colorMode === "dark" ? "#e5e7eb" : "#1f2937";

  return (
    <div style={{ width: "100%", height: "fit-content" }}>
      <div style={{ width: "100%", height: "100%" }}>
        <ResponsiveContainer width="100%" height="320">
          <RadialBarChart
            data={normalizedData}
            innerRadius="2%"
            outerRadius="70%"
            startAngle={90}
            endAngle={-270}
          >
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            <RadialBar
              background
              dataKey="normalizedValue"
              cornerRadius={10}
              label={false}
              isAnimationActive={true}
              animationDuration={800}
              animationEasing="ease-out"
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const itemData = payload[0].payload;
                  return (
                    <div
                      style={{
                        background: tooltipBg,
                        padding: "8px 12px",
                        border: `1px solid ${tooltipBorder}`,
                        borderRadius: "4px",
                        boxShadow: tooltipShadow,
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          fontWeight: "bold",
                          fontSize: "13px",
                          color: tooltipText,
                        }}
                      >
                        {itemData[nameKey]}
                      </p>
                      <p
                        style={{
                          margin: "4px 0 0 0",
                          fontSize: "14px",
                          fontWeight: 600,
                          color: tooltipText,
                        }}
                      >
                        {itemData[dataKey]}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
          </RadialBarChart>
        </ResponsiveContainer>

        {/* Static Custom Legend */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          {normalizedData.map((item) => (
            <div
              key={item[nameKey]}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                cursor: "default",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "3px",
                  background: item.fill,
                }}
              />
              <span
                style={{
                  fontSize: "9px",
                  fontWeight: 500,
                  color: legendTextColor,
                }}
              >
                {item[nameKey]}: {item[dataKey]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
