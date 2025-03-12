import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { product, userInfo } from "../types";

export interface shoppingState {
  cart: product[];
  favorite: product[];
  userInfo: userInfo | null;
}

const initialState: shoppingState = {
  cart: [],
  favorite: [],
  userInfo: null,
};

export const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      const ExistProduct = state.cart.find((p) => p._id === action.payload._id);

      if (ExistProduct) {
        // console.log("********************************");
        state.cart = state.cart.map((p) => {
          if (p?._id === ExistProduct?._id) {
            p.quantityOnCard += 1;
          }
          return p;
        });
      } else
        state.cart.push({
          ...action.payload,
          quantityOnCard: 1,
        });
    },
    deleteProductFromCart: (state, action) => {
      state.cart = state.cart.filter((p) => p._id !== action.payload?._id);
    },
    increaseQuantity: (state, action) => {
      state.cart.forEach((product) => {
        if (product._id === action.payload._id) product.quantityOnCard += 1;
      });
    },
    decreaseQuantity: (state, action) => {
      state.cart.forEach((product) => {
        if (product._id === action.payload._id) product.quantityOnCard -= 1;
      });
    },
    resetCard: (state) => {
      console.log("hola");
      state.cart = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addtocart,
  deleteProductFromCart,
  resetCard,
  increaseQuantity,
  decreaseQuantity,
} = shoppingSlice.actions;

export default shoppingSlice.reducer;
