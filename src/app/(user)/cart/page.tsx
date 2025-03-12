"use client";
import CartTable from "@/app/components/CartTable";
import Container from "@/app/components/Container";
import FormatedPrice from "@/app/components/FormatedPrice";
import { product } from "@/app/types";
import { useSelector } from "react-redux";

function CartPage() {
  const { cart }: { cart: product[] } = useSelector(
    (store: any) => store.persistedReducerShopping
  );

  const totalCart = cart.reduce(
    (sum, product) => sum + product.quantityOnCard * product.price,
    0
  );
  const shippingCost = 0;
  return (
    <Container className="flex flex-col gap-y-8">
      <CartTable cart={cart} />
      <div className="flex flex-row border-accent/20 border-[1px] p-4 gap-4">
        <input
          type="text"
          placeholder="Coupon Number"
          className="border-accent/40 border-[1px]"
        />
        <h3 className="text-accent font-semibold">Apply Coupon</h3>
        <h3 className="text-accent ml-auto">Update Cart</h3>
      </div>
      <div className="flex flex-col ml-auto w-96 h-80 ">
        <h3 className="text-accent/80 ml-auto text-2xl font-semibold mb-4">
          Cart Totals
        </h3>
        <div className="border-[1px] border-b-0 border-accent/30 flex flex-row justify-between p-2">
          <h3 className="text-accent font-semibold text-lg">SubTotal</h3>
          <FormatedPrice value={totalCart} className="text-sm text-accent " />
        </div>
        <div className="border-[1px] border-accent/30 flex flex-row justify-between p-2">
          <h3 className="text-accent font-semibold text-lg">Shipping Charge</h3>
          <FormatedPrice
            value={shippingCost}
            className="text-sm text-accent "
          />
        </div>
        <div className="border-[1px] border-t-0 border-accent/30 flex flex-row justify-between p-2">
          <h3 className="text-accent font-semibold text-lg">Total</h3>
          <FormatedPrice
            value={totalCart + shippingCost}
            className="text-sm text-accent "
          />
        </div>
        <button className="bg-lightOrange rounded-lg text-white text-lg w-full mt-4 py-2 hover:bg-darkOrange hoverEffect">
          Proceed to Checkout
        </button>
      </div>
    </Container>
  );
}

export default CartPage;
