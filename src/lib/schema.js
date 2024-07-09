import * as yup from "yup";

export const sign_up_schema = yup.object().shape({
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string().required("Last Name is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  customer_type: yup.string().required("Customer Type Must be selected"),
  accept_terms: yup
    .bool()
    .oneOf([true], "Accept Terms & Conditions is required"),
});
