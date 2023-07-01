import * as Yup from "yup";

export const validationCardSchema = Yup.object().shape({
  title: Yup.string()
    .required("Is Require")
    .min(3, "The title must contain at least 3 characters"),

  description: Yup.string()
    .min(5, "The description must contain at least 5 characters")
    .max(200, "The description must contain less than 200 characters"),

  priority: Yup.string().required("Is Require"),
});
