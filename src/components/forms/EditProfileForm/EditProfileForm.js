import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationEditProfileSchema } from "..//..//..//schems/validationEditProfileSchema";
import s from "./EditProfileForm.module.css"
import Button from "..//..//Button/Button.jsx"
import Icon from "components/Icon/Icon";
import { useState } from "react";
export const EditProfileForm = ({
  userPhoto = null,
  name = "",
  email = "",
  password = "",
}) => {
  const [type,setType]= useState("password");
  const [iconName, setIconName]= useState("#eye-icon")
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    setSubmitting(false);
    resetForm();
  };
  const handleShow=(e)=>{
    const gettype = e.currentTarget.value;
     if (gettype==="password"){
      setType("text");
      setIconName("#eye-slash-icon")
    } else{
      setType("password")
      setIconName("#eye-icon")
    }
  }  

  return (
    <Formik
      initialValues={{
        userPhoto,
        name,
        email,
        password,
      }}
      validationSchema={validationEditProfileSchema}
      onSubmit={handleSubmit}
    >
      {({ touched, errors, isSubmitting, dirty, setFieldValue }) => (
       
        <Form >
          <div className={s.addfilewrap}>
            <input
              className={s.inputFile}
              name="userPhoto"
              type="file"
              onChange={(event) => {
                setFieldValue("userPhoto", event.currentTarget.files[0]);
              }}
              onBlur={touched.fieldName && errors.fieldName}
            />
            <ErrorMessage name="userPhoto" />
          </div>

          <label  className={s.label}>
            <Field     
             className={s.input}
              name="name"
              placeholder="Enter your name"
              onBlur={touched.fieldName && errors.fieldName}
            />
            <ErrorMessage name="name" />
          </label>

          <label  className={s.label}>
            <Field
              className={s.input}
              name="email"
              placeholder="Enter your email"
              type="email"
              onBlur={touched.fieldName && errors.fieldName}
            />
            <ErrorMessage name="email" />
          </label>

          <label  className={s.label}>
            <Field
              className={s.input}
              name="password"
              placeholder="Create a password"
              type="password"
              onBlur={touched.fieldName && errors.fieldName}
            />
             <button  type="button" 
            className={s.eyeicon} 
            value={type}  
            onClick={(e)=>handleShow(e)} >
            <Icon name ={iconName}/>
            </button>
            <ErrorMessage name="password" />
          </label>
                  <Button className={s.btn} type="submit" disabled={isSubmitting || !dirty}> 
          {' '}
          <span className={s.addCard}>Send </span></Button>
        </Form>
           )}
    </Formik>
  );
};
