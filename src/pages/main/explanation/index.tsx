import React from "react";
import { Title, Text } from "../../../styles/global";
import {
  Container,
  Info,
  Item,
  ItemsWrapper,
  StyledExplanation,
} from "./style";
import arrowIcon from "../../../assets/svgs/Icon-Arrow.svg";
import ImgDiet from "../../../assets/imgs/img-Dieta.jpg";
import ImgExercise from "../../../assets/imgs/img-Exercicio-Livre.jpg";
import ImgAerobic from "../../../assets/imgs/Img-Aerobico.jpg";

const Explanation = () => {
  return (
    <StyledExplanation>
      <Container>
        <Title
          as="h2"
          color="Black"
          fontSize="6.4rem"
          lineHeight="100%"
          fontWeight="Extra-Bold"
        >
          Cuide Do <span>Seu Corpo</span>
        </Title>
        <Text
          color="Black"
          fontSize="3.2rem"
          lineHeight="75%"
          fontWeight="Medium"
        >
          Mantenha o seu corpo ativo e sempre esteja bem!
        </Text>
        <ItemsWrapper>
          <Item>
            <img src={ImgDiet} alt="" />
            <Info>
              <Title
                as="h3"
                color="Black"
                fontSize="3.2rem"
                lineHeight="100%"
                fontWeight="Semi-Bold"
              >
                Mantenha dieta
              </Title>
              <Text
                color="Black"
                fontSize="2.4rem"
                lineHeight="75%"
                fontWeight="Regular"
              >
                O frequente treino ajuda a manter sua dieta, seu bem estar e sua
                forma física.
              </Text>
            </Info>
          </Item>
          <Item>
            <img src={ImgExercise} alt="" />
            <Info>
              <Title
                as="h3"
                color="Black"
                fontSize="3.2rem"
                lineHeight="100%"
                fontWeight="Semi-Bold"
              >
                Exercício Livre
              </Title>
              <Text
                color="Black"
                fontSize="2.4rem"
                lineHeight="75%"
                fontWeight="Regular"
              >
                Se exercitar ao ar livre além de fazer bem para o seu corpo
                exercita sua mente.
              </Text>
            </Info>
          </Item>
          <Item>
            <img src={ImgAerobic} alt="" />
            <Info>
              <Title
                as="h3"
                color="Black"
                fontSize="3.2rem"
                lineHeight="100%"
                fontWeight="Semi-Bold"
              >
                Aeróbico
              </Title>
              <Text
                color="Black"
                fontSize="2.4rem"
                lineHeight="75%"
                fontWeight="Regular"
              >
                Com um grande espaço aeróbico não vai ter mais desculpa para
                fugir do cardio.
              </Text>
            </Info>
          </Item>
        </ItemsWrapper>
        <img src={arrowIcon} alt="" />
      </Container>
    </StyledExplanation>
  );
};

export default Explanation;
