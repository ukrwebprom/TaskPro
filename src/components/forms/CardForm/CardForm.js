import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import { validationCardSchema } from '..//..//..//schems/validationCardSchema';
import s from './CardForm.module.css';
import MainButton from '../../MainButton/MainButton';
import { MyDatepicker } from '../MyDatepicker/MyDatepicker';

// const labelColors = [
//   '#8FA1D0',
//   '#E09CB5',
//   '#BEDBB0',
//   'rgba(255, 255, 255, 0.30)',
// ];

const orderedCodes = [
  'none',
  'low',
  'medium',
  'high',
];

export const CardForm = ({ taskData, onClose, setTask }) => {

  const initialValues = {
    deadline: taskData?.deadline || new Date(),
    description: taskData?.description || '',
    priority: taskData?.priority || 'none',
    title: taskData?.title || '',
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    setTask(values);
    setSubmitting(false);
    resetForm();
    onClose();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationCardSchema}
      onSubmit={onSubmit}
    >
      {({ values, isSubmitting, dirty, touched, errors, handleSubmit ,setFieldValue }) => (
        <Form className={s.formbackround} onSubmit={handleSubmit}>
          <label>
            <Field
              className={s.input}
              type="text"
              name="title"
              placeholder="Title"
              onBlur={touched.fieldName && errors.fieldName}
            />
            <ErrorMessage name="title" />
          </label>

          <label>
            <Field
              className={s.comment}
              as="textarea"
              placeholder="Description"
              name="description"
              onBlur={touched.fieldName && errors.fieldName}
            />
            <ErrorMessage name="description" />
          </label>
          <label>
            <p className={s.item_tittle}>Label Color</p>
            <div id="radio-group" className={s.label_color}>
              {orderedCodes.map(code => (
                <div
                  key={code}
                  role="group"
                  aria-labelledby="radio-group"
                  className={values.priority === code
                    ? s.selectedLabel
                    : s.labelItem}
                >
                  <Field
                    id={`color_${code}`}
                    type="radio"
                    name={code}
                    value={code}
                    checked={values.priority === code}
                    onChange={() => setFieldValue('priority' , code)}
                    onBlur={touched.priority && errors.priority}
                    className={s[`${code}Input`]}
                  />
                </div>
              ))}
            </div>
            <ErrorMessage name="priority" />
          </label>
          <label className={s.item_tittle}>Deadline</label>
          <MyDatepicker handleSetData={(date) => setFieldValue('deadline' , date)}/>
          <MainButton
            btnName="Edit"
            iconName="#plus-icon"
            disabled={isSubmitting || !dirty}
            type="submit"
          />
        </Form>
      )}
    </Formik>
  );
};
