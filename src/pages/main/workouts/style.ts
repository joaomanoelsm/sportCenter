import styled from "styled-components";
import theme from "../../../styles/theme";

export const StyledWorkouts = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 0;
`;

export const ImgsWrapper = styled.div`
  width: ${theme.screenWidth.size1};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Imgs = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  margin-top: 8rem;
`;

export const Img = styled.div`
  width: 37rem;

  div {
    width: 100%;
    height: 24.7rem;
    background-color: ${theme.color.greyScale[500]};
    margin-bottom: 1.2rem;
    border-radius: 1.2rem;
  }
`;

export const Decorator = styled.div`
  width: 4.8rem;
  display: flex;
  justify-content: space-between;
  margin: 2.8rem 0;
`;

export const DecoratedBalls = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  background-color: #d9d9d9;
  border-radius: 50%;

  &:nth-child(2) {
    background-color: #787878;
  }
`;
