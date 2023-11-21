import { useMemo } from "react";
import { useParams } from "react-router-dom";
import Add from "./Add";
import { ProductDetailProps } from "../types";
import * as S from "../styles/ProductDetail";
import { ErrorContainer } from "../styles/Error";

export default function ProductDetail({ products }: ProductDetailProps) {
  const { id } = useParams();

  // useMemo used as the products array could be very large and result in an
  // expensive calculation, so useMemo only runs if the products array
  // or the product ID change.
  const product = useMemo(() => {
    return products.find((product) => product.id.toString() === id);
  }, [products, id]);

  if (product) {
    return (
      <S.DetailContainer>
        <S.DetailItem>
          <S.DetailName>{product.name}</S.DetailName>
          <S.DetailDescription>{product.description}</S.DetailDescription>
          <S.DetailPrice>£{product.price}</S.DetailPrice>
          <Add product={product} />
        </S.DetailItem>
      </S.DetailContainer>
    );
  }
  return (
    <ErrorContainer>
      <p className="error">Sorry, we cannot find that product</p>
    </ErrorContainer>
  );
}
