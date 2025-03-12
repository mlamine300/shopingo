import Container from "@/app/components/Container";
import { product } from "../types";
import ProductCard from "./ProductCard";
import LoadingSpinner from "./LoadingSpinner";
function ProductList({
  products,
  className,
}: {
  products: product[];
  className?: string;
}) {
  return (
    <div className={className}>
      {products ? (
        <Container className="gap-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 end">
          {products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </Container>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}

export default ProductList;
