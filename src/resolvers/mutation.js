import axios from "axios";

const backendUrl =
  process.env.BACKEND_URL || "https://printlabapi.devtaijul.com/api/v1";

export const createCategoryMutation = async ({ variables }) =>
  axios.post(`${backendUrl}/categories`, variables).then((res) => res.data);

export const addToCartMutation = async ({ variables }) =>
  axios.post(`${backendUrl}/cart`, variables).then((res) => res.data);
