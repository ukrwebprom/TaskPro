import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationHelpSchema } from "schems";
import Button from "components/Button/Button";
import s from "./HelpForm.module.css";

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
    >
      {({ isSubmitting, touched, errors, dirty }) => (
        <Form className={s.form}>
          <label className={s.label}>
            <Field
              className={s.input}
              name="email"
              placeholder="Email address"
              type="email"
              onBlur={touched.description && errors.description}
            />
            <ErrorMessage name="email" component="div" className={s.error} />
          </label>

          <label className={s.label}>
            <Field
              className={s.comment}
              name="comment"
              as="textarea"
              placeholder="Comment"
              onBlur={touched.description && errors.description}
            />
            <ErrorMessage name="comment" component="div" className={s.error} />
          </label>
          <Button
            invert={false}
            title="Send"
            icon={false}
            type="submit"
            disabled={isSubmitting || !dirty}
          />
        </Form>
      )}
    </Formik>
  );
};
