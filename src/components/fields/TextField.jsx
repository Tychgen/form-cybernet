import React from 'react';
import { ErrorMessage, useField, useFormikContext } from 'formik';
import { Input } from 'antd';

export const TextField = ({ label, ...props }) => {
  const { submitCount, errors, touched } = useFormikContext();
  const [field] = useField(props);

  const showError = submitCount > 0 && errors[field.name];
  const showSuccess = submitCount > 0 && !errors[field.name] && touched[field.name];

  const handleInputChange = (e) => {
    const { value } = e.target;
    const nonNumericValue = value.replace(/\d/g, '');
    field.onChange({ target: { name: field.name, value: nonNumericValue } });
  };

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
