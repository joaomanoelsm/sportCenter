import styled from "styled-components";
import theme from "../../../styles/theme";
import { GlobalSize } from "../style";

interface StyledAboutUsI {
  background: string;
}

export const StyledAboutUs = styled.section<StyledAboutUsI>`
  width: 100%;
  height: 70rem;

  background: ${({ background }) => `url(${background})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  align-items: center;
`;

export const Info = styled.div`
  ${GlobalSize}
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  p {
    margin: 3.8rem 0 2.8rem 0;
    width: 56rem;

    @media (max-width: 380px) {
      width: 42rem;
    }
  }
`;
