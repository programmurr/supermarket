import { ProductListProps } from "../types";

export default function ProductList({ products }: ProductListProps) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <p>{product.name}</p>
          <p>£{product.price}</p>
        </li>
      ))}
    </ul>
  );
}
