import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationHelpSchema } from "schems";
import Button from "components/Button/Button";
import s from "./HelpForm.module.css";

export const HelpForm = ({ onSubmitForm, type }) => {
  const initialValues = {
    email: "",
    message: "",
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    onSubmitForm(values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationHelpSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, touched, errors, dirty }) => (
        <Form className={s.form}>
          <label className={s.label}>
            <Field
              className={s.input}
              name="email"
              placeholder="Email address"
              type="email"
              autoFocus
              onBlur={touched.description && errors.description}
            />
            <ErrorMessage name="email" component="div" className={s.error} />
          </label>

          <label className={s.label}>
            <Field
              className={s.comment}
              name="message"
              as="textarea"
              placeholder="Message"
              onBlur={touched.description && errors.description}
            />
            <ErrorMessage name="message" component="div" className={s.error} />
          </label>
          <Button
            invert={false}
            title={type}
            icon={false}
            type="submit"
            disabled={isSubmitting || !dirty}
          />
        </Form>
      )}
    </Formik>
  );
};
