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

const colorsToLables = {
  none: 'rgba(255, 255, 255, 0.30)',
  low: '#8FA1D0',
  medium: '#E09CB5',
  high: '#BEDBB0',
};


export const CardForm = ({ taskData, onClose, setTask }) => {
  // const [level, setLevel] = useState("none");

  // useEffect(() => {
  //   let newLevel = level;
  //   if(taskData?.priority){
  //     newLevel = taskData.priority;
  //   };
  //   setLevel(newLevel);
  //  }, [taskData]);

// useState = {
//   taskData.priority ? taskData.priority : withoutPriority,
//   labelColor: taskData?.levelIndex
//       ? labelColors[taskData.levelIndex]
//       : labelColors[0],
//     deadline: taskData?.endDate || new Date(),
// }


  // useState = {
  //   taskData.priority ? taskData.priority : withoutPriority,
  //   labelColor: taskData?.levelIndex
  //       ? labelColors[taskData.levelIndex]
  //       : labelColors[0],
  //     deadline: taskData?.endDate || new Date(),
  // }

  const initialValues = {
    deadline: taskData?.deadline || new Date(),
    description: taskData?.description || '',
    priority: taskData?.priority || 'none',
    title: taskData?.title || '',
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    // console.log(values);
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
          <label className={s.item_tittle}>Label Color</label>
          {/* <div className={s.label_color}> */}
          {Object.entries(colorsToLables).map(([code, colorL]) => (
            // Вариант 1

              // <li>
              //   <label className={s.lowInput} styles={{ color: colorL }}>
              //     <input
              //       className={s.lowInput}
              //       type="radio"
              //       value={code}
              //       checked={values.priority === code}
              //       onChange={({ target }) => setLevel(target.value)}
              //     />
              //   </label>
              // </li>
              <label key={code}>
            <Field
              styles={{ color: colorL }}
              // className={s.lowInput}
              type="radio"
              name="labelColor"
              value={code}
              checked={values.priority === code}
              onChange={() => setFieldValue('priority' , code)}
              onBlur={touched.fieldName && errors.fieldName}
             />
           </label>
              //Вариант 2
              // <label key={code}>
              //   <Field
              //   // className={s.lowInput}
              //     type="radio"
              //     name="labelColor"
              //     value={code}
              //     checked={values.level === code}
              //     onBlur={touched.fieldName && errors.fieldName}
              //   />
              //   <span style={{ backgroundColor: color }}></span>
              // </label>
              // вариант 3
         
            ))}

          {/* </div> */}
          <ErrorMessage name="labelColor" />
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
