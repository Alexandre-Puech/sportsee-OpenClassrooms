import { USER_AVERAGE_SESSIONS } from "../data/data";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from "recharts";
import "../styles/css/Linechart.css";

const userId = 18;
const userData = USER_AVERAGE_SESSIONS.find((user) => user.userId === userId);
const baseSessions = userData.sessions;
const first = baseSessions[0];
const last = baseSessions[baseSessions.length - 1];
const sessions = [
  { day: "", sessionLength: first.sessionLength },
  ...baseSessions,
  { day: "", sessionLength: last.sessionLength },
];
const dayLabels = ["", "L", "M", "M", "J", "V", "S", "D"];
const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload || !payload.length || !payload[0].payload.day) {
    return null;
  }
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#fff",
          color: "#000",
          fontSize: 12,
          padding: "5px 8px",
          border: "none",
        }}
      >
        {`${payload[0].value} min`}
      </div>
    );
  }
  return null;
};

const CustomCursor = ({ points }) => {
  return (
    <Rectangle
      fill="#000000"
      opacity={0.2}
      x={points[1].x}
      width={1000}
      height={300}
    />
  );
};

function AverageSessions() {
  return (
    <div className="linechart-container">
      <div className="title">
        <p>
          Durée moyenne des
          <br />
          sessions
        </p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={sessions}
          margin={{ top: 0, bottom: 20, left: 0, right: 0 }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#FFFFFF", opacity: 0.5, fontSize: 12 }}
            tickFormatter={(day) => dayLabels[day] || ""}
            padding={{ left: 10, right: 10 }}
          />
          <YAxis hide domain={["dataMin - 10", "dataMax + 20"]} />
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 4,
              stroke: "rgba(255,255,255,0.4)",
              strokeWidth: 10,
              fill: "#FFFFFF",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default AverageSessions;
