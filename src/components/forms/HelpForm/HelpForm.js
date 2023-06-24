import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationHelpSchema } from "schems";
import s from "./HelpForm.module.css"
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
        
        <Form className={s.formbackround}>
          <p className={s.title}>Need help</p>
          <label>
            <Field className={s.input} name="email" placeholder="Email address" type="email" />
            <ErrorMessage name="email" />
          </label>

          <label>
            <Field  className={s.comment} name="comment" as="textarea" placeholder="Comment" />
            <ErrorMessage name="comment" />
          </label>

          <button  type="submit" disabled={isSubmitting || !isValid || !dirty}>
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};
