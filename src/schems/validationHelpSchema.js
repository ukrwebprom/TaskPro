import * as Yup from "yup";

export const validationHelpSchema = Yup.object().shape({
  email: Yup.string()
    .required("Is Require")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "This must be a valid email"
    ),

  comment: Yup.string()
    .required("Is Require")
    .min(10, "The name must contain at least 10 characters")
    .max(200, "The name must contain less than 200 characters"),
});
