import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import { useEffect, useState } from "react";
import { getUserData } from "../api/api";
import "../styles/css/Radialbarchart.css";

function ScoreRadial() {
  const [score, setScore] = useState(null);
  useEffect(() => {
    async function fetchUser() {
      const userData = await getUserData(18);
      const userScore =
        userData.score !== undefined ? userData.score : userData.todayScore;
      setScore(userScore * 100);
    }
    fetchUser();
  }, []);
  if (score === null) {
    return <div>Loading...</div>;
  }

  const scoreData = [{ name: "Score", value: score, fill: "#FF0000" }];

  return (
    <div className="radialbarchart-container">
      <p className="title">Score</p>
      <div className="radialbarchart-center">
        <div className="radialbarchart-infos">
          <p className="percentage">{score}%</p>
          <p className="percentage-complement">
            de votre
            <br />
            objectif
          </p>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            innerRadius="70%"
            outerRadius="80%"
            barSize={10}
            data={scoreData}
            startAngle={90}
            endAngle={450}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar dataKey="value" cornerRadius={50} background />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
export default ScoreRadial;
