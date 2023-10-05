import React from 'react';
import { TextField } from './fields/TextField';
import {NumberField} from './fields/NumberField'
import { EmailTextField } from './fields/EmailTextField';
import { Formik, Form } from 'formik';
import { Button } from 'antd';
import * as Yup from 'yup';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: ''
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(3, 'Must be 3 characters or more')
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .min(5, 'Must be 5 characters or more')
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  email: Yup.string()
    .email('Email is invalid')
    .required('Email is required'),
  phoneNumber: Yup.string()
    .matches(/^[0-9+-]+$/, 'Invalid phone number')
    .min(10, 'Must be at least 10 characters')
    .max(15, 'Must be 15 characters or less')
    .required('Phone number is required')
});

const onSubmit = (values) => {
  console.log(values);
};

function Submit() {
  return (
    <div>
      <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-2">
              <label htmlFor="firstName">First Name</label>
              <TextField type="text" name="firstName" />
            </div>
            <div className="mb-2">
              <label htmlFor="lastName">Last Name</label>
              <TextField type="text" name="lastName" />
            </div>
            <div className="mb-2">
              <label htmlFor="email">Email</label>
              <EmailTextField type="text" name="email" />
            </div>
            <div className="mb-2">
              <label htmlFor="phoneNumber">Phone Number</label>
              <NumberField type="tel" name="phoneNumber" inputMode="numeric" />
            </div>
            <Button type="primary" className="mt-3" htmlType="submit" disabled={isSubmitting}>
             Register
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Submit;
