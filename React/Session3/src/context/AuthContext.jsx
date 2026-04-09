import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const login = (role) => {
    setIsLoading(true);

    setTimeout(()=>{
        const fakeUser = {
      name: "Rudrik",
      role: role
    };

    setUser(fakeUser);
    setIsAuthenticated(true);
    setIsLoading(false);
    return fakeUser;
    },5000);
    
  };
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}