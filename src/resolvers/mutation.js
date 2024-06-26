import axios from "axios";

const backendUrl =
  process.env.BACKEND_URL || "https://printlabapi.devtaijul.com/api/v1";

export const createCategoryMutation = async ({ variables }) =>
  axios.post(`${backendUrl}/categories`, variables).then((res) => res.data);

export const addToCartMutation = async ({ variables }) =>
  axios.post(`${backendUrl}/cart`, variables).then((res) => res.data);
export const deleteIncompleteCartProductMutation = async ({ cart_id }) =>
  axios.delete(`${backendUrl}/cart/${cart_id}`).then((res) => res.data);

export const getIncompleteCartTotalQuery = async () =>
  axios.get(`${backendUrl}/cart/incomplete/total`).then((res) => res.data);
