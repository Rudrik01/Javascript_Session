import React from 'react';
import type { FormFieldProps } from './types';

export const InputSelectField: React.FC<FormFieldProps> = (props) => {
  const { field, value, onChange, onBlur, error, touched } = props;
  return (
      <div>
        <label htmlFor={field.name}>{field.label}</label>
        <select
          name={field.name}
          id={field.name}
          value={value as string}
          onChange={onChange}
          onBlur={onBlur}
        >
          <option value="">Select</option>
          {field.options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {touched && error && <span style={{color:"red"}}>{error}</span>}
      </div>
  );
};
