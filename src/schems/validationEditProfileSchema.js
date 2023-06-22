import * as Yup from "yup";

export const validationEditProfileSchema = Yup.object().shape({
  name: Yup.string()
    .required("Is Require")
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/? ]*$/,
      "The name must contain only Latin letters, numbers and symbols"
    )
    .min(2, "The name must contain at least 2 characters")
    .max(32, "The name must contain less than 32 characters"),

  email: Yup.string()
    .required("Is Require")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      "This must be a valid email"
    ),

  password: Yup.string()
    .required("Is Require")
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/,
      "The password must contain only Latin letters, numbers and symbols"
    )
    .min(8, "Password must contain at least 8 characters")
    .max(64, "Password must contain less than 64 characters"),

  userPhoto: Yup.mixed()
    .test("fileSize", "File size too large", (value) => {
      return value && value.size <= 4000000; //~4mb
    })
    .test("fileType", "Invalid file type", (value) => {
      return (
        value && ["image/jpeg", "image/png", "image/gif"].includes(value.type)
      );
    }),
});
