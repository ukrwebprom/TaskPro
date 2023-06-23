import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { validationCardSchema } from "..//..//..//schems/validationCardSchema";
import s from "./CardForm.module.css"

const labelColors = [
  // "#8FA1D0",
  // "#E09CB5",
  // "#BEDBB0",
  // "rgba(255, 255, 255, 0.30)",
];

export const CardForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const initialValues = {
    title: "",
    description: "",
    labelColor: labelColors[0],
    deadline: new Date(),
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    setSubmitting(false);
    resetForm();
  };

  const validateDeadline = (date) => {
    const now = new Date();
    if (date < now) {
      return "Deadline cannot be in the past";
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
           <p className={s.title}>Add card</p>
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

          <label className={s.label} >Label Color</label>
          <div className="label-colors">
            {labelColors.map((color) => (
              <label key={color} className="label-color">
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

          <label className={s.label}>Deadline</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={new Date()}
            onBlur={validateDeadline(selectedDate)}
            // className={s.datepicker}
        
          />

          <button type="submit" disabled={isSubmitting || !dirty}>
            Add
          </button>
        </Form>
      )}
    </Formik>
  );
};
