import { Link } from "react-router-dom";
import Add from "./Add";
import { ProductListProps } from "../types";

export default function ProductList({
  products,
  errorMessage,
  handleAddClick,
}: ProductListProps) {
  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={`product-${product.id}`}>
          <Link to={`products/${product.id}`}>
            <p>{product.name}</p>
            <p>£{product.price}</p>
          </Link>
          <Add product={product} handleAddClick={handleAddClick} />
        </li>
      ))}
    </ul>
  );
}
