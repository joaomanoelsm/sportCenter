import styled from "styled-components";
import theme from "../../../styles/theme";
import { GlobalSize } from "../style";

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

  @media (max-width: 767px) {
    height: 120rem;
  }

  @media (max-width: 580px) {
    height: 110rem;
  }

  @media (max-width: 480px) {
    height: 100rem;
  }

  @media (max-width: 380px) {
    height: 90rem;
  }
`;

export const GridTemplateWrapper = styled.section`
  ${GlobalSize}
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 2rem;
  }

  p {
    width: 58rem;
    margin-bottom: 6rem;
    text-align: center;

    @media (max-width: 380px) {
      width: 48rem;
    }
  }
`;

export const GridTemplate = styled.div`
  display: grid;
  width: 100%;
  max-width: ${theme.screenWidth.size1};
  grid-template-columns: 36.69rem 36.69rem 36.69rem;
  grid-template-rows: 25.6rem 25.6rem 25.6rem 36.6rem;
  grid-template-areas:
    "img-1 img-1 img-2"
    "img-1 img-1 img-2"
    "img-3 img-5 img-6"
    "img-4 img-5 img-7";
  gap: 0.8rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  img:nth-child(1) {
    grid-area: img-2;
  }

  img:nth-child(2) {
    grid-area: img-3;
  }

  img:nth-child(3) {
    grid-area: img-4;
  }

  img:nth-child(4) {
    grid-area: img-5;
  }

  img:nth-child(5) {
    grid-area: img-6;
  }

  img:nth-child(6) {
    grid-area: img-7;
  }

  @media (max-width: 767px) {
    grid-template-columns: 100%;
    grid-template-rows: 400px;
    grid-template-areas: "img-1";
  }

  @media (max-width: 580px) {
    grid-template-rows: 320px;
  }

  @media (max-width: 480px) {
    grid-template-rows: 250px;
  }

  @media (max-width: 380px) {
    grid-template-rows: 200px;
  }
`;

export const SlideWrapper = styled.div`
  grid-area: img-1;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const StyledSlide = styled.div`
  transition: all 1s;
  height: 100%;
  display: flex;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    flex-shrink: 0;
  }
`;
