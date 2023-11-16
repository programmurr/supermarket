import { Link } from "react-router-dom";
import { ProductListProps } from "../types";

export default function ProductList({
  products,
  errorMessage,
}: ProductListProps) {
  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link to={`products/${product.id}`}>
            <p>{product.name}</p>
            <p>£{product.price}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
