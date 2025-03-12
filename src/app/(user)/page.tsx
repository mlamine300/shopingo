import Image from "next/image";
import Header from "../components/Header";
import Container from "../components/Container";
import Banner from "../components/Banner";
import Facilities from "../components/Facilities";
import ProductList from "../components/ProductList";
import { product } from "../types";
import { getProductData } from "@/lib/getData";
import { revalidatePath } from "next/cache";
import { Toaster } from "react-hot-toast";

export default async function Home() {
  const products: product[] = await getProductData();
  revalidatePath("/");
  return (
    <div className=" bg-accentWhite">
      <Container>
        <Banner />
        <Facilities />
        <ProductList products={products} className="mb-8" />
        <Toaster />
      </Container>
    </div>
  );
}
