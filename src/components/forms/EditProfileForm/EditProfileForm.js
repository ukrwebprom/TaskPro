import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationEditProfileSchema } from "..//..//..//schems/validationEditProfileSchema";
import s from "./EditProfileForm.module.css";
import { Avatar } from "components/Avatar/Avatar";
import Button from "..//..//Button/Button.jsx";
import Icon from "components/Icon/Icon";

import { useState } from "react";
import { useAuth } from 'hooks/useAuth';
// import { useDispatch } from "react-redux";
import { updateProfileAvatar } from "redux/auth/operations";

export const EditProfileForm = ({ onSubmitForm }) => {
  const {user} = useAuth();
  const {name, email, avatar} = user;
  const [newAvatar, setNewAvatar ] = useState(null);
  const [type,setType]= useState("password");
  const [iconName, setIconName]= useState("#eye-icon");

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    onSubmitForm({...values, avatar: newAvatar});
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

  } 

  const uploadAvatar = async (formData) => {
    try {
      const res = await fetch('https://taskpro-41yf.onrender.com/user/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      setNewAvatar(data.url);
    } catch (err) {
      console.error(err);
    }
  }
  
  
  const handleAvaSelect = file => {
    const formData = new FormData();
    formData.append("avatar", file);
    uploadAvatar(formData);

    // fetch('https://taskpro-41yf.onrender.com/user/upload', {
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((data) => setNewAvatar(data.url))
    //   .catch((err) => console.error(err));
  }


  return (
    <>
    <Formik
      initialValues={{
        avatar: "",
        name,
        email,
      }}
      validationSchema={validationEditProfileSchema}
      onSubmit={handleSubmit}
    >
      {({ touched, errors, isSubmitting, dirty, setFieldValue }) => (

        
        <Form  className={s.form}>
          <div className={s.s} >
         
          <div className={s.addfilewrap}>
          {newAvatar ? <img src={newAvatar} alt='avatar-default'/> : <Avatar size ={68}/>}

            <label className={s.filelabel}> 
            <Icon  name ="#plus-icon"/>
            <Field
              className={s.inputFile}
              name="avatar"
              type="file"
              onChange={(event) => {
                handleAvaSelect(event.currentTarget.files[0]);
              }}
              onBlur={touched.fieldName && errors.fieldName}
            /></label>
            <ErrorMessage name="userPhoto"
             component="div"
             className={s.error} />
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
              type= {type}
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
            <ErrorMessage name="password" component="div" className={s.error} />
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
