import styled from "styled-components";
import { Button } from "./Add";

const BasketButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BasketQuantity = styled.p`
  text-align: center;
  padding: 0 0.5rem;
`;

const QuantityButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  min-height: 3rem;
  width: 3rem;
  min-width: 3rem;
`;

const EmptyBasket = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  @media (min-width: 600px) {
    font-size: 1.5rem;
  }
`;

export { BasketButtons, QuantityButton, BasketQuantity, EmptyBasket };
