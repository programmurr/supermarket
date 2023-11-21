import Add from "./Add";
import { ProductListProps } from "../types";
import * as S from "../styles/ProductList";
import { useMemo } from "react";
import { sortByName } from "../utils/sortItems";
import { ErrorContainer } from "../styles/Error";

export default function ProductList({
  products,
  errorMessage,
}: ProductListProps) {
  // useMemo used as the products array could be very large and result in an
  // expensive calculation, so useMemo only runs if the products array
  // actually changes.
  const sortedProducts = useMemo(() => {
    return products.toSorted(sortByName);
  }, [products]);

  if (errorMessage) {
    return (
      <ErrorContainer>
        <p className="error">{errorMessage}</p>
      </ErrorContainer>
    );
  }

  return (
    <S.List>
      {sortedProducts.map((product) => (
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
