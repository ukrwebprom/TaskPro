import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { validationCardSchema } from '..//..//..//schems/validationCardSchema';
import s from './CardForm.module.css';
import MainButton from '../../MainButton/MainButton';

const labelColors = [
  '#8FA1D0',
  '#E09CB5',
  '#BEDBB0',
  'rgba(255, 255, 255, 0.30)',
];

export const CardForm = ({ taskData, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const initialValues = {
    title: taskData?.title || '',
    description: taskData?.description || '',
    labelColor: taskData?.levelIndex
      ? labelColors[taskData.levelInex]
      : labelColors[0],
    deadline: taskData?.endDate || new Date(),
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    setSubmitting(false);
    taskData(values);
    resetForm();
    onClose();
  };

  const validateDeadline = date => {
    const now = new Date();
    if (date < now) {
      return 'Deadline cannot be in the past';
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationCardSchema}
      onSubmit={onSubmit}
    >
      {({ values, isSubmitting, dirty, touched, errors, handleSubmit }) => (
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
          <label className={s.item_tittle}>Label Color</label>
          <div className="label_color">
            {labelColors.map(color => (
              <label key={color}>
                <Field
                  type="radio"
                  name="labelColor"
                  value={color}
                  checked={values.labelColor === color}
                  onBlur={touched.fieldName && errors.fieldName}
                />
                <span style={{ backgroundColor: color }}></span>
              </label>
            ))}
          </div>
          <ErrorMessage name="labelColor" />
          <label className={s.item_tittle}>Deadline</label>
          <DatePicker
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            minDate={new Date()}
            onBlur={validateDeadline(selectedDate)}
            // className={s.datepicker}
          />
          <MainButton
            btnName={taskData.id ? 'Edit' : 'Add'}
            iconColor="#2a2a2a"
            iconName="#plus-icon"
            disabled={isSubmitting || !dirty}
            type="submit"
            onClick={() => {}}
          />
        </Form>
      )}
    </Formik>
  );
};
