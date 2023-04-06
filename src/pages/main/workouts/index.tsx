import React from "react";
import { Button, Title, Option } from "../../../styles/global";
import {
  DecoratedBalls,
  Decorator,
  Img,
  Imgs,
  ImgsWrapper,
  StyledWorkouts,
} from "./style";
import ImgFunctional from "../../../assets/imgs/Img-Funcional.jpg";
import ImgTreaining from "../../../assets/imgs/Img-Treino-ao-ar-livre.jpg";
import ImgGym from "../../../assets/imgs/Img-Musculação.jpg";

const Workouts = () => {
  return (
    <StyledWorkouts>
      <ImgsWrapper>
        <Title
          as="h2"
          color="Orange"
          fontSize="6.4rem"
          lineHeight="100%"
          fontWeight="Bold"
        >
          Nosso treino
        </Title>
        <Imgs>
          <Img>
            <img src={ImgFunctional} alt="" />
            <Option
              as="span"
              color="Black"
              fontSize="2.4rem"
              lineHeight="100%"
              fontWeight="Bold"
            >
              Funcional
            </Option>
          </Img>
          <Img>
            <img src={ImgTreaining} alt="" />
            <Option
              as="span"
              color="Black"
              fontSize="2.4rem"
              lineHeight="100%"
              fontWeight="Bold"
            >
              Treino ao Ar livre
            </Option>
          </Img>
          <Img>
            <img src={ImgGym} alt="" />
            <Option
              as="span"
              color="Black"
              fontSize="2.4rem"
              lineHeight="100%"
              fontWeight="Bold"
            >
              Musculação
            </Option>
          </Img>
        </Imgs>
        <Decorator>
          <DecoratedBalls />
          <DecoratedBalls />
          <DecoratedBalls />
        </Decorator>
        <Button size="Large">Entre em contato</Button>
      </ImgsWrapper>
    </StyledWorkouts>
  );
};

export default Workouts;
