import React from 'react';
import type { FormFieldProps } from './fields/types';
import { InputTextField } from './fields/InputTextField';
import { InputNumberField } from './fields/InputNumberField';
import { InputSelectField } from './fields/InputSelectField';
import { InputCheckboxField } from './fields/InputCheckboxField';
import { InputRadioField } from './fields/InputRadioField';

const renderRegistry: Record<string, React.FC<FormFieldProps>> = {
  text: InputTextField,
  email: InputTextField,
  password: InputTextField,
  number: InputNumberField,
  select: InputSelectField,
  checkbox: InputCheckboxField,
  radio: InputRadioField,
};

export default function FormField(props: FormFieldProps) {
  const Component = renderRegistry[props.field.type] || InputTextField;
  return <Component {...props} />;
}
