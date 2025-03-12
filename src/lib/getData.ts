import { client } from "@/sanity/lib/client";
import {
  bannerQuery,
  bestSellersQuery,
  categoryByIdQuery,
  productQuery,
  productUniqueQuery,
} from "./query";
import { VscLaw } from "react-icons/vsc";
export const revalidate = 0;
const getBannersData = async () => {
  const bannersData = await client.fetch(bannerQuery);
  return bannersData;
};
const getProductData = async () => {
  const productsdData = await client.fetch(productQuery);

  return productsdData;
};
const getBestSellersData = async () => {
  const bestSellersData = await client.fetch(bestSellersQuery);
  return bestSellersData;
};
const getProductBySlag = async (slug: string) => {
  const query = productUniqueQuery(slug);
  const product = await client.fetch(query);

  console.log(product);

  return product;
};
const getProductCategoriesbyId = async (ids: any[]) => {
  const categoriesQuery = categoryByIdQuery(ids);
  const categories = await client.fetch(categoriesQuery);
  return categories;
};
export {
  getBannersData,
  getProductData,
  getBestSellersData,
  getProductBySlag,
  getProductCategoriesbyId,
};
