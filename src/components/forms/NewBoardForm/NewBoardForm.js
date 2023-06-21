import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { validationNewBoardSchema } from "schems";
import "./test.css";

const icons = ["❤️", "👍", "👎", "🤔", "😂", "🤢", "🤬", "🤯"];

const backgrounds = [
  {
    id: nanoid(),
    image: "https://example.com/backgrounds/background1.jpg",
  },
  {
    id: nanoid(),
    image: "https://example.com/backgrounds/background2.jpg",
  },
  {
    id: nanoid(),
    image: "https://example.com/backgrounds/background3.jpg",
  },
  {
    id: nanoid(),
    image: "https://example.com/backgrounds/background4.jpg",
  },
  {
    id: nanoid(),
    image: "https://example.com/backgrounds/background6.jpg",
  },
  {
    id: nanoid(),
    image: "https://example.com/backgrounds/background7.jpg",
  },
  {
    id: nanoid(),
    image: "https://example.com/backgrounds/background8.jpg",
  },
  {
    id: nanoid(),
    image: "https://example.com/backgrounds/background9.jpg",
  },
  {
    id: nanoid(),
    image: "https://example.com/backgrounds/background10.jpg",
  },
  {
    id: nanoid(),
    image: "https://example.com/backgrounds/background11.jpg",
  },
  {
    id: nanoid(),
    image: "https://example.com/backgrounds/background12.jpg",
  },
  {
    id: nanoid(),
    image: "https://example.com/backgrounds/background13.jpg",
  },
  {
    id: nanoid(),
    image: "https://example.com/backgrounds/background14.jpg",
  },
  {
    id: nanoid(),
    image: "https://example.com/backgrounds/background15.jpg",
  },
  {
    id: nanoid(),
    image: "https://example.com/backgrounds/background16.jpg",
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
          <div>
            <label htmlFor="title">Title</label>
            <Field
              type="text"
              id="title"
              name="title"
              placeholder="Заголовок"
            />
            <ErrorMessage name="title" />
          </div>

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
