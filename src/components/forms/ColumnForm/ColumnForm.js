import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validationColumnSchema } from "..//..//..//schems/validationColumnSchema";
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';
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
          <div className={s.wrap}>
        <Form onSubmit={handleSubmit}>
          <p className={s.title}>Add column</p>
          <label>
            <Field 
             className={s.input}
            type="text" name="title"
            placeholder="Title"  />
            <ErrorMessage name="title" />
          </label>

          <Button className={s.btn} type="submit" disabled={isSubmitting || !dirty}> 
          {' '}
        <div className={s.wrapperIcon}>
          <Icon name={'#plus-icon'} />
        </div>
        <span className={s.addCard}>Add </span></Button>
        </Form></div>
      )}
    </Formik>
  );
};
