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
          fontSize="4rem"
          lineHeight="100%"
          fontWeight="Extra-Bold"
        >
          Sport <span>Center</span>
        </Title>
        <Text
          color="White"
          fontSize="2.4rem"
          lineHeight="75%"
          fontWeight="Regular"
        >
          Somos o Sport Center, uma academia localizada na Colônia Treze.
          Oferecemos uma ampla gama de equipamentos de ginástica, aulas
          variadas, como musculação, dança e boxe. Além disso, temos uma equipe
          amigável e capacitada para ajudá-lo a alcançar seus objetivos de saúde
          e fitness. Outras vantagens incluem horários flexíveis, preços
          acessíveis e uma localização conveniente. Venha nos visitar e
          experimente a diferença de treinar no Sport Center!
        </Text>
        <Button size="Small">Saiba Mais</Button>
      </Info>
    </StyledAboutUs>
  );
};

export default AboutUs;
