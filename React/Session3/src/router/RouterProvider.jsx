import { createBrowserRouter } from "react-router-dom";

import About from "../components/About";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Dashboard from "../components/Dashboard";
import Admin from "../components/Admin";
import NotFound from "../components/NotFound";
import Home from "../components/Home";
import Unauthorized from "../components/Unauthorized";
import ProtectedRoute from "./ProtectectedRoute";

import RoleRoute from "./RoleRoute";  
import Layout from "../components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },

      {
        path: "login",
        element: (
      
            <Login />
      
        ),
      },

      { path: "about", element: <About /> },
      {
        element: <ProtectedRoute />,
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "profile", element: <Profile /> },
         
        ]
      },
      {
        element:<RoleRoute allowedRoles={["admin"]}/>,
        children:[{path:"admin", element: <Admin /> }]
      },
      {path:"404notfound",element:<NotFound/>},
      { path: "unauthorized", element: <Unauthorized /> }
    ],
  },
]);