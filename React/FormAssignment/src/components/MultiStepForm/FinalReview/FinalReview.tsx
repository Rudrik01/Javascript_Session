
import type { MultiStepFormProps } from "../types/type"
import type { MouseEvent } from 'react';
export default function FinalReview({values,prevStep}:Pick<MultiStepFormProps,'prevStep'|'values'>){
   const handlePrevStep=(e:MouseEvent<HTMLButtonElement>)=>{
     e.preventDefault();
     if(prevStep){

     
        prevStep();
     }

   }
    return (
        <>
        <p>Your Role: {values.role}</p>
        {values.role==="developer" ? <p>Favourite Language:{values.favouriteLanguage}</p>:<p>Favourite Tool: {values.favouriteTool}</p>}

        <button onClick={handlePrevStep}>Previous</button>
        </>
    )
}