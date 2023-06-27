import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationHelpSchema } from "schems";
import Button from "components/Button/Button";
import Icon from "components/Icon/Icon";
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
          <Button className={s.btn} type="submit" disabled={isSubmitting || !dirty}> 
          {' '}
        <div className={s.wrapperIcon}>
          <Icon name={'#plus-icon'} />
        </div>
        <span className={s.addCard}>Send </span></Button>
        </Form>
      )}
    </Formik>
  );
};
