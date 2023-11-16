import { useMemo } from "react";

import { ProductDetailProps } from "../types";
import { useParams } from "react-router-dom";

export default function ProductDetail({ products }: ProductDetailProps) {
  const { id } = useParams();
  const product = useMemo(() => {
    return products.find((product) => product.id.toString() === id);
  }, [products, id]);

  if (product) {
    return (
      <div>
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>£{product.price}</p>
      </div>
    );
  }
  return <div>Cannot find product</div>;
}
