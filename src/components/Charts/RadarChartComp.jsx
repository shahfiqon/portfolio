import React from "react";
import {
  RadarChart,
  Radar,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

export default function RadarChartComp({ data, angleKey, valueKey }) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <RadarChart data={data} outerRadius={70} cx="50%" cy="50%">
        <PolarGrid />
        <PolarAngleAxis dataKey={angleKey} tick={{ fontSize: 12 }} />
        <Radar
          name="Score"
          dataKey={valueKey}
          stroke="#10b981"
          fill="#10b981"
          fillOpacity={0.4}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
