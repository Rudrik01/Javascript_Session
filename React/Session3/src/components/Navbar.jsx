import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc", marginBottom: "20px", display: "flex", gap: "10px" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>

      {isAuthenticated && (
        <>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </>
      )}

      {user?.role === "admin" && (
        <NavLink to="/admin">Admin</NavLink>
      )}

      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </nav>
  );
}
