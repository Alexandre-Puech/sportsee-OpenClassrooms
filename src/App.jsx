import "./styles/css/App.css";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Title from "./components/Title";
import { USER_MAIN_DATA } from "./data/data.js";

function App() {
  const userId = 18;
  const userData = USER_MAIN_DATA.find((user) => user.id === userId);
  if (!userData) {
    return <div>Error: User not found</div>;
  }
  return (
    <Layout header={<Header />} sidebar={<Sidebar />}>
      <Title
        name={userData.userInfos.firstName}
        subtitle="Félicitation ! Vous acez explosé vos objectifs hier 👏"
      />
      {/* A remplacer par un message en fonction du résultat réel de la veille */}
    </Layout>
  );
}

export default App;
