"use client";
import { twMerge } from "tailwind-merge";
import { product } from "../types";
import { FaMinus, FaPlus, FaXmark } from "react-icons/fa6";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import FormatedPrice from "./FormatedPrice";
import {
  deleteProductFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/app/store/shoppingSlice";
import { useDispatch } from "react-redux";
function CartRow({
  className,
  product,
}: {
  className?: string;
  product: product;
}) {
  const dispatch = useDispatch();
  return (
    <div
      className={twMerge(
        "border-[1px] border-accent/10  grid grid-cols-5 items-center p-4 my-2",
        className
      )}
    >
      <div className="flex flex-row items-center gap-2 col-span-2">
        <FaXmark
          onClick={() => dispatch(deleteProductFromCart(product))}
          className="w-6 h-6 font-bold text-black hover:text-darkOrange hoverEffect"
        />
        <div className="flex flex-col md:flex-row items-center gap-2">
          <Image
            src={urlFor(product.image).url()}
            alt={product.title}
            width={50}
            height={50}
            className="w-28 h-28"
          />
          <h3 className="text-accent font-semibold">{product.title} </h3>
        </div>
      </div>
      <FormatedPrice
        value={product.price}
        className="text-accent text-sm md:text-lg self-center"
      />
      <div className="bg-red  flex flex-col md:flex-row justify-around  items-center md:justify-start pl-2 md:gap-4 gap-2">
        <FaMinus
          onClick={() => dispatch(decreaseQuantity(product))}
          className=" text-accent w-[22px] h-[22px] border-[1px] border-accent/40
         p-px hover:cursor-pointer hover:border-darkOrange"
        />
        <h3 className="text-accent text-lg">{product.quantityOnCard} </h3>
        <FaPlus
          onClick={() => dispatch(increaseQuantity(product))}
          className=" text-accent w-[22px] h-[22px] border-[1px] border-accent/40
         p-px hover:cursor-pointer hover:border-darkOrange"
        />
      </div>
      <FormatedPrice
        value={product.price * product.quantityOnCard}
        className="text-accent text-sm md:text-lg "
      />
    </div>
  );
}

export default CartRow;
