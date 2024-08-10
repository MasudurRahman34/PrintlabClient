import * as yup from "yup";

// password must be at least 6 characters long and contain at least one number and one letter and one special character or symbol
export const sign_up_schema = yup.object().shape({
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string().required("Last Name is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
      "Password must contain at least one letter, one number and one special character or symbol"
    )
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

export const address_schema = yup.object().shape({
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string(),
  company_name: yup.string(),
  address: yup.string().required("Address is required"),
  address_2: yup.string().required("Address 2 is required"),
  town: yup.string(),
  postcode: yup.string().required("Postcode is required"),
  country: yup.string(),
  delivery_mobile_number: yup.string().required("Mobile Number is required"),
  delivery_email: yup
    .string()
    .email("Email is invalid")
    .required("Email is required"),
});

export const address_edit_schema = yup.object().shape({
  first_name: yup.string(),
  last_name: yup.string(),
  company_name: yup.string(),
  address: yup.string(),
  address_2: yup.string(),
  town: yup.string(),
  postcode: yup.string(),
  country: yup.string(),
  delivery_mobile_number: yup.string(),
  delivery_email: yup.string().email("Email is invalid"),
});

export const login_schema = yup.object().shape({
  email: yup.string().email("Email is invalid").required("Email is required"),
  password: yup.string().required("Password is required"),
  stay_signed_in: yup.bool(),
});
