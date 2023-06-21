import * as Yup from "yup";

export const validationNewBoardSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Password must contain at least 3 characters")
    .required("Is Require"),

  icon: Yup.string().required("Is Require"),

  background: Yup.string().required("Is Require"),
});
