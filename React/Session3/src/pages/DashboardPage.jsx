import { useAuth } from "../context/useAuth"
import { useEffect } from "react";
import {Navigate,useNavigate,useLocation} from 'react-router-dom';
export default function DashboardPage(){
    const {logout,isAuthenticated}=useAuth();
    const navigate = useNavigate();
    if(!isAuthenticated){
            return <Navigate to="/login" state={{ from: location }}replace />;
    }
    
    const handleLogOut=()=>{
        logout();
    }
      const handleProfile = () => {
        navigate("/profile");
  };

    return (
        <>
        <h1>Dashboard</h1>
        <button    style={{ marginRight: '70px' }}onClick={handleProfile}>Profile</button>
        <button onClick={handleLogOut}>Logout</button>
        </>
    )
}