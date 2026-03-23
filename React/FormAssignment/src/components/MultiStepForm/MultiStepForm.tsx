import { useState} from 'react';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import Interest from './Interest/Interest';
import type { MultiStepFormValues } from './types/type';
import FinalReview from './FinalReview/FinalReview';

export default function MultiStepForm(){
    const[step,setStep]=useState<number>(0);
    const[formData,setFormData]=useState<MultiStepFormValues>({
        role:'',
    });

    const handleChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        if(e.target.name==="role"){
            setFormData((prev)=>({...prev,role:e.target.value}))
        }
        else if(e.target.name==="designer"){
             setFormData((prev)=>({...prev,favouriteTool:e.target.value}))
        }else if(e.target.name==="developer"){
             setFormData((prev)=>({...prev,favouriteLanguage:e.target.value}))
        }
    }
    const handleNextStep=():void=>{
        setStep((prev)=>prev+1);
    }
    const handlePreviousStep=():void=>{
        
        setStep((prev)=>prev-1);
    }
    // 
    // 
    const renderStep=()=>{
        switch(step){
            case 0:
                return(
                    <button onClick={handleNextStep} >Lets Start</button>
                )
            case 1:
                return(<PersonalInfo  nextStep={handleNextStep} handleChange={handleChange} values={formData} />)
            case 2:
                return(<Interest  nextStep={handleNextStep} prevStep={handlePreviousStep} handleChange={handleChange} values={formData}/>)
            case 3: return(<FinalReview values={formData} prevStep={handlePreviousStep}/>);
            default:
                return null;
        }
        
    }
    // useEffect(()=>{
    //     renderStep();
    //     console.log(formData);
    //     console.log(step);
    // },[step]);
    return (
        
        <>
        {renderStep()}
        </>
        
       
    )



}