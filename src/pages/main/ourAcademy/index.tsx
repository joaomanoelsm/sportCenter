import React from "react";
import { Title, Text } from "../../../styles/global";
import { GridTemplate, GridTemplateWrapper, StyledOurAcademy } from "./style";
import OurAcademyBackground from "../../../assets/imgs/Background-About-Academy.jpg";

const OurAcademy = () => {
  return (
    <StyledOurAcademy background={OurAcademyBackground}>
      <GridTemplateWrapper>
        <Title
          as="h2"
          color="White"
          fontSize="Font-Title-x"
          lineHeight="100%"
          fontWeight="Extra-Bold"
        >
          Nossa <span>Academia</span>
        </Title>
        <Text
          color="White"
          fontSize="Font-Text-m"
          lineHeight="75%"
          fontWeight="Medium"
        >
          Aqui temos tudo que você precisa para mudar de vida. Desde musculação
          avançada até reino ao ar livre!
        </Text>
        <GridTemplate>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </GridTemplate>
      </GridTemplateWrapper>
    </StyledOurAcademy>
  );
};

export default OurAcademy;
