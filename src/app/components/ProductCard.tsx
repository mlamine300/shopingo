"use client";
import { product } from "../types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Rating from "./Rating";
import FormatedPrice from "./FormatedPrice";
import RowPrice from "./RowPrice";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import AddToCartButton from "./AddToCartButton";
import { addTocart } from "@/functions";

function ProductCard({
  className,
  product,
}: {
  className?: string;
  product: product;
}) {
  const router = useRouter();
  const path = usePathname();
  const navigateToProduct = () => {
    console.log(`${path}/product/${product.slug.current}`);

    router.push(`product/${product.slug.current}`, { scroll: false });
  };
  return (
    <div className=" border-accent/40 border-[1px] gap-2 rounded-lg  max-h-[700px] ">
      <div
        className="h-full flex flex-col items-center group overflow-hidden mb-6"
        onClick={navigateToProduct}
      >
        <Image
          src={urlFor(product.image).url()}
          alt={product.title}
          width={500}
          height={500}
          style={{ objectFit: "cover" }}
          className="max-h-[300px] mb-4 lg:max-h-[300px] group-hover:scale-105 hoverEffect"
        />
        <Rating
          className="flex flex-row justify-center gap-0.5 py-1"
          starClassName="w-5 h-5"
          rating={product.rattings}
        />
        <div className="px-4 flex flex-col items-center gap-2">
          <h3 className="text-darkOrange uppercase text-lg font-semibold">
            {product.brand}
          </h3>
          <h3 className="text-accent  text-xl font-semibold">
            {product.title}
          </h3>
          <h4 className="max-h-20 overflow-hidden text-accent text-lg text-center">
            {product.description}{" "}
          </h4>
          <div className="flex justify-center items-center gap-10">
            <RowPrice value={product?.price} />
            <FormatedPrice value={product?.rowprice} />
          </div>
        </div>

        <AddToCartButton product={product} />
      </div>
    </div>
  );
}

export default ProductCard;
