import axios from "axios";

const backendUrl =
  process.env.BACKEND_URL || "https://printlabapi.devtaijul.com/api/v1";

export const getCategoriesQuery = async ({ id = null }) =>
  await axios.get(`${backendUrl}/categories`).then((res) => res.data);

export const getProductQuery = async (slug) =>
  await axios.get(`${backendUrl}/products/${slug}`).then((res) => res.data);
