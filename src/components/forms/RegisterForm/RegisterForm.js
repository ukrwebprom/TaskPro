import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationRegistrSchema } from "schems";
import { useState } from "react";
import Button from "..//..//Button/Button.jsx";
import { ErrorTip } from "../ErrorMessage/ErrorTip";
import s from "./Registerform.module.css";
import Icon from "components/Icon/Icon";
import { useDispatch } from "react-redux";
import { login } from "redux/auth/operations";
import { registerUser } from "api/ServerAPI.js";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState("password");
  const [iconName, setIconName] = useState("#eye-icon");
  const [error, setError] = useState(null);

  const handleShow = (e) => {
    const gettype = e.currentTarget.value;
    if (gettype === "password") {
      setType("text");
      setIconName("#eye-slash-icon");
    } else {
      setType("password");
      setIconName("#eye-icon");
    }
  };

  const handleSubmit = async (values, actions) => {
    try {
      await registerUser(values);
      actions.resetForm();
      dispatch(
        login({
          email: values.email,
          password: values.password
        })
      );
    } catch(err) {
      setError(err.response.data.message);
    }
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
            </div>
            {error && <ErrorTip e={error}/>}
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
