import { useAuth } from "../context/useAuth";

import { Navigate,useNavigate,useLocation} from "react-router-dom";

export default function AdminPage() {
  const { logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();
     const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const handleLogOut = () => {
    logout();
    navigate("/login", { replace: true });
  };
const handleProfile = () => {
        navigate("/profile");
  };
  return (
    <>
      <h1>Admin Page</h1>
      <button style={{ marginRight: '70px' }} onClick={handleProfile}>Profile</button>
      <button onClick={handleLogOut}>Logout</button>
    </>
  );
}
