export interface product {
  _id?: string;
  title: string;
  slug: { current: string; _type: string };
  description: string;
  image: any;
  category: { _ref: string; _type: string; _key: string }[];
  price: number;
  rowprice: number;
  rattings: number;
  brand: string;
  quantity: number;
  quantityOnCard: number;
}

export interface userInfo {
  id: string;
  email: string;
  name: string;
  avatar: string;
}
