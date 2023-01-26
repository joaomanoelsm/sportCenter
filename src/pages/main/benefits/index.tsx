import React from "react";
import { Text, Title } from "../../../styles/global";
import { Item, ItemInfo, ItemWrapper, StyledBenefits } from "./style";
import ImgBenefit1 from "../../../assets/imgs/Img-Benefits-1.jpg";
import ImgBenefit2 from "../../../assets/imgs/Img-Benefits-2.jpg";

const Benefits = () => {
  return (
    <StyledBenefits>
      <ItemWrapper>
        <Title
          as="h2"
          color="Orange"
          fontSize="Font-Title-x"
          lineHeight="100%"
          fontWeight="Bold"
        >
          Vantagens
        </Title>
        <Item shadowDirection="Right">
          <ItemInfo>
            <Title
              as="h3"
              color="Black"
              fontSize="Font-Title-m"
              lineHeight="100%"
              fontWeight="Bold"
            >
              Lorem Ipsum{" "}
            </Title>
            <Text
              color="Black"
              fontSize="Font-Text-m"
              lineHeight="75%"
              fontWeight="Regular"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </Text>
          </ItemInfo>
          <img src={ImgBenefit1} alt="image benefit 1" />
        </Item>
        <Item shadowDirection="Left">
          <img src={ImgBenefit2} alt="image benefit2" />
          <ItemInfo>
            <Title
              as="h3"
              color="Black"
              fontSize="Font-Title-m"
              lineHeight="100%"
              fontWeight="Bold"
            >
              Lorem Ipsum{" "}
            </Title>
            <Text
              color="Black"
              fontSize="Font-Text-m"
              lineHeight="75%"
              fontWeight="Regular"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </Text>
          </ItemInfo>
        </Item>
      </ItemWrapper>
    </StyledBenefits>
  );
};

export default Benefits;
