import * as Yup from "yup";

export const validationColumnSchema = Yup.object().shape({
  title: Yup.string()
    .required("Is Required")
    .max(32, "The title must contain less than 32 characters"),
});
