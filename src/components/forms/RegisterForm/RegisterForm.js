import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationRegistrSchema } from "schems";
import { useState } from "react";
import Button from "..//..//Button/Button.jsx";
import s from "./Registerform.module.css";
import Icon from "components/Icon/Icon";
// import { useUser } from "hooks/useUser";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import { useAuth } from "hooks/useAuth.js";

export const RegisterForm = () => {
  // const {userRegister} = useUser();

  const dispatch = useDispatch();
  const [type, setType] = useState("password");
  const [iconName, setIconName] = useState("#eye-icon");
  const { error } = useAuth();

  const handleShow = (e) => {
    const gettype = e.currentTarget.value;
    console.log(gettype);
    if (gettype === "password") {
      setType("text");
      setIconName("#eye-slash-icon");
    } else {
      setType("password");
      setIconName("#eye-icon");
    }
  };
  // const handleSubmit = async (values, { setSubmitting, resetForm }) => {
  //   try {
  //     await userRegister(values);
  //     setSubmitting(false);
  //     resetForm();
  //   } catch (err) {
  //     console.log(err);
  //     console.log("єто моя 409");
  //   }
  // };

  const handleSubmit = (values, actions) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    actions.resetForm();
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
    >
      {({ isSubmitting, touched, errors, dirty }) => (
        <div className={s.wrap}>
          <Form>
            <div className={s.titleFild}>
              <p className={s.regtitleActive}>Registration</p>
              <a href="log" className={s.regtitle}>
                Log In
              </a>
              {error && <div className={s.mistake}>*{error}</div>}
            </div>
            <div className={s.field}>
              <label className={s.label}>
                <Field
                  className={s.input}
                  name="name"
                  placeholder="Enter your name"
                  autoFocus
                  onBlur={touched.title && errors.title}
                />

                <ErrorMessage name="name" component="div" className={s.error} />
              </label>

              <label className={s.label}>
                <Field
                  className={s.input}
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  onBlur={touched.title && errors.title}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={s.error}
                />
              </label>

              <label className={s.label}>
                <Field
                  className={s.input}
                  name="password"
                  placeholder="Create a password"
                  type={type}
                  onBlur={touched.title && errors.title}
                />
                <button
                  type="button"
                  className={s.eyeicon}
                  value={type}
                  onClick={(e) => handleShow(e)}
                >
                  <Icon name={iconName} />
                </button>
                <ErrorMessage
                  name="password"
                  component="div"
                  className={s.error}
                />
              </label>
            </div>
            <Button
              invert={false}
              title="Register Now"
              icon={false}
              type="submit"
              disabled={isSubmitting || !dirty}
            />
          </Form>
        </div>
      )}
    </Formik>
  );
};
