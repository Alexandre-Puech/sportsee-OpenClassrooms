import { useEffect, useState } from "react";
import { getUserData } from "../api/api";
import Title from "../components/Title";
import Charts from "../components/Charts";
import DailyActivity from "../components/DailyActivity";
import AverageSessions from "../components/AverageSessions";
import PerformanceRadar from "../components/PerformanceRadar";
import ScoreRadial from "../components/ScoreRadial";
import DataCards from "../components/DataCards";
// import { useParams } from "react-router-dom"; // Uncomment when integrating with the real app

//const { USER_ID } = useParams(); //switch from a basic const to useParams hook when integrating to the real app
const USER_ID = 18; // Mocked user ID for testing
const MOCKED_DATA = false; // Set to true to use mocked data

function Dashboard() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function fetchUser() {
      const userData = await getUserData(USER_ID, MOCKED_DATA);
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
        userId={USER_ID}
        mockedData={MOCKED_DATA}
        subtitle="Félicitation ! Vous avez explosé vos objectifs hier 👏"
      />
      <div className="content-body">
        <Charts>
          <DailyActivity userId={USER_ID} mockedData={MOCKED_DATA} />
          <AverageSessions userId={USER_ID} mockedData={MOCKED_DATA} />
          <PerformanceRadar userId={USER_ID} mockedData={MOCKED_DATA} />
          <ScoreRadial userId={USER_ID} mockedData={MOCKED_DATA} />
        </Charts>
        <DataCards userId={USER_ID} mockedData={MOCKED_DATA} />
      </div>
    </>
  );
}

export default Dashboard;
