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
import { useEffect, useState } from "react";
import { getUserAverageSessions } from "../api/api";

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

function AverageSessions({ userId, mockedData }) {
  const [sessions, setSessions] = useState(null);
  useEffect(() => {
    async function fetchUser() {
      const userData = await getUserAverageSessions(userId, mockedData);
      if (userData && Array.isArray(userData.sessions)) {
        const sessionsWithDay = userData.sessions.map((session, index) => ({
          ...session,
          dayNumber: index + 1,
        }));
        setSessions(sessionsWithDay);
      } else {
        setSessions([]);
      }
    }
    fetchUser();
  });
  if (!sessions) {
    return <div>Loading...</div>;
  }
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
          margin={{ top: 0, bottom: 20, left: 5, right: 5 }}
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
