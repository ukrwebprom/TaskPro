import * as Yup from "yup";

export const validationHelpSchema = Yup.object().shape({
  email: Yup.string()
    .required("Is Required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "This must be a valid email"
    ),

  message: Yup.string()
    .required("Is Required")
    .min(10, "The message must contain at least 10 characters")
    .max(200, "The message must contain less than 200 characters"),
});
