import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { validationCardSchema } from "schems";
import "./test.css";

const labelColors = [
  "#8FA1D0",
  "#E09CB5",
  "#BEDBB0",
  "rgba(255, 255, 255, 0.30)",
];

export const CardForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const initialValues = {
    title: "",
    description: "",
    labelColor: labelColors[0],
    deadline: new Date(),
  };

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationCardSchema}
      onSubmit={onSubmit}
    >
      {({ values, isSubmitting, dirty, touched, errors, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <label>
            Title
            <Field type="text" name="title" />
            <ErrorMessage name="title" component="div" className="error" />
          </label>

          <label>
            Description
            <Field
              as="textarea"
              name="description"
              onBlur={touched.fieldName && errors.fieldName}
            />
            <ErrorMessage name="description" />
          </label>

          <label>Label Color</label>
          <div className="label-colors">
            {labelColors.map((color) => (
              <label key={color} className="label-color">
                <Field
                  type="radio"
                  name="labelColor"
                  value={color}
                  checked={values.labelColor === color}
                />
                <span style={{ backgroundColor: color }}></span>
              </label>
            ))}
          </div>

          <label>Deadline</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          />

          <button type="submit" disabled={isSubmitting || !dirty}>
            Add
          </button>
        </form>
      )}
    </Formik>
  );
};
