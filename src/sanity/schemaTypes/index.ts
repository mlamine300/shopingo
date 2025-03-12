import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import banner from "../schemas/banner";
import products from "./products";
import category from "./category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, postType, authorType, banner, category, products],
};
