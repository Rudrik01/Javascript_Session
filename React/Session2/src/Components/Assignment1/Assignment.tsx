
/*
1. **useState**
Add a new component that has two pieces of state:name(string) and age (number). Render them and add buttons to increment age and update name from an input.
*/
import {useState} from 'react';



type User={
    name:string;
    age:number;
}


export default function Assignment1(){
    const [user,setUser]=useState<User>({
        name:'',
        age:0
    });
    return (
        <>
        <label htmlFor="name">Name: </label>
        <input type="text" value={user.name} onChange={(e)=>{
            setUser({...user,name:e.target.value});
        }}    />
        <p>Age:  
        <button onClick={()=>{
            setUser((prev)=>({...prev,age:prev.age+1}))
        }}>+</button>
         <button onClick={()=>{
            setUser((prev)=>({...prev,age:prev.age-1 >=0 ?prev.age-1 : 0}))
        }}>-</button> </p>  


        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        </>
    )

}