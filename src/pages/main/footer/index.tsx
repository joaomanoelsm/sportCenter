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
      <FooterBackground background={Background} id="footer">
        <img src={FooterLogo} alt="" />
      </FooterBackground>
      <Container>
        <InfoWrapper>
          <SocialMediaWrapper>
            <Option
              as="span"
              color="White"
              fontSize="4rem"
              lineHeight="100%"
              fontWeight="Extra-Bold"
            >
              Sport <span>Center</span>
            </Option>
            <SocialMedia>
              <a href="https://api.whatsapp.com/send?phone=5579999616722&text=Ol%C3%A1%20Walter!%20Vim%20pelo%20site%20da%20SportCenter">
                <img src={IconWhatsapp} alt="Icon whatsapp" />
              </a>
              <a href="https://www.instagram.com/sportcenter.13/followers/mutualOnly/">
                <img src={IconInstagram} alt="Icon instagram" />
              </a>
              <a href="https://www.instagram.com/sportcenter.13/followers/mutualOnly/">
                <img src={IconNetWork} alt="Icon network" />
              </a>
            </SocialMedia>
          </SocialMediaWrapper>
          <ButtonWrapper>
            <button>
              <a href="https://api.whatsapp.com/send?phone=5579999616722&text=Ol%C3%A1%20Walter!%20Vim%20pelo%20site%20da%20SportCenter">
                Contato
              </a>
            </button>
            <Text
              color="White"
              fontSize="1.6rem"
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
