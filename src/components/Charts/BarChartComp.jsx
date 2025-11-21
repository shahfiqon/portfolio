import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { useColorMode } from "@docusaurus/theme-common";

export default function BarChartComp({ data, xKey, yKey, ylabel }) {
  const { colorMode } = useColorMode();
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive detection with useEffect to avoid SSR issues
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Dynamic colors based on theme
  const tooltipBg = colorMode === "dark" ? "#1f1f1f" : "#ffffff";
  const tooltipBorder = colorMode === "dark" ? "#444" : "#ccc";
  const tooltipText = colorMode === "dark" ? "#ffffff" : "#000000";
  const axisColor = colorMode === "dark" ? "#e5e7eb" : "#1f2937";

  // Responsive settings
  const chartHeight = isMobile ? 280 : 300;
  const tickFontSize = isMobile ? 10 : 12;
  const labelFontSize = isMobile ? 9 : 12;
  const barSize = isMobile ? 30 : undefined;
  const xAxisAngle = isMobile ? -45 : 0;
  const xAxisTextAnchor = isMobile ? "end" : "middle";
  const margins = isMobile
    ? { top: 20, right: 10, left: 0, bottom: 60 }
    : { top: 20, right: 30, left: 20, bottom: 20 };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: tooltipBg,
            border: `1px solid ${tooltipBorder}`,
            borderRadius: "6px",
            padding: "8px 12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          <p style={{ color: tooltipText, margin: 0, fontSize: "14px" }}>
            {payload[0].payload[xKey]}
          </p>
          <p
            style={{
              color: "#6366f1",
              margin: "4px 0 0 0",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            {ylabel || "years"}: {payload[0].value}
          </p>
        </div>
      );
    }
    return null;
  };

  // Calculate minimum width for scrollable container
  const minWidth = isMobile ? Math.max(data.length * 50, 320) : "100%";
  const needsScroll = isMobile && data.length > 6;

  return (
    <div
      style={{
        width: "100%",
        overflowX: needsScroll ? "auto" : "visible",
        WebkitOverflowScrolling: "touch", // smooth scrolling on iOS
      }}
    >
      <div
        style={{
          width: needsScroll ? minWidth : "100%",
          height: chartHeight,
          minWidth: needsScroll ? minWidth : "auto",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={margins}>
            <XAxis
              dataKey={xKey}
              tick={{ fill: axisColor, fontSize: tickFontSize }}
              axisLine={{ stroke: axisColor }}
              tickLine={{ stroke: axisColor }}
              angle={xAxisAngle}
              textAnchor={xAxisTextAnchor}
              height={isMobile ? 60 : 30}
              interval={0} // show all labels
            />
            <YAxis
              label={
                !isMobile
                  ? {
                      value: ylabel || "years",
                      angle: -90,
                      position: "insideLeft",
                      fill: axisColor,
                      fontSize: tickFontSize,
                    }
                  : undefined
              }
              tick={{ fill: axisColor, fontSize: tickFontSize }}
              axisLine={{ stroke: axisColor }}
              tickLine={{ stroke: axisColor }}
              width={isMobile ? 35 : 60}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "rgba(99, 102, 241, 0.1)" }}
            />
            <Bar
              dataKey={yKey}
              fill="#6366f1"
              radius={[4, 4, 0, 0]}
              maxBarSize={barSize}
            >
              <LabelList
                dataKey={yKey}
                position="top"
                fill={axisColor}
                fontSize={labelFontSize}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
