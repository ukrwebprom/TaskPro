import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationNewBoardSchema } from "schems";
import s from "./BoardForm.module.css";
import Button from "components/Button/Button";
import Icon from "components/Icon/Icon";
import previews from "..//..//..//images/background/small-url.json";

const iconNames = [
  "board1",
  "board2",
  "board3",
  "board4",
  "board5",
  "board6",
  "board7",
  "board8",
];

export const BoardForm = ({ onSubmitForm, def, type }) => {
  const initialValues = {
    title: "",
    icon: iconNames[0],
    background: "0",
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    onSubmitForm(values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={def ? def : initialValues}
      validationSchema={validationNewBoardSchema}
      onSubmit={onSubmit}
      validationOnBlur={true}
    >
      {({ isSubmitting, dirty, values, setFieldValue }) => (
        <Form className={s.form}>
          <label className={s.label}>
            <Field
              className={s.input}
              type="text"
              name="title"
              placeholder="Title"
              autoFocus
            />
            <ErrorMessage name="title" component="div" className={s.error} />
          </label>

          <label className={s.label}>
            <p className={s.itemtitle}>Icons</p>
            <div className={s.icontainer} role="group">
              {iconNames.map((icon, index) => (
                <div className={s.boardicon} key={index}>
                  <Field
                    type="radio"
                    id={index}
                    name="icon"
                    value={icon}
                    checked={values.icon === icon}
                    className={s.radio}
                  />
                  <label htmlFor={index} className={s.icon}>
                    <Icon name={`#${icon}`} />
                  </label>
                </div>
              ))}
            </div>
            <ErrorMessage name="icon" component="div" className={s.error} />
          </label>

          <label className={s.label}>
            <p className={s.itemtitle}>Background</p>
            <div className={s.wrapimage}>
              {previews.map((preview, index) => (
                <div className={s.boardbg} key={index}>
                  <Field
                    type="radio"
                    id={`back${index}`}
                    name="background"
                    value={index}
                    checked={Number(values.background) === index}
                  />
                  <label
                    htmlFor={`back${index}`}
                    className={s.background}
                    style={{ backgroundImage: `url(${preview})` }}
                  />
                </div>
              ))}
            </div>

            <ErrorMessage
              name="background"
              component="div"
              className={s.error}
            />
          </label>

          <Button
            invert={false}
            title={type}
            type="submit"
            disabled={isSubmitting || !dirty}
          />
        </Form>
      )}
    </Formik>
  );
};
