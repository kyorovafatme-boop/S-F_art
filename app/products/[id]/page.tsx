import { ProductDetail } from "@/components/product-detail";
import { getProductById } from "@/data/products";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const plainProduct = JSON.parse(JSON.stringify(product));
  return <ProductDetail product={plainProduct} />;
}
