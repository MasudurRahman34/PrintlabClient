import axios from "axios";

const backendUrl =
  process.env.BACKEND_URL || "https://printlabapi.devtaijul.com/api/v1";

export const getCategoriesQuery = async ({ id = null }) =>
  await axios.get(`${backendUrl}/categories`).then((res) => res.data);

export const getAllProductsQuery = async () =>
  await axios.get(`${backendUrl}/products`).then((res) => res.data);

export const getSingleProductQuery = async ({ slug = null, id = null }) =>
  await axios
    .get(`${backendUrl}/products/${slug || id}`)
    .then((res) => res.data);
