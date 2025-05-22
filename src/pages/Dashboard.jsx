// import { USER_MAIN_DATA } from "../data/data";
// import Title from "../components/Title";
// import Charts from "../components/Charts";
// import DailyActivity from "../components/DailyActivity";
// import AverageSessions from "../components/AverageSessions";
// import PerformanceRadar from "../components/PerformanceRadar";
// import ScoreRadial from "../components/ScoreRadial";
// import DataCards from "../components/DataCards";
// import { useEffect, useState } from "react";
// import { getUserData } from "../api/api";

// function Dashboard() {
//   const [user, setUser] = useState({});
//   useEffect(() => {
//     const user = getUserData(18);
//     setUser(user);
//   }, []);
//   //   const userId = 18;
//   //   const userData = USER_MAIN_DATA.find((user) => user.id === userId);
//   //   if (!userData) {
//   //     return <div>Error: User not found</div>;
//   //   }
//   return (
//     user && (
//       <>
//         <Title
//           name={user.firstName}
//           subtitle="Félicitation ! Vous avez explosé vos objectifs hier 👏"
//           // A remplacer par un message en fonction du résultat réel de la veille
//         />
//         <div className="content-body">
//           <Charts>
//             <DailyActivity />
//             <AverageSessions />
//             <PerformanceRadar />
//             <ScoreRadial />
//           </Charts>
//           <DataCards />
//         </div>
//       </>
//     )
//   );
// }
// export default Dashboard;

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
