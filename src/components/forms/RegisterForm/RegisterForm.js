import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationRegistrSchema } from "schems";

import s from "./Registerform.module.css"
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
        <Form className={s.regbackround}  >
          <div className={s.titleFild}>
          <p  className= {s.regtitleActive}>Registration</p>
          <p   className= {s.regtitle}>Log In</p>
          </div>
         < div className={s.field}>
          <label>
            <Field className= {s.input}
              name="name"
              placeholder="Enter your name"
              autoComplete="off"
            />
            <ErrorMessage name="name" />
          </label>

          <label>
            <Field className= {s.input}
              name="email"
              placeholder="Enter your email"
              type="email"
              autoComplete="off"
            />
            <ErrorMessage name="email" />
          </label>

          <label>
            <Field  className= {s.input}
              name="password"
              placeholder="Create a password"
              type="password"
              autoComplete="off"
            />
            <ErrorMessage name="password" />
          </label>
          </ div>
          <button type="submit" disabled={isSubmitting || !isValid || !dirty}>
            Register Now
          </button>
        </Form>
      )}
    </Formik>
  );
};
