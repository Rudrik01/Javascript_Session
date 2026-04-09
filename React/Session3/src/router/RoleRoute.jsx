import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/useAuth";


export default function RoleRoute({ allowedRoles }) {

  const { user, isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  // Optional: wait while auth state loads
  if (isLoading) {
    return (<>
        <p>Loading...</p>
    </>);
  }

  // 1️⃣ If not authenticated → login
  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  
  if (!allowedRoles.includes(user?.role)) {
    return <Navigate to="/unauthorized" replace />;
  }


  return <Outlet />;
}