import { Link } from "react-router-dom"

export default function HomePage(){
    return (
        <>
        <h1>Home Page</h1>
        <ul>
            <Link to="/login"><li>Login</li></Link>
            <Link to="/about"><li>About us</li></Link>
            <Link to="/dashboard"><li>Dashboard</li></Link>
        </ul>
        
        </>
    )
}