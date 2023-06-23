import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationRegistrSchema } from "schems";
import s from "./Registerform.module.css"
export const RegisterForm = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    setSubmitting(false);
    resetForm();
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
        <Form className={s.loginbackround}  >
          <div className={s.titleFild}>
          <a  className= {s.regtitleActive}>Registration</a>
          <a  className= {s.regtitle}>Log In</a>
          </div>
         < div className={s.field}>
          <label>
            <Field className= {s.input}
              name="name"
              placeholder="Enter your name"
              autoComplete="off"
            />
            <ErrorMessage name="name" />
          </label>

          <label>
            <Field className= {s.input}
              name="email"
              placeholder="Enter your email"
              type="email"
              autoComplete="off"
            />
            <ErrorMessage name="email" />
          </label>

          <label>
            <Field  className= {s.input}
              name="password"
              placeholder="Create a password"
              type="password"
              autoComplete="off"
            />
            <ErrorMessage name="password" />
          </label>
          </ div>
          <button type="submit" disabled={isSubmitting || !isValid || !dirty}>
            Register Now
          </button>
        </Form>
      )}
    </Formik>
  );
};

// const formik = useFormik({
//   initialValues: {
//     name: '',
//     email: '',
//   },
//   validationSchema: Yup.object({
//     name: Yup.string().required('Введіть ім'я'),
//     email: Yup.string().email('Введіть коректну адресу').required('Введіть електронну пошту'),
//   }),
//   validateOnBlur: true, // валідація буде виконуватися лише після зняття фокусу
//   onSubmit: values => {
//     alert(JSON.stringify(values, null, 2));
//   },
// });
