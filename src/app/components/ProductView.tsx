import Image from "next/image";
import { product } from "../types";
import { urlFor } from "@/sanity/lib/image";
import Container from "./Container";
import { twMerge } from "tailwind-merge";
import FormatedPrice from "./FormatedPrice";
import RowPrice from "./RowPrice";
import Rating from "./Rating";
import AddToCartButton from "./AddToCartButton";
import { getBestSellersData, getProductCategoriesbyId } from "@/lib/getData";
import ProductList from "./ProductList";
import { revalidatePath } from "next/cache";

async function ProductView({
  className,
  product,
}: {
  className?: string;
  product: product;
}) {
  const categories = (await getProductCategoriesbyId(product.category).then(
    (list) => list.map((l: { title: any }) => l.title)
  )) as any[];

  return (
    <Container
      className={twMerge("bg-slate-100 flex flex-col items-center ", className)}
    >
      <div
        className=" flex  flex-col lg:flex-row justify-center lg:gap-20 grow items-center
       max-w-[800px] lg:w-full lg:max-w-full  px-8 my-8"
      >
        <Image
          src={urlFor(product.image).url()}
          alt={product.title}
          width={500}
          height={500}
          className=" self-center"
        />
        <div className="flex flex-col gap-4 max-w-[80%] lg:max-w-[600px]">
          <h3 className="text-accent text-4xl font-semibold">
            {product.title}{" "}
          </h3>
          <div className="flex flex-col gap-4 text-black text-[1rem] xl:flex-row                                                                                                                                                                                            ">
            <div className="flex flex-row justify-start gap-8 text-black text-[1rem] ">
              <RowPrice value={product.rowprice} className="text-xl" />
              <FormatedPrice value={product.price} className="text-accent " />
            </div>
            <h3 className="flex flex-row gap-2 text-lg">
              you saved
              <FormatedPrice
                value={Number(product.rowprice - product.price)}
                className="text-accentWhite bg-lightGreen rounded-md text-sm py-1 px-2 font-normal"
              />
              from this item
            </h3>
          </div>
          <Rating rating={product.rattings} starClassName="w-6 h-6" />
          <p className="text-accent/80 max-h-[200px]">{product.description} </p>
          <p className="text-lg text-accent/40 font-semibold">
            Be the first to leave a review.{" "}
          </p>
          <AddToCartButton className="rounded-lg" product={product} />
          <h3 className="text-accent/80 text-lg">
            <span className="text-xl text-accent font-semibold">
              Categories :{" "}
            </span>{" "}
            {` ${categories}`}
          </h3>
        </div>
      </div>
    </Container>
  );
}

export default ProductView;
