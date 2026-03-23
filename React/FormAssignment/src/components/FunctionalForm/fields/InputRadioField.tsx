import React from 'react';
import type { FormFieldProps } from './types';

export const InputRadioField: React.FC<FormFieldProps> = (props) => {
  const { field, value, onChange, onBlur, error, touched } = props;
  return (
      <div>
        <label>{field.label}</label>
        {field.options?.map((opt) => (
          <label key={opt}>
            <input
              type="radio"
              name={field.name}
              value={opt}
              checked={value === opt}
              onChange={onChange}
              onBlur={onBlur}
            />
            {opt}
          </label>
        ))}
        {touched && error && <span style={{color:"red"}}>{error}</span>}
      </div>
  );
};
