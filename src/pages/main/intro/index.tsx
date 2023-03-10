import IntroBackground from "../../../assets/imgs/Background-Intro.jpg";
import { Title } from "../../../styles/global";
import { StyledIntro, TitleWrapper } from "./style";

const Intro = () => {
  return (
    <StyledIntro background={IntroBackground}>
      <TitleWrapper>
        <Title
          as="h1"
          color="Orange"
          fontSize="Font-Title-xl"
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
