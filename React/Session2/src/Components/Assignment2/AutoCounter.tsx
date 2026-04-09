/* 
 2. **useEffect + cleanup**
 Create a component that starts a `setInterval` when it mounts, updates a counter every second, and clears the interval in a `useEffect` cleanup. Unmount the component (e.g. toggle with a button) and confirm the interval stops (no console errors or extra ticks).
*/
import React, { useEffect,useState } from 'react';


export default function AutoCounter(){

    const [count,setCount]=useState(0);
    const [start,setStart]=useState(false);
    useEffect(()=>{
        console.log("use effect runned");
        let Interval:number;
        if(start){
           Interval = setInterval(()=>{
           setCount((prev)=>prev+1);
           

        },1000);
        }
        
    return () => {
      if (Interval) {
        clearInterval(Interval);
      }
    }
    },[start]);
    const toggle =()=>{
        setStart((prev)=>prev ? false : true);
        
    }
    return (
        <>

        <h1>Timer : {count}</h1>
        {start ? (
            <button onClick={toggle}>Stop</button>
        ):
        <button onClick={toggle}>Start</button>
        }
        
        </>
    )
}