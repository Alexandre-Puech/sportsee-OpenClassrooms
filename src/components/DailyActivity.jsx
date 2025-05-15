import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";
import { USER_ACTIVITY } from "../data/data";
import "../styles/css/Barchart.css";

const userId = 18;
const userData = USER_ACTIVITY.find((user) => user.userId === userId);
const sessions = userData.sessions.map((session, index) => ({
  ...session,
  dayNumber: index + 1,
}));

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length === 2) {
    const kilo = payload.find((p) => p.dataKey === "kilogram")?.value;
    const cal = payload.find((p) => p.dataKey === "calories")?.value;

    return (
      <div className="custom-tooltip">
        <p>{`${kilo}kg`}</p>
        <p>{`${cal}Kcal`}</p>
      </div>
    );
  }
  return null;
};

function DailyActivity() {
  const kilograms = sessions.map((s) => s.kilogram);
  const minKg = Math.min(...kilograms);
  const maxKg = Math.max(...kilograms);

  return (
    <div className="barchart-container">
      <p className="barchart-title">Activité quotidienne</p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={sessions} barSize={7} barGap={8}>
          <XAxis
            dataKey="dayNumber"
            tick={{ fill: "#9B9EAC", fontSize: 14, dy: 8 }}
          />
          <YAxis
            yAxisId="left"
            domain={[minKg - 1, maxKg + 1]}
            allowDecimals={false}
            orientation="right"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#9B9EAC", fontSize: 14 }}
          />
          <YAxis yAxisId="right" orientation="right" hide />
          <Tooltip
            content={<CustomTooltip />}
            viewBox={{ x: 0, y: 0, width: 800, height: 400 }}
          />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize="8"
            payload={[
              {
                value: "Poids (kg)",
                type: "circle",
                id: "kg",
                color: "#282D30",
                fontSize: "14px",
              },
              {
                value: "Calories brûlées (kCal)",
                type: "circle",
                id: "cal",
                color: "#E60000",
              },
            ]}
            wrapperStyle={{
              marginTop: 23,
              marginRight: 26,
              marginLeft: 0,
              paddingBottom: 64,
            }}
          />
          <Bar
            yAxisId="left"
            dataKey="kilogram"
            fill="#282d30"
            radius={[3, 3, 0, 0]}
          />
          <Bar
            yAxisId="right"
            dataKey="calories"
            fill="#ff0101"
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default DailyActivity;
