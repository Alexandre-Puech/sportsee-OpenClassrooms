import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import "../styles/css/Radarchart.css";
import { useEffect, useState } from "react";
import { getUserPerformance } from "../api/api";

const trueLabels = [
  "",
  "Cardio",
  "Énergie",
  "Endurance",
  "Force",
  "Vitesse",
  "Intensité",
];

function PerformanceRadar({ userId, mockedData }) {
  const [performanceData, setPerformanceData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getUserPerformance(userId, mockedData);
      if (data && Array.isArray(data.data)) {
        setPerformanceData(data.data);
      } else {
        setPerformanceData([]);
      }
    }
    fetchData();
  });

  if (!performanceData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="radarchart-container">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={performanceData}>
          <PolarGrid stroke="#fff" strokeOpacity={0.5} />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: "#FFFFFF", fontSize: 12 }}
            tickFormatter={(kind) => {
              if (typeof kind === "number") return trueLabels[kind] || "";
              return kind;
            }}
          />
          <PolarRadiusAxis
            tick={false}
            axisLine={false}
            stroke="#FFFFFF"
            strokeOpacity={0.3}
          />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PerformanceRadar;
