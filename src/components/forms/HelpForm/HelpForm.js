import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationHelpSchema } from "schems";
import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";
import s from "./HelpForm.module.css"
// import { useState } from "react";


export const HelpForm = () => {
// const[inputFild,setinputFild]=useState("{s.input}")
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    setSubmitting(false);
    resetForm();
  };
  // const handleShow=(e)=>{
  //   const input=e.currenttarget.value;
  //    if (input){
  //     setinputFild("{s.input;hover}");
     
  //   } else{
  //     setinputFild("s.input")
  //   }
  // }  
  return (
    
    <Formik
      initialValues={{
        email: "",
        comment: "",
      }}
      validationSchema={validationHelpSchema}
      onSubmit={handleSubmit}
      validateOnBlur
    >
      {({ isSubmitting, isValid, dirty }) => (

        <Form>
            <label className={s.label}>
            <Field className={s.input} name="email" placeholder="Email address" type="email" />
            <ErrorMessage name="email"
             component="div"
             className={s.error} />
          </label>

          <label className={s.label}>
            <Field  className={s.comment} name="comment" as="textarea" placeholder="Comment" />
            <ErrorMessage name="comment" 
             component="div"
             className={s.error}/>
          </label>
          <Button className={s.btn} type="submit" disabled={isSubmitting || !dirty}> 
          {' '}
          <span>Send </span></Button>
        </Form>
         )}
    
    </Formik>
  );
};
