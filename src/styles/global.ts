import styled, { css } from "styled-components";
import theme from "./theme";
import FontExtraBold from "../assets/fonts/Aceh-ExtraBold.otf";
import FontBold from "../assets/fonts/Aceh-Bold.ttf";
import FontSemiBold from "../assets/fonts/Aceh-SemiBold.otf";
import FontMedium from "../assets/fonts/Aceh-Medium.otf";
import FontRegular from "../assets/fonts/Aceh-Regular.otf";

interface TextI {
  color: "Orange" | "Black" | "White";
  lineHeight: "75%" | "100%";
  fontSize:
    | "Font-Title-xl"
    | "Font-Title-x"
    | "Font-Title-m"
    | "Font-Title-s"
    | "Font-Text-m"
    | "Font-Text-s";
  fontWeight: "Extra-Bold" | "Bold" | "Semi-Bold" | "Medium" | "Regular";
}

interface ButtonI {
  size: "Small" | "Medium" | "Large";
}
export const Text = styled.p<TextI>`
  color: ${({ color }) => {
    switch (color) {
      case "Orange":
        return theme.color.primary;
      case "Black":
        return "black";
      case "White":
        return "white";
    }
  }};
  font-size: ${({ fontSize }) => {
    switch (fontSize) {
      case "Font-Title-xl":
        return theme.font.fontTitleXL;
      case "Font-Title-x":
        return theme.font.fontTitleX;
      case "Font-Title-m":
        return theme.font.fontTitleM;
      case "Font-Title-s":
        return theme.font.fontTitleS;
      case "Font-Text-m":
        return theme.font.fontTextM;
      case "Font-Text-s":
        return theme.font.fontTextS;
    }
  }};
  font-weight: ${({ fontWeight }) => {
    switch (fontWeight) {
      case "Extra-Bold":
        return css`
          @font-face {
            font-family: "Aceh", Arial, Helvetica, sans-serif;
            src: url(${FontExtraBold});
          }
        `;
      case "Bold":
        return css`
          @font-face {
            font-family: "Aceh", Arial, Helvetica, sans-serif;
            src: url(${FontBold});
          }
        `;
      case "Semi-Bold":
        return css`
          @font-face {
            font-family: "Aceh", Arial, Helvetica, sans-serif;
            src: url(${FontSemiBold});
          }
        `;
      case "Medium":
        return css`
          @font-face {
            font-family: "Aceh", Arial, Helvetica, sans-serif;
            src: url(${FontMedium});
          }
        `;
      case "Regular":
        return css`
          @font-face {
            font-family: "Aceh", Arial, Helvetica, sans-serif;
            src: url(${FontRegular});
          }
        `;
    }
  }};
  line-height: ${({ lineHeight }) => lineHeight};

  span {
    color: #ff5b26;
  }
`;

export const Title = styled(Text)``;

export const Option = styled(Text)``;

export const Button = styled.button<ButtonI>`
  font-weight: 600;
  border: none;
  appearance: none;
  color: white;
  background-color: ${theme.color.primary};
  ${({ size }) => {
    switch (size) {
      case "Small":
        return css`
          font-size: 2rem;
          padding: 2rem 4rem;
          border-radius: 4.2rem;
          font-weight: 400;
        `;
      case "Medium":
        return css`
          font-size: 1.6rem;
          padding: 1rem 6.2rem;
          border-radius: 2rem;
          font-weight: 600;
        `;
      case "Large":
        return css`
          font-size: 2.4rem;
          padding: 2.4rem 5rem;
          border-radius: 6.8rem;
          font-weight: 700;
        `;
    }
  }};
`;
