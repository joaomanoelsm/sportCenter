import React, { MutableRefObject, useEffect, useRef } from "react";
import { Title, Text } from "../../../styles/global";
import { GridTemplate, GridTemplateWrapper, StyledOurAcademy } from "./style";
import OurAcademyBackground from "../../../assets/imgs/Background-About-Academy.jpg";

import img1 from "../../../assets/imgs/Img-1.jpg";
import img2 from "../../../assets/imgs/Img-2.jpg";
import img3 from "../../../assets/imgs/Img-3.jpg";
import img4 from "../../../assets/imgs/Img-4.jpg";
import img5 from "../../../assets/imgs/Img-5.jpg";
import img6 from "../../../assets/imgs/Img-6.jpg";
import img7 from "../../../assets/imgs/Img-7.jpg";

const OurAcademy = () => {
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
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
        </GridTemplate>
      </GridTemplateWrapper>
    </StyledOurAcademy>
  );
};

export default OurAcademy;
