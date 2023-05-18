import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { Title, Text } from "../../../styles/global";
import {
  GridTemplate,
  GridTemplateWrapper,
  SlideWrapper,
  StyledOurAcademy,
  StyledSlide,
} from "./style";
import OurAcademyBackground from "../../../assets/imgs/Background-About-Academy.jpg";

import img1 from "../../../assets/imgs/Img-1.jpg";
import img2 from "../../../assets/imgs/Img-2.jpg";
import img3 from "../../../assets/imgs/Img-3.jpg";
import img4 from "../../../assets/imgs/Img-4.jpg";
import img5 from "../../../assets/imgs/Img-5.jpg";
import img6 from "../../../assets/imgs/Img-6.jpg";
import img7 from "../../../assets/imgs/Img-7.jpg";

import img1Cell from "../../../assets/imgs/Img-1-Cell.jpg";
import img2Cell from "../../../assets/imgs/Img-2-Cell.jpg";
import img3Cell from "../../../assets/imgs/Img-3-Cell.jpg";

import Slide from "./slide";

const OurAcademy = () => {
  const slideRef: MutableRefObject<HTMLDivElement> = useRef(null!);
  const [cellPhoneOrientation, setCellPhoneOrientation] =
    useState<boolean>(false);

  const worksArray = [
    {
      img: img1,
      title: "Jasa",
    },
    {
      img: img2,
      title: "Vd. campos",
    },
    {
      img: img3,
      title: "Cetta",
    },
    {
      img: img4,
      title: "CDT Tia Aila",
    },
  ];

  useEffect(() => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      return setCellPhoneOrientation(true);
    }
    setCellPhoneOrientation(false);
  }, [window.matchMedia]);

  return (
    <StyledOurAcademy background={OurAcademyBackground}>
      <GridTemplateWrapper>
        <Title
          as="h2"
          color="White"
          fontSize="6.4rem"
          lineHeight="100%"
          fontWeight="Extra-Bold"
        >
          Nossa <span>Academia</span>
        </Title>
        <Text
          color="White"
          fontSize="2.4rem"
          lineHeight="75%"
          fontWeight="Medium"
        >
          Aqui temos tudo que você precisa para mudar de vida. Desde musculação
          avançada até reino ao ar livre!
        </Text>
        <GridTemplate>
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          {cellPhoneOrientation ? <Slide elem={slideRef} time={5000} /> : null}
          <SlideWrapper>
            <StyledSlide ref={slideRef}>
              <img src={img1Cell} alt="" />
              <img src={img2Cell} alt="" />
              <img src={img3Cell} alt="" />
            </StyledSlide>
          </SlideWrapper>
        </GridTemplate>
      </GridTemplateWrapper>
    </StyledOurAcademy>
  );
};

export default OurAcademy;
