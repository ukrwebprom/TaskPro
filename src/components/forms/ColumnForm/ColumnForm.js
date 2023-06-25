import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validationColumnSchema } from "..//..//..//schems/validationColumnSchema";
import s from "./ColumnForm.module.css"


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
        <Form className={s.formbackround} onSubmit={handleSubmit}>
          <p className={s.title}>Add column</p>
          <label>
            <Field 
             className={s.input}
            type="text" name="title"
            placeholder="Title"  />
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
