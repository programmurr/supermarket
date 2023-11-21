import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { cognitoBlue, hoverLinkBlue } from "./GlobalStyles";

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
`;

const Link = styled(NavLink)<{ $position?: "shop" | "basket" }>`
  height: 3rem;
  width: 50%;
  color: ${cognitoBlue};
  text-decoration: none;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: ${(props) =>
    props.$position === "shop" ? `1px solid ${cognitoBlue}` : 0};
  border-left: ${(props) =>
    props.$position === "basket" ? `1px solid ${cognitoBlue}` : 0};

  &.active {
    background: ${cognitoBlue};
    color: white;
    border: none;
  }

  &:hover {
    text-decoration: underline;
    background: ${hoverLinkBlue};
    color: white;
    border-right: ${(props) =>
      props.$position === "shop" ? `1px solid ${hoverLinkBlue}` : 0};
    border-left: ${(props) =>
      props.$position === "basket" ? `1px solid ${hoverLinkBlue}` : 0};
  }
`;

export { Header, Link, Nav, Logo, LogoWrapper, HeaderInfo, Total };
