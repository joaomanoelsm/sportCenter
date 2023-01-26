import { Button, Option, Title } from "../../../styles/global";
import { List, NavBar, NavBarWrapper, StyledHeader } from "./style";
import Logo from "../../../assets/svgs/Logo-Header.svg";

const Header = () => {
  return (
    <StyledHeader>
      <NavBarWrapper>
        <img src={Logo} alt="Logo" />
        <NavBar>
          <List>
            <li>
              <Option
                as="a"
                fontWeight="Extra-Bold"
                color="White"
                fontSize="Font-Text-m"
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
                fontSize="Font-Text-m"
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
                fontSize="Font-Text-m"
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
                fontSize="Font-Text-m"
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
