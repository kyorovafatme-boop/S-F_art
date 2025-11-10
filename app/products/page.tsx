import { ProductList } from "@/components/product-list";
import { getProductsList } from "@/data/products";

export default async function ProductsPage() {
  const products = getProductsList();

  return (
    <div className="pb-8">
      <h1 className="text-3xl font-bold leading-none tracking-tight text-foreground text-center mb-8">
        Всички продукти
      </h1>
      <ProductList products={products.data} />
    </div>
  );
}
