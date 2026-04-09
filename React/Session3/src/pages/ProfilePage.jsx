import {useAuth} from "../context/useAuth";

export default function ProfilePage(){
    const {user}=useAuth();
    return (
        <>
        <h1>Profile Page</h1>
        <h2>Name: {user.name}</h2>
        <h2>Role: {user.role}</h2>
        
        </>
    )
}