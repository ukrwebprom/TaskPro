import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationEditProfileSchema } from "..//..//..//schems/validationEditProfileSchema";
import s from "./EditProfileForm.module.css"
export const EditProfileForm = ({
  userPhoto = null,
  name = "",
  email = "",
  password = "",
}) => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        userPhoto,
        name,
        email,
        password,
      }}
      validationSchema={validationEditProfileSchema}
      onSubmit={handleSubmit}
    >
      {({ touched, errors, isSubmitting, dirty, setFieldValue }) => (
        <Form className={s.formbackround}>
          <p className={s.title}>Edit  profile</p>
          
          <div className={s.addfilewrap}>
            <input
              className={s.inputFile}
              name="userPhoto"
              type="file"
              onChange={(event) => {
                setFieldValue("userPhoto", event.currentTarget.files[0]);
              }}
              onBlur={touched.fieldName && errors.fieldName}
            />
            <ErrorMessage name="userPhoto" />
          </div>

          <label>
            <Field     
             className={s.input}
              name="name"
              placeholder="Enter your name"
              onBlur={touched.fieldName && errors.fieldName}
            />
            <ErrorMessage name="name" />
          </label>

          <label>
            <Field
              className={s.input}
              name="email"
              placeholder="Enter your email"
              type="email"
              onBlur={touched.fieldName && errors.fieldName}
            />
            <ErrorMessage name="email" />
          </label>

          <label>
            <Field
              className={s.input}
              name="password"
              placeholder="Create a password"
              type="password"
              onBlur={touched.fieldName && errors.fieldName}
            />
            <ErrorMessage name="password" />
          </label>

          <button type="submit" disabled={isSubmitting || !dirty}>
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};
