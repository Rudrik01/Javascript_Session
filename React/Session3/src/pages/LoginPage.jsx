// import { useAuth } from "../context/useAuth";
// import { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import LoadingSpinner from "./LoadingSpinner";

// export default function Login() {

//   const [role, setRole] = useState("user");
//   const { login, isLoading ,isAuthenticated} = useAuth();
//   const navigate=useNavigate();

//   if (isAuthenticated) {
//     return navigate('/dashboard',{replace:true});
//   }
  

//   const handleSubmit = () => {
//     login("user");

//     // navigate after login
//     navigate("/dashboard" ,{replace:true});
//   };

//   return (
//     <>
//       {!isLoading ? (
//         <>
//           <label>Select role</label>

//           <select value={role} onChange={(e) => setRole(e.target.value)}>
//             <option value="admin">Admin</option>
//             <option value="user">User</option>
//           </select>

//           <br /><br />

//           <button onClick={handleSubmit}>
//             Login
//           </button>
//         </>
//       ) : (
//         <LoadingSpinner/>
//       )}

//       {/* {user && (
//         <h2>
//           Name: {user.name} Role: {user.role}
//         </h2>
//       )} */}
//     </>
//   );
// }


import { useAuth } from "../context/useAuth";
import { useState } from "react";
import { useNavigate, Navigate, useLocation } from "react-router-dom";


export default function Login() {

  const [role, setRole] = useState("user");
  const { login, isLoading, isAuthenticated,user} = useAuth();
  const navigate = useNavigate();
  const location=useLocation();
  const from = location.state?.from?.pathname ||  "/dashboard";
  

  const handleSubmit = () => {
    login(role);
    if(role=="admin"){
      navigate("/admin",{replace:true});
    }else{
       navigate(from, { replace: true });
    }
    // navigate after login
   
  };

  return (
    <>
      {!isLoading ? (
        <>
          <label>Select role</label>

          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="student">Rudrik</option>
          </select>

          <br /><br />

          <button onClick={handleSubmit}>
            Login
          </button>
        </>
      ) : (
   
        <p>Loading...</p>
      )}
    </>
  );
}
