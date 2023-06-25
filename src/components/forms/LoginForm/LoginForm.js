import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationLoginSchema } from "schems";
import Button from "components/Button/Button";
import s from "./LoginForm.module.css"
import { useUser } from "hooks/useUser";

export const LoginForm = () => {
  const {userLogin} = useUser();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    
    try{
      await userLogin(values);
      setSubmitting(false);
      resetForm();
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
        <div className={s.wrap}>
        <Form >
          <div className={s.titleFild}>
          <a  href="register" className= {s.regtitle}>Registration</a>
          <p  className= {s.regtitleActive}>Log In</p>
          </div>
          <div className={s.field}>
          <label className={s.label}>
            <Field className= {s.input} name="email" placeholder="Enter your email" type="email" />
            <ErrorMessage name="email"
            component="div"
            className={s.error} />
          </label>

          <label className={s.label}>
            <Field 
             className= {s.input}
              name="password"
              placeholder="Confirm a password"
              type="password"
            />
            <ErrorMessage name="password"
            component="div"
            className={s.error} />
          </label>
          </div>
          < Button className={s.btn} type="submit" disabled={isSubmitting || !isValid || !dirty}>Log In Now</Button>
        </Form>
       
             </div>
      )}
    </Formik>
  );
};
