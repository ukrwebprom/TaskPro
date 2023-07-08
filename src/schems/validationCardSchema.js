import * as Yup from "yup";

export const validationCardSchema = Yup.object().shape({
  title: Yup.string()
    .required("Is Required")
    .min(2, "The title must contain at least 2 characters")
    .max(200, "The title must contain less than 200 characters"),

  description: Yup.string()
    .min(5, "The description must contain at least 5 characters")
    .max(1000, "The description must contain less than 1000 characters")
    .required("Is Required"),

  priority: Yup.string().required("Is Required"),
});
