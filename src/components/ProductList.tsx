import Add from "./Add";
import { ProductListProps } from "../types";
import * as S from "../styles/ProductList";

export default function ProductList({
  products,
  errorMessage,
}: ProductListProps) {
  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <S.List>
      {products.map((product) => (
        <S.ListItem key={`product-${product.id}`}>
          <S.ListLink to={`products/${product.id}`}>
            <p>{product.name}</p>
            <p>£{product.price}</p>
          </S.ListLink>
          <Add product={product} />
        </S.ListItem>
      ))}
    </S.List>
  );
}
