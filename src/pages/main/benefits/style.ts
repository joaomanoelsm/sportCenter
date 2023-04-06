import styled, { css } from "styled-components";
import theme from "../../../styles/theme";

interface ItemI {
  shadowDirection: "Right" | "Left";
}

export const StyledBenefits = styled.section`
  width: 100%;
  display: flex;
  align-items: center;

  justify-content: center;
  padding: 14rem;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
  width: ${theme.screenWidth.size1};
  gap: 12rem;

  h2::after {
    content: "";
    display: block;
    width: 50%;

    height: 0.6rem;
    background-color: ${theme.color.primary};
    margin-top: -1rem;
  }
`;

export const Item = styled.div<ItemI>`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 7.2rem;

  img {
    width: 40.8rem;
    border-radius: 1.2rem;

    ${({ shadowDirection }) => {
      switch (shadowDirection) {
        case "Right":
          return css`
            box-shadow: -1rem -1rem 0 0 ${theme.color.primary};
          `;
        case "Left":
          return css`
            box-shadow: 1rem -1rem 0 0 ${theme.color.primary};
          `;
      }
    }};
  }

  @media (max-width: 660px) {
    width: 40.8rem;
    align-items: start;
    flex-direction: column;

    div:nth-child(1) {
      order: 1;
    }
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
`;
