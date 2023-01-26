import styled from "styled-components";
import theme from "../../../styles/theme";

interface StyledIntroI {
  background: string;
}

export const StyledIntro = styled.section<StyledIntroI>`
  position: relative;
  background: ${({ background }) => `url(${background})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 97.5rem;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: ${theme.screenWidth.size1};
  display: flex;
  align-items: flex-start;

  h1 {
    width: 46.1rem;
  }

  @media (max-width: 900px) {
    width: ${theme.screenWidth.size2};
  }
`;
