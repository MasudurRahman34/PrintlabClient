import axios from "axios";

const backendUrl =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  "https://printlabapi.devtaijul.com/api/v1";

export const createCategoryMutation = async ({ variables }) =>
  axios.post(`${backendUrl}/categories`, variables).then((res) => res.data);

export const addToCartMutation = async ({ variables }) =>
  axios.post(`${backendUrl}/carts`, variables).then((res) => res.data);
export const deleteIncompleteCartProductMutation = async ({ cart_id }) =>
  axios.delete(`${backendUrl}/carts/${cart_id}`).then((res) => res.data);

export const getIncompleteCartTotalQuery = async () =>
  axios.get(`${backendUrl}/carts/incomplete/total`).then((res) => res.data);

export const deleteUploadedArtworkMutation = async ({ file_id, token }) =>
  axios
    .delete(`${backendUrl}/cart/files/${file_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

export const createAddressMutation = async ({ variables, token }) =>
  axios
    .post(`${backendUrl}/address`, variables, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

export const updateAddressMutation = async ({ variables, token, address_id }) =>
  axios
    .put(`${backendUrl}/address/${address_id}`, variables, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

export const registerUserMutation = async ({ variables }) =>
  axios.post(`${backendUrl}/register`, variables).then((res) => res.data);

export const createCheckoutSessionMutation = async ({ token }) =>
  axios
    .post(
      `${backendUrl}/checkout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => res.data);

export const skipFileUploadMutation = async ({ variables, cart_id, token }) =>
  axios
    .put(`${backendUrl}/carts/${cart_id}/file-skipped`, variables, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

export const checkoutMutation = async ({ variables, token }) =>
  axios
    .post(`${backendUrl}/checkout`, variables, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
export const resendVerificationEmailMutation = async ({ variables, token }) =>
  axios
    .post(`${backendUrl}/email/verification-notification`, variables, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

export const loginMutation = async ({ variables }) =>
  axios.post(`${backendUrl}/login`, variables).then((res) => res.data);

export const uploadFileMutation = async ({ formdata, token, cart_id }) =>
  axios
    .post(`${backendUrl}/cart/${cart_id}/files`, formdata, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

export const ForgetPasswordMutation=async({variables})=>
  axios
    .post(`${backendUrl}/forgot-password`, variables)
    .then((res) => res.data)
export const resetPasswordMutation=async({variables})=>
  axios
    .post(`${backendUrl}/reset-password`, variables)
    .then((res) => res.data)