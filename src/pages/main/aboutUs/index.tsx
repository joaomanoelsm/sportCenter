import React from "react";
import { Button, Text, Title } from "../../../styles/global";
import { Info, StyledAboutUs } from "./style";
import AboutUsBackground from "../../../assets/imgs/Background-AboutUs.jpg";

const AboutUs = () => {
  return (
    <StyledAboutUs background={AboutUsBackground}>
      <Info>
        <Title
          as="h2"
          color="White"
          fontSize="Font-Title-m"
          lineHeight="100%"
          fontWeight="Extra-Bold"
        >
          Sport <span>Center</span>
        </Title>
        <Text
          color="White"
          fontSize="Font-Text-m"
          lineHeight="75%"
          fontWeight="Regular"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <Button size="Small">Saiba Mais</Button>
      </Info>
    </StyledAboutUs>
  );
};

export default AboutUs;
