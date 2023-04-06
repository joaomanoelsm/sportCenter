import styled, { css } from "styled-components";
import theme from "../../../styles/theme";
import { GlobalSize } from "../style";

interface StyledHeaderI {
  visibility: boolean;
}

export const StyledHeader = styled.header<StyledHeaderI>`
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.5s;
  position: fixed;
  width: 100%;
  z-index: 2;

  ${({ visibility }) => {
    switch (visibility) {
      case true:
        return css`
          background: hsla(0, 0%, 0%, 0.801);
          backdrop-filter: blur(5px);
        `;
      case false:
        return css`
          background: transparent;
          backdrop-filter: blur(0px);
        `;
    }
  }}
`;

export const NavBarWrapper = styled.div`
  ${GlobalSize}

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 10rem;
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

  @media (max-width: 767px) {
    display: none;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;
