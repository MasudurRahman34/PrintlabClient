import axios from "axios";

const backendUrl =
  process.env.BACKEND_URL || "https://printlabapi.devtaijul.com/api/v1";

export const createCategoryMutation = async ({ variables }) =>
  axios.post(`${backendUrl}/categories`, variables).then((res) => res.data);

export const addToCartMutation = async ({ variables }) =>
  axios.post(`${backendUrl}/carts`, variables).then((res) => res.data);
export const deleteIncompleteCartProductMutation = async ({ cart_id }) =>
  axios.delete(`${backendUrl}/carts/${cart_id}`).then((res) => res.data);

export const getIncompleteCartTotalQuery = async () =>
  axios.get(`${backendUrl}/cart/incomplete/total`).then((res) => res.data);

export const deleteUploadedArtworkMutation = async ({ file_id }) =>
  axios.delete(`${backendUrl}/cart/files/${file_id}`).then((res) => res.data);

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
