import React from "react";
import FooterLogo from "../../../assets/svgs/Logo-Footer.svg";
import Background from "../../../assets/imgs/Background-Footer.jpg";
import IconWhatsapp from "../../../assets/svgs/Icon-Whatsapp.svg";
import IconInstagram from "../../../assets/svgs/Icon-Instagram.svg";
import IconNetWork from "../../../assets/svgs/Icon-Network.svg";

import {
  ButtonWrapper,
  Container,
  FooterBackground,
  InfoWrapper,
  SocialMedia,
  SocialMediaWrapper,
} from "./style";
import { Option, Text } from "../../../styles/global";

const Footer = () => {
  return (
    <div>
      <FooterBackground background={Background}>
        <img src={FooterLogo} alt="" />
      </FooterBackground>
      <Container>
        <InfoWrapper>
          <SocialMediaWrapper>
            <Option
              as="span"
              color="White"
              fontSize="Font-Title-m"
              lineHeight="100%"
              fontWeight="Extra-Bold"
            >
              Sport <span>Center</span>
            </Option>
            <SocialMedia>
              <img src={IconWhatsapp} alt="Icon whatsapp" />
              <img src={IconInstagram} alt="Icon instagram" />
              <img src={IconNetWork} alt="Icon network" />
            </SocialMedia>
          </SocialMediaWrapper>
          <ButtonWrapper>
            <button>Contato</button>
            <Text
              color="White"
              fontSize="Font-Text-s"
              lineHeight="100%"
              fontWeight="Regular"
            >
              Todos os direitos reservados @2023
            </Text>
          </ButtonWrapper>
        </InfoWrapper>
      </Container>
    </div>
  );
};

export default Footer;
