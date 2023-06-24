import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { validationColumnSchema } from 'schems';

export const ColumnForm = ({ setTitle, onClose, title }) => {
  const initialValues = {
    title,
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    setTitle(values.title);
    setSubmitting(false);
    resetForm();
    onClose();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationColumnSchema}
      onSubmit={onSubmit}
      validateOnBlur
    >
      {({ isSubmitting, dirty, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <label>
            Title
            <Field type="text" name="title" />
            <ErrorMessage name="title" />
          </label>

          <button type="submit" disabled={isSubmitting || !dirty}>
            Add
          </button>
        </Form>
      )}
    </Formik>
  );
};
