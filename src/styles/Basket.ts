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

export { BasketButtons, QuantityButton, BasketQuantity };
