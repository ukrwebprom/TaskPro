import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationLoginSchema } from "schems";
import Button from "components/Button/Button";
import Icon from "components/Icon/Icon";
import s from "./LoginForm.module.css"
// import { useUser } from "hooks/useUser";
import { useState } from "react";
import { login } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useAuth } from "hooks/useAuth.js";

export const LoginForm = () => {
  // const {userLogin} = useUser();
  const dispatch = useDispatch();
  const [type,setType]= useState("password");
  const [iconName, setIconName]= useState("#eye-icon")
  const {error} = useAuth();
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

  // const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    
  //   try{
  //     await userLogin(values);
  //     setSubmitting(false);
  //     resetForm();
  //   } catch(err) {
  //     console.log(err);
  //   }
  // };

  const handleSubmit = (values, actions) => {
    dispatch(
      login({
        email: values.email,
        password: values.password,
      })
    );
    actions.resetForm();
  };


  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationLoginSchema}
      onSubmit={handleSubmit}
      validateOnBlur
    >
      {({ isSubmitting, isValid, dirty }) => (
        <div className={s.wrap}>
        <Form >
          <div className={s.titleFild}>
          <a  href="register" className= {s.regtitle}>Registration</a>
          <p  className= {s.regtitleActive}>Log In</p>
          {error && <div className={s.mistake}>*{error}</div>} 
          </div>
          <div className={s.field}>
          <label className={s.label}>
            <Field className= {s.input} name="email" placeholder="Enter your email" type="email" />
            <ErrorMessage name="email"
            component="div"
            className={s.error} />
          </label>

          <label className={s.label}>
            <Field 
             className= {s.input}
              name="password"
              placeholder="Confirm a password"
              type={type}
            /> 
              <button  type="button" 
            className={s.eyeicon} 
            value={type}  
            onClick={(e)=>handleShow(e)} >
            <Icon name ={iconName}/>
            </button>
          </label>
          </div>
          < Button className={s.btn} type="submit" disabled={isSubmitting || !isValid || !dirty}>Log In Now</Button>
        </Form>
       
             </div>
      )}
    </Formik>
  );
};
