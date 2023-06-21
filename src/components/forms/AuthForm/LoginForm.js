import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationAuthSchema } from "../../../schems/validationAuthSchema";

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
      validationSchema={validationAuthSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <Form>
          <label>
            <Field name="email" placeholder="Enter your email" type="email" />
            <ErrorMessage name="email" />
          </label>

          <label>
            <Field
              name="password"
              placeholder="Create a password"
              type="password"
            />
            <ErrorMessage name="password" />
          </label>
          <button type="submit" disabled={isSubmitting || !isValid || !dirty}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
