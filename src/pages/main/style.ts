import styled, { createGlobalStyle } from "styled-components";
import theme from "../../styles/theme";
import font from "../../assets/fonts/Aceh-Medium.otf";

export const StyledMain = styled.main`
  width: 100%;
`;

export const GlobalStyle = createGlobalStyle`
  html {
    @import url(${font});

    font-size: 62.5%;
    vertical-align: middle;
    text-rendering: optimizeLegibility;

    -ms-text-size-adjust: none;
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Aceh", Arial, Helvetica, sans-serif;
  }

  @media (max-width: 1200px) {
    html {
      font-size: 46.875%;
    }
  }

  @media (max-width: 900px) {
    html {
      font-size: 35.15%;
    }
  }
`;
