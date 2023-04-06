import styled from "styled-components";
import theme from "../../../styles/theme";
import { GlobalSize } from "../style";

export const StyledLocation = styled.section`
  width: 100%;
  margin: 15rem 0;
  display: flex;
  justify-content: center;
`;

export const LocationWrapper = styled.div`
  max-width: ${theme.screenWidth.size1};
  ${GlobalSize}
  display: flex;
  gap: 6rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 670px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
  background-color: #1d1d1d;
  border-radius: 1rem;

  @media (max-width: 670px) {
  }

  img {
    width: 100%;
  }
`;

export const MapInfo = styled.div`
  padding: 3.2rem 2.4rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  position: relative;

  h3 {
    display: flex;
    align-items: center;

    &::before {
      content: "";
      display: inline-block;
      margin-right: 0.8rem;

      width: 1.6rem;
      height: 0.7rem;
      background-color: ${theme.color.primary};
    }
  }

  span {
    display: flex;
    align-items: center;

    img {
      width: 3.1rem;
    }
  }
`;

export const WrapperLists = styled.div`
  display: flex;
  gap: 2rem;
  margin-left: 2rem;

  ul {
    list-style: none;
    position: relative;
    margin-right: 5rem;

    &::before {
      content: "";
      display: block;
      position: absolute;
      left: -1.2rem;

      width: 0.3rem;
      height: 4.4rem;
      background-color: ${theme.color.gray};
      border-radius: 0 0 1rem 1rem;
    }

    li {
      &:nth-child(1) {
        margin-bottom: 1.2rem;
      }
    }
  }
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  button {
    max-width: 30rem;
  }
`;
