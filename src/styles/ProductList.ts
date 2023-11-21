import styled from "styled-components";
import { Link } from "react-router-dom";
import { cognitoBlue, darkBlue, hoverLinkBlue } from "./GlobalStyles";

const List = styled.ul`
  width: 100vw;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 0;
`;

const ListItem = styled.li`
  border: 3px solid ${cognitoBlue};
  margin: 0 1rem 1rem 1rem;
  width: 20%;
  min-width: 191px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0.5rem;
  border-radius: 2rem;
  max-width: 325px;
`;

const ListLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  margin-bottom: 1rem;
  text-decoration: none;
  font-weight: 600;
  color: ${darkBlue};

  p {
    margin: 0;
    text-align: center;
  }

  &:hover {
    color: ${hoverLinkBlue};
    text-decoration: underline;
  }
`;

export { List, ListLink, ListItem };
