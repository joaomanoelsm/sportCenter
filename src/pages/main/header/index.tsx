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
        <img src={Logo} alt="Logo" />
        <NavBar>
          <List>
            <li>
              <Option
                as="a"
                fontWeight="Extra-Bold"
                color="White"
                fontSize="2.4rem"
                lineHeight="75%"
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
              >
                CONTATO
              </Option>
            </li>
          </List>
        </NavBar>
        <Button size="Medium">Entre em contato</Button>
      </NavBarWrapper>
    </StyledHeader>
  );
};

export default Header;
