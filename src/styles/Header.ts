import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { cognitoBlue } from "./GlobalStyles";

const Header = styled.div``;

const HeaderInfo = styled.div`
  position: sticky;
  top: 0;
  height: 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
`;

const LogoWrapper = styled.div`
  display: flex;
  font-style: italic;
`;

const Logo = styled.img`
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
`;

const Total = styled.p`
  font-size: 1.25rem;
  span {
    font-weight: bold;
  }
`;

const Nav = styled.nav`
  position: sticky;
  top: 4rem;
  width: 100%;
  border-top: 1px solid ${cognitoBlue};
  border-bottom: 1px solid ${cognitoBlue};
  background: white;
  display: flex;
  align-items: center;
  text-align: center;
  height: 3rem;
`;

const Link = styled(NavLink)`
  width: 50%;
  color: ${cognitoBlue};
  text-decoration: none;
  font-weight: 800;

  &.active {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    background: ${cognitoBlue};
    color: white;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export { Header, Link, Nav, Logo, LogoWrapper, HeaderInfo, Total };
