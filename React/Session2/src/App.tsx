
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import  Assignment1 from "./Components/Assignment1/Assignment";
import Assignment2 from "./Components/Assignment2/AutoCounter";
import Assignment3 from "./Components/Assignment3/Assignment3";
import Assignment4 from "./Components/Assignment4/Assignment4";
import Assignment5 from "./Components/Assignment5/Assignment5";
import Assignment6 from "./Components/Assignment6/Assignment6";
import Assignment7 from "./Components/Assignment7/Assignment7";
export default function App() {
  return (


  <Router>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Assignment1" element={<Assignment1/>}/>
        <Route path="/Assignment2" element={<Assignment2/>}/>
        <Route path="/Assignment3" element={<Assignment3/>}/>
        <Route path="/Assignment4" element={<Assignment4/>}/>
         <Route path="/Assignment5" element={<Assignment5/>}/>
         <Route path="/Assignment6" element={<Assignment6/>}/>
         <Route path="/Assignment7" element={<Assignment7/>}/>

    </Routes>
  </Router>
  );
}