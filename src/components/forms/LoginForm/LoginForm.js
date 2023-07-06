import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationLoginSchema } from "schems";
import Button from "components/Button/Button";
import Icon from "components/Icon/Icon";
import { ErrorTip } from "../ErrorMessage/ErrorTip";
import s from "./LoginForm.module.css";
import { useState } from "react";
import { login } from "redux/auth/operations";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";

export const LoginForm = () => {
  const { error } = useAuth();
  const dispatch = useDispatch();
  const [type, setType] = useState("password");
  const [iconName, setIconName] = useState("#eye-icon");

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

  const handleSubmit = (values, actions) => {
    dispatch(
      login({
        email: values.email,
        password: values.password,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationLoginSchema}
      onSubmit={handleSubmit}
      validationOnBlur={true}
    >
      {({ isSubmitting, dirty }) => (
        <div className={s.wrap}>
          <Form>
            <div className={s.titleFild}>
              <a href="register" className={s.regtitle}>
                Registration
              </a>
              <p className={s.regtitleActive}>Log In</p>
            </div>
            {error && <ErrorTip e={error} />}
            <div className={s.field}>
              <label className={s.label}>
                <Field
                  className={s.input}
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  autoFocus
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
                  placeholder="Confirm a password"
                  type={type}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className={s.error}
                />
                <button
                  type="button"
                  className={s.eyeicon}
                  value={type}
                  onClick={(e) => handleShow(e)}
                >
                  <Icon name={iconName} />
                </button>
              </label>
            </div>
            <Button
              invert={false}
              title="Log In Now"
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
