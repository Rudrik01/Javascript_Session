import { Navigate,Outlet,useLocation } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const allowedRole=["user","admin"];
export default function ProtectedRoute(){
    const{isAuthenticated,isLoading,user}=useAuth();

    const location=useLocation();

    if(isLoading){
       return ( <p>Loading...</p>)
    }
    if(!isAuthenticated){
        return (
            <Navigate to="/login" state={{from:location}} replace/>

        );
    }
    if(!allowedRole.includes(user.role)){
        return <Navigate to="/404notfound " replace />;
    }
    return <Outlet/>
}
