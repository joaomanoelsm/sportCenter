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

const Workouts = () => {
  return (
    <StyledWorkouts>
      <ImgsWrapper>
        <Title
          as="h2"
          color="Orange"
          fontSize="Font-Title-x"
          lineHeight="100%"
          fontWeight="Bold"
        >
          Nosso treino
        </Title>
        <Imgs>
          <Img>
            <div></div>
            <Option
              as="span"
              color="Black"
              fontSize="Font-Text-m"
              lineHeight="100%"
              fontWeight="Bold"
            ></Option>
          </Img>
          <Img>
            <div></div>
            <Option
              as="span"
              color="Black"
              fontSize="Font-Text-m"
              lineHeight="100%"
              fontWeight="Bold"
            ></Option>
          </Img>
          <Img>
            <div></div>
            <Option
              as="span"
              color="Black"
              fontSize="Font-Text-m"
              lineHeight="100%"
              fontWeight="Bold"
            ></Option>
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
