import { useMemo } from "react";
import { useParams } from "react-router-dom";
import Add from "./Add";
import { ProductDetailProps } from "../types";
import * as S from "../styles/ProductDetail";

export default function ProductDetail({ products }: ProductDetailProps) {
  const { id } = useParams();

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
  return <div>Cannot find product</div>;
}
