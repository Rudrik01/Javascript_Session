import type { MultiStepFormProps } from "../types/type";
import type { MouseEvent } from 'react';
import DeveloperQuestion from "./DeveloperQuestion";
import DesignerQuestion from "./DesignerQuestion";
export default function Interest({nextStep,prevStep,handleChange,values}:MultiStepFormProps){
    
    const handleStep = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const { name } = e.target as HTMLButtonElement  
        if(name==="next"){
            nextStep();
        }else if(prevStep){
            prevStep();
        }
        
      };
    


    return(
        <>
           {values.role==='developer' ? <DeveloperQuestion data={values} handleChange={handleChange} /> : <DesignerQuestion data={values} handleChange={handleChange}/>}
           <div  style={{display:'flex', flexDirection:'row',gap:'20px'}}>
              
                <button name="next" onClick={handleStep}>Next</button>
                
                    <button name="prev"onClick={handleStep}>Previous</button>
                
           </div>
         
        </>
    )
}


