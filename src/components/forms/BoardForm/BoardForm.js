import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationNewBoardSchema } from "schems";
import s from "./BoardForm.module.css";
import Button from "components/Button/Button";
import Icon from "components/Icon/Icon";
import previews from "..//..//..//images/background/small-url.json"
const icons = [
  <Icon name="#board1" />,
  <Icon name="#board2" />,
  <Icon name="#board3" />,
  <Icon name="#board4" />,
  <Icon name="#board5" />,
  <Icon name="#board6" />,
  <Icon name="#board7" />,
  <Icon name="#board8" />,
];
const iconNames = ['board1', 'board2', 'board3', 'board4', 'board5', 'board6', 'board7', 'board8'];


export const BoardForm = ({onSubmitForm, def}) => {
  const initialValues = {
    title: "",
    icon: iconNames[0],
    background: previews[0],
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    onSubmitForm(values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={def? def:initialValues}
      validationSchema={validationNewBoardSchema}
      onSubmit={onSubmit}
      validateOnBlur
    >
      {({ isSubmitting, isValid, dirty, values, setFieldValue }) => (
      
        <Form className={s.form} >
          <label  className={s.label} >
            <Field className={s.input} type="text" name="title" placeholder="Title" />
            <ErrorMessage name="title"
            component="div"
            className={s.error} />
          </label>

{/*          <label   className={s.label}>
            <p className={s.itemtitle}>Icons</p>
            <div className={s.icontainer}>
                {icons.map((icon, index) => (
              <div className={s.boardicon} key={index}>
                <Field 
                  type="radio"
                  id={ <Icon name="#board1" />}
                  name="icon"
                  
                  value= {icon}
                  checked={values.icon === icon}
                  onChange={() => setFieldValue("icon", icon)}
                />
                <label htmlFor={`icon${index}`} className={s.icon}>
                  {icon}
                </label>
              </div>
            ))}
            </div>
            <ErrorMessage name="icon"
             component="div"
             className={s.error} />
          </label> */}
          <label   className={s.label}>
            <p className={s.itemtitle}>Icons</p>
            <div className={s.icontainer} role="group">
                {iconNames.map((icon, index) => (
              <div className={s.boardicon} key={index}>
                <Field 
                  type="radio"
                  id={index}
                  name="icon"
                  
                  value= {icon}
                  checked={values.icon === icon}
                  className={s.radio}
                />
                <label htmlFor={index}  className={s.icon}>
                  <Icon name={`#${icon}`} />
                </label>
              </div>
            ))}
            </div>
            <ErrorMessage name="icon"
             component="div"
             className={s.error} />
          </label>

{/*           <label   className={s.label} >
          <p className={s.itemtitle}>Background</p>
          <div className={s.wrapimage}>
                      { previews.map(( preview, index) => (
              <div className={s.boardicon} key={index}>
                <Field
                  type="radio"
                  id={`preview${preview}`}
                  name="background"
                  value={preview}
                  checked={values.background === preview}
                  onChange={() => setFieldValue("background", preview)}
                />
                <label
                  htmlFor={`preview${index}`}
                  className={s.background}
                  style={{ backgroundImage: `url(${preview})` }}
                />
              </div>
            ))}
            </div>
        
            <ErrorMessage name="background"
             component="div"
            className={s.error} />
          </label>  */}

          <label   className={s.label} >
          <p className={s.itemtitle}>Background</p>
          <div className={s.wrapimage}>
                      { previews.map(( preview, index) => (
              <div className={s.boardicon} key={index}>
                <Field
                  type="radio"
                  id={`back${index}`}
                  name="background"
                  value={preview}
                  checked={values.background === preview}
/*                   onChange={() => setFieldValue("background", preview)} */
                />
                <label
                  htmlFor={`back${index}`}
                  className={s.background}
                  style={{ backgroundImage: `url(${preview})` }}
                />
              </div>
            ))}
            </div>
        
            <ErrorMessage name="background"
             component="div"
            className={s.error} />
          </label> 

           <Button invert={false} title="Create"   type="submit" disabled ={isSubmitting||!dirty}
           />
        </Form>
     
      )}
    </Formik>
  );
};
