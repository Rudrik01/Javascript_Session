import { useEffect, useState } from "react";
import "../FunctionalForm/form.css";
import { formConfig } from "../../config/FormConfig/formConfig";
import { validateWithZod } from "../../config/ZodConfig/formSchema"; 
import type { FieldConfig } from "../../config/FormConfig/formConfig";
import FormField from "../FunctionalForm/FormField";
import TagInput from "../TagInput/TagInput";

type ValidationMode = "onBlur" | "onChange" | "onSubmit";
type FormValues = Record<string, string | boolean | string[] | number>
type FormErrors = Record<string, string>
type Touched = Record<string, boolean>

const initialErrorState = formConfig.reduce((acc, field) => {
  acc[field.name] = "";
  return acc;
}, {} as FormErrors);

const initialTouchedState = formConfig.reduce((acc, field) => {
  acc[field.name] = false;
  return acc;
}, {} as Touched);

const initialState = formConfig.reduce((acc, field) => {
  if (field.type === "tag") {
    acc[field.name] = [];
  } else {
    acc[field.name] = field.defaultValue ?? "";
  }
  return acc;
}, {} as FormValues);

export default function ZodForm() {
  const [formData, setFormData] = useState<FormValues>(initialState);
  const [touchedData, setTouchedData] = useState<Touched>(initialTouchedState);
  const [formError, setFormError] = useState<FormErrors>(initialErrorState);
  const [validationMode, setValidationMode] = useState<ValidationMode>("onSubmit");
  const [isSubmitted, setIsSubmitted] = useState(false);



  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);


    const newErrors = validateWithZod(formData, "onSubmit");

    setFormError(newErrors);
    const hasErrors = Object.values(newErrors).some((e) => e !== "");
    if (!hasErrors) {
      alert("Form submitted successfully");
      console.log(formData);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, type } = e.target;
    const value =
      type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;

    if (name === "gender") {
      setFormError((prev) => ({ ...prev, fatherName: "", motherName: "" }));
    }

    const updatedData = { ...formData, [name]: value };

    setFormData(updatedData);
    setTouchedData((prev) => ({ ...prev, [name]: true }));

    if (validationMode === "onChange") {
    
      const fieldErrors = validateWithZod(updatedData, "onChange", name);
      setFormError((prev) => ({ ...prev, [name]: fieldErrors[name] ?? "" }));
    } else {
      setFormError((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, type } = e.target;
    const value =
      type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;

    const updatedData = { ...formData, [name]: value };

   
    const fieldErrors = validateWithZod(updatedData, "onBlur", name);
    setFormError((prev) => ({ ...prev, [name]: fieldErrors[name] ?? "" }));
  };

  const isFieldVisible = (field: FieldConfig): boolean => {
    if (!field.showWhen) return true;
    const dependentValue = formData[field.showWhen.field];
    return field.showWhen.values.includes(dependentValue as string);
  };

  const handleTagChange = (name: string, tags: string[]) => {
  const updatedData = { ...formData, [name]: tags };

  setFormData(updatedData);
  setTouchedData((prev) => ({ ...prev, [name]: true }));

  if (validationMode === "onChange" || validationMode === "onBlur") {
    const fieldErrors = validateWithZod(updatedData, "onChange", name);
    setFormError((prev) => ({ ...prev, [name]: fieldErrors[name] ?? "" }));
  } else {
    setFormError((prev) => ({ ...prev, [name]: "" }));
  }
};

  const handleClear = () => {
    setFormData(initialState);
    setTouchedData(initialTouchedState);
    setFormError(initialErrorState);
    setIsSubmitted(false);
  };

  useEffect(() => {
    console.log("Zod Form rendered");
  }, []);

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
                error={formError[field.name]}
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
              value={formData[field.name] as string | number | boolean}
              onChange={handleChange}
              onBlur={validationMode === "onBlur" ? handleOnBlur : undefined}
              error={formError[field.name]}
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