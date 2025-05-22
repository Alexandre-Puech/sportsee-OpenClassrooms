import "./styles/css/App.css";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Layout header={<Header />} sidebar={<Sidebar />}>
      <Dashboard />
    </Layout>
  );
}

export default App;
