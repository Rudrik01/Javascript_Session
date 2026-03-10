
import {Link} from "react-router-dom";
export default function Home(){
    return (
        <>
        <h1>Session 2</h1>
        <ol>
             <li><Link to="Assignment1">Assignment1</Link></li>
             <li><Link to="Assignment2">Assignment2</Link></li>
             <li><Link to="Assignment3">Assignment3</Link></li>
             <li><Link to ="Assignment4">Assignment4</Link></li>
             <li><Link to="Assignment5">Assignment5</Link></li>
             <li><Link to="Assignment6">Assignment6</Link></li>
             <li><Link to="Assignment7">Assignment7</Link></li>
        </ol>
       
        </>
    );
}