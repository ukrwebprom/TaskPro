import * as Yup from "yup";

export const validationLoginSchema = Yup.object().shape({
  email: Yup.string().required("Is Required"),
  password: Yup.string().required("Is Required"),
});
