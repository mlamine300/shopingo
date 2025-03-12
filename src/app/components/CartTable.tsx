"use client";
import { product } from "../types";
import CartRow from "./CartRow";
import Container from "./Container";
import { resetCard } from "../store/shoppingSlice";
import { useDispatch } from "react-redux";
function CartTable({
  className,
  cart,
}: {
  className?: string;
  cart: product[];
}) {
  const dispatch = useDispatch();
  return (
    <Container className=" bg-accentWhite w-full">
      <div
        className="grid grid-cols-5 h-20 items-center   pl-8 mb-5
       bg-slate-100 text-black font-semibold "
      >
        <h3 className="col-span-2">Product</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3>Sub Total</h3>
      </div>
      {cart.map((product) => (
        <CartRow product={product} />
      ))}
      <button
        onClick={() => dispatch(resetCard())}
        className="bg-red-500 text-accentWhite  px-6 py-2 hover:bg-red-600 mt-4 hoverEffect"
      >
        RESET CART
      </button>
    </Container>
  );
}

export default CartTable;
