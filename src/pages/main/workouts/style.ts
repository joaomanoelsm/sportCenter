import styled from "styled-components";
import theme from "../../../styles/theme";
import { GlobalSize } from "../style";

export const StyledWorkouts = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 0;
`;

export const ImgsWrapper = styled.div`
  ${GlobalSize}

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Imgs = styled.div`
  width: 100%;
  margin-top: 8rem;
  gap: 0.7rem;

  justify-content: center;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    gap: 4rem;
  }
`;

export const Img = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 37rem;

  img {
    width: 100%;
    height: 24.7rem;

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
