import * as Yup from "yup";

export const validationColumnSchema = Yup.object().shape({
  title: Yup.string()
    .required("Is Require")
    .min(3, "The title must contain at least 3 characters"),
});
