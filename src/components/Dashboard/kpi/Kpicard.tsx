import RadialBarChartComp from "../../Charts/RadialBarChartComp";
import data from "../../../data/dashboard.json";
import React, { useEffect, useState, useRef } from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { motion, useInView } from "framer-motion";
import {
  FiTrendingUp,
  FiUsers,
  FiAward,
  FiCode,
  FiGitBranch,
  FiTarget,
  FiCheckCircle,
  FiActivity,
} from "react-icons/fi";

//types
export interface KPIItem {
  label: string;
  value: string;
}

export interface KPIChartData {
  name: string;
  value: number;
}

// Convert "8+" → 8
const sanitizeValue = (v: string) => parseInt(v.replace(/\D/g, ""), 10);

const kpiChartData: KPIChartData[] = (data.kpis as KPIItem[]).map((kpi) => ({
  name: kpi.label,
  value: sanitizeValue(kpi.value),
}));

const getIconForKPI = (label: string) => {
  const iconProps = { size: 24 };
  if (label.includes("Experience")) return <FiTrendingUp {...iconProps} />;
  if (label.includes("Projects")) return <FiTarget {...iconProps} />;
  if (label.includes("Talks")) return <FiUsers {...iconProps} />;
  if (label.includes("Mentored")) return <FiAward {...iconProps} />;
  if (label.includes("Open Source")) return <FiGitBranch {...iconProps} />;
  if (label.includes("Migrations")) return <FiCode {...iconProps} />;
  if (label.includes("Reviews")) return <FiCheckCircle {...iconProps} />;
  if (label.includes("Users")) return <FiActivity {...iconProps} />;
  return <FiTarget {...iconProps} />;
};

const AnimatedCounter: React.FC<{ value: string; duration?: number }> = ({
  value,
  duration = 2,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = sanitizeValue(value);
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const KPICard: React.FC = () => {
  const { colorMode } = useColorMode();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: isMobile ? "90vw" : "100%",
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "repeat(2, 1fr)"
            : "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        {(data.kpis as KPIItem[]).map((kpi, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            style={{
              padding: "20px",
              borderRadius: "12px",
              border: `1px solid ${
                colorMode === "dark" ? "#333" : "#e5e7eb"
              }`,
              background: colorMode === "dark" ? "#262626" : "#fff",
              boxShadow:
                colorMode === "dark"
                  ? "0px 2px 8px rgba(0,0,0,0.3)"
                  : "0px 2px 8px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  color: "var(--ifm-color-primary)",
                  opacity: 0.8,
                }}
              >
                {getIconForKPI(kpi.label)}
              </div>
            </div>
            <div
              style={{
                fontSize: isMobile ? "24px" : "32px",
                fontWeight: "bold",
                color: colorMode === "dark" ? "#ffffff" : "#111827",
                marginBottom: "8px",
              }}
            >
              <AnimatedCounter value={kpi.value} />
            </div>
            <div
              style={{
                fontSize: "13px",
                color: colorMode === "dark" ? "#a3a3a3" : "#6b7280",
                fontWeight: 500,
              }}
            >
              {kpi.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default KPICard;
