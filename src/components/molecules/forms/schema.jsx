import * as yup from "yup";

const validation = {
  // yup.object()
  name: yup.string().required("*Required field"),
  email: yup.string().required("*Required field"),
  phone: yup.number().required("*Required field"),
  username: yup.string().required("*Required field"),
  password: yup.string().required("*Required field"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("*Required field"),
};

export const schema = (keys) => {
  const validate = {};
  Object.keys(keys).map((key) => {
    if (validation[key]) {
      validate[key] = validation[key];
    }
  });
  return yup.object().shape({ ...validate });
};
