/*
4. useContext
In the sandbox, add a context (e.g. ThemeContext or UserContext), wrap part of the app in a Provider, and build a child component that reads the value with useContext and displays it (e.g. theme name or user name).
*/

import { useTheme } from "../useContext/ThemeContext";


export default function Assignment4(){
    const {theme,setTheme}=useTheme();

    const handleChange=()=>{
        setTheme(prev=>prev==="Dark"?"Light":"Dark");
    }
    return (
        <>
        <div style={{backgroundColor:theme==="Dark" ? "black" : "white",color:theme==="Dark" ? "white" : "black"}}>Assignment useContext</div>
  
        <button onClick={handleChange}>Click me </button>


        
        
        </>
    )
}