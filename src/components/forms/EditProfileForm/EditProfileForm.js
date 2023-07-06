import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationEditProfileSchema } from "..//..//..//schems/validationEditProfileSchema";
import s from "./EditProfileForm.module.css";
import { Avatar } from "components/Avatar/Avatar";
import Button from "..//..//Button/Button.jsx";
import Icon from "components/Icon/Icon";
import sprite from '../../../images/sprite.svg';
import { useState } from "react";
import { useAuth } from "hooks/useAuth";
import { updateProfile } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

export const EditProfileForm = ({ onSubmitForm }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { name, email } = user;
  const [newAvatar, setNewAvatar] = useState(null);
  const [type, setType] = useState("password");
  const [iconName, setIconName] = useState("#eye-icon");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const dataToSend = {
      name:values.name,
      email:values.email
    }
    if(newAvatar) dataToSend.avatar = newAvatar;
    if(values.password) dataToSend.password = values.password;
    dispatch(updateProfile(dataToSend));
    onSubmitForm();
    setSubmitting(false);
    resetForm();
  };
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

  const uploadAvatar = async (formData) => {
    setLoading(true);
    try {
      const res = await fetch("https://taskpro-41yf.onrender.com/user/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setNewAvatar(data.url);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAvaSelect = (file) => {
    const formData = new FormData();
    formData.append("avatar", file);
    uploadAvatar(formData);
  };

  return (
    <>
      <Formik
        initialValues={{
          avatar: "",
          name,
          email,
          password: '',
        }}
        validationSchema={validationEditProfileSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors, isSubmitting, dirty, setFieldValue }) => (
          <Form className={s.form}>
            <div className={s.s}>
              <div className={s.addfilewrap}>
              <Avatar size={68} isLoading={loading} preload={newAvatar} />
                {!loading && <label className={s.filelabel}>
                    <svg width='18px' height='18px' stroke="currentColor">
                      <use href={sprite + "#plus-icon"} />
                    </svg>
                  <Field
                    className={s.inputFile}
                    name="avatar"
                    type="file"
                    onChange={(event) => {
                      handleAvaSelect(event.currentTarget.files[0]);
                    }}
                    onBlur={touched.fieldName && errors.fieldName}
                  />
                </label>}
                <ErrorMessage
                  name="userPhoto"
                  component="div"
                  className={s.error}
                />
              </div>
            </div>

            <label className={s.label}>
              <Field
                className={s.input}
                name="name"
                placeholder="Enter your name"
                onBlur={touched.fieldName && errors.fieldName}
              />
              <ErrorMessage name="name" component="div" className={s.error} />
            </label>

            <label className={s.label}>
              <Field
                className={s.input}
                name="email"
                placeholder="Enter your email"
                type="email"
                onBlur={touched.fieldName && errors.fieldName}
              />
              <ErrorMessage name="email" component="div" className={s.error} />
            </label>

            <label className={s.label}>
              <Field
                className={s.input}
                name="password"
                placeholder="Password"
                type={type}
                onBlur={touched.fieldName && errors.fieldName}
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
    </>
  );
};
