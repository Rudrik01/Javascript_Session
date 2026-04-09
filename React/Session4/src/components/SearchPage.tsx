import {useState,useEffect} from 'react'
import useDebounce from '../customHook/useDebounce';

export default function SearchPage(){
     const [search,setSearch]=useState<string>("");
     const debounceValue=useDebounce(search,500);

     useEffect(()=>{
        if(debounceValue){
           console.log("Called Debounced function")
        }
        
     },[debounceValue]);
     return (
        <>
        <label htmlFor="search">Search</label>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        {debounceValue}
        </>
     )

}