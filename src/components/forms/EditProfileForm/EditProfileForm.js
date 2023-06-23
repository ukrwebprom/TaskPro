import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationEditProfileSchema } from "schems";

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
        <Form>
          <div>
            <input
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
              name="name"
              placeholder="Enter your name"
              onBlur={touched.fieldName && errors.fieldName}
            />
            <ErrorMessage name="name" />
          </label>

          <label>
            <Field
              name="email"
              placeholder="Enter your email"
              type="email"
              onBlur={touched.fieldName && errors.fieldName}
            />
            <ErrorMessage name="email" />
          </label>

          <label>
            <Field
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
