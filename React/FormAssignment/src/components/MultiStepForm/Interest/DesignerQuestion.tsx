import type { ChildStepProps } from "../types/type";
export default function DesignerQuestion({data,handleChange}:ChildStepProps){
    return (
        <>
        <label>Select you favourite tool: </label>
            <select name="designer" value={data.favouriteTool} onChange={handleChange}>
                <option>Select</option>
                <option value="figma">Figma</option>
                <option value="adobe">Adobe</option>
                


            </select>
        </>
    )
}