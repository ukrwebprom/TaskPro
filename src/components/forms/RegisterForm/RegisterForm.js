import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationRegistrSchema } from "schems";
import Button from "..//..//Button/Button.jsx"
import s from "./Registerform.module.css"
import Icon from "components/Icon/Icon";
import { useUser } from "hooks/useUser";

export const RegisterForm = () => {
  const {userRegister} = useUser();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await userRegister(values);
      setSubmitting(false);
      resetForm();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={validationRegistrSchema}
      onSubmit={handleSubmit}
      validateOnBlur
    >
      {({ isSubmitting, isValid, dirty }) => (
        <div className={s.wrap}>
        <Form >
          <div className={s.titleFild}>
          <p  className= {s.regtitleActive}>Registration</p>
          <a href="log"   className= {s.regtitle}>Log In</a>
          </div>
         < div className={s.field}>
          <label className= {s.label}>
            <Field className= {s.input}
              name="name"
              placeholder="Enter your name"
              autoComplete="off"
            />
            <ErrorMessage name="name"
            component="div"
            className={s.error} />
          </label>

          <label className= {s.label}>
            <Field className= {s.input}
              name="email"
              placeholder="Enter your email"
              type="email"
              autoComplete="off"
            />
            <ErrorMessage name="email"
            component="div"
            className={s.error} />
          </label>

          <label className= {s.label}>
            <Field  className= {s.input}
              name="password"
              placeholder="Create a password"
              type="password"
              autoComplete="off"
            />
            <div className={s.eyeicon}>
            <Icon name ="#eye-icon" />
            </div>
            <ErrorMessage 
            name="password" 
            component="div"
            className={s.error}
            />
          </label>
          </ div>
          <Button className={s.btn} type="submit" disabled={isSubmitting || !isValid || !dirty}> Register Now</Button>
        </Form> 
        
        </div>
       
      )}
    </Formik>
  );
};
