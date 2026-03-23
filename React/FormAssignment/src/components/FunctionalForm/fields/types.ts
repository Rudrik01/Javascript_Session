import React from 'react';
import type { FieldConfig } from "../../../config/FormConfig/formConfig";

export type FormFieldProps = {
    field: FieldConfig;
    value: string | number | boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
    error: string;
    onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLSelectElement>;
    touched?: boolean;
};
