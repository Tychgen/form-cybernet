import React from 'react';
import { ErrorMessage, useField, useFormikContext } from 'formik';
import { Input } from 'antd';

export const EmailTextField = ({ label, ...props }) => {
  const { submitCount, errors, touched } = useFormikContext();
  const [field] = useField(props);

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
      />
      {showError && (
        <ErrorMessage component="div" name={field.name} className="error" />
      )}
    </div>
  );
};
