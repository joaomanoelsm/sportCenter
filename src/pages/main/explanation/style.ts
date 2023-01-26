import styled from "styled-components";
import theme from "../../../styles/theme";

export const StyledExplanation = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10rem 0;
`;

export const Container = styled.div`
  width: ${theme.screenWidth.size1};
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 2.6rem;
  }

  p {
    margin-bottom: 4rem;
  }
`;

export const ItemsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Item = styled.div`
  width: 36.1rem;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;

  .image {
    width: 100%;
    height: 24.3rem;
    background-color: ${theme.color.greyScale[500]};
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.8rem;
`;
