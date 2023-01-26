import styled from "styled-components";
import theme from "../../../styles/theme";

interface FooterBackgroundI {
  background: string;
}

export const StyledFooter = styled.footer``;

export const FooterBackground = styled.div<FooterBackgroundI>`
  width: 100%;
  height: 43.7rem;
  background: ${({ background }) => `url(${background})`};

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 38.5rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 23.2rem;

  background-color: #232323;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoWrapper = styled.div`
  width: ${theme.screenWidth.size1};
  display: flex;
  justify-content: space-between;
`;

export const SocialMediaWrapper = styled.div`
  width: 24rem;
`;

export const SocialMedia = styled.div`
  margin-top: 2rem;

  img:nth-child(-n + 2) {
    margin-right: 0.6rem;
  }
`;

export const ButtonWrapper = styled.div`
  button {
    font-size: 3.2rem;
    line-height: 66.5%;
    font-weight: 500;
    color: white;

    appearance: none;
    border: 0.3rem solid white;
    background: transparent;

    padding: 1.8rem 6rem;
    margin-bottom: 1.8rem;
    border-radius: 1.8rem;
  }
`;
