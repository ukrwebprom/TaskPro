import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationRegistrSchema } from "schems";
import { useUser } from "hooks/useUser";

export const RegisterForm = () => {
  const {userRegister} = useUser();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const res = await userRegister(values);
      setSubmitting(false);
      resetForm();
    } catch (err) {

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
        <Form>
          <label>
            <Field
              name="name"
              placeholder="Enter your name"
              autoComplete="off"
            />
            <ErrorMessage name="name" />
          </label>

          <label>
            <Field
              name="email"
              placeholder="Enter your email"
              type="email"
              autoComplete="off"
            />
            <ErrorMessage name="email" />
          </label>

          <label>
            <Field
              name="password"
              placeholder="Create a password"
              type="password"
              autoComplete="off"
            />
            <ErrorMessage name="password" />
          </label>

          <button type="submit" disabled={isSubmitting || !isValid || !dirty}>
            Register Now
          </button>
        </Form>
      )}
    </Formik>
  );
};
