import { useAuth } from "../context/useAuth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [role, setRole] = useState<string>("user");

  const { login, isLoading, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = () => {
    login(role);
  };

  useEffect(() => {
    if (isAuthenticated) {
     
        navigate("/dashboard");
      
    }
  }, [isAuthenticated]);

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