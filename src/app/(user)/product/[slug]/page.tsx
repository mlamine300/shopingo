import Container from "@/app/components/Container";
import ProductList from "@/app/components/ProductList";
import ProductView from "@/app/components/ProductView";
import { getBestSellersData, getProductBySlag } from "@/lib/getData";
import { revalidatePath } from "next/cache";

async function ProductPage({ params }: { params: any }) {
  const product = await getProductBySlag(params.slug);
  revalidatePath(`product/${product.slug}`);

  const products = await getBestSellersData();

  return (
    <div className="flex flex-col items-center bg-accentWhite">
      <Container className="flex flex-col items-center bg-accentWhite">
        <ProductView product={product} />

        <ProductList products={products} className=" my-8 bg-slate-100" />
      </Container>
    </div>
  );
}

export default ProductPage;
