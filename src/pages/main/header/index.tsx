import { Button, Option, Title } from "../../../styles/global";
import { List, NavBar, NavBarWrapper, StyledHeader } from "./style";
import Logo from "../../../assets/svgs/Logo-Header.svg";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [visibility, setVisibility] = useState(false);
  const headerRef = useRef<HTMLHeadElement>(null!);

  const backPage = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const changeHeaderBackground = () => {
      scrollY > 0 ? setVisibility(true) : setVisibility(false);
    };

    window.addEventListener("scroll", changeHeaderBackground);
  });

  return (
    <StyledHeader ref={headerRef} visibility={visibility}>
      <NavBarWrapper>
        <a href="#intro">
          <img src={Logo} alt="Logo" />
        </a>
        <NavBar>
          <List>
            <li>
              <Option
                as="a"
                fontWeight="Extra-Bold"
                color="White"
                fontSize="2.4rem"
                lineHeight="75%"
                href="#intro"
              >
                INICIO
              </Option>
            </li>
            <li>
              <Option
                as="a"
                fontWeight="Extra-Bold"
                color="White"
                fontSize="2.4rem"
                lineHeight="75%"
                href="#training"
              >
                TREINOS
              </Option>
            </li>
            <li>
              <Option
                as="a"
                fontWeight="Extra-Bold"
                color="White"
                fontSize="2.4rem"
                lineHeight="75%"
                href="#about_us"
              >
                SOBRE NÓS
              </Option>
            </li>
            <li>
              <Option
                as="a"
                fontWeight="Extra-Bold"
                color="White"
                fontSize="2.4rem"
                lineHeight="75%"
                href="#footer"
              >
                CONTATO
              </Option>
            </li>
          </List>
        </NavBar>
        <Button size="Medium">
          <a href="https://api.whatsapp.com/send?phone=5579999616722&text=Ol%C3%A1%20Walter!%20Vim%20pelo%20site%20da%20SportCenter">
            Entre em contato
          </a>
        </Button>
      </NavBarWrapper>
    </StyledHeader>
  );
};

export default Header;
