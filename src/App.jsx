import "./styles/css/App.css";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/dashboard";
import Error from "./pages/Error";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout header={<Header />} sidebar={<Sidebar />}>
        <Routes>
          <Route path="/" element={<Navigate to="/user/12" />} />
          <Route path="/user/:id" element={<Dashboard />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
