import { ProductDetailProps } from "../types";

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div>
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}
