import styled from "styled-components";
import theme from "../../../styles/theme";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 2;
`;

export const NavBarWrapper = styled.div`
  width: ${theme.screenWidth.size1};
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 10rem;
  }

  @media (max-width: 900px) {
    width: ${theme.screenWidth.size2};
  }
`;

export const Logo = styled.img`
  width: 10rem;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;

  li:nth-child(-n + 4) {
    margin-right: 4rem;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;
