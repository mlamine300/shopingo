"use client";
import { useDispatch } from "react-redux";
import { twMerge } from "tailwind-merge";
import { product } from "../types";
import { addtocart } from "../store/shoppingSlice";
import toast from "react-hot-toast";

function AddToCartButton({
  className,
  product,
}: {
  className?: string;
  product: product;
}) {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addtocart(product));
    toast.success(`${product.title.substring(0, 12)} has been added`);
  };
  return (
    <button
      onClick={addToCart}
      className={twMerge(
        "h-fit mt-auto hover:bg-darkOrange hoverEffect text-xl font-semibold w-full py-4 text-white bg-accent ",
        className
      )}
    >
      Add to cart
    </button>
  );
}

export default AddToCartButton;
