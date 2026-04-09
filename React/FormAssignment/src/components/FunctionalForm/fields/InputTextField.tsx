import React from 'react';
import type { FormFieldProps } from './types';

export const InputTextField: React.FC<FormFieldProps> = (props) => {
  const { field, value, onChange, onBlur, error, touched } = props;
  return (
    <div>
      <label htmlFor={field.name}>{field.label}</label>
      <input
        id={field.name}
        name={field.name}
        type={field.type}
        value={value as string} 
        onChange={onChange}
        onBlur={onBlur}
      />
      {touched && error && <span style={{color:"red"}}>{error}</span>}
    </div>
  );
};
