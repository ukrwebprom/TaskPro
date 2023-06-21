import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { validationNewBoardSchema } from "schems";
import "./test.css";

const icons = ["❤️", "👍", "👎", "🤔", "😂", "🤢", "🤬", "🤯"];

const backgrounds = [
  {
    id: nanoid(),
    image: "https://picsum.photos/200/300.jpg",
  },
  {
    id: nanoid(),
    image: "https://picsum.photos/200/300.jpg",
  },
  {
    id: nanoid(),
    image: "https://picsum.photos/200/300.jpg",
  },
  {
    id: nanoid(),
    image: "https://picsum.photos/200/300.jpg",
  },
  {
    id: nanoid(),
    image: "https://picsum.photos/200/300.jpg",
  },
  {
    id: nanoid(),
    image: "https://picsum.photos/200/300.jpg",
  },
  {
    id: nanoid(),
    image: "https://picsum.photos/200/300.jpg",
  },
  {
    id: nanoid(),
    image: "https://picsum.photos/200/300.jpg",
  },
  {
    id: nanoid(),
    image: "https://picsum.photos/200/300.jpgg",
  },
  {
    id: nanoid(),
    image: "https://picsum.photos/200/300.jpgg",
  },
  {
    id: nanoid(),
    image: "https://picsum.photos/200/300.jpgg",
  },
  {
    id: nanoid(),
    image: "https://picsum.photos/200/300.jpgg",
  },
  {
    id: nanoid(),
    image: "https://picsum.photos/200/300.jpgg",
  },
  {
    id: nanoid(),
    image: "https://picsum.photos/200/300.jpgg",
  },
  {
    id: nanoid(),
    image: "https://picsum.photos/200/300.jpgg",
  },
];

export const NewBoardForm = () => {
  const initialValues = {
    title: "",
    icon: "",
    background: "",
  };

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationNewBoardSchema}
      onSubmit={onSubmit}
      validateOnBlur
    >
      {({ isSubmitting, isValid, dirty, values, setFieldValue }) => (
        <Form>
          <label>
            <Field type="text" name="title" placeholder="Title" />
            <ErrorMessage name="title" />
          </label>

          <label className="icon-container">
            Icons
            {icons.map((icon, index) => (
              <div key={index}>
                <Field
                  type="radio"
                  id={`icon${index}`}
                  name="icon"
                  value={icon}
                  checked={values.icon === icon}
                  onChange={() => setFieldValue("icon", icon)}
                />
                <label htmlFor={`icon${index}`} className="icon">
                  {icon}
                </label>
              </div>
            ))}
            <ErrorMessage name="icon" />
          </label>

          <label className="background-container">
            Background
            {backgrounds.map((background, index) => (
              <div key={index}>
                <Field
                  type="radio"
                  id={`background${background.id}`}
                  name="background"
                  value={background.id}
                  checked={values.background === background.id}
                  onChange={() => setFieldValue("background", background.id)}
                />
                <label
                  htmlFor={`background${background.id}`}
                  className="background"
                  style={{ backgroundImage: `url(${background.image})` }}
                />
              </div>
            ))}
            <ErrorMessage name="background" />
          </label>

          <button type="submit" disabled={isSubmitting || !isValid || !dirty}>
            Create
          </button>
        </Form>
      )}
    </Formik>
  );
};
