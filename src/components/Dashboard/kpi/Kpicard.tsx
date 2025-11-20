import RadialBarChartComp from "../../Charts/RadialBarChartComp";
import data from "../../../data/dashboard.json";
import React from "react";

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

const cardStyle: React.CSSProperties = {
  padding: "24px",
  borderRadius: "12px",
  border: "1px solid",
  width: "100%",
  maxWidth: "600px",
  margin: "20px auto",
  height: "fit-content",
};

const headerStyle: React.CSSProperties = {
  fontSize: "20px",
  fontWeight: 600,
  marginBottom: "20px",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "12px",
  marginTop: "20px",
};

const kpiItemStyle: React.CSSProperties = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid",
};

const kpiLabelStyle: React.CSSProperties = {
  fontSize: "12px",
  marginBottom: "4px",
  fontWeight: 500,
};

const kpiValueStyle: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: 700,
};

const KPICard: React.FC = () => {
  return (
    <div style={cardStyle}>
      <h2 style={headerStyle}>KPI Overview</h2>

      <RadialBarChartComp data={kpiChartData} nameKey="name" dataKey="value" />

      <div style={gridStyle}>
        {data.kpis.map((kpi) => (
          <div key={kpi.label} style={kpiItemStyle}>
            <div style={kpiLabelStyle}>{kpi.label}</div>
            <div style={kpiValueStyle}>{kpi.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KPICard;
