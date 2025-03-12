"use client";

import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";

function ShoppingIconForSideBar() {
  const { cart } = useSelector((store: any) => store.persistedReducerShopping);
  return (
    <Link
      href="/cart"
      className="w-full h-full relative flex items-center flex-col justify-center gap-1"
    >
      <BsCart3 className="w-6 h-6 text-accent/60 bg-accentWhite group-hover:animate-icon-to-right relative" />
      <p className="absolute right-2 top-[2px] bg-darkOrange text-white rounded-full text-center text-xs w-5 h-5">
        {cart.length}
      </p>
      <p className="text-accent/80 text-xs font-semibold  ">Buy Now</p>
    </Link>
  );
}

export default ShoppingIconForSideBar;
