import IntroBackground from "../../../assets/imgs/Background-Intro.jpg";
import { Title } from "../../../styles/global";
import { StyledIntro, TitleWrapper } from "./style";

const Intro = () => {
  return (
    <StyledIntro background={IntroBackground} id="intro">
      <TitleWrapper>
        <Title
          as="h1"
          color="Orange"
          fontSize="10rem"
          lineHeight="75%"
          fontWeight="Bold"
        >
          NOVOS DESAFIOS TE FAZEM CRESCER!
        </Title>
      </TitleWrapper>
    </StyledIntro>
  );
};

export default Intro;
