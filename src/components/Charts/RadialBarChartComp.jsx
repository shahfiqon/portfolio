import React from "react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import { useColorMode } from "@docusaurus/theme-common";

const COLORS = [
  "#6366f1", // Indigo
  "#14b8a6", // Teal
  "#f59e0b", // Amber
  "#ef4444", // Red
  "#3b82f6", // Blue
  "#8b5cf6", // Purple
  "#10b981", // Green
  "#ec4899", // Pink
];

export default function RadialBarChartComp({ data, dataKey, nameKey }) {
  const { colorMode } = useColorMode();

  // Normalize data to 0-100 scale for radial chart
  const maxValue = Math.max(...data.map((item) => item[dataKey]));
  const normalizedData = data.map((item, index) => ({
    ...item,
    normalizedValue: (item[dataKey] / maxValue) * 100,
    fill: COLORS[index % COLORS.length],
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const tooltipBg = colorMode === "dark" ? "#1f1f1f" : "#ffffff";
  const tooltipBorder = colorMode === "dark" ? "#444" : "#ccc";
  const tooltipText = colorMode === "dark" ? "#ffffff" : "#000000";
  const tooltipShadow =
    colorMode === "dark"
      ? "0 2px 4px rgba(0,0,0,0.5)"
      : "0 2px 4px rgba(0,0,0,0.1)";

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ width: "100%", height: "400px" }}
    >
      <motion.div
        variants={itemVariants}
        style={{ width: "100%", height: "100%" }}
      >
        <ResponsiveContainer width="100%" height={400}>
          <RadialBarChart
            data={normalizedData}
            innerRadius="20%"
            outerRadius="90%"
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
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        background: tooltipBg,
                        padding: "8px 12px",
                        border: `1px solid ${tooltipBorder}`,
                        borderRadius: "4px",
                        boxShadow: tooltipShadow,
                        transition: "all 0.2s ease",
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
                    </motion.div>
                  );
                }
                return null;
              }}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  );
}
