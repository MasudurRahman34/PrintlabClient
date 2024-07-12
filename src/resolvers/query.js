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
export const getProductsAttributeCombinationQuery = async ({ product_id }) =>
  await axios
    .get(`${backendUrl}/product/${product_id}/attribute/options`)
    .then((res) => res.data);
export const getAllCombinationForThisProductQuery = async ({ product_id }) =>
  await axios
    .get(`${backendUrl}/product/${product_id}/combinations`)
    .then((res) => res.data);

export const getProductDeliveryServicesQuery = async ({ product_id }) =>
  await axios
    .get(`${backendUrl}/product/${product_id}/services/delivery`)
    .then((res) => res.data);

export const getArtworkServicesQuery = async ({ product_id }) =>
  await axios.get(`${backendUrl}/services/artworks`).then((res) => res.data);

export const getIncompleteCartProductsQuery = async () =>
  axios.get(`${backendUrl}/cart/incomplete`).then((res) => res.data);

export const verifyEmailQuery = async ({ verify_url, token, signature }) => {
  return axios
    .get(`${verify_url}&signature=${signature}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
};

export const getDeliveryAddressQuery = async ({ token }) =>
  axios
    .get(`${backendUrl}/user/address`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

export const fileCheckCombinationQuery = async ({ combination, token }) =>
  axios
    .get(`${backendUrl}/file-checks/combination?combination=${combination}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
