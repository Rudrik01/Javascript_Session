import {useEffect} from 'react';
import type { MouseEvent } from 'react';
import type { MultiStepFormProps } from '../types/type';
export default function PersonalInfo({nextStep,handleChange,values}: MultiStepFormProps){

    // const handleChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    //     setValue(e.target.value);
       
    // }
    useEffect(()=>{
        console.log(values.role);
    },[values.role]);
    const handleNext = (e:MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    nextStep();
  };
    return (
        <>
        <label>Are you a ?</label>
        <select name="role"  value={values.role} onChange={handleChange}>
            <option>Select</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
        </select>
        <div>
             <button onClick={handleNext}>Next</button>

        </div>
       
        
        </>
    )

}   