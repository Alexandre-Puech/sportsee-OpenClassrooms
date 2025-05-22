import { useEffect, useState } from "react";
import { getUserData } from "../api/api";
import Title from "../components/Title";
import Charts from "../components/Charts";
import DailyActivity from "../components/DailyActivity";
import AverageSessions from "../components/AverageSessions";
import PerformanceRadar from "../components/PerformanceRadar";
import ScoreRadial from "../components/ScoreRadial";
import DataCards from "../components/DataCards";

function Dashboard() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function fetchUser() {
      const userData = await getUserData(18);
      setUser(userData);
    }
    fetchUser();
  }, []);
  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Title
        name={user.firstName}
        subtitle="Félicitation ! Vous avez explosé vos objectifs hier 👏"
      />
      <div className="content-body">
        <Charts>
          <DailyActivity />
          <AverageSessions />
          <PerformanceRadar />
          <ScoreRadial />
        </Charts>
        <DataCards />
      </div>
    </>
  );
}

export default Dashboard;
