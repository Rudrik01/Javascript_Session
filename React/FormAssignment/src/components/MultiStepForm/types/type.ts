export type MultiStepFormValues={
    role:string;
    favouriteLanguage?:string;
    favouriteTool?:string;

}
export type ChildStepProps={
  data:MultiStepFormValues;
  handleChange: React.ChangeEventHandler< HTMLSelectElement>
}
export type MultiStepFormProps = {
  nextStep: () => void
  prevStep?:()=>void
  handleChange: React.ChangeEventHandler< HTMLSelectElement>
  values: MultiStepFormValues
}