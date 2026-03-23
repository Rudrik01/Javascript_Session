import React from "react";
import "../FunctionalForm/form.css";
import { formConfig } from "../../config/FormConfig/formConfig";
import type { FieldConfig } from "../../config/FormConfig/formConfig";
import FormField from "../FunctionalForm/FormField";
import TagInput from "../TagInput/TagInput";

type ValidationMode = "onBlur" | "onChange" | "onSubmit";
type FormValues = Record<string, string | boolean | string[] | number>;
type FormErrors = Record<string, string>;
type Touched = Record<string, boolean>;

type State = {
  formData: FormValues;
  touchedData: Touched;
  formError: FormErrors;
  validationMode: ValidationMode;
  isSubmitted: boolean;
};

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

export default class ClassFormComponent extends React.Component<object, State> {
  state: State = {
    formData: initialState,
    touchedData: initialTouchedState,
    formError: initialErrorState,
    validationMode: "onSubmit",
    isSubmitted: false,
  };

  validateField = (
    name: string,
    value: string | boolean | string[] | number,
  ): string => {
    const field = formConfig.find((f) => f.name === name);
    if (!field) return "";

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

    if (name === "confirmPassword" && value !== this.state.formData.password) {
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

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { formData } = this.state;
    const newErrors = { ...initialErrorState };

    formConfig.forEach((field) => {
      if (!this.isFieldVisible(field)) return;
      const value = formData[field.name];
      newErrors[field.name] = this.validateField(field.name, value);
    });

    const hasErrors = Object.values(newErrors).some((e) => e !== "");
    this.setState({ formError: newErrors, isSubmitted: true });

    if (!hasErrors) {
      alert("Form submitted successfully");
      console.log(formData);
    }
  };

  handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, type } = e.target;
    const value =
      type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;

    const { validationMode } = this.state;

    if (name === "gender") {
      this.setState((prev) => ({
        formError: { ...prev.formError, fatherName: "", motherName: "" },
      }));
    }

    this.setState((prev) => ({
      formData: { ...prev.formData, [name]: value },
      touchedData: { ...prev.touchedData, [name]: true },
      formError: {
        ...prev.formError,
        [name]:
          validationMode === "onChange" ? this.validateField(name, value) : "",
      },
    }));
  };

  handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, type } = e.target;
    const value =
      type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;

    this.setState((prev) => ({
      formError: {
        ...prev.formError,
        [name]: this.validateField(name, value),
      },
    }));
  };

  handleTagChange = (name: string, tags: string[]) => {
    const { validationMode } = this.state;

    this.setState((prev) => ({
      formData: { ...prev.formData, [name]: tags },
      touchedData: { ...prev.touchedData, [name]: true },
      formError: {
        ...prev.formError,
        [name]:
          validationMode === "onChange" ? this.validateField(name, tags) : "",
      },
    }));
  };

  isFieldVisible = (field: FieldConfig): boolean => {
    if (!field.showWhen) return true;
    const dependentValue = this.state.formData[field.showWhen.field];
    return field.showWhen.values.includes(dependentValue as string);
  };

  handleClear = () => {
    this.setState({
      formData: initialState,
      touchedData: initialTouchedState,
      formError: initialErrorState,
      isSubmitted: false,
    });
  };
  componentDidMount() {
    console.log("Component mounted");
  }

  render() {
    const { formData, formError, touchedData, validationMode, isSubmitted } =
      this.state;

    return (
      <>
        <div>
          <select
            value={validationMode}
            onChange={(e) =>
              this.setState({
                validationMode: e.target.value as ValidationMode,
              })
            }
          >
            <option value="onSubmit">On Submit</option>
            <option value="onBlur">On Blur</option>
            <option value="onChange">On Change</option>
          </select>
        </div>

        <form onSubmit={this.handleSubmit}>
          {formConfig.map((field) => {
            if (field.type === "tag") {
              return (
                <TagInput
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  tags={formData[field.name] as string[]}
                  onChange={this.handleTagChange}
                  error={formError[field.name]}
                  required={field.required}
                  minTags={field.minTags}
                  maxTags={field.maxTags}
                  touched={isSubmitted || touchedData[field.name]}
                  validationMode={validationMode}
                />
              );
            }

            if (!this.isFieldVisible(field)) return null;

            return (
              <FormField
                key={field.name}
                field={field}
                value={formData[field.name] as string | number | boolean}
                onChange={this.handleChange}
                onBlur={
                  validationMode === "onBlur" ? this.handleOnBlur : undefined
                }
                error={formError[field.name]}
                touched={isSubmitted || touchedData[field.name]}
              />
            );
          })}
          <button type="submit">Submit</button>
        </form>

        <button onClick={this.handleClear}>Clear</button>

        <p>First Name: {formData.firstName as string}</p>
        <p>Last Name: {formData.lastName as string}</p>
        <p>Email: {formData.email as string}</p>
      </>
    );
  }
}
