import styled from "styled-components";
import theme from "../../../styles/theme";

interface StyledAboutUsI {
  background: string;
}

export const StyledAboutUs = styled.section<StyledAboutUsI>`
  width: 100%;
  height: 70rem;
  background: ${({ background }) => `url(${background})`};

  display: flex;
  align-items: center;
`;

export const Info = styled.div`
  width: ${theme.screenWidth.size1};
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  p {
    margin: 3.8rem 0 2.8rem 0;
    width: 56rem;
  }
`;
