import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { USER_PERFORMANCE } from "../data/data";
import "../styles/css/Radarchart.css";

const userId = 18;
const data = USER_PERFORMANCE.find((user) => user.userId === userId);

const performanceData = data.data.map((item) => ({
  value: item.value,
  kind: item.kind,
}));
const trueLabels = [
  "",
  "Cardio",
  "Énergie",
  "Endurance",
  "Force",
  "Vitesse",
  "Intensité",
];

function PerformanceRadar() {
  return (
    <div className="radarchart-container">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={performanceData}>
          <PolarGrid stroke="#fff" strokeOpacity={0.5} />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: "#FFFFFF", fontSize: 12 }}
            tickFormatter={(kind) => trueLabels[kind] || ""}
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
