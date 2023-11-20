import styled from "styled-components";
import { Button } from "./Add";

const BasketButtons = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
`;

const BasketQuantity = styled.p`
  text-align: center;
`;

const QuantityButton = styled(Button)`
  width: 3rem;
  height: 3rem;
`;

export { BasketButtons, QuantityButton, BasketQuantity };
