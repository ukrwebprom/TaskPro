import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationHelpSchema } from "schems/validationHelpSchema";

export const HelpForm = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    setSubmitting(false);
    resetForm();
  };

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
          <label>
            <Field name="email" placeholder="Email address" type="email" />
            <ErrorMessage name="email" />
          </label>

          <label>
            <Field name="comment" as="textarea" placeholder="Comment" />
            <ErrorMessage name="comment" />
          </label>

          <button type="submit" disabled={isSubmitting || !isValid || !dirty}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
