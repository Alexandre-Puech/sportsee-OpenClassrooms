import "./styles/css/App.css";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Layout header={<Header />} sidebar={<Sidebar />}>
      Hello World
    </Layout>
  );
}

export default App;
