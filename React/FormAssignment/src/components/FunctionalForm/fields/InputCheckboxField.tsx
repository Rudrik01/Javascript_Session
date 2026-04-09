import React from 'react';
import type { FormFieldProps } from './types';

export const InputCheckboxField: React.FC<FormFieldProps> = (props) => {
  const { field, value, onChange, onBlur, error, touched } = props;
  return (
      <div>
        <label>
          <input
            type="checkbox"
            name={field.name}
            checked={Boolean(value)}
            onChange={onChange}
            onBlur={onBlur}
          />
          {field.label}
        </label>
        {touched && error && <span style={{color:"red"}}>{error}</span>}
      </div>
  );
};
