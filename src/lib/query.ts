import { groq } from "next-sanity";
const bannerQuery = groq`*[_type=='banner']{
...}|order(_createdAt asc)`;
const productQuery = groq`*[_type=='product']{
    ...}|order(_createdAt asc)`;
const productUniqueQuery = (slug: string) => {
  return groq`*[_type == 'product' && slug.current == '${slug}'] {
    ...
}[0]`;
};
const categoryByIdQuery = (ids: any[]) => {
  const categories = ids.map((ids) => "'" + ids?._ref + "'");

  return groq`*[_type == 'category' && _id in [${Array.from(categories)} ]] {
      ...
  }|order(_createdAt asc)`;
};
const bestSellersQuery = groq`*[_type=='product' && position=='Bestsellers']{
        ...}|order(_createdAt asc)`;
export {
  bannerQuery,
  productQuery,
  bestSellersQuery,
  productUniqueQuery,
  categoryByIdQuery,
};
