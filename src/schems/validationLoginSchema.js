import * as Yup from "yup";

export const validationLoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Is Required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "This must be a valid email"
    ),

  password: Yup.string()
    .required("Is Required")
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/,
      "The password must contain only Latin letters, numbers and symbols"
    )
    .min(8, "Password must contain at least 8 characters")
    .max(64, "Password must contain less than 64 characters"),
});
