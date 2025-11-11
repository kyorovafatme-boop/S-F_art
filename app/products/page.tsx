import { ProductList } from "@/components/product-list";
import { getProductsList } from "@/data/products";

export default async function ProductsPage() {
  const products = getProductsList();

  return (
    <div className="pb-8">
      <h1 className="text-3xl font-bold leading-none tracking-tight bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent text-center mb-8">
        Нашите произведения
      </h1>
      <ProductList products={products.data} />
    </div>
  );
}
