import styled from "styled-components";
import theme from "../../../styles/theme";

interface StyledOurAcademy {
  background: string;
}

export const StyledOurAcademy = styled.section<StyledOurAcademy>`
  width: 100%;
  height: 155.1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ background }) => `url(${background})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const GridTemplateWrapper = styled.section`
  width: ${theme.screenWidth.size1};
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 2rem;
  }

  p {
    width: 58rem;
    margin-bottom: 6rem;
  }
`;

export const GridTemplate = styled.div`
  display: grid;
  grid-template-columns: 36.69rem 36.69rem 36.69rem;
  grid-template-rows: 25.6rem 25.6rem 25.6rem 36.6rem;
  grid-template-areas:
    "img-1 img-1 img-2"
    "img-1 img-1 img-3"
    "img-4 img-5 img-6"
    "img-7 . img-8";
  gap: 0.8rem;

  div {
    background-color: ${theme.color.greyScale[500]};

    width: 100%;
    height: 100%;
  }

  div:nth-child(1) {
    grid-area: img-1;
  }

  div:nth-child(2) {
    grid-area: img-2;
  }

  div:nth-child(3) {
    grid-area: img-3;
  }

  div:nth-child(4) {
    grid-area: img-4;
  }

  div:nth-child(5) {
    grid-area: img-5;
  }

  div:nth-child(6) {
    grid-area: img-6;
  }

  div:nth-child(7) {
    grid-area: img-7;
    width: 151%;
  }

  div:nth-child(8) {
    grid-area: img-8;
    width: 151%;
    justify-self: end;
  }
`;
