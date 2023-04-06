import styled, { css } from "styled-components";
import theme from "./theme";

interface TextI {
  color: "Orange" | "Black" | "White" | "Gray";
  lineHeight: "75%" | "100%";
  fontSize: "10rem" | "6.4rem" | "4rem" | "3.2rem" | "2.4rem" | "1.6rem";
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
      case "Gray":
        return theme.color.gray;
    }
  }};
  font-size: ${({ fontSize }) => fontSize};
  font-family: ${({ fontWeight }) => {
    switch (fontWeight) {
      case "Extra-Bold":
        return "Aceh-Medium, Arial, Helvetica, sans-serif";
      case "Bold":
        return "Aceh-Medium, Arial, Helvetica, sans-serif";
      case "Semi-Bold":
        return "Aceh-Medium, Arial, Helvetica, sans-serif";
      case "Medium":
        return "Aceh-Medium, Arial, Helvetica, sans-serif";
      case "Regular":
        return "Aceh-Medium, Arial, Helvetica, sans-serif";
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
          font-family: Aceh-Regular, Arial, Helvetica, sans-serif;
        `;
      case "Medium":
        return css`
          font-size: 1.6rem;
          padding: 1rem 6.2rem;
          border-radius: 2rem;
          font-family: Aceh-Semi-Bold, Arial, Helvetica, sans-serif;
        `;
      case "Large":
        return css`
          font-size: 2.4rem;
          padding: 2.4rem 5rem;
          border-radius: 6.8rem;
          font-family: Aceh-Bold, Arial, Helvetica, sans-serif;
        `;
    }
  }};
`;
