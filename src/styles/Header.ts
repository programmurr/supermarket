import styled from "styled-components";
import { NavLink } from "react-router-dom";

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

const Nav = styled.nav`
  position: sticky;
  top: 4rem;
  width: 100%;
  border-top: 1px solid #1a96f3;
  border-bottom: 1px solid #1a96f3;
  background: white;
  display: flex;
  align-items: center;
  text-align: center;
`;

const Link = styled(NavLink)`
  width: 50%;
  text-decoration: underline;
  color: #1a96f3;
  font-weight: 800;

  &.active {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    background: #1a96f3;
    color: white;
  }
`;

export { Header, Link, Nav, Logo, LogoWrapper, HeaderInfo };
