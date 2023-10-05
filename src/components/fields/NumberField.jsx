import React from 'react';
import { ErrorMessage, useField, useFormikContext } from 'formik';
import { Input } from 'antd';

export const NumberField = ({ label, ...props }) => {
  const { submitCount, errors, touched } = useFormikContext();
  const [field] = useField(props);

  const handleInputChange = (e) => {
    const { value } = e.target;
    const numericValue = value.replace(/\D/g, '');
    field.onChange({ target: { name: field.name, value: numericValue } });
  };

  const showError = submitCount > 0 && errors[field.name];
  const showSuccess = submitCount > 0 && !errors[field.name] && touched[field.name];

  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <Input
        className={`form-control shadow-none ${showError ? 'is-invalid' : ''} ${showSuccess ? 'is-valid' : ''}`} 
        {...field}
        {...props}
        autoComplete="off"
        onChange={handleInputChange}
      />
      {showError && (
        <ErrorMessage component="div" name={field.name} className="error" />
      )}
    </div>
  );
};
