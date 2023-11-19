import styled from "styled-components";
import { Link } from "react-router-dom";

const List = styled.ul`
  width: 100vw;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0;
`;

const ListItem = styled.li`
  border: 3px solid #1a96f3;
  margin: 0 1rem 1rem 1rem;
  width: 20%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0.5rem;
  border-radius: 2rem;
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
  color: #1a96f3;

  p {
    margin: 0;
    text-align: center;
  }

  &:hover {
    color: #0066ff;
  }
`;

export { List, ListLink, ListItem };
