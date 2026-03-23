import FormComponent from "./components/FunctionalForm/FormComponent";

import ClassFormComponent from "./components/ClassComponentForm/ClassComponentForm";
import ZodForm from "./components/FormUsingZod/ZodForm";
import { useState } from "react";
import PersonalInfo from "./components/MultiStepForm/PersonalInfo/PersonalInfo";
import MultiStepForm from "./components/MultiStepForm/MultiStepForm";
import UndoRedo from "./components/UndoRedo/UndoRedo";
import SearchComponent from "./components/SearchComponent/SearchComponent";
export default function App() {
  const [choice, setChoice] = useState<string>("");

  return (
    <>
      <select
        name="choice"
        id="choice"
        value={choice}
        onChange={(e) => setChoice(e.target.value)}
      >
        <option value="">Select</option>
        <option value="functional">Functional Component</option>
        <option value="class">Class Component</option>
        <option value="zod">Zod Component</option>
      </select>
      {choice === "functional" ? (
        <FormComponent />
      ) : choice === "class" ? (
        <ClassFormComponent />
      ) : (choice==="zod"?(
        <ZodForm/>
      ):<p>Select the type</p>)}
     



      {/* <MultiStepForm/> */}
      {/* <UndoRedo/> */}
      {/* <SearchComponent/> */}
    </>
  );
}
