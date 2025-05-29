import { useEffect, useState } from "react";
import { getUserData } from "../api/api";
import Title from "../components/Title";
import Charts from "../components/Charts";
import DailyActivity from "../components/DailyActivity";
import AverageSessions from "../components/AverageSessions";
import PerformanceRadar from "../components/PerformanceRadar";
import ScoreRadial from "../components/ScoreRadial";
import DataCards from "../components/DataCards";
import { useParams, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const { id } = useParams();
  const USER_ID = Number(id);
  const MOCKED_DATA = false; // Set to true to use mocked data
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchUser() {
      const userData = await getUserData(USER_ID, MOCKED_DATA);
      if (!userData) {
        navigate("/error");
      } else {
        setLoading(false);
      }
    }
    fetchUser();
  }, [USER_ID, MOCKED_DATA, navigate]);

  return !loading ? (
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
  ) : null;
}

export default Dashboard;
