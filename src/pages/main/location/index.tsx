import React, { MutableRefObject, useEffect, useRef } from "react";
import { Title, Text, Button, Option } from "../../../styles/global";
import {
  LocationWrapper,
  MapWrapper,
  StyledLocation,
  Info,
  MapInfo,
  WrapperLists,
  TitleWrapper,
} from "./style";
import imgMap from "../../../assets/imgs/Img-Location.jpg";
import iconClock from "../../../assets/svgs/Icon-Clock.svg";

const Location = () => {
  return (
    <StyledLocation>
      <LocationWrapper>
        <MapWrapper>
          <img src={imgMap} alt="" />
          <MapInfo>
            <TitleWrapper>
              <Title
                as="h3"
                fontSize="4rem"
                lineHeight="100%"
                color="White"
                fontWeight="Extra-Bold"
              >
                Colônia Treze
              </Title>
              <Option
                as="span"
                fontSize="1.6rem"
                lineHeight="100%"
                color="White"
                fontWeight="Semi-Bold"
              >
                <img src={iconClock} alt="" />
                05-21h de Seg a Sex
              </Option>
            </TitleWrapper>
            <WrapperLists>
              <ul>
                <Option
                  as="li"
                  fontSize="1.6rem"
                  lineHeight="100%"
                  color="Gray"
                  fontWeight="Semi-Bold"
                >
                  Rua São Cosme, 350
                </Option>
                <Option
                  as="li"
                  fontSize="1.6rem"
                  lineHeight="100%"
                  color="Gray"
                  fontWeight="Semi-Bold"
                >
                  Colônia Treze - SE
                </Option>
              </ul>
              <ul>
                <Option
                  as="li"
                  fontSize="1.6rem"
                  lineHeight="100%"
                  color="Gray"
                  fontWeight="Semi-Bold"
                >
                  Lagarto, Colônia Treze
                </Option>
                <Option
                  as="li"
                  fontSize="1.6rem"
                  lineHeight="100%"
                  color="Gray"
                  fontWeight="Semi-Bold"
                >
                  (79) 9 9961-6722
                </Option>
              </ul>
            </WrapperLists>
          </MapInfo>
        </MapWrapper>
        <Info>
          <Title
            as="h2"
            color="Orange"
            fontSize="4rem"
            lineHeight="100%"
            fontWeight="Extra-Bold"
          >
            Localização
          </Title>
          <Text
            color="Black"
            fontSize="2.4rem"
            lineHeight="100%"
            fontWeight="Medium"
          >
            Nós, da Sport Center, estamos localizados em uma área conveniente da
            cidade, com fácil acesso por transporte público ou carro. Nossa
            localização é perfeita para aqueles que desejam incluir o treino em
            sua rotina diária, sem se preocupar com o tempo perdido no trânsito.
            Não importa de onde você venha, nós tornamos a sua ida à academia
            uma tarefa fácil e conveniente. Venha nos visitar e experimente
            nossa localização de fácil acesso!
          </Text>
          <Button size="Medium">
            <a href="https://api.whatsapp.com/send?phone=5579999616722&text=Ol%C3%A1%20Walter!%20Vim%20pelo%20site%20da%20SportCenter">
              Entre em contato
            </a>
          </Button>
        </Info>
      </LocationWrapper>
    </StyledLocation>
  );
};

export default Location;
