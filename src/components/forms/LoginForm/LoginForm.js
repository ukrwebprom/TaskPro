import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationLoginSchema } from "schems";

import s from "./LoginForm.module.css"
import { useUser } from "hooks/useUser";

export const LoginForm = () => {
  const {userLogin} = useUser();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    
    try{
      await userLogin(values);
      setSubmitting(false);
      resetForm();
    } catch(err) {
      console.log(err);
    }
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
        <Form className={s.loginbackround}>
          <div className={s.titleFild}>
          <p className= {s.regtitle}>Registration</p>
          <p  className= {s.regtitleActive}>Log In</p>
          </div>
          <div className={s.field}>
          <label>
            <Field className= {s.input} name="email" placeholder="Enter your email" type="email" />
            <ErrorMessage name="email" />
          </label>

          <label>
            <Field 
             className= {s.input}
              name="password"
              placeholder="Confirm a password"
              type="password"
            />
            <ErrorMessage name="password" />
          </label>
          </div>
          <button type="submit" disabled={isSubmitting || !isValid || !dirty}>
            Log In Now
          </button>
        </Form>
      )}
    </Formik>
  );
};
