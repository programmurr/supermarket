import { useMemo } from "react";
import { useParams } from "react-router-dom";
import Add from "./Add";
import { ProductDetailProps } from "../types";

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
        <Add product={product} />
      </div>
    );
  }
  return <div>Cannot find product</div>;
}
