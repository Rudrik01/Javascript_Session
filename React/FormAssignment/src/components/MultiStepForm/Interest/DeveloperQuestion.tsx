import type { ChildStepProps } from "../types/type";

export default function DeveloperQuestion({data,handleChange}:ChildStepProps){
    return (
        <>
        <label>Select you favourite language: </label>
         <select name="developer" value={data.favouriteLanguage} onChange={handleChange}>
                <option>Select</option>
                <option value="python">Python</option>
                <option value="php">PHP</option>
                


            </select>
        </>
    )
}