import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationLoginSchema } from "schems";
import s from "./LoginForm.module.css"
export const LoginForm = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    setSubmitting(false);
    resetForm();
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
          <a  className= {s.reg}>Registration</a>
          <a  className= {s.log}>Login</a>
          <div className={s.fiel}>
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
