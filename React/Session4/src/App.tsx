
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import Login from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import withAuth from "./hoc/withAuth";

const ProtectedDashboard = withAuth(Dashboard);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

