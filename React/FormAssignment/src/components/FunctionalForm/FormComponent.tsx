import { useEffect, useState } from "react";
import "./form.css";
import { formConfig } from "../../config/FormConfig/formConfig";
import type { FieldConfig } from "../../config/FormConfig/formConfig";
import FormField from "./FormField";
import TagInput from "../TagInput/TagInput";

type ValidationMode = "onBlur" | "onChange" | "onSubmit";
type FormValues = Record<string, string | boolean | string[] | number>
type FormErrors = Record<string, string>
type Touched = Record<string, boolean>

// Initial state built from config
const initialErrorState =formConfig.reduce((acc,field)=>{
  acc[field.name]="";
  return acc;
},{}as FormErrors);
const initialTouchedState =formConfig.reduce((acc,field)=>{
  acc[field.name]=false;
  return acc;
},{}as Touched);
const initialState = formConfig.reduce((acc, field) => {
  if (field.type === "tag") {
    acc[field.name] = [];
  } else {
    acc[field.name] = field.defaultValue ?? "";
  }
  return acc;
}, {} as FormValues);

export default function FormComponent() {
  const [formData, setFormData] = useState<FormValues>(initialState)
  const [touchedData, setTouchedData] = useState<Touched>(initialTouchedState);
  const [formError, setFormError] = useState<FormErrors>(initialErrorState);
  const [validationMode, setValidationMode] =useState<ValidationMode>("onSubmit");
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateField = (name: string,value: string | boolean | string[] | number) => {
    const field = formConfig.find((f) => f.name === name);
    if (!field) return "";
    if(Array.isArray(value)){
      if (field.required && !value.length) {
      
        return `${field.label} is required`;
      }
    }
    if (field.required && !value) {
      
      return `${field.label} is required`;
    }

    if (
      field.regex &&
      typeof value === "string" &&
      value &&
      !field.regex.test(value)
    ) {
      return field.errorMessage ?? `${field.label} is invalid`;
    }

    if (name === "confirmPassword" && value !== formData.password) {
      return "Passwords do not match";
    }
    if (field.type === "number") {
      const num = Number(value);
      if (field.min !== undefined && num < field.min)
        return `Minimum value is ${field.min}`;
      if (field.max !== undefined && num > field.max)
        return `Maximum value is ${field.max}`;
    }
    if (field.type === "tag" && Array.isArray(value)) {
      if (field.required && value.length === 0)
        return `${field.label} is required`;

      if (field.minTags && value.length < field.minTags)
        return `Minimum ${field.minTags} tags required`;
    }

    return "";
  };
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true)
    const newErrors = { ...initialErrorState };
    formConfig.forEach((field) => {
      if (!isFieldVisible(field)) return;
      const value = formData[field.name];

      const error = validateField(field.name, value);

      newErrors[field.name as keyof FormErrors] = error;
    });
    setFormError(newErrors);
    const hasErrors = Object.values(newErrors).some((e) => e !== "");
    if (!hasErrors) {
      alert("Form submitted successfully");
      console.log(formData);
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, type } = e.target;
    const value =
      type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;
    if (name === "gender") {
      setFormError((prev) => ({
        ...prev,
        fatherName: "",
        motherName: "",
      }));
    }
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setTouchedData((prev) => ({
      ...prev,
      [name]: true,
    }));

    if (validationMode === "onChange") {
      const error = validateField(name, value);

      setFormError((prev) => ({
        ...prev,
        [name]: error,
      }));
    } else {
      setFormError((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };
  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, type } = e.target;
    const value =
      type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;

    const error = validateField(name, value);

    setFormError((prev) => ({
      ...prev,
      [name]: error,
    }));
  };
  const isFieldVisible = (field: FieldConfig): boolean => {
    if (!field.showWhen) return true;
    const dependentValue = formData[field.showWhen.field];
    return field.showWhen.values.includes(dependentValue as string);
  };

  const handleTagChange = (name: string, tags: string[]) => {
   
    setFormData((prev) => ({
      ...prev,
      [name]: tags,
    }));


    setTouchedData((prev) => ({
      ...prev,
      [name]: true,
    }));


    if (validationMode === "onChange") {
      const error = validateField(name, tags);

      setFormError((prev) => ({
        ...prev,
        [name]: error,
      }));
    } else {
      setFormError((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };
  const handleClear = () => {
    setFormData(initialState);
    setTouchedData(initialTouchedState);
    setFormError(initialErrorState);
    setIsSubmitted(false) 
  };
  useEffect(()=>{
    console.log("Functional Component rendered")
  },[]);
  return (
    <>
      <div>
      <select
        value={validationMode}
        onChange={(e) => setValidationMode(e.target.value as ValidationMode)}
      >
        
        <option value="onSubmit">On Submit</option>
        <option value="onBlur">On Blur</option>
        <option value="onChange">On Change</option>
      </select>
      </div>
      <form onSubmit={handleSubmit}>
        {formConfig.map((field) => {
         
          if (field.type === "tag") {
            return (
              <TagInput
                key={field.name}
                name={field.name}
                label={field.label}
                tags={formData[field.name] as string[]}
                onChange={handleTagChange}
                error={formError[field.name as keyof FormErrors]}
                required={field.required}
                minTags={field.minTags}
                maxTags={field.maxTags}
               touched={isSubmitted || touchedData[field.name]}
                 validationMode={validationMode}
              />
            );
          }

          if (!isFieldVisible(field)) return null;

          return (
            <FormField
              key={field.name}
              field={field}
              value={
                formData[field.name] as string | number | boolean
              } 
              onChange={handleChange}
              onBlur={validationMode === "onBlur" ? handleOnBlur : undefined}
              error={formError[field.name as keyof FormErrors]}
              touched={isSubmitted || touchedData[field.name]}

            />
          );
        })}
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleClear}>Clear</button>

      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Email: {formData.email}</p>
    </>
  );
}


// export type Form = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   password: string;
//   confirmPassword: string;
//   gender: "Male" | "Female" | "Other" | "";
//   agree: boolean;
//   role: "Admin" | "Guest" | "Student";
//   fatherName: string;
//   motherName: string;
//   age: number;
//   skills: string[];
//   hobbies: string[];
// };

// type Touched = {
//   firstName: boolean;
//   lastName: boolean;
//   email: boolean;
//   phone: boolean;
//   password: boolean;
//   confirmPassword: boolean;
//   gender: boolean;
//   agree: boolean;
//   role: boolean;
//   fatherName: boolean;
//   motherName: boolean;
//   age: boolean;
//   skills: boolean;
//   hobbies: boolean;
// };
// type FormErrors = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   password: string;
//   confirmPassword: string;
//   gender: string;
//   agree: string;
//   role: string;
//   fatherName: string;
//   motherName: string;
//   age: string;
//   skills: string;
//   hobbies: string;
// };


// const initialState: Form = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   phone: "",
//   password: "",
//   confirmPassword: "",
//   gender: "",
//   agree: false,
//   role: "Guest",
//   fatherName: "",
//   motherName: "",
//   age: 1,
//   skills: [],
//   hobbies: [],
// };
// const initialTouchedState: Touched = {
//   firstName: false,
//   lastName: false,
//   email: false,
//   phone: false,
//   password: false,
//   confirmPassword: false,
//   gender: false,
//   agree: false,
//   role: false,
//   fatherName: false,
//   motherName: false,
//   age: false,
//   skills: false,
//   hobbies: false,
// };
// const initialErrorState: FormErrors = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   phone: "",
//   password: "",
//   confirmPassword: "",
//   gender: "",
//   agree: "",
//   role: "",
//   fatherName: "",
//   motherName: "",
//   age: "",
//   skills: "",
//   hobbies: "",
// };

/* <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <label htmlFor="lastName">Last Name:</label>
        <input id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">email:</label>
        <input id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
      <button onClick={handleClear}>Clear</button>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Email: {formData.email}</p> */
