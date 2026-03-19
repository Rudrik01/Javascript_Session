// import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom';

// import About from "./components/About";
// import Login from "./components/Login";
// import Profile from "./components/Profile";
// import Dashboard from "./components/dashboard";
// import Admin from "./components/Admin";
// import NotFound from "./components/NotFound";
// import Home from "./components/Home";
// import Unauthorized from "./components/Unauthorized";



// export default function App(){
//   return (
//         <Router>
          
//             <Routes>
//               <Route path="/" element={<Home/>}/>
//               <Route path="/Login" element={<Login/>}/>
//               <Route path="*" element ={<NotFound/>}/>
//             </Routes>
//         </Router>
//   );
// }


import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
    
      <Outlet />
    </>
  );
}