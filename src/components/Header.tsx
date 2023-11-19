import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import logo from "../assets/images/cognito_logo_brick_small_1.png";
import { BasketContextType } from "../types";
import * as S from "../styles/Header";

export default function Header() {
  const { roundedTotal } = useContext(BasketContext) as BasketContextType;
  return (
    <S.Header>
      <S.HeaderInfo>
        <S.LogoWrapper>
          <S.Logo src={logo} alt="Cognito Logo" />
          <p>CognitoGO</p>
        </S.LogoWrapper>
        <p>Basket total: £{roundedTotal}</p>
      </S.HeaderInfo>
      <S.Nav>
        <S.Link to="/">Home</S.Link>
        <S.Link to="basket">Basket</S.Link>
      </S.Nav>
      <Outlet />
    </S.Header>
  );
}
