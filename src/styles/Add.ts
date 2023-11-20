import styled from "styled-components";
import { cognitoBlue } from "./GlobalStyles";

const Button = styled.button`
  background: ${cognitoBlue};
  color: white;
  width: 50%;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  padding: 1rem 0;

  &:hover {
    cursor: pointer;
    background: #0066ff;
  }
`;

export { Button };
