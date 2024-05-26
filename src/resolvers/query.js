import axios from "axios";

const backendUrl =
  process.env.BACKEND_URL || "https://printlabapi.devtaijul.com/api/v1";

export const getCategoriesQuery = async ({ id = null }) =>
  await axios.get(`${backendUrl}/categories`).then((res) => res.data);

export const getAllProductsQuery = async () =>
  await axios.get(`${backendUrl}/products`).then((res) => res.data);

export const getSingleProductQuery = async ({
  slug = null,
  id = null,
  category_slug,
}) =>
  await axios
    .get(`${backendUrl}/product/${category_slug || category_id}/${slug || id}`)
    .then((res) => res.data);

export const getProductsByCategoryQuery = async ({ category_slug }) =>
  await axios
    .get(`${backendUrl}/categories/${category_slug}`)
    .then((res) => res.data);
