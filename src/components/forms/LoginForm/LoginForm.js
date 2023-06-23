import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationLoginSchema } from "schems";
import { login } from "api/ServerAPI";
import { useUser } from "hooks/useUser";

export const LoginForm = () => {
  const {setAuthToken} = useUser();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    
    try{
      const res = await login(values);
      setSubmitting(false);
      resetForm();
      setAuthToken(res.token)
      
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
            Log In Now
          </button>
        </Form>
      )}
    </Formik>
  );
};
