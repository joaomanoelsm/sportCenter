import styled, { createGlobalStyle } from "styled-components";
import FontExtraBold from "../../assets/fonts/Aceh-ExtraBold.otf";
import FontBold from "../../assets/fonts/Aceh-Bold.ttf";
import FontSemiBold from "../../assets/fonts/Aceh-SemiBold.otf";
import FontMedium from "../../assets/fonts/Aceh-Medium.otf";
import FontRegular from "../../assets/fonts/Aceh-Regular.otf";

export const StyledMain = styled.main`
  width: 100%;
`;

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Aceh-Extra-Bold;
    src: url(${FontExtraBold});
  }

  @font-face {
    font-family: Aceh-Bold;
    src: url(${FontBold});
  }

  @font-face {
    font-family: Aceh-Semi-Bold;
    src: url(${FontSemiBold});
  }

  @font-face {
    font-family: Aceh-Medium;
    src: url(${FontMedium});
  }

  @font-face {
    font-family: Aceh-Regular;
    src: url(${FontRegular});
  }

  html {
    font-size: 62.5%;
    vertical-align: middle;

    -ms-text-size-adjust: none;
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Aceh-Medium, Arial, Helvetica, sans-serif;
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
